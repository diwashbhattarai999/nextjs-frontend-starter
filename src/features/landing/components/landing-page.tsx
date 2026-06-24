"use client";

import { Separator } from "@/components/ui/separator";
import { IntegratedStackSection } from "@/features/landing/components/integrated-stack-section";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { RoadmapSection } from "@/features/landing/components/roadmap-section";
import { useLandingTranslations } from "@/features/landing/hooks/use-landing-translations";

export function LandingPage() {
    const { badge, title, description, viewGithubLabel, integrated, roadmap } =
        useLandingTranslations();

    return (
        <main className="min-h-screen overflow-y-auto">
            <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-8 md:py-12">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)]"
                />

                <LandingHeader />

                <LandingHero
                    badge={badge}
                    description={description}
                    title={title}
                    viewGithubLabel={viewGithubLabel}
                />

                <Separator />

                <IntegratedStackSection
                    getCategoryLabel={integrated.getCategoryLabel}
                    subtitle={integrated.subtitle}
                    title={integrated.title}
                />

                <RoadmapSection
                    getItemDescription={roadmap.getItemDescription}
                    getItemTitle={roadmap.getItemTitle}
                    soonLabel={roadmap.soonLabel}
                    subtitle={roadmap.subtitle}
                    title={roadmap.title}
                />
            </div>
        </main>
    );
}
