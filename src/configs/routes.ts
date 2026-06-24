export const ROUTES = {
    HOME: "/",
    AUTH: {
        LOGIN: "/login",
        REGISTER: "/register",
        FORGOT_PASSWORD: "/forgot-password",
        RESET_PASSWORD: "/reset-password",
        VERIFY_EMAIL: "/verify-email",
        EMAIL_VERIFICATION_SUCCESS: "/email-verification-success",
    },
    DASHBOARD: {
        HOME: "/dashboard",
        SETTINGS: "/dashboard/settings",
        PROFILE: "/dashboard/profile",
        BILLING: "/dashboard/billing",
    },
    LEGAL: {
        PRIVACY_POLICY: "/privacy-policy",
        TERMS_OF_SERVICE: "/terms-of-service",
        COOKIE_POLICY: "/cookie-policy",
    },
} as const;
