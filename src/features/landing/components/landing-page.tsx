"use client";

import { Separator } from "@/components/ui/separator";
import { IntegratedStackSection } from "@/features/landing/components/integrated-stack-section";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { PageGroupsSection } from "@/features/landing/components/page-groups-section";
import { RoadmapSection } from "@/features/landing/components/roadmap-section";
import { useLandingTranslations } from "@/features/landing/hooks/use-landing-translations";

export function LandingPage() {
    const {
        badge,
        title,
        description,
        viewGithubLabel,
        getStartedLabel,
        viewDashboardLabel,
        integrated,
        pageGroups,
        roadmap,
        footer,
    } = useLandingTranslations();

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
                    getStartedLabel={getStartedLabel}
                    title={title}
                    viewDashboardLabel={viewDashboardLabel}
                    viewGithubLabel={viewGithubLabel}
                />

                <Separator />

                <PageGroupsSection
                    getGroupDescription={pageGroups.getGroupDescription}
                    getGroupTitle={pageGroups.getGroupTitle}
                    getPageLabel={pageGroups.getPageLabel}
                    placeholderLabel={pageGroups.placeholderLabel}
                    subtitle={pageGroups.subtitle}
                    title={pageGroups.title}
                />

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

                <LandingFooter
                    cookiePolicy={footer.cookiePolicy}
                    copyright={footer.copyright}
                    github={footer.github}
                    legal={footer.legal}
                    login={footer.login}
                    overview={footer.overview}
                    privacyPolicy={footer.privacyPolicy}
                    product={footer.product}
                    profile={footer.profile}
                    register={footer.register}
                    resources={footer.resources}
                    settings={footer.settings}
                    termsOfService={footer.termsOfService}
                />
            </div>
        </main>
    );
}
