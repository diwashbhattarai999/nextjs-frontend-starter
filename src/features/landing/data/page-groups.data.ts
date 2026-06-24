import { ROUTES } from "@/configs/routes";

export const PAGE_GROUP_KEYS = ["auth", "dashboard", "legal"] as const;

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
    | "dashboardBilling"
    | "privacyPolicy"
    | "termsOfService"
    | "cookiePolicy";

interface PageLink {
    key: PageLinkKey;
    href: string;
}

interface PageGroup {
    pages: readonly PageLink[];
}

export const PAGE_GROUPS: Record<PageGroupKey, PageGroup> = {
    auth: {
        pages: [
            { key: "login", href: ROUTES.AUTH.LOGIN },
            { key: "register", href: ROUTES.AUTH.REGISTER },
            { key: "forgotPassword", href: ROUTES.AUTH.FORGOT_PASSWORD },
            { key: "resetPassword", href: ROUTES.AUTH.RESET_PASSWORD },
            { key: "verifyEmail", href: ROUTES.AUTH.VERIFY_EMAIL },
            { key: "emailVerificationSuccess", href: ROUTES.AUTH.EMAIL_VERIFICATION_SUCCESS },
        ],
    },
    dashboard: {
        pages: [
            { key: "dashboardHome", href: ROUTES.DASHBOARD.HOME },
            { key: "dashboardSettings", href: ROUTES.DASHBOARD.SETTINGS },
            { key: "dashboardProfile", href: ROUTES.DASHBOARD.PROFILE },
            { key: "dashboardBilling", href: ROUTES.DASHBOARD.BILLING },
        ],
    },
    legal: {
        pages: [
            { key: "privacyPolicy", href: ROUTES.LEGAL.PRIVACY_POLICY },
            { key: "termsOfService", href: ROUTES.LEGAL.TERMS_OF_SERVICE },
            { key: "cookiePolicy", href: ROUTES.LEGAL.COOKIE_POLICY },
        ],
    },
};
