"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

import type { Icon } from "@/components/shared/icons";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";

interface NavItem {
    icon?: Icon;
    items?: { title: string; url: string }[];
    title: string;
    url?: string;
}

interface NavGroup {
    items: NavItem[];
    title: string;
}

export function NavMain({ items }: { items: NavGroup[] }) {
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

    const isRouteActive = (url?: string, options?: { exact?: boolean }): boolean => {
        if (!url) {
            return false;
        }

        if (options?.exact) {
            return pathname === url;
        }

        return pathname === url || pathname.startsWith(`${url}/`);
    };

    const toggle = (key: string) => {
        setOpenGroups((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <>
            {items.map((group) => (
                <SidebarGroup key={group.title}>
                    <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group.items.map((item) => {
                                const hasActiveChild =
                                    item.items?.some((sub) => isRouteActive(sub.url)) ?? false;
                                const isItemActive =
                                    isRouteActive(item.url, {
                                        exact: true,
                                    }) || hasActiveChild;
                                const isOpen = openGroups[item.title] || hasActiveChild;
                                let itemButton = (
                                    <SidebarMenuButton
                                        isActive={isItemActive}
                                        size="md"
                                        tooltip={item.title}
                                    >
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                );

                                if (item.items) {
                                    itemButton = (
                                        <SidebarMenuButton
                                            isActive={isItemActive}
                                            onClick={() => toggle(item.title)}
                                            size="md"
                                            tooltip={item.title}
                                        >
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>

                                            <IconChevronDown
                                                className={`ml-auto transition ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </SidebarMenuButton>
                                    );
                                } else if (item.url) {
                                    itemButton = (
                                        <Link href={item.url}>
                                            <SidebarMenuButton
                                                isActive={isItemActive}
                                                size="md"
                                                tooltip={item.title}
                                            >
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    );
                                }

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        {itemButton}

                                        {item.items && isOpen && (
                                            <SidebarMenuSub>
                                                {item.items.map((sub) => (
                                                    <SidebarMenuSubItem key={sub.title}>
                                                        <SidebarMenuSubButton
                                                            isActive={isRouteActive(sub.url)}
                                                            render={<Link href={sub.url} />}
                                                            size="lg"
                                                        >
                                                            <span>{sub.title}</span>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        )}
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </>
    );
}
