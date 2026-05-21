import { useInView } from "react-intersection-observer";

export type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: string;
  side: string;
};

export const Reveal = ({
  children,
  delay = 0,
  duration,
  side,
}: RevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: duration ?? "1000ms",
      }}
      className={`${inView ? `animate-in fade-in slide-in-from-${side} transition-all duration-300` : "opacity-0"}`}
    >
      {children}
    </div>
  );
};
