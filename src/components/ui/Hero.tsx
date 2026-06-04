import Button from "./Button";
import { experts_suppliars, tags } from "@/constants/tags";
import { Image } from "./Image";
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
        <Image
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
          Beyond a calculator We connect you with certified energy experts and
          verified affiliate suppliers.
        </p>
        <a>
          <Button intent="primary" size="lg" className="font-bold">
            <Calculator className="w-5 h-5" />
            Start Thermal Assessment
          </Button>
        </a>
        <p className="max-w-xl pt-4">
          Calculate your building's insulation needs and find the best retrofit
          options with HTRC professional tools.
        </p>
        <div className="flex max-mobile-button:flex-col justify-center gap-4">
          {experts_suppliars.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 items-center">
              <a>
                <Button intent="primary" size="lg" className="font-bold">
                  {item.title}
                </Button>
              </a>
              <span className="text-xs md:text-sm text-center max-w-40">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-secondary text-ring rounded-full border border-borderz px-3 py-1 text-xs font-semibold"
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
