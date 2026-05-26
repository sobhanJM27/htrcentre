import { values } from "@/constants/aboutTexts";
import { bgGradient1, border2, sectionStyle, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const Values = () => {
  return (
    <section className={cn("flex flex-col", sectionStyle)}>
      <h2 className={textTitle4}>Our Values</h2>
      <p>HTRC is built around several core principles:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value) => (
          <div
            key={value.id}
            className={cn("group relative bg-white/5 p-6 rounded-2xl", border2)}
          >
            <div
              className={cn(
                "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100",
                bgGradient1,
              )}
            />
            <div className="relative flex h-full bg-background p-4 rounded-xl">
              <p className="text-foreground font-medium">{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
