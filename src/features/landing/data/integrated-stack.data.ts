export const INTEGRATED_STACK = {
    core: ["Next.js 16", "React 19", "TypeScript 5", "React Compiler"],
    ui: ["Tailwind CSS 4", "shadcn/ui", "Base UI", "Tabler Icons"],
    data: ["TanStack Query 5", "Zustand", "Zod 4", "React Hook Form", "Axios"],
    platform: ["next-intl", "next-themes", "nuqs", "Sonner", "nextjs-toploader", "t3-env"],
    dx: ["Biome", "Ultracite", "Lefthook", "Commitlint", "GitHub Actions", "pnpm"],
} as const;

export type StackCategoryKey = keyof typeof INTEGRATED_STACK;

export const STACK_CATEGORY_KEYS = Object.keys(INTEGRATED_STACK) as StackCategoryKey[];
