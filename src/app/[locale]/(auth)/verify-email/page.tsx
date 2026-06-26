import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { AppLogo } from "@/components/shared/app-logo";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { PageActions, PageContent } from "@/components/shared/page";
import { ROUTES } from "@/configs/routes";
import { LoginShowcase } from "@/features/auth/components/login-showcase";
import { VerifyEmailForm } from "@/features/auth/components/verify-email-form";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("auth.verifyEmail.title") };
}

interface VerifyEmailRoutePageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function VerifyEmailRoutePage({ searchParams }: VerifyEmailRoutePageProps) {
    const { token, email } = await searchParams;

    if (!(email && token)) {
        return notFound();
    }

    return (
        <PageContent className="min-h-svh lg:grid lg:grid-cols-2">
            <div className="flex min-h-svh flex-col px-6 py-8 lg:px-12">
                <PageActions className="justify-between">
                    <AppLogo displayWidth={40} href={ROUTES.HOME} />
                    <LocaleSwitcher />
                </PageActions>

                <div className="flex flex-1 items-center justify-center py-8">
                    <div className="w-full max-w-md">
                        <VerifyEmailForm email={email as string} token={token as string} />
                    </div>
                </div>
            </div>

            <LoginShowcase />
        </PageContent>
    );
}
