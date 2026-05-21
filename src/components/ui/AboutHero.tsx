import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import Slogan from "./Slogan";
import { bgTextColor1, sectionStyle, textTitle1 } from "@/constants/styles";

const AboutHero = () => {
  return (
    <section className={cn("flex flex-col-reverse md:flex-row", sectionStyle)}>
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1
          className={cn("text-center md:text-left", textTitle1, bgTextColor1)}
        >
          About HTRC
        </h1>
        <p className="flex flex-col text-center md:text-left md:items-start max-w-2xl">
          HTRC (Home Thermal Retrofit Centre) is a next‑generation digital
          platform designed to help homeowners and landlords better understand
          heat loss in their properties and make confident decisions about
          thermal upgrades. Our platform connects property owners with qualified
          energy assessors, retrofit contractors, and trusted product suppliers,
          creating a reliable pathway from initial assessment to practical
          energy efficiency improvements.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <Logo src="/logo.png" size="5rem" />
        <Slogan className="text-4xl" />
      </div>
    </section>
  );
};

export default AboutHero;
