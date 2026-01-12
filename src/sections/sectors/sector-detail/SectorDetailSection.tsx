"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Zap, Users, Activity, Rocket, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Sector } from "@/src/lib/data/sectors";

interface SectorDetailSectionProps {
  sector: Sector;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  zap: Zap,
  users: Users,
  wave: Activity,
  rocket: Rocket,
  lock: Lock,
};

export default function SectorDetailSection({ sector }: SectorDetailSectionProps) {
  const IconComponent = iconMap[sector.services[0]?.icon] || Sparkles;

  return (
    <section className="py-10">
      <Container>
        {/* Go Back Link */}
        <Link
          href="/sectors"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#3A4FEA] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </Link>

        {/* Top Section - Title, Description, and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 mb-16">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {sector.title}: {sector.subtitle}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {sector.detailedDescription || sector.description}
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={sector.imageUrl}
              alt={sector.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* What We Help You With Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A4FEA] text-center mb-4">
            What We Help You With
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            {sector.detailedDescription || sector.description}
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {sector.services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <ServiceIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 flex-1">
                      {service.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Join Us Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed flex-1">
                <span className="font-semibold text-[#3A4FEA]">Join us</span> in building
                technology that empowers people, strengthens systems, and shapes the future.
              </p>
              <Link href="/contact">
                <Button className="bg-[#3A4FEA] hover:bg-[#2d3fd4] text-white px-6 py-3">
                  Talk to our team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
