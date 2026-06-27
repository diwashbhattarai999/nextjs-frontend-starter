import type { LegalPlaceholders } from "../types/legal.types";

/**
 * Replaces legal document placeholders with site configuration values.
 *
 * @param text - Translation string containing placeholder tokens.
 * @param placeholders - Values to inject into the text.
 * @returns Interpolated legal copy.
 */
export const interpolateLegalText = (text: string, placeholders: LegalPlaceholders): string =>
    text
        .replaceAll("{appName}", placeholders.appName)
        .replaceAll("{appUrl}", placeholders.appUrl)
        .replaceAll("{contactEmail}", placeholders.contactEmail)
        .replaceAll("{contactPhone}", placeholders.contactPhone)
        .replaceAll("{companyName}", placeholders.companyName);
