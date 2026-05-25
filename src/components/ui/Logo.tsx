import React from "react";
import { cn } from "@/lib/utils";

export type LogoProps = {
  src: string;
  size?: string;
  alt?: string;
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  src,
  size,
  alt = "Logo",
  className,
}) => {
  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} className="object-contain" />
    </div>
  );
};
