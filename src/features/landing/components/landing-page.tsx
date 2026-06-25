"use client";

import { Separator } from "@/components/ui/separator";
import { IntegratedStackSection } from "@/features/landing/components/integrated-stack-section";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { PageGroupsSection } from "@/features/landing/components/page-groups-section";
import { RoadmapSection } from "@/features/landing/components/roadmap-section";

export function LandingPage() {
    return (
        <main className="min-h-screen overflow-y-auto">
            <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-8 md:py-12">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)]"
                />

                <LandingHeader />
                <LandingHero />

                <Separator />

                <PageGroupsSection />
                <IntegratedStackSection />
                <RoadmapSection />
                <LandingFooter />
            </div>
        </main>
    );
}
