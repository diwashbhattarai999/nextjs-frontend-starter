export const ROADMAP_KEYS = ["testing", "forms", "api", "deployment"] as const;
export type RoadmapKey = (typeof ROADMAP_KEYS)[number];
