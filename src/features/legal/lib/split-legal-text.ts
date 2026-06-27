export type LegalTextPart =
    | { type: "text"; value: string; key: string }
    | { type: "email"; value: string; key: string }
    | { type: "url"; value: string; key: string }
    | { type: "phone"; value: string; key: string };

const LEGAL_LINK_PATTERN =
    /https?:\/\/[^\s,;)]+|[^\s@]+@[^\s@]+\.[^\s@]{2,}|\+[\d][\d\s().-]{6,}\d/g;

/**
 * Splits legal copy into plain text and linkable segments for emails, URLs, and phone numbers.
 *
 * @param text - Interpolated legal copy.
 * @returns Ordered text and link segments.
 */
export const splitLegalText = (text: string): LegalTextPart[] => {
    const parts: LegalTextPart[] = [];
    let lastIndex = 0;

    for (const match of text.matchAll(LEGAL_LINK_PATTERN)) {
        const value = match[0];
        const startIndex = match.index ?? 0;

        if (startIndex > lastIndex) {
            parts.push({
                type: "text",
                value: text.slice(lastIndex, startIndex),
                key: `text-${lastIndex}`,
            });
        }

        if (value.includes("@")) {
            parts.push({ type: "email", value, key: `email-${startIndex}` });
        } else if (value.startsWith("http://") || value.startsWith("https://")) {
            parts.push({ type: "url", value, key: `url-${startIndex}` });
        } else {
            parts.push({ type: "phone", value, key: `phone-${startIndex}` });
        }

        lastIndex = startIndex + value.length;
    }

    if (lastIndex < text.length) {
        parts.push({ type: "text", value: text.slice(lastIndex), key: `text-${lastIndex}` });
    }

    return parts.length > 0 ? parts : [{ type: "text", value: text, key: "text-0" }];
};

/**
 * Normalizes a phone number for use in a `tel:` href.
 *
 * @param phone - Display phone number.
 * @returns Phone number suitable for tel links.
 */
export const toTelHref = (phone: string): string => phone.replace(/[^\d+]/g, "");
