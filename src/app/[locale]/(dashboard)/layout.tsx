import { getTranslations } from "next-intl/server";

import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const t = await getTranslations("Pages");

    return (
        <div className="flex min-h-svh flex-col">
            <header className="border-b">
                <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
                    <Link
                        className="font-medium text-sm hover:text-primary"
                        href={ROUTES.DASHBOARD.HOME}
                    >
                        {t("dashboard.home.title")}
                    </Link>
                </div>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
                {children}
            </main>
        </div>
    );
}
