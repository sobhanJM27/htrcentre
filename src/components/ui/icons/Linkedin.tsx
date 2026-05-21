import type { SvgIconType } from "@/types/iconType";

const LinkedIn: SvgIconType = ({ id, ...props }) => {
  return (
    <svg
      id={id}
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M14.75 1.5H5.25A3.75 3.75 0 0 0 1.5 5.25v9.5A3.75 3.75 0 0 0 5.25 18.5h9.5a3.75 3.75 0 0 0 3.75-3.75v-9.5A3.75 3.75 0 0 0 14.75 1.5zM3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25v9.5A2.25 2.25 0 0 1 14.75 17h-9.5A2.25 2.25 0 0 1 3 14.75v-9.5z"
        fill="currentColor"
      />
      <path
        d="M6.11 8.18a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z"
        fill="currentColor"
      />
      <path d="M5.2 9.45h1.82v5.35H5.2V9.45z" fill="currentColor" />
      <path
        d="M8.45 9.45h1.74v.73h.03c.24-.46.83-.94 1.71-.94 1.83 0 2.17 1.2 2.17 2.77v2.79h-1.82v-2.47c0-.59-.01-1.35-.82-1.35-.82 0-.95.64-.95 1.3v2.52H8.45V9.45z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkedIn;
