import { getTranslations } from "next-intl/server";

import { PageDescription, PageHeader, PageTitle } from "@/components/shared/page";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { getLegalDocumentContent } from "../lib/get-legal-document-content";
import { getLegalPlaceholders } from "../lib/get-legal-placeholders";
import type { LegalDocumentKey } from "../types/legal.types";
import { LegalRelatedLinks } from "./legal-related-links";
import { LegalRichText } from "./legal-rich-text";
import { LegalSection } from "./legal-section";

interface LegalDocumentProps {
    documentKey: LegalDocumentKey;
}

/**
 * Renders a full legal document with disclaimer and sections.
 */
export async function LegalDocument({ documentKey }: LegalDocumentProps) {
    const t = await getTranslations("Legal");
    const placeholders = getLegalPlaceholders();
    const document = getLegalDocumentContent(t, documentKey, placeholders);

    return (
        <article className="flex flex-col gap-10">
            <Alert className="border-border/60 bg-muted/20" variant="destructive">
                <AlertDescription className="text-muted-foreground text-sm leading-relaxed">
                    {t("common.templateDisclaimer")}
                </AlertDescription>
            </Alert>

            <PageHeader className="gap-3">
                <PageTitle>{document.title}</PageTitle>
                <PageDescription className="text-base">
                    <LegalRichText text={document.description} />
                </PageDescription>
                <p className="text-muted-foreground text-xs">
                    {t("common.lastUpdated", { date: document.lastUpdatedDate })}
                </p>
            </PageHeader>

            <div className="flex flex-col gap-10">
                {document.sections.map((section) => (
                    <LegalSection key={section.id} placeholders={placeholders} section={section} />
                ))}
            </div>

            <LegalRelatedLinks currentPage={documentKey} />
        </article>
    );
}
