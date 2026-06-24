import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LandingHeroProps {
    badge: string;
    title: string;
    description: string;
    getStartedLabel: string;
    viewDashboardLabel: string;
    viewGithubLabel: string;
}

export function LandingHero({
    badge,
    title,
    description,
    getStartedLabel,
    viewDashboardLabel,
    viewGithubLabel,
}: LandingHeroProps) {
    return (
        <section className="flex flex-col items-center gap-6 text-center">
            <Badge variant="secondary">{badge}</Badge>
            <div className="flex max-w-2xl flex-col gap-4">
                <h1 className="font-semibold text-4xl tracking-tight md:text-5xl">{title}</h1>
                <p className="text-balance text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
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
            </div>
        </section>
    );
}
