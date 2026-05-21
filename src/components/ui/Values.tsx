import { values } from "@/constants/aboutTexts";
import { sectionStyle, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const Values = () => {
  return (
    <section className={cn("flex flex-col", sectionStyle)}>
      <h2 className={textTitle4}>
        Our Values
      </h2>
      <p>
        HTRC is built around several core principles:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value) => (
          <div
            key={value.id}
            className="group relative border border-white/10 bg-white/5 p-6 rounded-2xl hover:border-primary/50 transition-all duration-500"
          >
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            <div className="relative bg-background p-4 rounded-xl">
              <p className="text-foreground font-medium">{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
