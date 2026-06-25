import axiosIcon from "@/assets/icons/software/axios.svg";
import baseUiIcon from "@/assets/icons/software/base-ui.svg";
import biomeIcon from "@/assets/icons/software/biome.svg";
import commitlintIcon from "@/assets/icons/software/commitlint.svg";
import dateFnsIcon from "@/assets/icons/software/date-fns.svg";
import githubActionsIcon from "@/assets/icons/software/github-actions.svg";
import lefthookIcon from "@/assets/icons/software/lefthook.svg";
import nextIntlIcon from "@/assets/icons/software/next-intl.svg";
import nextjsIcon from "@/assets/icons/software/nextjs.svg";
import nextjsToploaderIcon from "@/assets/icons/software/nextjs-toploader.png";
import nuqsIcon from "@/assets/icons/software/nuqs.svg";
import pnpmIcon from "@/assets/icons/software/pnpm.svg";
import reactIcon from "@/assets/icons/software/react.svg";
import reactHookFormIcon from "@/assets/icons/software/react-hook-form.svg";
import reactQueryIcon from "@/assets/icons/software/react-query.svg";
import shadcnIcon from "@/assets/icons/software/shadcn.svg";
import t3EnvIcon from "@/assets/icons/software/t3-env.svg";
import tablerIconsIcon from "@/assets/icons/software/tabler-icons.svg";
import tailwindIcon from "@/assets/icons/software/tailwind.svg";
import typescriptIcon from "@/assets/icons/software/typescript.svg";
import ultraciteIcon from "@/assets/icons/software/ultracite.svg";
import wrkszThemesIcon from "@/assets/icons/software/wrksz-themes.svg";
import zodIcon from "@/assets/icons/software/zod.svg";
import zustandIcon from "@/assets/icons/software/zustand.svg";

export const SOFTWARE_ICONS = {
    axios: axiosIcon,
    "base-ui": baseUiIcon,
    biome: biomeIcon,
    commitlint: commitlintIcon,
    "date-fns": dateFnsIcon,
    lefthook: lefthookIcon,
    nextjs: nextjsIcon,
    nuqs: nuqsIcon,
    react: reactIcon,
    "react-hook-form": reactHookFormIcon,
    "react-query": reactQueryIcon,
    shadcn: shadcnIcon,
    tailwind: tailwindIcon,
    typescript: typescriptIcon,
    zod: zodIcon,
    pnpm: pnpmIcon,
    "github-actions": githubActionsIcon,
    "react-compiler": reactIcon,
    "tabler-icons": tablerIconsIcon,
    zustand: zustandIcon,
    "next-intl": nextIntlIcon,
    "t3-env": t3EnvIcon,
    ultracite: ultraciteIcon,
    "nextjs-toploader": nextjsToploaderIcon,
    "wrksz-themes": wrkszThemesIcon,
} as const;

export type SoftwareIconKey = keyof typeof SOFTWARE_ICONS;

/**
 * Software icon filenames that are referenced in the stack but not yet in `src/assets/icons/software/`.
 * Add SVG files with these exact names to enable their icons on the landing page.
 */
export const MISSING_SOFTWARE_ICONS = ["sonner"] as const;

export type MissingSoftwareIconKey = (typeof MISSING_SOFTWARE_ICONS)[number];
