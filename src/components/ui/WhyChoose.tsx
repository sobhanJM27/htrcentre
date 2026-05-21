import { whyChooseItems } from "@/constants/whyChooseItems";
import IconWrapper from "./IconWrapper";
import { Reveal } from "@/utils/reveal";
import { cn } from "@/lib/utils";
import { bgTextColor2, sectionStyle, shadows, textTitle3 } from "@/constants/styles";

const WhyChoose = () => {
  return (
    <section className={cn("flex flex-col items-center", sectionStyle)}>
      <h2 className={cn("text-center", textTitle3, bgTextColor2)}>
        Why Choose Our Calculator?
      </h2>
      <p className="text-center">
        Built with advanced building physics and real-world retrofit data to
        help you make confident energy-saving decisions.
      </p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {whyChooseItems.map(({ icon: Icon, title, desc, id }, index) => (
          <Reveal
            key={id}
            delay={index * 300}
            side="button-6"
          >
            <div
              className={cn(
                "rounded-xl border border-border bg-muted/20 dark:bg-card p-6 text-center h-full",
                shadows.hoverLift,
              )}
            >
              <IconWrapper
                hasHoverEffect={false}
                className="mb-4 inline-flex items-center justify-center rounded-full bg-accent p-3 text-ring cursor-auto"
              >
                <Icon className="h-6 w-6" />
              </IconWrapper>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
