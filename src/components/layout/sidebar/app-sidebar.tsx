"use client";

import type * as React from "react";
import { Suspense } from "react";

import { AppLogo } from "@/components/shared/app-logo";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { Link } from "@/i18n/navigation";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { sidebarData } from "./sidebar-data";

function SidebarFooterContent() {
    const profile = {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aneka",
    };

    return (
        <NavUser
            user={{
                name: profile.name,
                email: profile.email,
                avatar: profile.avatar,
            }}
        />
    );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" variant="inset" {...props}>
            {/* ---------------------------------- */}
            {/* Header */}
            {/* ---------------------------------- */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="w-fit gap-2 text-primary hover:bg-transparent data-[slot=sidebar-menu-button]:p-1.5!"
                            render={<Link href={ROUTES.HOME} />}
                            size="lg"
                        >
                            <AppLogo displayWidth={32} />
                            <span className="font-semibold text-xl">{siteConfig.shortTitle}</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* ---------------------------------- */}
            {/* Content */}
            {/* ---------------------------------- */}
            <SidebarContent>
                <NavMain items={sidebarData.navGroups} />
            </SidebarContent>

            {/* ---------------------------------- */}
            {/* Footer */}
            {/* ---------------------------------- */}
            <SidebarFooter>
                <Suspense fallback={<Skeleton className="h-12" />}>
                    <SidebarFooterContent />
                </Suspense>
            </SidebarFooter>
        </Sidebar>
    );
}
