import type { LegalPlaceholders } from "../types/legal.types";

/**
 * Maps legal placeholders to next-intl ICU message values.
 *
 * @param placeholders - Site configuration values for legal documents.
 * @returns Values passed to `t()` for ICU interpolation.
 */
export const getLegalTranslationValues = (placeholders: LegalPlaceholders) => ({
    appName: placeholders.appName,
    appUrl: placeholders.appUrl,
    contactEmail: placeholders.contactEmail,
    contactPhone: placeholders.contactPhone,
    companyName: placeholders.companyName,
});
