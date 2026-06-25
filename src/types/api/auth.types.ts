import type { ISuccessResponse } from "@/types/response.types";

export interface AuthUser {
    id: string;
    email: string;
    name: string;
}

export interface AuthSessionData {
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
}

export interface ForgotPasswordData {
    message: string;
}

export interface ResetPasswordData {
    message: string;
}

export interface ResendVerificationData {
    message: string;
}

export interface VerifyEmailData {
    message: string;
}

// Response types
export type LoginResponse = ISuccessResponse<AuthSessionData>;
export type RegisterResponse = ISuccessResponse<AuthSessionData>;
export type ForgotPasswordResponse = ISuccessResponse<ForgotPasswordData>;
export type ResetPasswordResponse = ISuccessResponse<ResetPasswordData>;
export type ResendVerificationResponse = ISuccessResponse<ResendVerificationData>;
export type VerifyEmailResponse = ISuccessResponse<VerifyEmailData>;
