"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/src/sections/navbar";
import Footer from "@/src/sections/footer";
import JobDetailSection from "@/src/sections/career/job-detail/JobDetailSection";
import { getJobBySlug } from "@/src/lib/data/jobs";

export default function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const job = getJobBySlug(slug);

  useEffect(() => {
    if (!job) {
      router.push("/career");
    }
  }, [job, router]);

  if (!job) {
    return null;
  }

  return (
    <div className="bg-white">
      <Navbar />
      <JobDetailSection job={job} />
      <Footer />
    </div>
  );
}

