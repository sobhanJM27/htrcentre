import Button from "./Button";
import { experts_suppliars, tags } from "@/constants/tags";
import { Logo } from "./Logo";
import { sectionStyle, textTitle1, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/utils/reveal";
import Calculator from "./icons/Calculator";

const Hero = () => {
  return (
    <Reveal delay={100} side="bottom">
      <section
        className={cn(
          "flex flex-col items-center justify-center text-center",
          sectionStyle,
        )}
      >
        <Logo
          size="8rem"
          src="./logo.png"
          className="animate-gentle-bounce duration-700"
        />
        <h1 className={textTitle1}>
          Home Thermal <br />
          <span className="text-primary">Retrofit Centre</span>
        </h1>
        <h2 className={cn("lg:text-2xl!", textTitle4)}>
          Your All-in-One Platform
        </h2>
        <p>
          Calculate your building's insulation needs and find the best retrofit
          options with HTRC professional tools.
        </p>
        <a>
          <Button intent="outline" size="lg">
            <Calculator className="w-5 h-5" />
            Start Thermal Assessment
          </Button>
        </a>
        <p className="max-w-xl pt-4">
          Beyond a calculator We connect you with certified energy experts and
          verified affiliate suppliers.
        </p>
        <div className="w-full max-w-sm flex gap-3 max-mobile-button:flex-col">
          {experts_suppliars.map((item) => (
            <div key={item.id} className="flex-1 flex flex-col gap-1">
              <a href="#" className="w-full">
                <Button
                  intent="primary"
                  size="lg"
                  className="w-full max-mobile-button:w-2/3"
                >
                  {item.title}
                </Button>
              </a>
              <span className="text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-secondary text-ring rounded-full border border-border px-3 py-1 text-xs font-semibold"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default Hero;
