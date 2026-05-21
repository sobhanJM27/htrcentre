import { Link } from "react-router-dom";
import Button from "./Button";
import { tags } from "@/constants/tags";
import { Logo } from "./Logo";
import { sectionStyle, textTitle1 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className={cn("flex flex-col items-center justify-center text-center", sectionStyle)}>
      <Logo
        size="10rem"
        src="./logo.png"
        className="fade-in zoom-in-90 animate-gentle-bounce duration-700"
      />
      <h1 className={cn("animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150", textTitle1)}>
        Home Thermal <br />
        <span className="text-primary">Retrofit Calculator</span>
      </h1>
      <p className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
        Calculate your building's insulation needs and find the best retrofit
        options with HTRC professional tools.
      </p>
      <div className="flex gap-2">
        <a>
          <Button intent="primary" size="lg">
            Calculate
          </Button>
        </a>
        <Link to="/companies">
          <Button intent="outline" size="lg">
            Companies
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
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
  );
};

export default Hero;
