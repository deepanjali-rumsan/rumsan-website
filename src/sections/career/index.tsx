import Navbar from "../navbar";
import Footer from "../footer";
import CareerHero from "./hero/CareerHero";
import PerksSection from "./perks/PerksSection";
import CurrentOpeningsSection from "./openings/CurrentOpeningsSection";
import FellowshipBannerSection from "./fellowship-banner/FellowshipBannerSection";

export default function Career() {
  return (
    <div className="bg-white">
      <Navbar />
      <CareerHero />
      <PerksSection />
      <CurrentOpeningsSection />
      <FellowshipBannerSection />
      <Footer />
    </div>
  );
}
