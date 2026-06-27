import type { Icon } from "@/components/shared/icons";
import { Icons } from "@/components/shared/icons";
import { ROUTES } from "@/configs/routes";

export interface SidebarItem {
    icon?: Icon;
    items?: {
        title: string;
        url: string;
    }[];
    title: string;
    url?: string;
}

export interface SidebarGroup {
    items: SidebarItem[];
    title: string;
}

export interface SidebarData {
    navGroups: SidebarGroup[];
}

export const sidebarData: SidebarData = {
    navGroups: [
        {
            title: "General",
            items: [
                {
                    title: "Overview",
                    url: ROUTES.DASHBOARD.HOME,
                    icon: Icons.dashboard,
                },
            ],
        },
        {
            title: "Account",
            items: [
                {
                    title: "Profile",
                    url: ROUTES.DASHBOARD.PROFILE,
                    icon: Icons.user,
                },
                {
                    title: "Billing",
                    url: ROUTES.DASHBOARD.BILLING,
                    icon: Icons.creditCard,
                },
            ],
        },
        {
            title: "Preferences",
            items: [
                {
                    title: "Settings",
                    url: ROUTES.DASHBOARD.SETTINGS,
                    icon: Icons.settings,
                },
            ],
        },
        {
            title: "Shortcuts",
            items: [
                {
                    title: "Back to site",
                    url: ROUTES.HOME,
                    icon: Icons.home,
                },
            ],
        },
    ],
};

export interface SidebarQuickAction {
    icon: Icon;
    title: string;
    url: string;
}

export const sidebarQuickActions: SidebarQuickAction[] = [
    {
        title: "Open profile",
        url: ROUTES.DASHBOARD.PROFILE,
        icon: Icons.user,
    },
    {
        title: "Manage billing",
        url: ROUTES.DASHBOARD.BILLING,
        icon: Icons.creditCard,
    },
    {
        title: "Open settings",
        url: ROUTES.DASHBOARD.SETTINGS,
        icon: Icons.settings,
    },
    {
        title: "Back to site",
        url: ROUTES.HOME,
        icon: Icons.home,
    },
];
