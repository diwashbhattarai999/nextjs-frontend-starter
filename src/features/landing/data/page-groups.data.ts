import { ROUTES } from "@/configs/routes";

export const PAGE_GROUP_KEYS = ["auth", "dashboard", "legal", "errors"] as const;

export type PageGroupKey = (typeof PAGE_GROUP_KEYS)[number];

export type PageLinkKey =
    | "login"
    | "register"
    | "forgotPassword"
    | "resetPassword"
    | "verifyEmail"
    | "emailVerificationSuccess"
    | "dashboardHome"
    | "dashboardSettings"
    | "dashboardProfile"
    | "privacyPolicy"
    | "termsOfService"
    | "cookiePolicy"
    | "notFound"
    | "unauthorized"
    | "forbidden"
    | "serverError"
    | "maintenance";

export type PageLinkStatus = "ready" | "placeholder";

interface PageLink {
    key: PageLinkKey;
    href: string;
    status: PageLinkStatus;
}

interface PageGroup {
    pages: readonly PageLink[];
}

export const PAGE_GROUPS: Record<PageGroupKey, PageGroup> = {
    auth: {
        pages: [
            { key: "login", href: ROUTES.AUTH.LOGIN, status: "ready" },
            { key: "register", href: ROUTES.AUTH.REGISTER, status: "ready" },
            { key: "forgotPassword", href: ROUTES.AUTH.FORGOT_PASSWORD, status: "ready" },
            { key: "resetPassword", href: ROUTES.AUTH.RESET_PASSWORD, status: "ready" },
            {
                key: "verifyEmail",
                href: `${ROUTES.AUTH.VERIFY_EMAIL}?email=test@example.com&token=1234567890`,
                status: "ready",
            },
            {
                key: "emailVerificationSuccess",
                href: ROUTES.AUTH.EMAIL_VERIFICATION_SUCCESS,
                status: "ready",
            },
        ],
    },
    dashboard: {
        pages: [
            { key: "dashboardHome", href: ROUTES.DASHBOARD.HOME, status: "placeholder" },
            { key: "dashboardSettings", href: ROUTES.DASHBOARD.SETTINGS, status: "placeholder" },
            { key: "dashboardProfile", href: ROUTES.DASHBOARD.PROFILE, status: "placeholder" },
        ],
    },
    legal: {
        pages: [
            { key: "privacyPolicy", href: ROUTES.LEGAL.PRIVACY_POLICY, status: "ready" },
            { key: "termsOfService", href: ROUTES.LEGAL.TERMS_OF_SERVICE, status: "ready" },
            { key: "cookiePolicy", href: ROUTES.LEGAL.COOKIE_POLICY, status: "ready" },
        ],
    },
    errors: {
        pages: [
            { key: "notFound", href: ROUTES.ERRORS.NOT_FOUND, status: "placeholder" },
            { key: "unauthorized", href: ROUTES.ERRORS.UNAUTHORIZED, status: "placeholder" },
            { key: "forbidden", href: ROUTES.ERRORS.FORBIDDEN, status: "placeholder" },
            { key: "serverError", href: ROUTES.ERRORS.SERVER_ERROR, status: "placeholder" },
            { key: "maintenance", href: ROUTES.ERRORS.MAINTENANCE, status: "placeholder" },
        ],
    },
};
