export const ROADMAP_KEYS = [
    "testing",
    "authCompletion",
    "backendIntegration",
    "deployment",
] as const;
export type RoadmapKey = (typeof ROADMAP_KEYS)[number];
