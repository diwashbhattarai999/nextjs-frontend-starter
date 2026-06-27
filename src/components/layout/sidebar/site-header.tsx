"use client";

import { useTheme } from "@wrksz/themes/client";
import { useEffect, useMemo, useState } from "react";

import { type Icon, Icons } from "@/components/shared/icons";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { ThemeModeToggle } from "@/components/themes/theme-mode-toggle";
import { ThemeSelector } from "@/components/themes/theme-selector";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ROUTES } from "@/configs/routes";
import { usePathname, useRouter } from "@/i18n/navigation";

import { sidebarData, sidebarQuickActions } from "./sidebar-data";

const getPageTitle = (pathname: string): string => {
    if (pathname === ROUTES.DASHBOARD.HOME) {
        return "Overview";
    }

    const normalizedPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

    const allItems = sidebarData.navGroups.flatMap((group) => group.items);
    const matched = allItems.find((item) => item.url === normalizedPath);

    if (matched?.title) {
        return matched.title;
    }

    const lastSegment = normalizedPath.split("/").at(-1) ?? "Dashboard";

    return lastSegment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export function SiteHeader() {
    const [isCommandOpen, setIsCommandOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const { setTheme, theme } = useTheme();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsCommandOpen((prev) => !prev);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const pageTitle = useMemo(() => getPageTitle(pathname), [pathname]);

    const navigationItems = useMemo(() => {
        return sidebarData.navGroups.flatMap((group) =>
            group.items
                .filter(
                    (
                        item
                    ): item is {
                        title: string;
                        url: string;
                        icon?: Icon;
                    } => Boolean(item.url)
                )
                .map((item) => ({
                    ...item,
                    group: group.title,
                }))
        );
    }, []);

    const onNavigate = (url: string) => {
        router.push(url);
        setIsCommandOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 flex h-(--header-height) shrink-0 items-center gap-2 rounded-t-xl bg-background/95 backdrop-blur-sm transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
                <div className="max-container flex w-full items-center gap-2 lg:gap-3">
                    <SidebarTrigger className="-ml-1 shrink-0" />

                    <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-base">{pageTitle}</p>
                    </div>

                    <Button
                        className="hidden w-full max-w-xs justify-start text-muted-foreground sm:max-w-sm md:inline-flex lg:max-w-md xl:max-w-72"
                        onClick={() => setIsCommandOpen(true)}
                        variant="outline"
                    >
                        <Icons.search />
                        <span className="max-lg:hidden">Search...</span>
                        <CommandShortcut className="max-lg:hidden">Ctrl+K</CommandShortcut>
                    </Button>

                    <Button
                        className="md:hidden"
                        onClick={() => setIsCommandOpen(true)}
                        size="icon-lg"
                        variant="outline"
                    >
                        <Icons.search />
                    </Button>

                    <div className="flex shrink-0 items-center gap-2">
                        <ThemeSelector />
                        <LocaleSwitcher />
                        <ThemeModeToggle />
                    </div>
                </div>
            </header>

            <CommandDialog
                className="sm:max-w-2xl"
                onOpenChange={setIsCommandOpen}
                open={isCommandOpen}
                title="Search Dashboard"
            >
                <Command>
                    <CommandInput placeholder="Search dashboard pages and actions..." />
                    <CommandList className="mt-2 max-h-96">
                        <CommandEmpty>No results found.</CommandEmpty>

                        <CommandGroup heading="Quick Actions">
                            {sidebarQuickActions.map((action) => {
                                const ActionIcon = action.icon;

                                return (
                                    <CommandItem
                                        key={action.url}
                                        onSelect={() => onNavigate(action.url)}
                                    >
                                        <ActionIcon />
                                        {action.title}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>

                        <CommandSeparator />

                        <CommandGroup heading="Navigation">
                            {navigationItems.map((item) => {
                                const ItemIcon = item.icon;

                                return (
                                    <CommandItem
                                        key={`${item.group}-${item.url}`}
                                        onSelect={() => onNavigate(item.url)}
                                    >
                                        {ItemIcon && <ItemIcon />}
                                        {item.title}
                                        <CommandShortcut>{item.group}</CommandShortcut>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>

                        <CommandSeparator />

                        <CommandGroup heading="Themes">
                            <CommandItem
                                aria-selected={theme === "light"}
                                isActive={theme === "light"}
                                onSelect={() => setTheme("light")}
                            >
                                <Icons.sun />
                                Light
                            </CommandItem>
                            <CommandItem
                                aria-selected={theme === "dark"}
                                isActive={theme === "dark"}
                                onSelect={() => setTheme("dark")}
                            >
                                <Icons.moon />
                                Dark
                            </CommandItem>
                            <CommandItem
                                aria-selected={theme === "system"}
                                isActive={theme === "system"}
                                onSelect={() => setTheme("system")}
                            >
                                <Icons.laptop />
                                System
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    );
}
