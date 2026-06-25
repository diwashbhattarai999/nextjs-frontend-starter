import { useTranslations } from "next-intl";

/**
 * Returns localized strings from the Common message namespace.
 */
export function useCommonTranslations() {
    const t = useTranslations("Common");

    return {
        languages: t("languages"),
        accessibility: {
            showPassword: t("accessibility.showPassword"),
            hidePassword: t("accessibility.hidePassword"),
        },
        validation: {
            emailInvalid: t("validation.emailInvalid"),
            passwordRequired: t("validation.passwordRequired"),
            passwordMin: t("validation.passwordMin"),
            passwordMax: t("validation.passwordMax"),
            phoneRequired: t("validation.phoneRequired"),
            phoneMin: t("validation.phoneMin"),
            phoneMax: t("validation.phoneMax"),
            nameRequired: t("validation.nameRequired"),
            nameMin: t("validation.nameMin"),
            nameMax: t("validation.nameMax"),
        },
    };
}
