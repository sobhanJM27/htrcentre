import { textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

export type AboutTextProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const AboutText = ({ title, children, className }: AboutTextProps) => {
  return (
    <section className={cn("flex flex-col gap-4 flex-1", className)}>
      <h2 className={cn(textTitle4)}>
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-muted dark:text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default AboutText;
