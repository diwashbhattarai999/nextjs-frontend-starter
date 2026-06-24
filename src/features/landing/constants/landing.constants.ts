export const ROADMAP_KEYS = ["auth", "testing", "dashboard", "forms", "api", "cicd"] as const;
export type RoadmapKey = (typeof ROADMAP_KEYS)[number];
