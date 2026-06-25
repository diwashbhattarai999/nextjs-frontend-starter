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
        register: {
            title: t("register.title"),
            description: t("register.description"),
            name: t("register.name"),
            namePlaceholder: t("register.namePlaceholder"),
            email: t("register.email"),
            emailPlaceholder: t("register.emailPlaceholder"),
            password: t("register.password"),
            passwordPlaceholder: t("register.passwordPlaceholder"),
            confirmPassword: t("register.confirmPassword"),
            confirmPasswordPlaceholder: t("register.confirmPasswordPlaceholder"),
            submit: t("register.submit"),
            submitting: t("register.submitting"),
            divider: t("register.divider"),
            google: t("register.google"),
            apple: t("register.apple"),
            hasAccount: t("register.hasAccount"),
            signIn: t("register.signIn"),
            success: t("register.success"),
            error: t("register.error"),
            socialComingSoon: t("register.socialComingSoon"),
        },
        forgotPassword: {
            title: t("forgotPassword.title"),
            description: t("forgotPassword.description"),
            email: t("forgotPassword.email"),
            emailPlaceholder: t("forgotPassword.emailPlaceholder"),
            submit: t("forgotPassword.submit"),
            submitting: t("forgotPassword.submitting"),
            rememberPassword: t("forgotPassword.rememberPassword"),
            signIn: t("forgotPassword.signIn"),
            success: t("forgotPassword.success"),
            error: t("forgotPassword.error"),
        },
        resetPassword: {
            title: t("resetPassword.title"),
            description: t("resetPassword.description"),
            password: t("resetPassword.password"),
            passwordPlaceholder: t("resetPassword.passwordPlaceholder"),
            confirmPassword: t("resetPassword.confirmPassword"),
            confirmPasswordPlaceholder: t("resetPassword.confirmPasswordPlaceholder"),
            submit: t("resetPassword.submit"),
            submitting: t("resetPassword.submitting"),
            success: t("resetPassword.success"),
            error: t("resetPassword.error"),
            backToLogin: t("resetPassword.backToLogin"),
        },
        showcase: {
            headline: t("showcase.headline"),
            description: t("showcase.description"),
            cta: t("showcase.cta"),
        },
    };
}
