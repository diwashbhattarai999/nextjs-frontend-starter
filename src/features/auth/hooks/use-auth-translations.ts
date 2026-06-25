import { useTranslations } from "next-intl";

/**
 * Returns localized strings from the Auth message namespace.
 */
export function useAuthTranslations() {
    const t = useTranslations("Auth");

    return {
        login: {
            title: t("login.title"),
            description: t("login.description"),
            email: t("login.email"),
            emailPlaceholder: t("login.emailPlaceholder"),
            password: t("login.password"),
            passwordPlaceholder: t("login.passwordPlaceholder"),
            forgotPassword: t("login.forgotPassword"),
            submit: t("login.submit"),
            submitting: t("login.submitting"),
            divider: t("login.divider"),
            google: t("login.google"),
            apple: t("login.apple"),
            noAccount: t("login.noAccount"),
            signUp: t("login.signUp"),
            success: t("login.success"),
            error: t("login.error"),
            socialComingSoon: t("login.socialComingSoon"),
            demoHint: t("login.demoHint"),
        },
        showcase: {
            headline: t("showcase.headline"),
            description: t("showcase.description"),
            cta: t("showcase.cta"),
        },
    };
}
