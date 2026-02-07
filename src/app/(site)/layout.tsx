import { AnimatedThemeToggler } from "@/components/shared/animated-theme-toggler";
import { GitHubLink } from "@/components/shared/github-link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-slot="layout" className="bg-background relative z-10 flex min-h-svh flex-col">
      <div className="flex items-center justify-end p-4 gap-2">
        <GitHubLink />
        <AnimatedThemeToggler />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center">{children}</main>
    </div>
  );
}
