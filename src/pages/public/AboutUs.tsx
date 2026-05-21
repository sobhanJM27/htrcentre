import AboutHero from "@/components/ui/AboutHero";
import AboutText from "@/components/ui/AboutText";
import Contact from "@/components/ui/Contact";
import Founder from "@/components/ui/Founder";
import NameDetails from "@/components/ui/NameDetails";
import Trust from "@/components/ui/Trust";
import Values from "@/components/ui/Values";
import { whatWeDo, whatWeStarted } from "@/constants/aboutTexts";
import { mainStyle } from "@/constants/styles";
import SeoTags from "@/utils/seo";

export default function AboutPage() {
  return (
    <>
      <SeoTags
        title="HTRC | About Us"
        description="Learn about HTRC and the mission behind our home energy retrofit calculator. We combine building physics, real-world retrofit data, and practical tools to help homeowners and professionals make smarter energy-efficiency decisions."
        keywords="HTRC, about HTRC, energy retrofit calculator, building physics, home energy efficiency, retrofit analysis, sustainable buildings"
      />
      <main className={mainStyle}>
        <AboutHero />
        <div className="flex flex-col md:flex-row gap-16 py-16 px-4">
          <AboutText title="What We Do">
            {whatWeDo.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </AboutText>
          <AboutText title="Why We Started">
            {whatWeStarted.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </AboutText>
        </div>
        <AboutText title="Our Mission" className="px-4">
          <p>
            Our mission is to simplify thermal retrofit decisions and accelerate
            energy efficiency improvements in residential buildings. By
            providing accessible analysis tools and a trusted professional
            network, HTRC aims to reduce energy waste, improve comfort, and
            support the transition to more sustainable homes.
          </p>
        </AboutText>
        <Values />
        <Trust />
        <NameDetails />
        <Founder />
        <Contact />
      </main>
    </>
  );
}
