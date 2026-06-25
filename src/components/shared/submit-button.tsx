"use client";

import type { VariantProps } from "class-variance-authority";
import type * as React from "react";

import { Button, type buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface SubmitButtonProps
    extends Omit<React.ComponentProps<typeof Button>, "children" | "type">,
        VariantProps<typeof buttonVariants> {
    isPending?: boolean;
    label: string;
    pendingLabel: string;
}

/**
 * Submit button that shows a spinner and pending label while a request is in flight.
 */
export function SubmitButton({
    className,
    disabled,
    isPending = false,
    label,
    pendingLabel,
    ...props
}: SubmitButtonProps) {
    return (
        <Button className={cn(className)} disabled={disabled || isPending} type="submit" {...props}>
            {isPending ? (
                <>
                    <Spinner />
                    {pendingLabel}
                </>
            ) : (
                label
            )}
        </Button>
    );
}
