"use client";

import { useTranslations } from "next-intl";

import { Icons } from "@/components/shared/icons";
import {
    Page,
    PageActions,
    PageContent,
    PageDescription,
    PageTitle,
} from "@/components/shared/page";
import { Section, SectionHeader } from "@/components/shared/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import type {
    ErrorPageFieldKey,
    ErrorPageKey,
    ErrorTranslationKey,
} from "@/features/errors/types/error-page.types";
import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface ErrorPageProps {
    errorKey: ErrorPageKey;
}

/**
 * Shared full-page error experience with humor, status code, and navigation actions.
 *
 * @param errorKey - Errors message namespace key for the page content.
 */
export function ErrorPage({ errorKey }: ErrorPageProps) {
    const t = useTranslations("Errors");
    const router = useRouter();

    const getField = (field: ErrorPageFieldKey) => t(`${errorKey}.${field}` as ErrorTranslationKey);

    return (
        <Page className="relative overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)_0%,transparent_50%)] opacity-[0.07]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-muted)_0%,transparent_60%)]"
            />

            <PageContent align="center" className="relative px-6 py-12">
                <Section className="w-full max-w-2xl" spacing="lg">
                    <SectionHeader align="center" className="gap-6">
                        <div className="flex flex-col items-center gap-3">
                            <div
                                aria-hidden
                                className="bg-linear-to-b from-foreground/80 to-foreground/20 bg-clip-text font-extrabold text-7xl text-transparent tracking-tighter md:text-8xl xl:text-[18rem]"
                            >
                                {getField("code")}
                            </div>

                            <PageTitle className="text-balance font-bold text-3xl md:text-4xl">
                                {getField("title")}
                            </PageTitle>

                            <PageDescription className="max-w-md text-base md:text-lg">
                                {getField("description")}
                            </PageDescription>
                        </div>
                    </SectionHeader>

                    <div className="flex w-full flex-col items-center gap-8">
                        <PageActions className="justify-center">
                            <Button onClick={() => router.back()} size="lg">
                                <Icons.arrowLeft aria-hidden />
                                {getField("goBack")}
                            </Button>
                            <Link
                                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                                href={ROUTES.HOME}
                            >
                                {getField("backHome")}
                            </Link>
                        </PageActions>
                        <p className="text-muted-foreground/70 text-xs tracking-wide">
                            {getField("footnote")}
                        </p>
                    </div>
                </Section>
            </PageContent>
        </Page>
    );
}
