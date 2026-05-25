// src/components/icons/Calculator.tsx
import type { SvgIconType } from "@/types/iconType";

const Calculator: SvgIconType = ({
  id,
  stroke = "currentColor",
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      id={id}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="2"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <rect
        x="7.5"
        y="5.5"
        width="9"
        height="4"
        rx="0.8"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <circle cx="8.5" cy="12" r="0.75" fill={stroke} />
      <circle cx="12" cy="12" r="0.75" fill={stroke} />
      <circle cx="15.5" cy="12" r="0.75" fill={stroke} />
      <circle cx="8.5" cy="15" r="0.75" fill={stroke} />
      <circle cx="12" cy="15" r="0.75" fill={stroke} />
      <circle cx="15.5" cy="15" r="0.75" fill={stroke} />
      <rect x="8.5" y="17" width="7" height="2" rx="0.6" fill={stroke} />
    </svg>
  );
};

export default Calculator;
