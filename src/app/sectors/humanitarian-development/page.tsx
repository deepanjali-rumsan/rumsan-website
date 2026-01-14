"use client";

import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import HumanitarianDevelopmentSection from "@/src/sections/sectors/humanitarian-development/HumanitarianDevelopmentSection";

export default function HumanitarianDevelopmentPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <HumanitarianDevelopmentSection />
      <Footer />
    </div>
  );
}
