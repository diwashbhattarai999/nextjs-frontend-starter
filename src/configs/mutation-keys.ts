export const MUTATION_KEYS = {
    auth: {
        login: ["auth", "login"],
        register: ["auth", "register"],
        logout: ["auth", "logout"],
        forgotPassword: ["auth", "forgot-password"],
        resetPassword: ["auth", "reset-password"],
        resendVerification: ["auth", "resend-verification"],
        verifyEmail: ["auth", "verify-email"],
    },
} as const;
