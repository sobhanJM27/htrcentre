import Button from "@/components/ui/Button";
import { shadows, textBody3, textTitle2 } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/utils/reveal";

const FinalCTA = () => {
  return (
    <section className="relative py-16 px-4 flex justify-center items-center min-h-125">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-175 h-112.5 bg-primary/20 rounded-full z-0" />

      <Reveal delay={200} side="bottom">
        <div
          className={cn(
            "relative z-10 w-full max-w-2xl mx-auto overflow-hidden rounded-4xl border border-border/50 bg-card/70 backdrop-blur-md p-10 md:p-14 text-center",
            shadows.baseCard,
            shadows.hoverSoft,
          )}
        >
          <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-primary/20 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4">
              <h2 className={textTitle2}>Ready to Retrofit?</h2>
              <p className={cn("text-muted-foreground", textBody3)}>
                Start your calculation now and discover how much energy your
                building could save with the right insulation upgrades.
              </p>
            </div>
            <Button size="fit" intent="primary" className="sm:px-6 py-3">
              Start Free Calculation
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default FinalCTA;
