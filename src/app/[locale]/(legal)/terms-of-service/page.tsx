import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComingSoonPage } from "@/components/shared/coming-soon-page";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("legal.termsOfService.title") };
}

export default async function TermsOfServicePage() {
    const t = await getTranslations("Pages");

    return (
        <ComingSoonPage
            description={t("legal.termsOfService.description")}
            title={t("legal.termsOfService.title")}
        />
    );
}
