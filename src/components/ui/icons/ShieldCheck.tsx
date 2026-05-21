import type { SvgIconType } from "@/types/iconType";

const ShieldCheck: SvgIconType = ({ id, ...props }) => {
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
        d="M12.34 2.28a1.17 1.17 0 00-1.52 0C9.08 3.8 6.59 5 4.59 5a1 1 0 00-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 00.67.01C16.09 20.5 19.59 18 19.59 13V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.25-2.72z"
        fill="currentColor"
      />
      <path
        d="M10.5 14.2l-2.2-2.2a1 1 0 10-1.41 1.41l2.9 2.9a1 1 0 001.42 0l5-5a1 1 0 10-1.42-1.41l-4.29 4.3z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ShieldCheck;
