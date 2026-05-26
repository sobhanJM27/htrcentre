import { workFlowSteps } from "@/constants/workFlowSteps";
import StepItem from "./StepItem";
import { textTitle2 } from "@/constants/styles";
import { cn } from "@/lib/utils";

export default function WorkFlow() {
  return (
    <section className="bg-muted/20 px-4 py-16 rounded-xl">
      <div className="flex flex-col gap-5 mx-auto max-w-4xl">
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className={cn(textTitle2)}>How It Works</h2>
          <p>
            A simple step-by-step process to analyze your building and get
            practical retrofit recommendations.
          </p>
        </div>
        <div className="relative flex flex-col gap-8">
          <div className="absolute left-5 top-0 h-full w-px bg-border block" />
          {workFlowSteps.map((step, index) => (
            <StepItem key={step.id} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
