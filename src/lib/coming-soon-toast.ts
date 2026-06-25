import { toast } from "sonner";

export interface ComingSoonToastAction {
    label: string;
    onClick: () => void;
}

export interface ComingSoonToastParams {
    title: string;
    description?: string;
    action?: ComingSoonToastAction;
}

/**
 * Displays a coming-soon info toast with an optional action button.
 *
 * @param params - Toast title, description, and optional action.
 */
export function showComingSoonToast({ title, description, action }: ComingSoonToastParams) {
    toast.info(title, {
        description,
        ...(action && {
            action: {
                label: action.label,
                onClick: action.onClick,
            },
        }),
        classNames: {
            toast: "bg-amber-500/10! backdrop-blur-sm! text-amber-500! border-amber-500/20!",
            actionButton: "bg-amber-500! text-white! hover:bg-amber-500/80!",
        },
    });
}
