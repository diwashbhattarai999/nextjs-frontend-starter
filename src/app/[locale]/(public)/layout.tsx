import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { ThemeModeToggle } from "@/components/themes/theme-mode-toggle";
import { ThemeSelector } from "@/components/themes/theme-selector";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="relative z-10 flex min-h-svh flex-col bg-background"
            data-slot="layout"
        >
            <div className="flex items-center justify-end gap-2 p-4">
                <ThemeModeToggle />
            </div>
            <main className="flex flex-1 flex-col items-center justify-center gap-5">
                <div className="flex items-center gap-6">
                    <ThemeSelector />
                    <LocaleSwitcher />
                </div>

                {children}
            </main>
        </div>
    );
}
