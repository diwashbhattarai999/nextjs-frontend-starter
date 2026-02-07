"use client";

import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ActiveThemeProvider } from "../themes/active-theme";

export function Providers({
    activeThemeValue,
    children,
}: {
    activeThemeValue: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <NextTopLoader color="var(--primary)" showSpinner={false} />
            <NuqsAdapter>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    disableTransitionOnChange
                    enableColorScheme
                    enableSystem
                >
                    <Toaster />
                    <ActiveThemeProvider initialTheme={activeThemeValue}>
                        {children}
                    </ActiveThemeProvider>
                </ThemeProvider>
            </NuqsAdapter>
        </>
    );
}
