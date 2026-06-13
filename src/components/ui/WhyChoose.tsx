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
import Image from "./Image"; 

const WhyChoose = () => {
  return (
    <section className={cn("flex flex-col items-center", sectionStyle)}>
      <div className="mb-10 max-w-2xl text-center">
        <h2 className={cn("mb-4", textTitle3, bgTextColor2)}>
          Why Choose Our Calculator?
        </h2>
        <p className="text-foreground/80">
          Built with advanced building physics and real-world retrofit data to
          help you make confident energy-saving decisions.
        </p>
      </div>
      <div className="grid w-full items-stretch gap-8 lg:gap-12">
        <Reveal delay={200} side="left">
          <div
            className={cn(
              "rounded-2xl overflow-hidden w-2/3 max-md:w-full mx-auto",
              border1,
              shadows.hoverLift
            )}
          >
            <Image
              src="/Infrographics-Home-vs.-Retrofit-Home-2.1-e1637684078131.png"
              alt="Home vs Retrofit Home Infographic"
              className="h-full w-full"
            />
          </div>
        </Reveal>
        <div className="grid h-full gap-6 sm:grid-cols-2 auto-rows-fr">
          {whyChooseItems.map(({ icon: Icon, title, desc, id }, index) => (
            <Reveal key={id} delay={(index + 1) * 150} side="right">
              <Card
                className={cn(
                  "flex h-full flex-col text-center bg-muted/20 dark:bg-card",
                  shadows.hoverLift,
                  border1
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
                <CardContent className="grow">
                  <p className="text-sm">{desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChoose;
