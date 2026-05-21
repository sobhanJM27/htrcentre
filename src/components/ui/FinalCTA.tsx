import Button from "@/components/ui/Button";
import { shadows, textTitle2 } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/utils/reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-80 md:h-96 w-125 md:w-150 bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <Reveal duration="duration-700" side="bottom-8">
        <div
          className={cn(
            "relative max-w-3xl mx-auto overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 md:p-12 text-center",
            shadows.softCard,
            shadows.hoverPop,
          )}
        >
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="flex flex-col gap-2">
            <h2 className={cn("text-muted-foreground", textTitle2)}>
              Ready to Retrofit?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md text-center">
              Start your calculation now and discover how much energy your
              building could save with the right insulation upgrades.
            </p>
            <Button intent="primary" size="lg">
              <a>Start Free Calculation</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
