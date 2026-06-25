import { Icon } from "@/components/icons/icon";
import {
    MISSING_SOFTWARE_ICONS,
    type MissingSoftwareIconKey,
    SOFTWARE_ICONS,
    type SoftwareIconKey,
} from "@/features/landing/data/software-icons";
import { cn } from "@/lib/utils";

interface StackSoftwareIconProps {
    icon: SoftwareIconKey | MissingSoftwareIconKey;
    className?: string;
}

const missingIconSet = new Set<string>(MISSING_SOFTWARE_ICONS);

/**
 * Renders a software stack icon when the SVG asset is available.
 *
 * @param props - Icon key and optional class name.
 */
export function StackSoftwareIcon({ icon, className }: StackSoftwareIconProps) {
    if (missingIconSet.has(icon)) {
        return null;
    }

    const src = SOFTWARE_ICONS[icon as SoftwareIconKey];

    return (
        <Icon
            alt={icon}
            aria-hidden
            className={cn("size-4 shrink-0", className)}
            height={16}
            src={src}
            width={16}
        />
    );
}

interface StackItemBadgeProps {
    label: string;
    icon?: SoftwareIconKey | MissingSoftwareIconKey;
}

/**
 * Badge for a stack item with an optional software icon.
 *
 * @param props - Display label and optional icon key.
 */
export function StackItemBadge({ label, icon }: StackItemBadgeProps) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-1 font-medium text-foreground text-xs">
            {icon ? <StackSoftwareIcon className="size-4 shrink-0" icon={icon} /> : null}
            {label}
        </span>
    );
}
