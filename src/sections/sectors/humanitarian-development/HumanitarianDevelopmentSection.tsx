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

export default function HumanitarianDevelopmentSection() {
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
              Rumsan For Humanitarian Development: Systems For Human Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We build reliable, secure digital tools that help humanitarian and
              development organizations deliver aid efficiently, transparently,
              and at scale. <br /> Humanitarian and development programs require trust,
              speed, and accountability especially when working with vulnerable
              communities. We co-design technology with INGOs, UN agencies,
              donors, and innovation accelerators to create systems that support
              cash assistance, anticipatory action, education, connectivity,
              financial inclusion, and climate resilience. Our solutions are
              field-tested in multiple countries and built for reliability in
              low-connectivity or resource-constrained environments.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://assets.rumsan.net/rahat/human.jpeg"
              alt="Humanitarian development solutions"
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
            We help purpose-driven organizations use technology to scale their
            mission, prove their impact, and build trust with customers,
            partners, and investors.
          </p>

          {/* Services Grid with Join Us Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Cash & Voucher Assistance (CVA) systems
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Zap className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Anticipatory Action design & automation
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Activity className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  AI tools for operations, reporting & communication
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Users className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Blockchain-powered transparency & verification
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Lock className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  MVPs, pilots, research studies & scale-up architectures
                </p>
              </div>
            </div>

            {/* Join Us Card - Spans 2 rows */}
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

            {/* Card 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Rocket className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Working with local partners, governments & field teams
                </p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Lock className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Digital identity, citizen registries & program MIS
                </p>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Use Case 1 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Tokenized cash assistance & AA for floods
              </p>
              <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                Rahat – Nepal, Kenya, Malawi
              </button>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Giga Blocks: on-chain school connectivity & NFTs
              </p>
              <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                UNICEF
              </button>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Digital literacy & ICT4D systems
              </p>
              <div className="flex gap-2">
                <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                  CARE
                </button>
                <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                  Heifer
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Use Case 4 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900">
                Predictive analytics for climate, operations & planning
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900">
                Open-source impact tools for global replication
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
