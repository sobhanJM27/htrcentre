export const RevealSide = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
} as const;

export type RevealSide = (typeof RevealSide)[keyof typeof RevealSide];
