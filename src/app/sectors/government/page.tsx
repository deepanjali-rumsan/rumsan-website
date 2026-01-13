"use client";

import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import SectorDetailSection from "@/src/sections/sectors/sector-detail/SectorDetailSection";

export default function GovernmentPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <SectorDetailSection
        title="Rumsan For Government"
        subtitle="Building Systems For Accountability"
        description="Governments need systems that are secure, citizen-centric, and built for long-term adoption. We help public sector organizations design and implement digital solutions that enhance transparency, improve service delivery, and build public trust. Our approach combines rigorous security practices, user-centered design, and sustainable technology choices that serve citizens effectively."
        detailedDescription="Governments need systems that are secure, citizen-centric, and built for long-term adoption. We help public sector organizations design and implement digital solutions that enhance transparency, improve service delivery, and build public trust. Our approach combines rigorous security practices, user-centered design, and sustainable technology choices that serve citizens effectively."
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        imageAlt="Government digital systems"
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
