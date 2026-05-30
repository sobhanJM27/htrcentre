import React from "react";
import { cn } from "@/lib/utils";

export type ImageProps = {
  src: string;
  size?: string;
  alt?: string;
  className?: string;
};

export const Image: React.FC<ImageProps> = ({
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
