import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full resize-y rounded-input border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none",
        invalid ? "border-error" : "border-border focus:border-primary",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
