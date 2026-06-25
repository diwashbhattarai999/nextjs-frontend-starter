import { AxiosError, type InternalAxiosRequestConfig } from "axios";

import type { ForgotPasswordFormValues } from "@/features/auth/schemas/forgot-password.schema";
import type { LoginFormValues } from "@/features/auth/schemas/login.schema";
import type { RegisterPayload } from "@/features/auth/schemas/register.schema";
import type { ResetPasswordPayload } from "@/features/auth/schemas/reset-password.schema";
import type {
    ForgotPasswordResponse,
    LoginResponse,
    RegisterResponse,
    ResetPasswordResponse,
} from "@/types/api/auth.types";

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

/**
 * Sends a password reset link to the given email address.
 *
 * Mock implementation — replace with `api.post` when the backend is available.
 *
 * @param payload - Email address for the reset link.
 * @returns Confirmation message on success.
 */
export async function forgotPassword(
    _payload: ForgotPasswordFormValues
): Promise<ForgotPasswordResponse> {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

    return {
        status: "success",
        message: "Password reset link sent.",
        statusCode: 200,
        data: {
            message: "A password reset link has been sent to your email address.",
        },
    };

    // const { data } = await api.post<ForgotPasswordResponse>(
    //     ENDPOINTS.auth.forgotPassword,
    //     payload
    // );
    // return data;
}

/**
 * Resets the user's password using a reset token.
 *
 * Mock implementation — replace with `api.post` when the backend is available.
 *
 * @param payload - The new password and the verification token.
 * @returns Confirmation message on success.
 */
export async function resetPassword(
    _payload: ResetPasswordPayload
): Promise<ResetPasswordResponse> {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

    return {
        status: "success",
        message: "Password reset successful.",
        statusCode: 200,
        data: {
            message: "Your password has been reset successfully.",
        },
    };

    // const { data } = await api.post<ResetPasswordResponse>(
    //     ENDPOINTS.auth.resetPassword,
    //     payload
    // );
    // return data;
}
