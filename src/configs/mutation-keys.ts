export const MUTATION_KEYS = {
    auth: {
        login: ["auth", "login"],
        register: ["auth", "register"],
        logout: ["auth", "logout"],
        forgotPassword: ["auth", "forgot-password"],
        resetPassword: ["auth", "reset-password"],
    },
} as const;
