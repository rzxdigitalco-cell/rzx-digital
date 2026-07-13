import { Check } from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { Service } from "@/types";

export function ServiceDetailCard({ service }: { service: Service }) {
  return (
    <Card hoverable className="flex h-full flex-col">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-button bg-primary/10 text-primary">
        <DynamicIcon name={service.icon} size={22} />
      </div>

      <CardTitle>{service.title}</CardTitle>

      <CardDescription className="mt-3">
        {service.businessProblem}
      </CardDescription>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{service.solution}</p>

      <div className="mt-5 border-t border-border pt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-secondary">
          What You Get
        </p>
        <ul className="mt-3 space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check size={15} className="mt-0.5 shrink-0 text-secondary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
