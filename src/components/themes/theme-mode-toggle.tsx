"use client";

import { useTheme } from "@wrksz/themes/client";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";

import { Icons } from "../shared/icons";

export function ThemeModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    const handleThemeToggle = useCallback(
        (e?: React.MouseEvent) => {
            const newMode = resolvedTheme === "dark" ? "light" : "dark";
            const root = document.documentElement;

            if (!document.startViewTransition) {
                setTheme(newMode);
                return;
            }

            // Set coordinates from the click event
            if (e) {
                root.style.setProperty("--x", `${e.clientX}px`);
                root.style.setProperty("--y", `${e.clientY}px`);
            }

            document.startViewTransition(() => {
                setTheme(newMode);
            });
        },
        [resolvedTheme, setTheme]
    );

    return (
        <Button
            className="group/toggle"
            onClick={handleThemeToggle}
            size="icon"
            variant="secondary"
        >
            <Icons.brightness />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
