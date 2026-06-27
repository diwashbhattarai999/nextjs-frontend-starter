import type { MetadataRoute } from "next";

import { env } from "@/env/client";
import type { SiteConfig, ThemeColors } from "@/types/site";

/**
 * The icons for the Progressive Web App (PWA) manifest.
 * @returns The icons for the PWA manifest.
 */
const PWA_MANIFEST_ICONS: MetadataRoute.Manifest["icons"] = [
    {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
    },
    {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
    },
    {
        src: "/apple-icon.png",
        sizes: "120x120",
        type: "image/png",
    },
];

/**
 * The site configuration.
 * @returns The site configuration.
 */
export const siteConfig: SiteConfig = {
    title: "Next.js 16 Frontend Template with Shadcn UI",
    shortTitle: "NextStarter",
    description:
        "A modern frontend template built with Next.js 16 and Shadcn UI, designed for developers looking to kickstart their projects with a solid foundation.",
    url: env.NEXT_PUBLIC_APP_URL,
    contactEmail: "legal@example.com",
    contactPhone: "+1 (555) 010-0000",
    seo: {
        keywords: [
            "nextjs",
            "frontend",
            "template",
            "react",
            "typescript",
            "biome",
            "ultracite",
            "lefthook",
        ],
        openGraph: {
            type: "website",
            image: "/web-app-manifest-512x512.png",
            imageWidth: 512,
            imageHeight: 512,
            imageAlt:
                "Next.js 16 Frontend Template with Shadcn UI — a modern frontend template built with Next.js 16 and Shadcn UI, designed for developers looking to kickstart their projects with a solid foundation.",
        },
        twitter: {
            card: "summary_large_image",
        },
    },
    pwa: {
        display: "standalone",
        icons: PWA_MANIFEST_ICONS,
    },
    social: {
        twitter: "https://twitter.com/diwashbhattarai999",
        instagram: "https://www.instagram.com/diwashbhattarai999/",
        facebook: "https://facebook.com/diwashbhattarai999",
        youtube: "https://youtube.com/diwashbhattarai999",
        github: "https://github.com/diwashbhattarai999/nextjs-frontend-starter",
    },
};

/**
 * The theme colors for the site.
 * @returns The theme colors for the site.
 */
export const META_THEME_COLORS: ThemeColors = {
    light: "#ffffff",
    dark: "#09090b",
} as const;
