import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import FeatureCards from "./feature-cards/FeatureCards";
import BottomSection from "./bottom-section/BottomSection";
import PartnersSection from "./partners/PartnersSection";
import ImpactStatsSection from "./impact-stats/ImpactStatsSection";
import ProjectsSection from "./projects/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
          <section className="py-20">
      <div className="container mx-auto px-4 text-center">
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
      </div>
    </section>
      <PartnersSection />
      <ImpactStatsSection />
      <ProjectsSection />
    </div>
  );
}
