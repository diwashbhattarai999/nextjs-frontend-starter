import { cn } from "@/lib/utils";

import { splitLegalText, toTelHref } from "../lib/split-legal-text";

interface LegalRichTextProps {
    text: string;
    className?: string;
}

const linkClassName =
    "text-foreground underline underline-offset-4 transition-colors hover:text-primary";

/**
 * Renders legal copy with auto-linked emails, URLs, and phone numbers.
 */
export function LegalRichText({ text, className }: LegalRichTextProps) {
    const parts = splitLegalText(text);

    return (
        <span className={className}>
            {parts.map((part) => {
                if (part.type === "text") {
                    return <span key={part.key}>{part.value}</span>;
                }

                if (part.type === "email") {
                    return (
                        <a className={linkClassName} href={`mailto:${part.value}`} key={part.key}>
                            {part.value}
                        </a>
                    );
                }

                if (part.type === "url") {
                    return (
                        <a
                            className={linkClassName}
                            href={part.value}
                            key={part.key}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {part.value}
                        </a>
                    );
                }

                return (
                    <a
                        className={cn(linkClassName, "whitespace-nowrap")}
                        href={`tel:${toTelHref(part.value)}`}
                        key={part.key}
                    >
                        {part.value}
                    </a>
                );
            })}
        </span>
    );
}
