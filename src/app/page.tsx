import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import FeatureCards from "./feature-cards/FeatureCards";
import PartnersSection from "./partners/PartnersSection";
import ServicesSection from "./services-section/ServicesSection";
import ImpactStatsSection from "./impact-stats/ImpactStatsSection";
import ProjectsSection from "./projects/ProjectsSection";
import CTASection from "./cta-section/CTASection";
import Footer from "./footer/Footer";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <section className="py-20">
        <Container className="text-center">
          <h2 className="mb-8 leading-tight">
            <span style={{ color: "#4252FF" }}>From Global Initatives To</span>
            <br />
            <span className="text-gray-600">Emerging Impact Startups</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We co-design with our partners, supporters, and funders to bring
            strategies, technology, and guidance that create lasting, real-world
            impact.
          </p>
        </Container>
      </section>
      <PartnersSection />
      <ServicesSection />
      <ImpactStatsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
