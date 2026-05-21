import { cn } from "@/lib/utils";

export type SloganType = {
  className?: string;
};

const Slogan = ({ className }: SloganType) => {
  return (
    <div className={cn("flex flex-col text-primary leading-tight!", className)}>
      <span className="font-allura">Retrofit with Confidence</span>
      <span className="font-allura">Certainty in Energy Saving</span>
    </div>
  );
};

export default Slogan;
