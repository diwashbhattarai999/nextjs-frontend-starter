// import { getTranslations } from "next-intl/server";

// import { Icons } from "@/components/shared/icons";
// import { Section } from "@/components/shared/section";
// import { Empty, EmptyHeader, EmptyMedia } from "@/components/ui/empty";

// interface ComingSoonProps {
//     title: string;
//     description?: string;
// }

// /**
//  * Placeholder page shown while a route is under development.
//  *
//  * @param title - Page heading.
//  * @param description - Optional page-specific description.
//  */
// export async function ComingSoon({ title, description }: ComingSoonProps) {
//     const t = await getTranslations("Pages");

//     return (
//         <Section className="h-full" spacing="sm">
//             <Empty className="border border-primary/20 bg-primary/2">
//                 <EmptyHeader className="max-w-4xl gap-4">
//                     <EmptyMedia variant="icon">
//                         <Icons.clock aria-hidden />
//                     </EmptyMedia>
//                     <p className="mb-2 font-medium text-primary text-xs uppercase tracking-[0.18em]">
//                         {t("comingSoon.badge")}
//                     </p>

//                     <h1 className="font-semibold text-3xl tracking-tight">{title}</h1>
//                     <p className="max-w-xl text-muted-foreground text-sm md:text-base">
//                         {description ??
//                             `${title} is currently under development. We will launch this section soon.`}
//                     </p>
//                 </EmptyHeader>
//             </Empty>
//         </Section>
//     );
// }

"use client";

import { cn } from "@/lib/utils";

import { BackgroundGlow } from "./background-glow";

interface ComingSoonProps {
    eyebrowText?: string;
    title?: string;
    description?: string;
    className?: string;
}

export const ComingSoon = ({ eyebrowText, title, description, className }: ComingSoonProps) => {
    return (
        <div
            className={cn(
                "relative flex min-h-[calc(100vh-16rem)] w-full flex-col items-center justify-center gap-14",
                className
            )}
        >
            {/* Animated gradient orb */}
            <BackgroundGlow className="absolute left-1/2 -translate-x-1/2" />

            {/* Main content */}
            <div className="space-y-8 text-center">
                {eyebrowText && (
                    <p className="font-light text-secondary-red-300 text-sm uppercase tracking-[0.3em] md:text-base">
                        {eyebrowText}
                    </p>
                )}

                {/* Coming Soon text */}
                <h1 className="font-light text-5xl text-foreground/90 tracking-[0.5em] md:text-6xl">
                    {title || "COMING SOON"}
                </h1>

                {/* Subtitle */}
                <p className="font-light text-secondary-red-300 text-sm uppercase tracking-[0.3em] md:text-base">
                    {description || "We're cooking up something amazing!"}
                </p>
                <p className="font-light text-secondary-red-400 text-sm uppercase tracking-[0.3em] md:text-base">
                    Stay tuned for updates and get ready to experience it soon!
                </p>
            </div>
        </div>
    );
};
