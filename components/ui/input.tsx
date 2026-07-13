import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-input border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none",
        invalid ? "border-error" : "border-border focus:border-primary",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
