import { Icons } from "@/components/shared/icons";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { ThemeModeToggle } from "@/components/themes/theme-mode-toggle";
import { ThemeSelector } from "@/components/themes/theme-selector";
import { siteConfig } from "@/lib/config";

export function LandingHeader() {
    return (
        <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-medium text-sm">
                <Icons.logo className="size-5" />
                <span className="hidden sm:inline">{siteConfig.title}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
                <ThemeSelector />
                <ThemeModeToggle />
                <LocaleSwitcher />
            </div>
        </header>
    );
}
