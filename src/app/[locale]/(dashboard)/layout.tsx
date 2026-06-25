import { getTranslations } from "next-intl/server";

import { Page, PageContainer, PageContent, PageHeader } from "@/components/shared/page";
import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const t = await getTranslations("Pages");

    return (
        <Page>
            <PageHeader className="border-b">
                <PageContainer
                    className="h-14 flex-row items-center justify-between py-0"
                    width="full"
                >
                    <Link
                        className="font-medium text-sm transition-colors hover:text-primary"
                        href={ROUTES.DASHBOARD.HOME}
                    >
                        {t("dashboard.home.title")}
                    </Link>
                </PageContainer>
            </PageHeader>
            <PageContent align="center" className="px-6 py-12">
                {children}
            </PageContent>
        </Page>
    );
}
