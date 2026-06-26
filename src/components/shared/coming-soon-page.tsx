import { getTranslations } from "next-intl/server";

import { PageActions, PageDescription, PageTitle } from "@/components/shared/page";
import { Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

interface ComingSoonPageProps {
    title: string;
    description?: string;
}

/**
 * Placeholder page shown while a route is under development.
 *
 * @param title - Page heading.
 * @param description - Optional page-specific description.
 */
export async function ComingSoonPage({ title, description }: ComingSoonPageProps) {
    const t = await getTranslations("Pages");

    return (
        <Section spacing="sm">
            <Empty className="border border-primary bg-primary/5">
                <EmptyHeader className="max-w-4xl gap-4">
                    <EmptyMedia variant="icon">
                        <Icons.clock aria-hidden />
                    </EmptyMedia>
                    <Badge rounded="full" size="sm" variant="secondary">
                        {t("comingSoon.badge")}
                    </Badge>
                    <SectionHeader align="center" className="gap-4">
                        <PageTitle className="font-bold text-4xl">{title}</PageTitle>
                        <PageDescription className="w-full text-lg">
                            {description ?? t("comingSoon.defaultDescription")}
                        </PageDescription>
                    </SectionHeader>
                </EmptyHeader>
                <EmptyContent className="max-w-4xl">
                    <PageActions className="justify-center">
                        <Link
                            className={cn(buttonVariants({ size: "xl", variant: "outline" }))}
                            href={ROUTES.HOME}
                        >
                            <Icons.arrowLeft />
                            {t("comingSoon.backHome")}
                        </Link>
                    </PageActions>
                </EmptyContent>
            </Empty>
        </Section>
    );
}
