import { AppLogo } from "@/components/shared/app-logo";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { PageActions, PageHeader } from "@/components/shared/page";
import { ThemeModeToggle } from "@/components/themes/theme-mode-toggle";
import { ThemeSelector } from "@/components/themes/theme-selector";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { Link } from "@/i18n/navigation";

export function LandingHeader() {
    return (
        <PageHeader className="flex-row items-center justify-between gap-4">
            <Link className="flex items-center gap-2 font-medium text-sm" href={ROUTES.HOME}>
                <AppLogo displayWidth={40} />
                <span className="hidden sm:inline">{siteConfig.title}</span>
            </Link>

            <PageActions>
                <ThemeSelector />
                <ThemeModeToggle />
                <LocaleSwitcher />
            </PageActions>
        </PageHeader>
    );
}
