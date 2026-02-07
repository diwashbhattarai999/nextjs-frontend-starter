"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
    const queryClient = new QueryClient();

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
                    <QueryClientProvider client={queryClient}>
                        <Toaster />
                        <ActiveThemeProvider initialTheme={activeThemeValue}>
                            {children}
                        </ActiveThemeProvider>

                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </ThemeProvider>
            </NuqsAdapter>
        </>
    );
}
