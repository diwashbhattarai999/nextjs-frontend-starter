import { IconArrowRight } from "@tabler/icons-react";

import {
    Section,
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PAGE_GROUP_KEYS, PAGE_GROUPS } from "@/features/landing/data/page-groups.data";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { useLandingTranslations } from "../hooks/use-landing-translations";

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

                    return (
                        <Card key={groupKey} size="sm">
                            <CardHeader>
                                <div className="flex items-start justify-between gap-3">
                                    <CardTitle>{pageGroups.getGroupTitle(groupKey)}</CardTitle>
                                    <Badge variant="secondary">{pageGroups.placeholderLabel}</Badge>
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
                                                        className: "w-full justify-between",
                                                        size: "sm",
                                                        variant: "ghost",
                                                    })
                                                )}
                                                href={page.href}
                                            >
                                                {pageGroups.getPageLabel(page.key)}
                                                <IconArrowRight
                                                    aria-hidden
                                                    className="size-4 opacity-50"
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
