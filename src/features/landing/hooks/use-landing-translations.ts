import { useTranslations } from "next-intl";

import type { RoadmapKey } from "@/features/landing/constants/landing.constants";
import type { StackCategoryKey } from "@/features/landing/data/integrated-stack.data";
import type {
    PageGroupKey,
    PageLinkKey,
    PageLinkStatus,
} from "@/features/landing/data/page-groups.data";

export function useLandingTranslations() {
    const t = useTranslations("HomePage");

    return {
        badge: t("badge"),
        title: t("title"),
        description: t("description"),
        viewGithubLabel: t("viewGithub"),
        getStartedLabel: t("getStarted"),
        viewDashboardLabel: t("viewDashboard"),
        integrated: {
            title: t("integrated.title"),
            subtitle: t("integrated.subtitle"),
            getCategoryLabel: (category: StackCategoryKey) =>
                t(`integrated.categories.${category}`),
        },
        pageGroups: {
            title: t("pageGroups.title"),
            subtitle: t("pageGroups.subtitle"),
            placeholderLabel: t("pageGroups.placeholder"),
            readyLabel: t("pageGroups.ready"),
            getReadyCountLabel: (ready: number, total: number) =>
                t("pageGroups.readyCount", { ready, total }),
            getPageStatusLabel: (status: PageLinkStatus) =>
                status === "ready"
                    ? t("pageGroups.status.ready")
                    : t("pageGroups.status.placeholder"),
            getGroupTitle: (group: PageGroupKey) => t(`pageGroups.groups.${group}.title`),
            getGroupDescription: (group: PageGroupKey) =>
                t(`pageGroups.groups.${group}.description`),
            getPageLabel: (page: PageLinkKey) => t(`pageGroups.pages.${page}`),
        },
        roadmap: {
            title: t("roadmap.title"),
            subtitle: t("roadmap.subtitle"),
            soonLabel: t("roadmap.soon"),
            getItemTitle: (key: RoadmapKey) => t(`roadmapItems.${key}.title`),
            getItemDescription: (key: RoadmapKey) => t(`roadmapItems.${key}.description`),
        },
        footer: {
            product: t("footer.product"),
            legal: t("footer.legal"),
            resources: t("footer.resources"),
            overview: t("footer.overview"),
            settings: t("footer.settings"),
            profile: t("footer.profile"),
            github: t("footer.github"),
            copyright: t("footer.copyright", { year: new Date().getFullYear() }),
            login: t("navigation.login"),
            register: t("navigation.register"),
            privacyPolicy: t("pageGroups.pages.privacyPolicy"),
            termsOfService: t("pageGroups.pages.termsOfService"),
            cookiePolicy: t("pageGroups.pages.cookiePolicy"),
        },
    };
}
