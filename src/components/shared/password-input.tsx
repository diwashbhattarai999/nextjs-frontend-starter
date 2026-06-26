"use client";

import type * as React from "react";
import { useState } from "react";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";
import { useCommonTranslations } from "@/hooks/use-common-translations";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

interface PasswordInputProps extends Omit<React.ComponentProps<typeof InputGroupInput>, "type"> {
    inputGroupClassName?: string;
}

/**
 * Password input with a built-in show/hide visibility toggle.
 */
export function PasswordInput({
    className,
    inputGroupClassName,
    autoComplete = "current-password",
    ...props
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const { accessibility } = useCommonTranslations();

    return (
        <InputGroup className={inputGroupClassName}>
            <InputGroupInput
                {...props}
                autoComplete={autoComplete}
                className={cn(className)}
                type={showPassword ? "text" : "password"}
            />
            <InputGroupAddon align="inline-end">
                <InputGroupButton
                    aria-label={
                        showPassword ? accessibility.hidePassword : accessibility.showPassword
                    }
                    onClick={() => setShowPassword((current) => !current)}
                    type="button"
                >
                    {showPassword ? <Icons.eyeOff aria-hidden /> : <Icons.eye aria-hidden />}
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}
