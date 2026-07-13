import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds hover elevation + border highlight — used for clickable/interactive cards */
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-card border border-border bg-surface p-6 shadow-soft transition-all duration-300 ease-out-expo",
        hoverable &&
          "group hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-heading text-lg font-semibold text-foreground", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export { Card, CardTitle, CardDescription };
