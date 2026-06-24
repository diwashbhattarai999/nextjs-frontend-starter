import { IconClock } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";
import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

interface ComingSoonPageProps {
    title: string;
    description?: string;
}

/**
 * Placeholder page shown while a route is under development.
 *
 * @param title - Page heading.
 * @param description - Optional page-specific description.
 */
export async function ComingSoonPage({ title, description }: ComingSoonPageProps) {
    const t = await getTranslations("Pages");

    return (
        <Empty className="border border-primary bg-primary/5">
            <EmptyHeader className="max-w-4xl gap-4">
                <EmptyMedia variant="icon">
                    <IconClock aria-hidden />
                </EmptyMedia>
                <Badge rounded="full" size="sm" variant="secondary">
                    {t("comingSoon.badge")}
                </Badge>
                <EmptyTitle className="font-bold text-4xl">{title}</EmptyTitle>
                <EmptyDescription className="w-full text-lg">
                    {description ?? t("comingSoon.defaultDescription")}
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="max-w-4xl">
                <Link
                    className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                    href={ROUTES.HOME}
                >
                    <Icons.arrowLeft />
                    {t("comingSoon.backHome")}
                </Link>
            </EmptyContent>
        </Empty>
    );
}
