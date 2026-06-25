import {
    Architects_Daughter,
    DM_Sans,
    Fira_Code,
    Geist,
    Geist_Mono,
    Instrument_Sans,
    Inter,
    Mulish,
    Noto_Sans_Mono,
    Outfit,
    Space_Mono,
} from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const fontInstrument = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-instrument",
});

const fontNotoMono = Noto_Sans_Mono({
    subsets: ["latin"],
    variable: "--font-noto-mono",
});

const fontMullish = Mulish({
    subsets: ["latin"],
    variable: "--font-mullish",
});

const fontInter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const fontArchitectsDaughter = Architects_Daughter({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-architects-daughter",
});

const fontDMSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

const fontFiraCode = Fira_Code({
    subsets: ["latin"],
    variable: "--font-fira-code",
});

const fontOutfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const fontSpaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export const fontVariables = cn(
    fontSans.variable,
    fontMono.variable,
    fontInstrument.variable,
    fontNotoMono.variable,
    fontMullish.variable,
    fontInter.variable,
    fontArchitectsDaughter.variable,
    fontDMSans.variable,
    fontFiraCode.variable,
    fontOutfit.variable,
    fontSpaceMono.variable
);

/**
 * Font stacks for each theme. Keep in sync with `src/styles/themes/*.css`.
 */
export const THEME_FONT_STACKS = {
    bridgebench: {
        sans: "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif",
        mono: "var(--font-mono), Geist Mono, ui-monospace, monospace",
        serif: "Georgia, ui-serif, serif",
    },
    claude: {
        sans: "var(--font-dm-sans), DM Sans, ui-sans-serif, system-ui, sans-serif",
        mono: "var(--font-mono), Geist Mono, ui-monospace, monospace",
        serif: "Georgia, ui-serif, serif",
    },
    mono: {
        sans: "var(--font-mono), Geist Mono, ui-monospace, monospace",
        mono: "var(--font-mono), Geist Mono, ui-monospace, monospace",
        serif: "var(--font-mono), Geist Mono, ui-monospace, monospace",
    },
    notebook: {
        sans: "var(--font-architects-daughter), Architects Daughter, cursive",
        mono: "var(--font-space-mono), Space Mono, ui-monospace, monospace",
        serif: "Georgia, ui-serif, serif",
    },
    paila: {
        sans: "ui-sans-serif, system-ui, sans-serif",
        mono: "ui-monospace, monospace",
        serif: "ui-serif, Georgia, serif",
    },
    supabase: {
        sans: "var(--font-outfit), Outfit, ui-sans-serif, system-ui, sans-serif",
        mono: "var(--font-mono), Geist Mono, ui-monospace, monospace",
        serif: "Georgia, ui-serif, serif",
    },
    vercel: {
        sans: "var(--font-sans), Geist, ui-sans-serif, system-ui, sans-serif",
        mono: "var(--font-mono), Geist Mono, ui-monospace, monospace",
        serif: "Georgia, ui-serif, serif",
    },
} as const;
