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

const pageContainerVariants = cva("mx-auto flex w-full flex-1 flex-col px-6 py-8 md:py-12", {
    variants: {
        width: {
            narrow: "max-w-xl",
            default: "max-w-3xl",
            wide: "max-w-5xl",
            full: "max-w-6xl",
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
    },
    defaultVariants: {
        align: "start",
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

function PageTitle({ className, ...props }: React.ComponentProps<"h1">) {
    return (
        <h1
            className={cn("font-semibold text-3xl tracking-tight", className)}
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
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pageContentVariants>) {
    return (
        <div
            className={cn(pageContentVariants({ align }), className)}
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
