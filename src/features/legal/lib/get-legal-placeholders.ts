import { siteConfig } from "@/configs/site";

import type { LegalPlaceholders } from "../types/legal.types";

/**
 * Returns shared placeholder values interpolated into legal document copy.
 *
 * @returns Legal document interpolation values from site configuration.
 */
export const getLegalPlaceholders = (): LegalPlaceholders => ({
    appName: siteConfig.shortTitle,
    appUrl: siteConfig.url,
    contactEmail: siteConfig.contactEmail,
    contactPhone: siteConfig.contactPhone,
    companyName: siteConfig.title,
});
