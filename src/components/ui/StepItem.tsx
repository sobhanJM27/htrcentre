import { shadows } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/utils/reveal";

export type StepItemProps = {
  number: string;
  title: string;
  desc: string;
  index?: number;
};

const StepItem = ({ number, title, desc, index = 0 }: StepItemProps) => {
  return (
    <Reveal delay={index * 300} side="left-6">
      <div className="relative flex items-start gap-4 sm:gap-6">
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary text-sm font-bold text-secondary shadow-sm sm:h-11 sm:w-11">
          {number}
        </div>
        <div className={cn("flex-1 rounded-2xl border border-border bg-background/80 p-5 sm:p-6",shadows.deepCard, shadows.hoverSoft)}>
          <h4 className="text-lg font-semibold sm:text-xl">{title}</h4>
          <p className="leading-7">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
};

export default StepItem;
