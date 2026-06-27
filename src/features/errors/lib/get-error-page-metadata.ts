import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import type { ErrorPageKey } from "@/features/errors/types/error-page.types";

/**
 * Builds locale-aware metadata for error pages.
 *
 * @param errorKey - Errors message namespace key for the page content.
 * @returns Metadata for the error page.
 */
export async function getErrorPageMetadata(errorKey: ErrorPageKey): Promise<Metadata> {
    const t = await getTranslations("Errors");

    return {
        title: t(`${errorKey}.title` as `${ErrorPageKey}.title`),
        description: t(`${errorKey}.description` as `${ErrorPageKey}.description`),
    };
}
