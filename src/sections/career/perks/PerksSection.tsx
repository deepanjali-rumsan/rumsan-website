"use client";

import { Container } from "@/components/ui/container";
import { Briefcase, GraduationCap, DollarSign, Heart } from "lucide-react";
import Image from "next/image";

export default function PerksSection() {
  return (
    <section className="py-10">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#3A4FEA]">Perks</span>{" "}
            <span className="text-gray-600">At Rumsan</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            If you&apos;re looking for a place where your ideas matter, your
            skills can flourish, and your work contributes to something bigger,
            you&apos;ll feel right at home here. Whether you&apos;re an
            engineer, designer, researcher, or problem-solver, you&apos;ll work
            on projects that challenge you and create lasting impact.
          </p>
        </div>

        {/* Top Row - Cards and Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Work Culture Card */}
          <div
            className="rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            style={{
              background: "linear-gradient(90deg, #F0F7FF 0%, #FCF0FE 100%)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Work Culture
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We foster an environment that respects work-life balance and
              empowers you to do your best work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                5-day work week
              </span>
              <span className="px-4 py-1.5 bg-white  rounded-full text-sm md:text-base text-gray-700">
                Free lunch at the office
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Gen-Z
              </span>
            </div>
          </div>

          {/* Learning & Career Growth Card */}
          <div
            className="rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            style={{
              background: "linear-gradient(270deg, #F6F2FF 0%, #F0F7FF 100%)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Learning & Career Growth
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We invest in continuous learning to help you grow your career and
              stay ahead in a rapidly evolving tech landscape.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Training and learning fund
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                College scholarship program through partner colleges
              </span>
            </div>
          </div>

          {/* Outdoor Cafe Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full min-h-[250px] md:min-h-[300px]">
            <Image
              src="https://assets.rumsan.net/rahat/dsc-1908.jpg"
              alt="Team meeting at outdoor cafe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Second Row - Group Photo and Financial Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Group Photo */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[300px] md:h-[300px] lg:h-[300px]">
            <Image
              src="https://assets.rumsan.net/rahat/20251111-152206.jpg"
              alt="Rumsan team group photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Financial Benefits Card */}
          <div
            className="rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            style={{
              background: "linear-gradient(90deg, #F0F7FF 0%, #FCF0FE 100%)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Financial Benefits
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We believe in supporting our team—both professionally and
              financially.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Annual performance bonus
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                CIT Fund
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Dashain bonus
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Advance salary request option
              </span>
            </div>
          </div>
        </div>

        {/* Third Row - Leave & Well Being and Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Leave & Well Being Card */}
          <div
            className="rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            style={{
              background: "linear-gradient(270deg, #F6F2FF 0%, #F0F7FF 100%)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Leave & Well Being
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Your health, family, and well-being matter.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Paid leave
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Maternity leave
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm md:text-base text-gray-700">
                Personal and Family Insurance coverage
              </span>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="md:col-span-2 bg-[#F1FFE0] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                <span className="font-semibold text-green-700">Join us</span> in
                building technology that empowers people, strengthens systems,
                and shapes the future.
              </p>
            </div>
            {/* <div className="relative h-[200px] md:h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://assets.rumsan.net/rahat/dsc-1908.jpg"
                alt="Technology and innovation"
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
