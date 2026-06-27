import type { MetadataRoute } from "next";

export interface SiteSeoConfig {
    keywords: string[];
    openGraph: {
        type: "website";
        image: string;
        imageWidth: number;
        imageHeight: number;
        imageAlt: string;
    };
    twitter: {
        card: "summary" | "summary_large_image";
    };
}

export interface SiteConfig {
    title: string;
    shortTitle: string;
    description: string;
    url: string;
    contactEmail: string;
    contactPhone: string;
    seo: SiteSeoConfig;
    pwa: {
        display: MetadataRoute.Manifest["display"];
        icons: MetadataRoute.Manifest["icons"];
    };
    social: {
        twitter: string;
        instagram: string;
        facebook: string;
        youtube: string;
        github: string;
    };
}

export interface ThemeColors {
    light: string;
    dark: string;
}
