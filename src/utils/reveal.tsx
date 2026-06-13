import { RevealSide } from "@/types/revealTypes";
import { useInView } from "react-intersection-observer";

export type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  side?: RevealSide;
};

export function Reveal({
  children,
  delay = 0,
  duration = 500,
  side = RevealSide.BOTTOM,
}: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const translateDir = {
    bottom: "translateY(20px)",
    top: "translateY(-20px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
  }[side];

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) translateX(0)" : translateDir,
        transition: `all ${duration}ms cubic-bezier(0.17, 0.55, 0.55, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
