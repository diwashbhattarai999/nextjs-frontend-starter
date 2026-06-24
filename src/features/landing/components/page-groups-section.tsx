import { IconArrowRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    PAGE_GROUP_KEYS,
    PAGE_GROUPS,
    type PageGroupKey,
    type PageLinkKey,
} from "@/features/landing/data/page-groups.data";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface PageGroupsSectionProps {
    title: string;
    subtitle: string;
    placeholderLabel: string;
    getGroupTitle: (group: PageGroupKey) => string;
    getGroupDescription: (group: PageGroupKey) => string;
    getPageLabel: (page: PageLinkKey) => string;
}

export function PageGroupsSection({
    title,
    subtitle,
    placeholderLabel,
    getGroupTitle,
    getGroupDescription,
    getPageLabel,
}: PageGroupsSectionProps) {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="font-semibold text-2xl tracking-tight">{title}</h2>
                <p className="text-muted-foreground">{subtitle}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                {PAGE_GROUP_KEYS.map((groupKey) => {
                    const group = PAGE_GROUPS[groupKey];

                    return (
                        <Card key={groupKey} size="sm">
                            <CardHeader>
                                <div className="flex items-start justify-between gap-3">
                                    <CardTitle>{getGroupTitle(groupKey)}</CardTitle>
                                    <Badge variant="secondary">{placeholderLabel}</Badge>
                                </div>
                                <CardDescription>{getGroupDescription(groupKey)}</CardDescription>
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
                                                {getPageLabel(page.key)}
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
            </div>
        </section>
    );
}
