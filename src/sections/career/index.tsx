import Navbar from "../navbar";
import Footer from "../footer";
import CareerHero from "./hero/CareerHero";
import CareerImageCarousel from "./image-carousel/CareerImageCarousel";
import PerksSection from "./perks/PerksSection";
import CurrentOpeningsSection from "./openings/CurrentOpeningsSection";
import FellowshipBannerSection from "./fellowship-banner/FellowshipBannerSection";

export default function Career() {
  return (
    <div className="bg-white">
      <Navbar />
      <CareerHero />
      <CareerImageCarousel />
      <PerksSection />
      <CurrentOpeningsSection />
      <FellowshipBannerSection />
      <Footer />
    </div>
  );
}
