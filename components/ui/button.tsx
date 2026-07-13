import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants — 02_DESIGN.md "Buttons"
 * - primary: blue background, white text, subtle shadow, smooth hover
 * - secondary: transparent, thin border, border turns blue on hover
 * - text: no border, underline appears on hover
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-sm font-medium font-body transition-all duration-200 ease-out-expo focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:shadow-soft-lg hover:bg-primary/90 active:scale-[0.98]",
        secondary:
          "bg-transparent text-foreground border border-border hover:border-primary active:scale-[0.98]",
        text: "bg-transparent text-foreground underline-offset-4 hover:underline px-0",
        ghost: "bg-transparent hover:bg-surface text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
