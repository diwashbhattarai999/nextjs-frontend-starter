import axios, { type AxiosInstance } from "axios";

import { STORAGE_KEYS } from "@/configs/storage";
import { env } from "@/env/client";

import { getCookie, removeCookie, setCookie } from "./cookies";

/**
 * Shared Axios HTTP client for communicating with the backend API.
 *
 * Responsibilities:
 * - Configure base URL, timeout, and default headers
 * - Automatically attach access tokens to outgoing requests
 * - Transparently refresh expired access tokens on HTTP 401 responses
 * - Retry failed requests after successful token refresh
 *
 * This client should be used for **all authenticated API requests**.
 */
export const api: AxiosInstance = axios.create({
    /**
     * Base URL for all API requests.
     * Loaded from environment configuration.
     */
    baseURL: `${env.NEXT_PUBLIC_API_URL}/api`,

    /**
     * Global request timeout (in milliseconds).
     */
    timeout: env.NEXT_PUBLIC_API_TIMEOUT,

    /**
     * Default request headers.
     */
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

    /**
     * Set to true if your backend relies on cookies
     * (e.g., HTTP-only refresh tokens).
     */
    // withCredentials: true,
});

/* -------------------------------------------------------------------------- */
/*                               REQUEST HOOK                                 */
/* -------------------------------------------------------------------------- */

/**
 * Request interceptor that injects the Authorization header
 * using the current access token from the auth store.
 *
 * Runs before every outgoing request.
 */
api.interceptors.request.use((config) => {
    const accessToken = getCookie(STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

/* -------------------------------------------------------------------------- */
/*                               RESPONSE HOOK                                */
/* -------------------------------------------------------------------------- */

/**
 * Response interceptor that handles expired access tokens.
 *
 * Flow:
 * 1. Detect HTTP 401 (Unauthorized)
 * 2. Attempt token refresh (only once per request)
 * 3. Update auth store with new access token
 * 4. Retry the original request with updated credentials
 * 5. If refresh fails → reset auth state (logout)
 */
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Abort if request config is missing
        if (!originalRequest) {
            return Promise.reject(error);
        }

        // Handle expired access token (401) and prevent infinite retry loops
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = getCookie(STORAGE_KEYS.REFRESH_TOKEN);

                if (!refreshToken) {
                    throw new Error("Refresh token not available");
                }

                /**
                 * Request a new access token using the refresh token.
                 * Uses a plain Axios instance to avoid interceptor recursion.
                 */
                const refreshResponse = await axios.post(
                    `${env.NEXT_PUBLIC_API_URL}/auth/get-new-access-token`,
                    { refreshToken }
                );

                const { accessToken, refreshToken: newRefreshToken } =
                    refreshResponse.data.data;

                // Persist new access token in global auth store
                setCookie(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
                setCookie(STORAGE_KEYS.REFRESH_TOKEN, newRefreshToken);

                // Update Authorization header for the retried request
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                // Retry the original API request
                return api(originalRequest);
            } catch (refreshError) {
                /**
                 * Refresh failed:
                 * - Token is invalid or expired
                 * - User must re-authenticate
                 */
                removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
                removeCookie(STORAGE_KEYS.REFRESH_TOKEN);

                // Forward the refresh error to the caller
                return Promise.reject(refreshError);
            }
        }

        // Forward all other errors to the caller
        return Promise.reject(error);
    }
);
