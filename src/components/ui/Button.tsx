import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const ButtonStyles = cva(
  "relative overflow-hidden inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 active:scale-95 z-0 cursor-pointer",
  {
    variants: {
      intent: {
        primary: `
          bg-gradient-to-r
          from-primary
          to-ring/60 text-primary-foreground
          before:absolute! before:inset-0! before:z-[-1]!
          before:bg-secondary/30! before:translate-y-full!
          hover:before:translate-y-0! before:transition-transform before:duration-300
        `,
        outline: `
          border border-border bg-transparent text-foreground
          before:absolute! before:inset-0! before:z-[-1]!
          before:bg-accent! before:translate-y-full!
          hover:before:translate-y-0! hover:text-accent-foreground before:transition-transform before:duration-300
        `,
        ghost: `
          bg-transparent text-foreground
          before:absolute before:inset-0 before:z-[-1]
          before:bg-muted before:translate-y-full
          hover:before:translate-y-0 before:transition-transform before:duration-300
        `,
      },
      size: {
        base: "h-10 px-5 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        fit: "px-4 py-2 w-fit",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "base",
    },
  },
);

interface ButtonProps
  extends
    VariantProps<typeof ButtonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
}

const Button = ({
  intent,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonStyles({ intent, size }), className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
    </button>
  );
};

export default Button;
