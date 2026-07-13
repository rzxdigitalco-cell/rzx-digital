import { DynamicIcon } from "@/components/shared/dynamic-icon";
import type { AgencyCategory } from "@/types";

const categoryGradients: Record<AgencyCategory, string> = {
  Healthcare: "from-cyan-500/30 via-secondary/20 to-background",
  Hospitality: "from-accent/30 via-purple-500/20 to-background",
  Ecommerce: "from-primary/30 via-secondary/20 to-background",
  Business: "from-indigo-500/30 via-primary/20 to-background",
  Corporate: "from-slate-400/20 via-primary/20 to-background",
  Restaurants: "from-amber-500/30 via-orange-500/20 to-background",
};

const categoryIcons: Record<AgencyCategory, string> = {
  Healthcare: "HeartPulse",
  Hospitality: "Palmtree",
  Ecommerce: "ShoppingBag",
  Business: "Briefcase",
  Corporate: "Building2",
  Restaurants: "UtensilsCrossed",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

interface ProjectVisualProps {
  name: string;
  agencyCategory: AgencyCategory;
  className?: string;
  chrome?: boolean;
}

/**
 * Stylized placeholder used in place of real project screenshots —
 * a gradient identity card with the project's initials and category
 * icon. Swap in real screenshots later by rendering <Image> against
 * project.coverImage.src instead.
 */
export function ProjectVisual({ name, agencyCategory, className, chrome = true }: ProjectVisualProps) {
  return (
    <div className={`relative flex h-full w-full flex-col overflow-hidden rounded-image bg-surface ${className ?? ""}`}>
      {chrome ? (
        <div className="flex items-center gap-1.5 border-b border-border bg-background/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
      ) : null}
      <div className={`relative flex flex-1 items-center justify-center bg-gradient-to-br ${categoryGradients[agencyCategory]}`}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <span className="font-heading text-4xl font-bold tracking-tight text-foreground/90 sm:text-5xl">
            {initials(name)}
          </span>
          <span className="flex items-center gap-1.5 rounded-badge border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <DynamicIcon name={categoryIcons[agencyCategory]} size={13} />
            {agencyCategory}
          </span>
        </div>
      </div>
    </div>
  );
}
