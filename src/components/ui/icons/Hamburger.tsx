import type { SvgIconType } from "@/types/iconType";

const Hamburger: SvgIconType = ({ stroke = "currentColor", ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 18h16M4 12h16M4 6h16"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Hamburger;
