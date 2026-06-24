import type { MetadataRoute } from "next";

import { ROUTES } from "@/configs/routes";

/**
 * The `manifest` function is used for Progessive Web App (PWA) metadata
 * @returns The metadata object
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Next.js Frontend Template",
        short_name: "NextStarter",
        description: "Next.js 16 Frontend Template with Shadcn UI",
        start_url: ROUTES.HOME,
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
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
                src: "/apple-touch-icon.png",
                sizes: "120x120",
                type: "image/png",
            },
        ],
    };
}
