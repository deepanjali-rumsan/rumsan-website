"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import SectorDetailSection from "@/src/sections/sectors/sector-detail/SectorDetailSection";
import { getSectorById } from "@/src/lib/data/sectors";

export default function SectorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const sector = getSectorById(id);

  useEffect(() => {
    if (!sector) {
      router.push("/sectors");
    }
  }, [sector, router]);

  if (!sector) {
    return null;
  }

  return (
    <div className="bg-white">
      <Navbar />
      <SectorDetailSection sector={sector} />
      <Footer />
    </div>
  );
}
