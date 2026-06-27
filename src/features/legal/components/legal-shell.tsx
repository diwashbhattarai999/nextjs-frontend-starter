import { AppLogo } from "@/components/shared/app-logo";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { PageActions, PageHeader } from "@/components/shared/page";
import { ThemeModeToggle } from "@/components/themes/theme-mode-toggle";
import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";

interface LegalShellProps {
    children: React.ReactNode;
}

/**
 * Minimal shell for legal pages with navigation back to the marketing site.
 */
export function LegalShell({ children }: LegalShellProps) {
    return (
        <>
            <PageHeader className="mb-8 flex-row items-center justify-between gap-4 border-border/60 border-b pb-6">
                <Link aria-label="Home" href={ROUTES.HOME}>
                    <AppLogo displayWidth={36} />
                </Link>

                <PageActions>
                    <ThemeModeToggle />
                    <LocaleSwitcher />
                </PageActions>
            </PageHeader>

            {children}
        </>
    );
}
