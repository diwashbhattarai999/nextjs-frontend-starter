import { getTranslations } from "next-intl/server";

import { PageActions } from "@/components/shared/page";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import type { LegalDocumentKey } from "../types/legal.types";

interface LegalRelatedLinksProps {
    currentPage: LegalDocumentKey;
}

const LEGAL_LINKS: readonly { key: LegalDocumentKey; href: string }[] = [
    { key: "privacyPolicy", href: ROUTES.LEGAL.PRIVACY_POLICY },
    { key: "termsOfService", href: ROUTES.LEGAL.TERMS_OF_SERVICE },
    { key: "cookiePolicy", href: ROUTES.LEGAL.COOKIE_POLICY },
];

/**
 * Footer navigation between legal documents and back to the home page.
 */
export async function LegalRelatedLinks({ currentPage }: LegalRelatedLinksProps) {
    const t = await getTranslations("Legal");

    return (
        <footer className="mt-12 flex flex-col gap-6 border-t pt-8">
            <div className="flex flex-col gap-3">
                <p className="font-medium text-foreground text-sm">{t("common.relatedPages")}</p>
                <nav
                    aria-label={t("common.relatedPages")}
                    className="flex flex-wrap gap-x-4 gap-y-2"
                >
                    {LEGAL_LINKS.map(({ key, href }) => (
                        <Link
                            aria-current={key === currentPage ? "page" : undefined}
                            className={cn(
                                "text-sm transition-colors",
                                key === currentPage
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                            href={href}
                            key={key}
                        >
                            {t(`${key}.title`)}
                        </Link>
                    ))}
                </nav>
            </div>

            <Separator />

            <PageActions>
                <Link
                    className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
                    href={ROUTES.HOME}
                >
                    {t("common.backToHome")}
                </Link>
            </PageActions>
        </footer>
    );
}
