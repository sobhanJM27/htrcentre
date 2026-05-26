import { sectionStyle, textBody1, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const Founder = () => {
  return (
    <section className={cn("flex flex-col", sectionStyle)}>
      <h2 className={textTitle4}>Founder</h2>
      <p className={cn(textBody1)}>
        HTRC was founded by Babak Sadeghi Tabatabai, with the vision of creating
        a practical digital platform that bridges the gap between technical
        energy analysis and real‑world retrofit solutions. The project combines
        engineering insight, digital technology, and marketplace integration to
        support smarter, more confident energy improvement decisions.
      </p>
    </section>
  );
};

export default Founder;
