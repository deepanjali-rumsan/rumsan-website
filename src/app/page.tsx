import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import FeatureCards from "./feature-cards/FeatureCards";
import PartnersIntro from "./partners-intro/PartnersIntro";
import PartnersSection from "./partners/PartnersSection";
import ServicesSection from "./services-section/ServicesSection";
import ImpactStatsSection from "./impact-stats/ImpactStatsSection";
import ProjectsSection from "./projects/ProjectsSection";
import CTASection from "./cta-section/CTASection";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <PartnersIntro />
      <PartnersSection />
      <ServicesSection />
      <ImpactStatsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
