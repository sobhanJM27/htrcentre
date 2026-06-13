import AboutHero from "@/components/ui/AboutHero";
import AboutText from "@/components/ui/AboutText";
import Contact from "@/components/ui/Contact";
import Founder from "@/components/ui/Founder";
import NameDetails from "@/components/ui/NameDetails";
import Trust from "@/components/ui/Trust";
import Values from "@/components/ui/Values";
import {
  ourMissionImages,
  whatWeDo,
  whatWeStarted,
} from "@/constants/aboutTexts";
import { imageHover, mainStyle, textBody1 } from "@/constants/styles";
import { cn } from "@/lib/utils";
import SeoTags from "@/utils/seo";
import Image from "@/components/ui/Image";

export default function AboutPage() {
  return (
    <>
      <SeoTags
        title="About Us"
        description="Learn about HTRC and the mission behind our home energy retrofit calculator. We combine building physics, real-world retrofit data, and practical tools to help homeowners and professionals make smarter energy-efficiency decisions."
        keywords="HTRC, about HTRC, energy retrofit calculator, building physics, home energy efficiency, retrofit analysis, sustainable buildings"
      />
      <main className={mainStyle}>
        <AboutHero />
        <section className="flex flex-col md:flex-row gap-8 lg:gap-12 py-16 px-4">
          <AboutText title="What We Do">
            {whatWeDo.map((item) => (
              <p key={item.id} className={cn(textBody1)}>
                {item.text}
              </p>
            ))}
          </AboutText>
          <AboutText title="Why We Started">
            {whatWeStarted.map((item) => (
              <p key={item.id} className={cn(textBody1)}>
                {item.text}
              </p>
            ))}
          </AboutText>
        </section>
        <section className="grid grid-cols-1 gap-8 lg:gap-12 items-center px-4 py-8">
          <AboutText title="Our Mission">
            <p className={cn(textBody1)}>
              Our mission is to simplify thermal retrofit decisions and
              accelerate energy efficiency improvements in residential
              buildings. By providing accessible analysis tools and a trusted
              professional network, HTRC aims to reduce energy waste, improve
              comfort, and support the transition to more sustainable homes.
            </p>
          </AboutText>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
            {ourMissionImages.map((image) => (
              <div key={image.id} className="rounded-xl overflow-hidden isolate">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "w-full object-cover rounded-xl overflow-hidden",
                    imageHover,
                  )}
                />
              </div>
            ))}
          </div>
        </section>
        <Values />
        <Trust />
        <NameDetails />
        <Founder />
        <Contact />
      </main>
    </>
  );
}
