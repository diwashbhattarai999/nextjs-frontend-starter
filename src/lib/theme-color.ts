import type { Viewport } from "next";

import { META_THEME_COLORS } from "@/configs/site";

type ResolvedThemeMode = "light" | "dark";

/**
 * Resolves the viewport `theme-color` from a stored theme preference.
 *
 * @param preference - Theme cookie value (`light`, `dark`, or `system`/unset).
 * @returns A single color or media-query pair for system preference.
 */
export const getViewportThemeColor = (
    preference: string | undefined
): NonNullable<Viewport["themeColor"]> => {
    if (preference === "dark") {
        return META_THEME_COLORS.dark;
    }

    if (preference === "light") {
        return META_THEME_COLORS.light;
    }

    return [
        { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
        { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    ];
};

/**
 * Resolves the meta `theme-color` content for a resolved light/dark mode.
 *
 * @param resolvedTheme - Effective theme after system preference is applied.
 * @returns Hex color for the browser UI chrome.
 */
export const getMetaThemeColor = (resolvedTheme: ResolvedThemeMode): string => {
    return resolvedTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light;
};
