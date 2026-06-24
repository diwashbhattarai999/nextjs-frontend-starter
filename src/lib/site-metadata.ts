import type { Metadata } from "next";

import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { routing, type TLocales } from "@/i18n/routing";
import { getBaseUrl } from "@/lib/utils";

/** Request header set by proxy middleware with the locale-neutral pathname. */
export const METADATA_PATHNAME_HEADER = "x-pathname";

const OPEN_GRAPH_LOCALE: Record<TLocales, string> = {
    en: "en_US",
    ne: "ne_NP",
};

/**
 * Returns the pathname for a locale using the `as-needed` prefix strategy.
 *
 * @param locale - Target locale.
 * @param pathname - Locale-neutral pathname (for example `/privacy`).
 * @returns Localized path for the locale.
 */
export const getLocalizedPath = (locale: TLocales, pathname: string = ROUTES.HOME): string => {
    const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const isHome = normalizedPath === ROUTES.HOME;

    if (locale === routing.defaultLocale) {
        return isHome ? ROUTES.HOME : normalizedPath;
    }

    return isHome ? `/${locale}` : `/${locale}${normalizedPath}`;
};

/**
 * Builds canonical and hreflang alternates for the active page.
 *
 * @param locale - Active page locale.
 * @param pathname - Locale-neutral pathname.
 * @returns Metadata alternates for the current page.
 */
export const getPageAlternates = (
    locale: TLocales,
    pathname: string = ROUTES.HOME
): NonNullable<Metadata["alternates"]> => {
    const languages = Object.fromEntries(
        routing.locales.map((item) => [item, getLocalizedPath(item, pathname)])
    );

    return {
        canonical: getLocalizedPath(locale, pathname),
        languages: {
            ...languages,
            "x-default": getLocalizedPath(routing.defaultLocale, pathname),
        },
    };
};

interface GetSiteMetadataOptions {
    pathname?: string;
    metadataBase?: URL;
}

/**
 * Resolves the metadata base URL from the incoming request when available.
 *
 * @param headersList - Incoming request headers.
 * @returns Absolute metadata base URL.
 */
export const resolveMetadataBase = (headersList: Headers): URL => {
    const host = headersList.get("host");

    if (host) {
        const protocol =
            headersList.get("x-forwarded-proto") ??
            (process.env.NODE_ENV === "production" ? "https" : "http");

        return new URL(`${protocol}://${host}`);
    }

    return new URL(getBaseUrl());
};

/**
 * Builds locale-aware site metadata for SEO, Open Graph, and Twitter cards.
 *
 * @param locale - Active page locale.
 * @param options - Optional pathname and metadata base overrides.
 * @returns Next.js metadata object for the locale layout.
 */
export const getSiteMetadata = (locale: TLocales, options?: GetSiteMetadataOptions): Metadata => {
    const pathname = options?.pathname ?? ROUTES.HOME;
    const localizedPath = getLocalizedPath(locale, pathname);
    const alternateLocales = routing.locales.filter((item) => item !== locale);
    const { openGraph: openGraphSeo, twitter: twitterSeo } = siteConfig.seo;

    return {
        metadataBase: options?.metadataBase ?? new URL(getBaseUrl()),
        title: {
            default: siteConfig.title,
            template: `%s | ${siteConfig.title}`,
        },
        description: siteConfig.description,
        applicationName: siteConfig.shortTitle,
        keywords: siteConfig.seo.keywords,
        authors: [{ name: siteConfig.title, url: siteConfig.url }],
        creator: siteConfig.title,
        publisher: siteConfig.title,
        category: "business",
        referrer: "origin-when-cross-origin",
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
        alternates: getPageAlternates(locale, pathname),
        openGraph: {
            type: openGraphSeo.type,
            locale: OPEN_GRAPH_LOCALE[locale],
            alternateLocale: alternateLocales.map((item) => OPEN_GRAPH_LOCALE[item]),
            url: localizedPath,
            siteName: siteConfig.title,
            title: siteConfig.title,
            description: siteConfig.description,
            images: [
                {
                    url: openGraphSeo.image,
                    width: openGraphSeo.imageWidth,
                    height: openGraphSeo.imageHeight,
                    alt: openGraphSeo.imageAlt,
                },
            ],
        },
        twitter: {
            card: twitterSeo.card,
            title: siteConfig.title,
            description: siteConfig.description,
            images: [openGraphSeo.image],
        },
        icons: {
            icon: "/web-app-manifest-192x192.png",
            apple: "/apple-icon.png",
        },
    };
};
