import { cn } from "@/lib/utils";
import { type HtmlHTMLAttributes, memo } from "react";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  hasHoverEffect?: boolean;
};

const IconWrapper = ({ className, hasHoverEffect = true, ...props }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-secondary text-muted-foreground cursor-pointer max-w-fit border border-border transition-all duration-300",
        hasHoverEffect && "hover:bg-primary hover:text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
};

export default memo(IconWrapper);
