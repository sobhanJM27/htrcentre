import { whyTrust } from "@/constants/aboutTexts";
import { sectionStyle, textBody1, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const Trust = () => {
  return (
    <section className={cn("flex flex-col", sectionStyle)}>
      <h2 className={textTitle4}>Why Trust HTRC</h2>
      <div className="flex flex-col gap-4 text-muted dark:text-muted-foreground leading-relaxed">
        {whyTrust.map((item) => (
          <p key={item.id} className={cn(textBody1)}>
            {item.text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Trust;
