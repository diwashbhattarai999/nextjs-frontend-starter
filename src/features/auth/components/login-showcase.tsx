import { IconArrowRight, IconCube3dSphere } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/configs/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export async function LoginShowcase() {
    const t = await getTranslations("Auth");

    return (
        <aside className="relative hidden overflow-hidden border-l bg-muted/30 lg:flex lg:flex-col lg:justify-between">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)_0%,transparent_55%)] opacity-20"
            />

            <div className="relative flex flex-1 flex-col items-center justify-center gap-8 p-12 text-center">
                <div className="relative flex size-40 items-center justify-center">
                    <div
                        aria-hidden
                        className="absolute inset-0 rounded-full border border-primary/30"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-4 rounded-full border border-primary/40 border-dashed"
                    />
                    <IconCube3dSphere aria-hidden className="size-16 text-primary" stroke={1.25} />
                </div>

                <div className="flex max-w-md flex-col gap-4">
                    <h2 className="text-balance font-semibold text-3xl tracking-tight">
                        {t("showcase.headline")}
                    </h2>
                    <p className="text-balance text-lg text-muted-foreground leading-relaxed">
                        {t("showcase.description")}
                    </p>
                </div>

                <Link
                    className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}
                    href={ROUTES.HOME}
                >
                    {t("showcase.cta")}
                    <IconArrowRight aria-hidden />
                </Link>
            </div>
        </aside>
    );
}
