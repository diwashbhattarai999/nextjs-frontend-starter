import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("flex flex-col", {
    variants: {
        spacing: {
            sm: "gap-4",
            default: "gap-8",
            lg: "gap-12",
        },
    },
    defaultVariants: {
        spacing: "default",
    },
});

const sectionHeaderVariants = cva("flex flex-col gap-2", {
    variants: {
        align: {
            start: "items-start text-center md:text-left",
            center: "items-center text-center",
        },
    },
    defaultVariants: {
        align: "start",
    },
});

function Section({
    className,
    spacing,
    ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
    return (
        <section
            className={cn(sectionVariants({ spacing }), className)}
            data-slot="section"
            {...props}
        />
    );
}

function SectionHeader({
    className,
    align,
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof sectionHeaderVariants>) {
    return (
        <div
            className={cn(sectionHeaderVariants({ align }), className)}
            data-slot="section-header"
            {...props}
        />
    );
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
    return (
        <h2
            className={cn("font-semibold text-2xl tracking-tight", className)}
            data-slot="section-title"
            {...props}
        />
    );
}

function SectionDescription({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            className={cn("text-muted-foreground text-sm leading-relaxed", className)}
            data-slot="section-description"
            {...props}
        />
    );
}

function SectionActions({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("flex flex-wrap items-center gap-2", className)}
            data-slot="section-actions"
            {...props}
        />
    );
}

function SectionContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col", className)} data-slot="section-content" {...props} />
    );
}

export { Section, SectionActions, SectionContent, SectionDescription, SectionHeader, SectionTitle };
