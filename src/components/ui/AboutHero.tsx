import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import Slogan from "./Slogan";
import {
  bgTextColor1,
  sectionStyle,
  textBody1,
  textBody2,
  textTitle1,
} from "@/constants/styles";

const AboutHero = () => {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between",
        sectionStyle,
      )}
    >
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <div className="flex items-center gap-3">
          <Logo src="/logo.png" size="7rem" />
          <Slogan className="text-3xl" />
        </div>
        <h1 className={cn(textTitle1, bgTextColor1)}>About HTRC</h1>
        <p className={cn(textBody2)}>
          HTRC (Home Thermal Retrofit Centre) is a next-generation digital
          platform designed to help homeowners and landlords better understand
          heat loss in their properties and make confident decisions about
          thermal upgrades.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Logo
          src="/home-thermal.png"
          alt="HTRC Hero"
          className="w-full max-w-xl drop-shadow-2xl!"
        />
      </div>
    </section>
  );
};

export default AboutHero;
