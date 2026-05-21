import type { SvgIconType } from "@/types/iconType";

const Sun: SvgIconType = ({
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
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <path
        d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Sun;
