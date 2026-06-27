"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 500;
const LOGO_HEIGHT = 500;

export interface AppLogoProps extends Omit<useRender.ComponentProps<"div">, "children"> {
    href?: string;
    className?: string;
    imageClassName?: string;
    preload?: boolean;
    /** Rendered width in px; height follows the logo aspect ratio. */
    displayWidth?: number;
}

export function AppLogo({
    href,
    className,
    imageClassName,
    preload = false,
    displayWidth = 120,
    render,
    ...props
}: AppLogoProps) {
    const imageStyle = { width: displayWidth, height: "auto" } as const;

    return useRender({
        defaultTagName: "div",
        render: render ?? (href ? <Link href={href} /> : undefined),
        props: mergeProps<"div">(
            {
                className: cn("inline-flex shrink-0 items-center", className),
                children: (
                    <>
                        <Image
                            alt="CoachHQ"
                            className={cn("h-auto w-auto dark:hidden", imageClassName)}
                            height={LOGO_HEIGHT}
                            loading="eager"
                            preload={preload}
                            src="/logo.svg"
                            style={imageStyle}
                            width={LOGO_WIDTH}
                        />
                        <Image
                            alt="CoachHQ"
                            className={cn("hidden h-auto w-auto dark:block", imageClassName)}
                            height={LOGO_HEIGHT}
                            loading="eager"
                            preload={preload}
                            src="/logo.svg"
                            style={imageStyle}
                            width={LOGO_WIDTH}
                        />
                    </>
                ),
            },
            props
        ),
        state: {
            slot: "app-logo",
        },
    });
}
