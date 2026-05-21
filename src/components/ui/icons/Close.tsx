import type { SvgIconType } from "@/types/iconType";

const Close: SvgIconType = ({
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
      {...props}
    >
      <path
        d="M18 6L6 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 6L18 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Close;
