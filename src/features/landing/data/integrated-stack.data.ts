import type {
    MissingSoftwareIconKey,
    SoftwareIconKey,
} from "@/features/landing/data/software-icons";

export interface StackItem {
    label: string;
    icon?: SoftwareIconKey | MissingSoftwareIconKey;
}

export const STACK_CATEGORY_KEYS = [
    "core",
    "ui",
    "data",
    "platform",
    "architecture",
    "dx",
] as const;

export type StackCategoryKey = (typeof STACK_CATEGORY_KEYS)[number];

export const INTEGRATED_STACK: Record<StackCategoryKey, readonly StackItem[]> = {
    core: [
        { label: "Next.js 16", icon: "nextjs" },
        { label: "React 19", icon: "react" },
        { label: "TypeScript 5", icon: "typescript" },
        { label: "React Compiler", icon: "react-compiler" },
    ],
    ui: [
        { label: "Tailwind CSS 4", icon: "tailwind" },
        { label: "shadcn/ui", icon: "shadcn" },
        { label: "Base UI", icon: "base-ui" },
        { label: "Tabler Icons", icon: "tabler-icons" },
        { label: "7 themes", icon: "wrksz-themes" },
    ],
    data: [
        { label: "TanStack Query 5", icon: "react-query" },
        { label: "Zustand", icon: "zustand" },
        { label: "Zod 4", icon: "zod" },
        { label: "React Hook Form", icon: "react-hook-form" },
        { label: "Axios", icon: "axios" },
    ],
    platform: [
        { label: "next-intl", icon: "next-intl" },
        { label: "@wrksz/themes", icon: "wrksz-themes" },
        { label: "nuqs", icon: "nuqs" },
        { label: "Sonner", icon: "sonner" },
        { label: "nextjs-toploader", icon: "nextjs-toploader" },
        { label: "t3-env", icon: "t3-env" },
        { label: "date-fns", icon: "date-fns" },
    ],
    architecture: [
        { label: "Auth feature module" },
        { label: "Dashboard shell" },
        { label: "Legal pages" },
        { label: "Route constants" },
        { label: "5-locale i18n" },
        { label: "Mock auth API" },
    ],
    dx: [
        { label: "Biome", icon: "biome" },
        { label: "Ultracite", icon: "ultracite" },
        { label: "Lefthook", icon: "lefthook" },
        { label: "Commitlint", icon: "commitlint" },
        { label: "GitHub Actions", icon: "github-actions" },
        { label: "pnpm", icon: "pnpm" },
    ],
};
