import { IconBrandGithub } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface LandingHeroProps {
    badge: string;
    title: string;
    description: string;
    viewGithubLabel: string;
}

export function LandingHero({ badge, title, description, viewGithubLabel }: LandingHeroProps) {
    return (
        <section className="flex flex-col items-center gap-6 text-center">
            <Badge variant="secondary">{badge}</Badge>
            <div className="flex max-w-2xl flex-col gap-4">
                <h1 className="font-semibold text-4xl tracking-tight md:text-5xl">{title}</h1>
                <p className="text-balance text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
            <a
                className={cn(buttonVariants({ size: "lg" }))}
                href={siteConfig.links.github}
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconBrandGithub aria-hidden />
                {viewGithubLabel}
            </a>
        </section>
    );
}
