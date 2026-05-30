import { border1, border3, shadows } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/utils/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

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
        <div
          className={cn(
            "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-secondary shadow-sm sm:h-11 sm:w-11",
            border3,
          )}
        >
          {number}
        </div>
        <Card
          className={cn(
            "flex flex-col flex-1 bg-background/80",
            shadows.deepCard,
            shadows.hoverSoft,
            border1,
          )}
        >
          <CardHeader className="p-5 pb-2 sm:p-6 sm:pb-2">
            <CardTitle className="text-lg sm:text-xl text-foreground">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
            <p className="flex-1 leading-7">{desc}</p>
          </CardContent>
        </Card>
      </div>
    </Reveal>
  );
};

export default StepItem;
