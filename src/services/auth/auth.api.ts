import { AxiosError, type InternalAxiosRequestConfig } from "axios";

import type { LoginRequest, LoginResponse } from "@/types/api/auth.types";

const MOCK_DELAY_MS = 1200;

const MOCK_CREDENTIALS = {
    email: "demo@example.com",
    password: "password123",
} as const;

/**
 * Simulates a failed API response compatible with `handleApiError`.
 *
 * @param message - Error message returned to the client.
 */
function throwMockAuthError(message: string): never {
    const error = new AxiosError(message);
    error.response = {
        status: 401,
        statusText: "Unauthorized",
        data: { message },
        headers: {},
        config: {} as InternalAxiosRequestConfig,
    };

    throw error;
}

/**
 * Authenticates a user with email and password.
 *
 * Mock implementation — replace with `api.post` when the backend is available.
 *
 * @param payload - Login credentials.
 * @returns Session tokens and user profile on success.
 */
export async function login(payload: LoginRequest): Promise<LoginResponse> {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

    const isValidCredentials =
        payload.email === MOCK_CREDENTIALS.email && payload.password === MOCK_CREDENTIALS.password;

    if (!isValidCredentials) {
        throwMockAuthError("Invalid email or password.");
    }

    return {
        accessToken: "mock-access-token",
        refreshToken: "mock-refresh-token",
        user: {
            id: "usr_mock_001",
            email: payload.email,
            name: "Demo User",
        },
    };

    // const { data } = await api.post<LoginResponse>(ENDPOINTS.auth.login, payload);
    // return data;
}
