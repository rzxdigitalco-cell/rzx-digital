import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-badge border px-3 py-1 text-xs font-medium font-body transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-secondary-foreground text-muted-foreground",
        outline: "border-border bg-transparent text-foreground",
        primary: "border-primary/30 bg-primary/10 text-primary",
        professional: "border-secondary/30 bg-secondary/10 text-secondary",
        engineering: "border-accent/30 bg-accent/10 text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
