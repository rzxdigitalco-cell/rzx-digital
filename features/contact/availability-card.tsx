import { Clock, Zap } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";

export function AvailabilityCard() {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
        <CardTitle>
          Currently Available
        </CardTitle>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        We&apos;re taking on new projects. Reach out and we&apos;ll follow up
        to discuss scope and timeline.
      </p>

      <ul className="mt-5 space-y-3 border-t border-border pt-5">
        <li className="flex items-start gap-3">
          <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Response Time</p>
            <p className="text-sm text-foreground">Within 1–2 business days</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Zap size={18} className="mt-0.5 shrink-0 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Typical Project Timeline</p>
            <p className="text-sm text-foreground">2–6 weeks, depending on scope</p>
          </div>
        </li>
      </ul>
    </Card>
  );
}
