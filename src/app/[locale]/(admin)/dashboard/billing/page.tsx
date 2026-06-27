import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComingSoon } from "@/components/shared/coming-soon";
import { PageDescription, PageHeader, PageTitle } from "@/components/shared/page";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("dashboard.billing.title") };
}

export default async function DashboardBillingPage() {
    const t = await getTranslations("Pages");

    return (
        <>
            <PageHeader className="gap-2">
                <PageTitle>{t("dashboard.billing.title")}</PageTitle>
                <PageDescription>{t("dashboard.billing.description")}</PageDescription>
            </PageHeader>

            <ComingSoon title={t("dashboard.billing.title")} />
        </>
    );
}
