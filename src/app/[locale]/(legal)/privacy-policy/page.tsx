import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LegalDocument } from "@/features/legal/components/legal-document";
import { getLegalPlaceholders } from "@/features/legal/lib/get-legal-placeholders";
import { getLegalTranslationValues } from "@/features/legal/lib/get-legal-translation-values";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Legal");
    const placeholders = getLegalPlaceholders();

    return {
        title: t("privacyPolicy.title"),
        description: t("privacyPolicy.description", getLegalTranslationValues(placeholders)),
    };
}

export default function PrivacyPolicyPage() {
    return <LegalDocument documentKey="privacyPolicy" />;
}
