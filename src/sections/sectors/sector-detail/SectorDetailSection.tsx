"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Activity,
  Rocket,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  icon: string;
  title: string;
}

interface SectorDetailSectionProps {
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  imageUrl: string;
  imageAlt: string;
  services: Service[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  zap: Zap,
  users: Users,
  wave: Activity,
  rocket: Rocket,
  lock: Lock,
};

export default function SectorDetailSection({
  title,
  subtitle,
  description,
  detailedDescription,
  imageUrl,
  imageAlt,
  services,
}: SectorDetailSectionProps) {

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
              {title}: {subtitle}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {detailedDescription || description}
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* What We Help You With Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A4FEA] text-center mb-4">
            What We <span className="text-gray-600">Help You With</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            {description}
          </p>

          {/* Services Grid with Join Us Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Row 1 - 3 service cards */}
            {services.slice(0, 3).map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow ${
                    index === 1 ? "lg:row-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
                      <ServiceIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      {service.title}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Row 2 - Card 4 (left), empty middle, empty right for Join Us */}
            {/* Card 4 - Left column */}
            {services.slice(3, 4).map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={index + 3}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
                      <ServiceIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      {service.title}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Join Us Card - Right column, spans 2 rows (Row 2 & 3) */}
            <div className="bg-white border border-[#3A4FEA] rounded-xl p-8 md:p-10 lg:p-12 lg:row-span-2 flex flex-col justify-between">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                <span className="font-semibold text-[#3A4FEA]">Join us</span> in
                building technology that empowers people, strengthens systems,
                and shapes the future.
              </p>
              <Link href="/contact">
                <Button className="border border-[#3A4FEA] text-[#3A4FEA] bg-transparent hover:bg-[#3A4FEA] hover:text-white px-6 py-3 w-full md:w-auto">
                  Talk to our team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Row 3 - Rocket card (left), Lock card (middle) */}
            {/* Rocket card - Left column */}
            {services.slice(4, 5).map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={index + 4}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
                      <ServiceIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      {service.title}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Lock card - Middle column */}
            {services.slice(5, 6).map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={index + 5}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
                      <ServiceIcon className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      {service.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-[#3A4FEA]">Use</span>{" "}
            <span className="text-gray-600">Cases</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            We help purpose-driven organizations use technology to scale their
            mission, prove their impact, and build trust with customers,
            partners, and investors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Use Case 1 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p   className="text-lg font-semibold text-gray-900 mb-4">
                Digitizing plastic recycling & reward flows
              </p>
              <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                Plastic Bank
              </button>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Farm-to-fork traceability for agricultural products
              </p>
              <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                AgriClear
              </button>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Creating sustainability dashboards and reporting tools
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                AI systems for donor engagement, reporting & automation
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
