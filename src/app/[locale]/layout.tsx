import { ThemeProvider } from "@wrksz/themes/next";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";

import { Providers } from "@/components/layout/providers";
import { fontVariables } from "@/components/themes/font.config";
import { DEFAULT_THEME } from "@/components/themes/theme.config";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

import { ROUTES } from "@/configs/routes";
import { META_THEME_COLORS } from "@/configs/site";
import { STORAGE_KEYS } from "@/configs/storage";
import type { TLocales } from "@/i18n/locale.config";
import { routing } from "@/i18n/routing";
import {
    getSiteMetadata,
    METADATA_PATHNAME_HEADER,
    resolveMetadataBase,
} from "@/lib/site-metadata";
import { getViewportThemeColor } from "@/lib/theme-color";

interface LocaleLayoutProps {
    params: Promise<{ locale: string }>;
}

/**
 * Generates locale-aware metadata for SEO, Open Graph, and Twitter cards.
 *
 * @param props - Layout props including the active locale.
 * @returns Metadata for the current locale.
 */
export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
    const { locale } = await params;
    const headersList = await headers();

    const pathname = headersList.get(METADATA_PATHNAME_HEADER) ?? ROUTES.HOME;
    const metadataBase = resolveMetadataBase(headersList);

    return getSiteMetadata(locale as TLocales, { pathname, metadataBase });
}

/**
 * Generates viewport metadata from the theme preference cookie.
 *
 * @returns Viewport configuration including `theme-color`.
 */
export async function generateViewport(): Promise<Viewport> {
    const cookieStore = await cookies();
    const themePreference = cookieStore.get(STORAGE_KEYS.THEME)?.value;

    return {
        themeColor: getViewportThemeColor(themePreference),
    };
}

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps & { children: React.ReactNode }) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid, if not, return a 404 error.
    if (!routing.locales.includes(locale as TLocales)) {
        notFound();
    }

    // Fetch the messages for the current locale to be used by the `NextIntlClientProvider`.
    const messages = await getMessages();

    // Get the cookie store.
    const cookieStore = await cookies();

    // Get the active theme value from the cookie store.
    const activeThemeValue = cookieStore.get(STORAGE_KEYS.ACTIVE_THEME)?.value;

    // Get the theme to apply based on the active theme value or the default theme.
    const themeToApply = activeThemeValue || DEFAULT_THEME;

    return (
        <html
            data-scroll-behavior="smooth"
            data-theme={themeToApply}
            lang={locale}
            suppressHydrationWarning
        >
            <body className={cn("bg-background font-sans antialiased", fontVariables)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                    enableColorScheme
                    enableSystem
                    storage="cookie"
                    storageKey={STORAGE_KEYS.THEME}
                    themeColor={{
                        dark: META_THEME_COLORS.dark,
                        light: META_THEME_COLORS.light,
                    }}
                >
                    <Providers
                        activeThemeValue={themeToApply}
                        locale={locale as TLocales}
                        messages={messages}
                    >
                        {children}
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}
