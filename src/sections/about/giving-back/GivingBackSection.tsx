import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GivingBackSection() {
  return (
    <>
      {/* Hamro LifeBank Section */}
      <section className="pt-20 pb-10" style={{ backgroundColor: "#FDFBF7" }}>
        <Container>
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h5 className="text-sm md:text-base font-medium tracking-widest uppercase mb-3 text-gray-500">
              GIVING BACK
            </h5>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#4252FF]">
                At Rumsan, Impact Isn&apos;t Just Something We Build For Our
                Partners
              </span>
              <br />
              <span className="text-gray-600">
                But It&apos;s A Responsibility We Carry At Home
              </span>
            </h2>
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left Column - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-auto rounded-xl overflow-hidden">
              <Image
                src="https://assets.rumsan.net/rahat/rectangle-45.png"
                alt="Blood donation event"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Hamro LifeBank Logo and Title */}
              <div className="space-y-4">
                <Link
                  href="https://hamrolifebank.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://assets.rumsan.net/rumsan-group/hlb-blk-rumsan.png"
                    alt="Hamro LifeBank"
                    width={150}
                    height={70}
                    className="h-auto"
                  />
                </Link>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Saving Lives Through{" "}
                  <span className="text-[#cf3d3c]">HamroLife Bank</span>
                </h4>
              </div>

              {/* Descriptive Paragraph */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Hamro LifeBank, a nonprofit we founded in 2018 to support
                families during one of the most stressful emergencies they can
                face: the urgent search for blood. Hamro LifeBank runs blood
                donation drives and a 24/7 hotline. Rumsan team members
                contribute to this initiative by volunteering during blood
                donation events and supporting with hotline operations.
              </p>

              {/* Learn more Link */}
              <Link
                href="/hamro-lifebank"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn more
                <ArrowUpRight className="w-5 h-5" />
              </Link>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-3">
                {/* Stat 1 */}
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#cf3d3c]">
                    12,000+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Supported Emergency Blood Search Calls
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#cf3d3c]">
                    60,000+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Digitized Blood Records Across Nepal
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#cf3d3c]">
                    6,000+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Collected Blood Bags
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#cf3d3c]">
                    130+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Donation Event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* eSatya Section */}
      <section className="pt-10 pb-20" style={{ backgroundColor: "#FDFBF7" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left Column - Content */}
            <div className="space-y-6 flex flex-col justify-center">
              {/* Logo */}
              <Link
                href="https://esatya.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://assets.rumsan.net/rumsan-group/esatya-main-banner-01.png"
                  alt="eSatya"
                  width={150}
                  height={70}
                  className="h-auto"
                />
              </Link>

              {/* Main Title */}
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Building Nepal&apos;s Web3
                <span className="text-[#a8116a]"> Community Together</span>
              </h4>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We build Nepal&apos;s most active blockchain learning and
                developer community empowering curious minds, upskilling
                professionals, and helping the next generation break into Web3.
                We host regular meetups, hands-on workshops; Blockchain
                Fellowship, and 101 sessions mentoring students to advising
                professionals and government officials.
              </p>

              {/* Learn more Link */}
              <Link
                href="https://esatya.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn more
                <ArrowUpRight className="w-5 h-5" />
              </Link>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
                {/* Stat 1 */}
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#a8116a]">
                    50+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Conducted Meetups And Learning Events
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#a8116a]">
                    8+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Trained And Mentored Fellowship Cohorts
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-xl p-6 shadow-md col-span-2 text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 text-[#a8116a]">
                    100+
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Supported Learners Entering The Web3 Space
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-auto rounded-xl overflow-hidden">
              <Image
                src="https://assets.rumsan.net/rahat/img-5518.jpg"
                alt="eSatya presentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
