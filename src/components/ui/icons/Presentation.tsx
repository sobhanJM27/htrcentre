import type { SvgIconType } from "@/types/iconType";

const Presentation: SvgIconType = ({ id, ...props }) => {
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
      <path
        d="M2 3h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 21l4-5 4 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Presentation;
