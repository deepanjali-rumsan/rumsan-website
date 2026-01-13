"use client";

import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import SectorDetailSection from "@/src/sections/sectors/sector-detail/SectorDetailSection";

export default function ImpactCompaniesPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <SectorDetailSection
        title="Rumsan For Impact Companies"
        subtitle="Scaling Purpose With Technology"
        description="We help purpose-driven organizations use technology to scale their mission, prove their impact, and build trust with customers, partners, and investors."
        detailedDescription="We help purpose-driven organizations use technology to scale their mission, prove their impact, and build trust with customers, partners, and investors. Impact companies operate in complex environments balancing mission, sustainability, and growth. We support you by designing digital systems that bring transparency, automate operations, and strengthen credibility. From circular economy platforms to supply-chain traceability and digital incentive tools, we help impact enterprises build technology that evolves with their goals and scales to new markets."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        imageAlt="Impact companies technology"
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
            icon: "wave",
            title: "AI tools for impact reporting, analytics & workflow automation",
          },
          {
            icon: "users",
            title: "Team augmentation for long-term engineering capacity",
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
