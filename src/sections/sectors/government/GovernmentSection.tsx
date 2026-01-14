"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Zap, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GovernmentSection() {
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
              Rumsan For Government: Building Systems For Accountability
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Governments need systems that are secure, citizen-centric, and
              built for long-term adoption. We partner with public institutions
              to design digital public infrastructure components, automate
              services, build trusted data systems, and introduce emerging
              technologies responsibly. <br /> Our approach blends capacity
              building, digitalization, and innovation co-creation, ensuring
              that government teams not only adopt new systems but understand,
              manage, and sustain them.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://assets.rumsan.net/rahat/10-2.png"
              alt="Government digital systems"
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
                  Capacity Building & Digital Readiness{" "}
                </p>
              </div>
            </div>

            {/* Card 2 - Spans 2 rows */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow lg:row-span-2">
              <div className="flex flex-col items-start gap-4">
                <Zap className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Government Digitalization
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

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <Lightbulb className="w-6 h-6 text-orange-500" />
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Innovation Co-Creation with Government{" "}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Use Case 1 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                DID-based identity/data management for public institutions
              </p>
              <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                Gilga
              </button>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                ICT4D systems for agriculture, livestock & community services
              </p>
              <div className="flex gap-2">
                <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                  Care
                </button>
                <button className="bg-[#3A4FEA] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2d3fc7] transition-colors">
                  Heifer
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Use Case 3 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900">
                Municipal early-warning + relief coordination using SMS +
                forecast data
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900">
                Blockchain-backed transparency & audit trails for public
                programs
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900">
                CBDC & Web3 literacy workshops for government bodies
              </p>
            </div>

            {/* Use Case 6 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all">
              <p className="text-lg font-semibold text-gray-900">
                Rahat sessions with local governments to improve digital
                financial access
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
