import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    INTEGRATED_STACK,
    STACK_CATEGORY_KEYS,
} from "@/features/landing/data/integrated-stack.data";

import { useLandingTranslations } from "../hooks/use-landing-translations";

export function IntegratedStackSection() {
    const { integrated } = useLandingTranslations();

    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="font-semibold text-2xl tracking-tight">{integrated.title}</h2>
                <p className="text-muted-foreground">{integrated.subtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {STACK_CATEGORY_KEYS.map((category) => (
                    <Card key={category} size="sm">
                        <CardHeader>
                            <CardTitle>{integrated.getCategoryLabel(category)}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-wrap gap-2">
                                {INTEGRATED_STACK[category].map((item) => (
                                    <li key={item}>
                                        <Badge variant="outline">{item}</Badge>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
