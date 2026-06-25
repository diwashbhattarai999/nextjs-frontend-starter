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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { StackSoftwareIcon } from "@/features/landing/components/stack-item-badge";
import type { SoftwareIconKey } from "@/features/landing/data/software-icons";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { useLandingTranslations } from "../hooks/use-landing-translations";

const HERO_STACK_ICONS = [
    "nextjs",
    "react",
    "typescript",
    "tailwind",
    "shadcn",
    "react-query",
    "zod",
    "react-hook-form",
    "biome",
    "axios",
] as const satisfies readonly SoftwareIconKey[];

const HERO_STACK_ICON_LABELS: Record<(typeof HERO_STACK_ICONS)[number], string> = {
    nextjs: "Next.js 16",
    react: "React 19",
    typescript: "TypeScript 5",
    tailwind: "Tailwind CSS 4",
    shadcn: "shadcn/ui",
    "react-query": "TanStack Query 5",
    zod: "Zod 4",
    "react-hook-form": "React Hook Form",
    biome: "Biome",
    axios: "Axios",
};

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
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                        {HERO_STACK_ICONS.map((icon) => (
                            <Tooltip key={icon}>
                                <TooltipTrigger
                                    render={
                                        <button
                                            aria-label={HERO_STACK_ICON_LABELS[icon]}
                                            className="flex size-10 items-center justify-center rounded-lg border bg-background/80 p-2 shadow-xs transition-colors hover:bg-muted/60"
                                            type="button"
                                        >
                                            <StackSoftwareIcon className="size-5" icon={icon} />
                                        </button>
                                    }
                                />
                                <TooltipContent>{HERO_STACK_ICON_LABELS[icon]}</TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
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
