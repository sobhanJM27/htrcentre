import type { SvgIconType } from "@/types/iconType";

const Mail: SvgIconType = ({ id, ...props }) => {
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
        d="M22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Mail;
