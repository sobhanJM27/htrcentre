import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { bgButton1, bgButton2, bgButton3 } from "@/constants/styles";

const ButtonStyles = cva(
  "relative overflow-hidden inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 active:scale-95 z-0 cursor-pointer text-nowrap max-sm:text-sm",
  {
    variants: {
      intent: {
        primary: bgButton1,
        outline: bgButton2,
        ghost: bgButton3,
      },
      size: {
        base: "h-10 px-5 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base w-full",
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
