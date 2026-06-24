import {
    IconAlertOctagon,
    IconAlertTriangle,
    IconCircleCheck,
    IconCommand,
    IconInfoCircle,
    IconLoader,
    IconPalette,
    type IconProps,
} from "@tabler/icons-react";

export type Icon = React.ComponentType<IconProps>;

export const Icons = {
    palette: IconPalette,
    logo: IconCommand,
    circleCheck: IconCircleCheck,
    infoCircle: IconInfoCircle,
    alertTriangle: IconAlertTriangle,
    alertOctagon: IconAlertOctagon,
    loader: IconLoader,
};
