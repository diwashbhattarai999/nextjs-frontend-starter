import { IconArrowRight } from "@tabler/icons-react";

import {
    Section,
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from "@/components/shared/section";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    PAGE_GROUP_KEYS,
    PAGE_GROUPS,
    type PageLinkStatus,
} from "@/features/landing/data/page-groups.data";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { useLandingTranslations } from "../hooks/use-landing-translations";

function getPageStatusBadgeVariant(status: PageLinkStatus): BadgeProps["variant"] {
    return status === "ready" ? "success" : "warning";
}

function getReadyCountBadgeVariant(readyCount: number, totalCount: number): BadgeProps["variant"] {
    return readyCount === totalCount ? "success" : "warning";
}

export function PageGroupsSection() {
    const { pageGroups } = useLandingTranslations();

    return (
        <Section>
            <SectionHeader>
                <SectionTitle>{pageGroups.title}</SectionTitle>
                <SectionDescription>{pageGroups.subtitle}</SectionDescription>
            </SectionHeader>
            <SectionContent className="grid gap-6 lg:grid-cols-3">
                {PAGE_GROUP_KEYS.map((groupKey) => {
                    const group = PAGE_GROUPS[groupKey];
                    const readyCount = group.pages.filter((page) => page.status === "ready").length;

                    return (
                        <Card key={groupKey} size="sm">
                            <CardHeader>
                                <div className="flex items-start justify-between gap-3">
                                    <CardTitle>{pageGroups.getGroupTitle(groupKey)}</CardTitle>
                                    <Badge
                                        variant={getReadyCountBadgeVariant(
                                            readyCount,
                                            group.pages.length
                                        )}
                                    >
                                        {pageGroups.getReadyCountLabel(
                                            readyCount,
                                            group.pages.length
                                        )}
                                    </Badge>
                                </div>
                                <CardDescription>
                                    {pageGroups.getGroupDescription(groupKey)}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="flex flex-col gap-1">
                                    {group.pages.map((page) => (
                                        <li key={page.key}>
                                            <Link
                                                className={cn(
                                                    buttonVariants({
                                                        className:
                                                            "h-auto w-full justify-between py-2",
                                                        size: "sm",
                                                        variant: "ghost",
                                                    })
                                                )}
                                                href={page.href}
                                            >
                                                <span className="flex min-w-0 items-center gap-2">
                                                    <span className="truncate">
                                                        {pageGroups.getPageLabel(page.key)}
                                                    </span>
                                                    <Badge
                                                        className="shrink-0"
                                                        variant={getPageStatusBadgeVariant(
                                                            page.status
                                                        )}
                                                    >
                                                        {pageGroups.getPageStatusLabel(page.status)}
                                                    </Badge>
                                                </span>
                                                <IconArrowRight
                                                    aria-hidden
                                                    className="size-4 shrink-0 opacity-50"
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    );
                })}
            </SectionContent>
        </Section>
    );
}
