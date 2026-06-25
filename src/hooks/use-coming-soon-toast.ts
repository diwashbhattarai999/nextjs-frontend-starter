"use client";

import { useCallback } from "react";

import { usePagesTranslations } from "@/hooks/use-pages-translations";
import { type ComingSoonToastAction, showComingSoonToast } from "@/lib/coming-soon-toast";

export interface ComingSoonToastOptions {
    title?: string;
    description?: string;
    action?: Partial<ComingSoonToastAction>;
    showAction?: boolean;
}

/**
 * Returns a callback that shows a localized coming-soon toast with title, description, and action.
 */
export function useComingSoonToast() {
    const pages = usePagesTranslations();

    return useCallback(
        (options: ComingSoonToastOptions = {}) => {
            const showAction = options.showAction ?? true;

            showComingSoonToast({
                title: options.title ?? pages.comingSoon.title,
                description: options.description ?? pages.comingSoon.defaultDescription,
                action: showAction
                    ? {
                          label: options.action?.label ?? pages.comingSoon.actionLabel,
                          onClick: options.action?.onClick ?? (() => undefined),
                      }
                    : undefined,
            });
        },
        [pages.comingSoon.actionLabel, pages.comingSoon.defaultDescription, pages.comingSoon.title]
    );
}
