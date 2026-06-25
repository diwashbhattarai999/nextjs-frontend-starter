import { AxiosError, type InternalAxiosRequestConfig } from "axios";

import type { LoginFormValues } from "@/features/auth/schemas/login.schema";
import type { RegisterPayload } from "@/features/auth/schemas/register.schema";
import type { LoginResponse, RegisterResponse } from "@/types/api/auth.types";

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
export async function login(payload: LoginFormValues): Promise<LoginResponse> {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

    const isValidCredentials =
        payload.email === MOCK_CREDENTIALS.email && payload.password === MOCK_CREDENTIALS.password;

    if (!isValidCredentials) {
        throwMockAuthError("Invalid email or password.");
    }

    return {
        status: "success",
        message: "Login successful.",
        statusCode: 200,
        data: {
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
            user: {
                id: "usr_mock_001",
                email: payload.email,
                name: "Demo User",
            },
        },
    };

    // const { data } = await api.post<LoginResponse>(ENDPOINTS.auth.login, payload);
    // return data;
}

/**
 * Creates a new user account.
 *
 * Mock implementation — replace with `api.post` when the backend is available.
 *
 * @param payload - Registration details.
 * @returns Session tokens and user profile on success.
 */
export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

    if (payload.email === MOCK_CREDENTIALS.email) {
        throwMockAuthError("An account with this email already exists.");
    }

    return {
        status: "success",
        message: "Registration successful.",
        statusCode: 201,
        data: {
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
            user: {
                id: "usr_mock_002",
                email: payload.email,
                name: payload.name,
            },
        },
    };

    // const { data } = await api.post<RegisterResponse>(ENDPOINTS.auth.register, payload);
    // return data;
}
