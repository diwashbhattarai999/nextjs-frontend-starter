import { useTranslations } from "next-intl";

import type { RoadmapKey } from "../constants/landing.constants";
import type { StackCategoryKey } from "../data/integrated-stack.data";

export function useLandingTranslations() {
    const t = useTranslations("HomePage");

    return {
        badge: t("badge"),
        title: t("title"),
        description: t("description"),
        viewGithubLabel: t("viewGithub"),
        integrated: {
            title: t("integrated.title"),
            subtitle: t("integrated.subtitle"),
            getCategoryLabel: (category: StackCategoryKey) =>
                t(`integrated.categories.${category}`),
        },
        roadmap: {
            title: t("roadmap.title"),
            subtitle: t("roadmap.subtitle"),
            soonLabel: t("roadmap.soon"),
            getItemTitle: (key: RoadmapKey) => t(`roadmapItems.${key}.title`),
            getItemDescription: (key: RoadmapKey) => t(`roadmapItems.${key}.description`),
        },
    };
}
