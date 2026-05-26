export const shadows = {
  baseCard: "shadow-[0_10px_25px_-10px_oklch(var(--primary)/0.14)]!",
  deepCard: "shadow-[0_22px_45px_-12px_oklch(var(--primary)/0.22)]!",
  softCard: "shadow-[0_14px_30px_-12px_oklch(var(--primary)/0.16)]!",
  glow: "shadow-[0_0_30px_0_oklch(var(--primary)/0.22)]!",
  modal: "shadow-[0_30px_80px_-20px_oklch(var(--primary)/0.28)]!",
  navbar: "shadow-[0_3px_5px_oklch(0.4_0_0_/_0.22)]!",

  title: "[text-shadow:5px_3px_10px_oklch(var(--primary)/0.32)]!",
  text: "[text-shadow:0_1px_4px_oklch(var(--primary)/0.44)]!",

  hoverLift:
    "hover:shadow-[0_20px_50px_-14px_oklch(var(--primary)/0.25)]! hover:-translate-y-1! transition-all duration-300",
  hoverSoft:
    "hover:shadow-[0_16px_36px_-12px_oklch(var(--primary)/0.5)]! hover:-translate-y-0.5! transition-all duration-300",
  hoverGlow:
    "hover:shadow-[0_0_36px_0_oklch(var(--primary)/0.28)]! transition-shadow duration-300",
  hoverPop:
    "hover:shadow-[0_28px_70px_-18px_oklch(var(--primary)/0.26)]! hover:-translate-y-1! transition-all duration-300",
} as const;

export const textTitle1 =
  "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight";
export const textTitle2 =
  "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight";
export const textTitle3 =
  "text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug";
export const textTitle4 =
  "text-xl sm:text-2xl lg:text-3xl font-semibold leading-normal";
export const textBody1 = "text-base leading-8 text-justify hyphens-auto";
export const textBody2 =
  "text-lg leading-8 lg:text-left text-center lg:text-justify hyphens-auto";

export const mainStyle = "flex flex-col items-center gap-5 p-8";
export const sectionStyle = "gap-4 py-16 px-4";

export const bgTextColor1 =
  "bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text";
export const bgTextColor2 =
  "bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text";
