import { useTranslations } from "next-intl";

/**
 * Returns localized strings from the Pages message namespace.
 */
export function usePagesTranslations() {
    const t = useTranslations("Pages");

    return {
        comingSoon: {
            badge: t("comingSoon.badge"),
            title: t("comingSoon.badge"),
            defaultDescription: t("comingSoon.defaultDescription"),
            backHome: t("comingSoon.backHome"),
            actionLabel: t("comingSoon.actionLabel"),
        },
    };
}
