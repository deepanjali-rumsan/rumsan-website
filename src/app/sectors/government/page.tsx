"use client";

import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import GovernmentSection from "@/src/sections/sectors/government/GovernmentSection";

export default function GovernmentPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <GovernmentSection />
      <Footer />
    </div>
  );
}
