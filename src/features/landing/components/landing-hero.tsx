import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

import { PageActions } from "@/components/shared/page";
import {
    Section,
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { useLandingTranslations } from "../hooks/use-landing-translations";

export function LandingHero() {
    const { badge, title, description, viewGithubLabel, getStartedLabel, viewDashboardLabel } =
        useLandingTranslations();

    return (
        <Section spacing="sm">
            <SectionHeader align="center">
                <Badge variant="secondary">{badge}</Badge>
                <SectionContent className="max-w-2xl items-center gap-4">
                    <SectionTitle className="text-4xl md:text-5xl">{title}</SectionTitle>
                    <SectionDescription className="text-balance text-lg">
                        {description}
                    </SectionDescription>
                </SectionContent>
            </SectionHeader>
            <PageActions className="justify-center">
                <Link className={cn(buttonVariants({ size: "lg" }))} href={ROUTES.AUTH.LOGIN}>
                    {getStartedLabel}
                    <IconArrowRight aria-hidden />
                </Link>
                <Link
                    className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                    href={ROUTES.DASHBOARD.HOME}
                >
                    {viewDashboardLabel}
                </Link>
                <a
                    className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                    href={siteConfig.social.github}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconBrandGithub aria-hidden />
                    {viewGithubLabel}
                </a>
            </PageActions>
        </Section>
    );
}
