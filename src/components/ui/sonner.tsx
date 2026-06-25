"use client";

import { useTheme } from "@wrksz/themes/client";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { Icons } from "../shared/icons";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            className="toaster group"
            icons={{
                success: <Icons.circleCheck className="size-4" />,
                info: <Icons.infoCircle className="size-4" />,
                warning: <Icons.alertTriangle className="size-4" />,
                error: <Icons.alertOctagon className="size-4" />,
                loading: <Icons.loader className="size-4 animate-spin" />,
            }}
            position="top-center"
            // richColors
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                    "--border-radius": "var(--radius)",
                } as React.CSSProperties
            }
            theme={theme as ToasterProps["theme"]}
            toastOptions={{
                classNames: {
                    toast: "cn-toast",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
