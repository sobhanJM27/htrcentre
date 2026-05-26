import { border1, border3, shadows } from "@/constants/styles";
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
    <Reveal delay={index * 200} side="left">
      <div className="relative flex items-stretch gap-4 sm:gap-6">
        <div className={cn("relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-secondary shadow-sm sm:h-11 sm:w-11", border3)}>
          {number}
        </div>
        <div
          className={cn(
            "flex flex-col flex-1 rounded-2xl bg-background/80 p-5 sm:p-6",
            shadows.deepCard,
            shadows.hoverSoft,
            border1,
          )}
        >
          <h4 className="text-lg font-semibold sm:text-xl">{title}</h4>
          <p className="flex-1 leading-7">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
};

export default StepItem;
