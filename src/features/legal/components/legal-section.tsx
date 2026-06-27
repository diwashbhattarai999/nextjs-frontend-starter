import { interpolateLegalText } from "../lib/interpolate-legal-text";
import type { LegalPlaceholders, LegalSectionContent } from "../types/legal.types";
import { LegalRichText } from "./legal-rich-text";

interface LegalSectionProps {
    section: LegalSectionContent;
    placeholders: LegalPlaceholders;
}

/**
 * Renders a single legal document section with optional bullet list.
 */
export function LegalSection({ section, placeholders }: LegalSectionProps) {
    return (
        <section aria-labelledby={section.id} className="scroll-mt-24" id={section.id}>
            <h2
                className="mb-4 font-semibold text-foreground text-lg tracking-tight md:text-xl"
                id={section.id}
            >
                {section.title}
            </h2>

            <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed md:text-base">
                {section.paragraphs.map((paragraph) => (
                    <p key={`${section.id}-paragraph-${paragraph}`}>
                        <LegalRichText text={interpolateLegalText(paragraph, placeholders)} />
                    </p>
                ))}

                {section.list && section.list.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-5">
                        {section.list.map((item) => (
                            <li key={`${section.id}-list-${item}`}>
                                <LegalRichText text={interpolateLegalText(item, placeholders)} />
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </section>
    );
}
