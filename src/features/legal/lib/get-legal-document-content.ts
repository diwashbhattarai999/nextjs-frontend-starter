import type { getTranslations } from "next-intl/server";

import type {
    LegalDocumentContent,
    LegalDocumentKey,
    LegalPlaceholders,
} from "../types/legal.types";
import { getLegalTranslationValues } from "./get-legal-translation-values";

type LegalTranslator = Awaited<ReturnType<typeof getTranslations<"Legal">>>;

/**
 * Loads structured legal document content from the Legal translation namespace.
 *
 * @param t - Legal namespace translator.
 * @param documentKey - Document identifier within the Legal namespace.
 * @param placeholders - Site configuration values for ICU interpolation.
 * @returns Parsed legal document content including sections.
 */
export const getLegalDocumentContent = (
    t: LegalTranslator,
    documentKey: LegalDocumentKey,
    placeholders: LegalPlaceholders
): LegalDocumentContent => {
    const values = getLegalTranslationValues(placeholders);

    return {
        title: t(`${documentKey}.title`),
        description: t(`${documentKey}.description`, values),
        lastUpdatedDate: t(`${documentKey}.lastUpdatedDate`),
        sections: t.raw(`${documentKey}.sections`) as LegalDocumentContent["sections"],
    };
};
