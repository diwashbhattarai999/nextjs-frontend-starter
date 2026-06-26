import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AppLogo } from "@/components/shared/app-logo";
import { Icons } from "@/components/shared/icons";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import {
    PageActions,
    PageContent,
    PageDescription,
    PageFooter,
    PageHeader,
    PageTitle,
} from "@/components/shared/page";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { LoginShowcase } from "@/features/auth/components/login-showcase";
import { Link } from "@/i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("auth.emailVerificationSuccess.title") };
}

export default async function EmailVerificationSuccessPage() {
    const pages = await getTranslations("Pages");
    const auth = await getTranslations("Auth");

    return (
        <PageContent className="min-h-svh lg:grid lg:grid-cols-2">
            <div className="flex min-h-svh flex-col px-6 py-8 lg:px-12">
                <PageActions className="justify-between">
                    <AppLogo displayWidth={40} href={ROUTES.HOME} />
                    <LocaleSwitcher />
                </PageActions>

                <div className="flex flex-1 items-center justify-center py-8">
                    <div className="w-full max-w-md">
                        <section className="relative overflow-hidden rounded-3xl border bg-background/95 p-8 shadow-primary/5 shadow-sm backdrop-blur">
                            <div
                                aria-hidden
                                className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-primary/70 to-transparent"
                            />

                            <div className="flex flex-col gap-8">
                                <PageHeader className="items-center gap-4 text-center">
                                    <div className="flex size-16 items-center justify-center rounded-full border border-primary/15 bg-primary/10">
                                        <Icons.circleCheck
                                            aria-hidden
                                            className="size-8 text-primary"
                                            stroke={1.9}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <PageTitle className="text-4xl">
                                            {pages("auth.emailVerificationSuccess.title")}
                                        </PageTitle>
                                        <PageDescription className="text-base">
                                            {pages("auth.emailVerificationSuccess.description")}
                                        </PageDescription>
                                    </div>
                                </PageHeader>

                                <div className="grid gap-3">
                                    <Link
                                        className={buttonVariants({ size: "xl" })}
                                        href={ROUTES.AUTH.LOGIN}
                                    >
                                        {auth("login.submit")}
                                    </Link>
                                    <Link
                                        className={buttonVariants({
                                            size: "xl",
                                            variant: "outline",
                                        })}
                                        href={ROUTES.HOME}
                                    >
                                        {pages("comingSoon.backHome")}
                                    </Link>
                                </div>

                                <PageFooter className="mt-0 border-0 pt-0 text-center">
                                    <p className="text-muted-foreground text-sm">
                                        {pages("auth.emailVerificationSuccess.description")}
                                    </p>
                                </PageFooter>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <LoginShowcase />
        </PageContent>
    );
}
