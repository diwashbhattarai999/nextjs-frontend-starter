import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComingSoonPage } from "@/components/shared/coming-soon-page";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("dashboard.settings.title") };
}

export default async function DashboardSettingsPage() {
    const t = await getTranslations("Pages");

    return (
        <ComingSoonPage
            description={t("dashboard.settings.description")}
            title={t("dashboard.settings.title")}
        />
    );
}
