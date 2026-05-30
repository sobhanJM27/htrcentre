import { whyName } from "@/constants/aboutTexts";
import { Image } from "./Image";
import { textBody1, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const NameDetails = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-4 py-16">
      <div className="flex flex-col gap-4 flex-1">
        <h2 className={textTitle4}>Why the Name HTRC?</h2>
        <div className="flex flex-col gap-4 text-muted dark:text-muted-foreground leading-relaxed">
          {whyName.map((item) => (
            <p key={item.id} className={cn(textBody1)}>
              {item.text}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center flex-1">
        <Image src="/logo.png" size="15rem" />
      </div>
    </section>
  );
};

export default NameDetails;
