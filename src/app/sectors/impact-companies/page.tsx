"use client";

import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import ImpactCompaniesSection from "@/src/sections/sectors/impact-companies/ImpactCompaniesSection";

export default function ImpactCompaniesPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <ImpactCompaniesSection />
      <Footer />
    </div>
  );
}
