"use client";

import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import SectorDetailSection from "@/src/sections/sectors/sector-detail/SectorDetailSection";

export default function HumanitarianDevelopmentPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <SectorDetailSection
        title="Rumsan For Humanitarian And Development Partners"
        subtitle="Delivering Aid Efficiently, Transparently, And At Scale"
        description="We build reliable, secure digital tools that help humanitarian and development organizations deliver aid efficiently, transparently, and at scale. From cash transfer systems to program management platforms, our solutions are designed for challenging field conditions, diverse user needs, and long-term sustainability. We work closely with local partners, governments, and field teams to ensure our technology serves those who need it most."
        detailedDescription="We build reliable, secure digital tools that help humanitarian and development organizations deliver aid efficiently, transparently, and at scale. From cash transfer systems to program management platforms, our solutions are designed for challenging field conditions, diverse user needs, and long-term sustainability. We work closely with local partners, governments, and field teams to ensure our technology serves those who need it most."
        imageUrl="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
        imageAlt="Humanitarian and development technology"
        services={[
          {
            icon: "sparkles",
            title: "Digital product design (Web, Mobile, Portals, dashboards)",
          },
          {
            icon: "zap",
            title: "Blockchain-powered reward & incentive mechanisms",
          },
          {
            icon: "users",
            title: "Team augmentation for long-term engineering capacity",
          },
          {
            icon: "wave",
            title: "AI tools for impact reporting, analytics & workflow automation",
          },
          {
            icon: "rocket",
            title: "From MVP to scale: roadmap, architecture & global rollout",
          },
          {
            icon: "lock",
            title: "Traceability & transparency systems",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
