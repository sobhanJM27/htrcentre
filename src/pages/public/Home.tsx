import FinalCTA from "@/components/ui/FinalCTA";
import Hero from "@/components/ui/Hero";
import WhyChoose from "@/components/ui/WhyChoose";
import WorkFlow from "@/components/ui/WorkFlow";
import { mainStyle } from "@/constants/styles";
import SeoTags from "@/utils/seo";

const Home = () => {
  return (
    <>
      <SeoTags
        title="HTRC | Home"
        description="Calculate home energy savings and retrofit impact using advanced building physics."
        keywords="energy calculator, retrofit, building physics, energy savings"
      />
      <main className={mainStyle}>
        <Hero />
        <WhyChoose />
        <WorkFlow />
        <FinalCTA />
      </main>
    </>
  );
};

export default Home;
