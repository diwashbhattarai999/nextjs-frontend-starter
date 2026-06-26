export const ROADMAP_KEYS = ["testing", "deployment", "errorHandling"] as const;
export type RoadmapKey = (typeof ROADMAP_KEYS)[number];
