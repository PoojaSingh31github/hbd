/**
 * BIRTHDAY BUTTON COMPONENT
 * Custom styled button with celebration variants
 * From: sooraj project, enhanced with additional variants
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const birthdayButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105",
        celebration:
          "bg-gradient-to-r from-gold to-gold-glow text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 pulse-glow font-semibold",
        blush:
          "bg-blush text-foreground hover:bg-blush-deep shadow-md hover:shadow-lg hover:scale-105",
        coral:
          "bg-coral text-primary-foreground shadow-md hover:shadow-lg hover:scale-105",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4",
        lg: "h-14 px-10 text-lg",
        xl: "h-16 px-12 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BirthdayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof birthdayButtonVariants> {
  asChild?: boolean;
}

const BirthdayButton = React.forwardRef<HTMLButtonElement, BirthdayButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(birthdayButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BirthdayButton.displayName = "BirthdayButton";

export { BirthdayButton, birthdayButtonVariants };
