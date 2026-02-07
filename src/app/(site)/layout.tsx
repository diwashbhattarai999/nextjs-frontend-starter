import { AnimatedThemeToggler } from "@/components/shared/animated-theme-toggler";
import { GitHubLink } from "@/components/shared/github-link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="relative z-10 flex min-h-svh flex-col bg-background"
            data-slot="layout"
        >
            <div className="flex items-center justify-end gap-2 p-4">
                <GitHubLink />
                <AnimatedThemeToggler />
            </div>
            <main className="flex flex-1 flex-col items-center justify-center">
                {children}
            </main>
        </div>
    );
}
