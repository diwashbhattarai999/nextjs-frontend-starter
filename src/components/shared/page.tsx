import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const pageVariants = cva("flex min-h-svh flex-col", {
    variants: {
        scroll: {
            auto: "overflow-y-auto",
            hidden: "overflow-hidden",
        },
    },
    defaultVariants: {
        scroll: "auto",
    },
});

const pageContainerVariants = cva("mx-auto flex w-full flex-1 flex-col", {
    variants: {
        width: {
            narrow: "max-w-xl px-6 py-8 md:py-12",
            default: "max-w-3xl px-6 py-8 md:py-12",
            wide: "max-w-5xl px-6 py-8 md:py-12",
            full: "max-container py-4",
        },
    },
    defaultVariants: {
        width: "default",
    },
});

const pageContentVariants = cva("flex flex-1 flex-col", {
    variants: {
        align: {
            start: "",
            center: "items-center justify-center",
        },
        spacing: {
            none: "",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
        },
    },
    defaultVariants: {
        align: "start",
        spacing: "none",
    },
});

const pageTitleVariants = cva("font-semibold tracking-tight", {
    variants: {
        size: {
            xs: "text-lg",
            sm: "text-xl",
            md: "text-2xl",
            default: "text-3xl",
            lg: "text-4xl",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

function Page({
    className,
    scroll,
    ...props
}: React.ComponentProps<"main"> & VariantProps<typeof pageVariants>) {
    return <main className={cn(pageVariants({ scroll }), className)} data-slot="page" {...props} />;
}

function PageContainer({
    className,
    width,
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pageContainerVariants>) {
    return (
        <div
            className={cn(pageContainerVariants({ width }), className)}
            data-slot="page-container"
            {...props}
        />
    );
}

function PageHeader({ className, ...props }: React.ComponentProps<"header">) {
    return (
        <header
            className={cn("flex flex-col gap-4", className)}
            data-slot="page-header"
            {...props}
        />
    );
}

function PageTitle({
    className,
    size = "default",
    ...props
}: React.ComponentProps<"h1"> & VariantProps<typeof pageTitleVariants>) {
    return (
        <h1
            className={cn(pageTitleVariants({ size }), className)}
            data-slot="page-title"
            {...props}
        />
    );
}

function PageDescription({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            className={cn("text-muted-foreground text-sm leading-relaxed", className)}
            data-slot="page-description"
            {...props}
        />
    );
}

function PageActions({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("flex flex-wrap items-center gap-2", className)}
            data-slot="page-actions"
            {...props}
        />
    );
}

function PageContent({
    className,
    align,
    spacing,
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pageContentVariants>) {
    return (
        <div
            className={cn(pageContentVariants({ align, spacing }), className)}
            data-slot="page-content"
            {...props}
        />
    );
}

function PageFooter({ className, ...props }: React.ComponentProps<"footer">) {
    return (
        <footer
            className={cn("mt-auto border-t pt-8", className)}
            data-slot="page-footer"
            {...props}
        />
    );
}

export {
    Page,
    PageActions,
    PageContainer,
    PageContent,
    PageDescription,
    PageFooter,
    PageHeader,
    PageTitle,
};
