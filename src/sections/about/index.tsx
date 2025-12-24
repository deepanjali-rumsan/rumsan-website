import Navbar from "../navbar";
import Footer from "../footer";
import AboutHero from "./hero/AboutHero";
import MissionVisionSection from "./mission-vision/MissionVisionSection";
import OurValuesSection from "./our-values/OurValuesSection";
import GivingBackSection from "./giving-back/GivingBackSection";
import TeamSection from "./team/TeamSection";
import AboutCTASection from "./cta-section/AboutCTASection";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <Navbar />
      <AboutHero />
      <MissionVisionSection />
      <OurValuesSection />
      <GivingBackSection />
      <TeamSection />
      <AboutCTASection />
      <Footer />
    </div>
  );
}
