export const SUPPORTED_LOCALES = ["en", "ne", "hi", "fr", "es"] as const;

export type TLocales = (typeof SUPPORTED_LOCALES)[number];

export interface LocaleConfig {
    label: string;
    flag: string;
    openGraphLocale: string;
}

export const LOCALE_CONFIG: Record<TLocales, LocaleConfig> = {
    en: {
        label: "English",
        flag: "🇺🇸",
        openGraphLocale: "en_US",
    },
    ne: {
        label: "नेपाली",
        flag: "🇳🇵",
        openGraphLocale: "ne_NP",
    },
    hi: {
        label: "हिन्दी",
        flag: "🇮🇳",
        openGraphLocale: "hi_IN",
    },
    fr: {
        label: "Français",
        flag: "🇫🇷",
        openGraphLocale: "fr_FR",
    },
    es: {
        label: "Español",
        flag: "🇪🇸",
        openGraphLocale: "es_ES",
    },
};

/**
 * Returns Open Graph locale code for a supported locale.
 *
 * @param locale - Application locale code.
 * @returns Open Graph locale string.
 */
export const getOpenGraphLocale = (locale: TLocales): string =>
    LOCALE_CONFIG[locale].openGraphLocale;
