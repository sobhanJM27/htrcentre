import { whyChooseItems } from "@/constants/whyChooseItems";
import IconWrapper from "./IconWrapper";
import { Reveal } from "@/utils/reveal";
import { cn } from "@/lib/utils";
import {
  bgTextColor2,
  border1,
  sectionStyle,
  shadows,
  textTitle3,
} from "@/constants/styles";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

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
          <Reveal key={id} delay={index * 200} side="bottom">
            <Card
              className={cn(
                "h-full text-center bg-muted/20 dark:bg-card",
                shadows.hoverLift,
                border1,
              )}
            >
              <CardHeader className="flex flex-col items-center pb-2">
                <IconWrapper
                  hasHoverEffect={false}
                  className="mb-4 inline-flex items-center justify-center rounded-full bg-accent p-3 text-ring cursor-auto"
                >
                  <Icon className="h-6 w-6" />
                </IconWrapper>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{desc}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
