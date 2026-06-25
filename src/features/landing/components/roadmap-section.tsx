import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROADMAP_KEYS } from "@/features/landing/constants/landing.constants";

import { useLandingTranslations } from "../hooks/use-landing-translations";

export function RoadmapSection() {
    const { roadmap } = useLandingTranslations();
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="font-semibold text-2xl tracking-tight">{roadmap.title}</h2>
                <p className="text-muted-foreground">{roadmap.subtitle}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ROADMAP_KEYS.map((key) => (
                    <Card className="border-dashed bg-muted/30" key={key} size="sm">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-3">
                                <CardTitle>{roadmap.getItemTitle(key)}</CardTitle>
                                <Badge variant="warning">{roadmap.soonLabel}</Badge>
                            </div>
                            <CardDescription>{roadmap.getItemDescription(key)}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}
