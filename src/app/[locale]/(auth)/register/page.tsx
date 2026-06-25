import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AppLogo } from "@/components/shared/app-logo";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { PageActions, PageContent } from "@/components/shared/page";
import { ROUTES } from "@/configs/routes";
import { LoginShowcase } from "@/features/auth/components/login-showcase";
import { RegisterForm } from "@/features/auth/components/register-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("auth.register.title") };
}

export default function RegisterRoutePage() {
    return (
        <PageContent className="min-h-svh lg:grid lg:grid-cols-2">
            <div className="flex min-h-svh flex-col px-6 py-8 lg:px-12">
                <PageActions className="justify-between">
                    <AppLogo displayWidth={40} href={ROUTES.HOME} />
                    <LocaleSwitcher />
                </PageActions>

                <div className="flex flex-1 items-center justify-center py-8">
                    <div className="w-full max-w-md">
                        <RegisterForm />
                    </div>
                </div>
            </div>

            <LoginShowcase />
        </PageContent>
    );
}
