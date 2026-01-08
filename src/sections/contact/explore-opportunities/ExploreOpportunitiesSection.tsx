import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, HeartPulse, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function ExploreOpportunitiesSection() {
  return (
    <section className="py-10">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A4FEA] mb-4">
            Explore More Opportunities
            <br />
            <span className="text-gray-600">To Connect With Us</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to support you and accelerate your digital innovation.
            Whether you want to kick off a new project, explore collaboration,
            or simply ask a question, we’re just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* For Careers Card */}
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="px-6 md:px-8 pt-6 md:pt-8 pb-0 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-[#3A4FEA]" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                  For Careers
                </h4>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-1">
                We regularly post new openings. If you don&apos;t find the right
                role today, send us your profile we&apos;ll connect when a
                suitable opportunity arises.
              </p>
              <Link
                href="/career"
                className="inline-flex items-center text-[#3A4FEA] font-semibold hover:text-[#3A4FEA]/80 transition-colors mb-6 md:mb-8"
              >
                Apply Here
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="h-72 md:h-80 overflow-hidden relative rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                  alt="Career opportunities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Fellowship Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="px-6 md:px-8 pt-6 md:pt-8 pb-0 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                  Fellowship
                </h4>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-1">
                We conduct blockchain fellowships twice a year. Check our
                fellowship page and get in touch if you&apos;re interested in
                joining eSatya&apos;s Blockchain Fellowship.
              </p>
              <a
                href="https://esatya.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#3A4FEA] font-semibold hover:text-[#3A4FEA]/80 transition-colors mb-6 md:mb-8"
              >
                Apply Here
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="h-72 md:h-80 overflow-hidden relative rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                  alt="Fellowship program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Organize Blood donation Card */}
          <div className="bg-red-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow md:col-span-2">
            <div className="flex flex-col md:flex-row md:min-h-[350px] md:items-start">
              {/* Content Section - Left Side */}
              <div className="px-6 md:px-8 lg:px-10 pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg">
                    <HeartPulse className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                    Organize Blood donation?
                  </h4>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  We care about the communities we serve. Through our blood
                  donation campaigns, we help connect donors, volunteers, and
                  organizers to support life saving needs.
                </p>
                <a
                  href="https://hamrolifebank.com/"
                  className="inline-flex items-center text-[#3A4FEA] font-semibold hover:text-[#3A4FEA]/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              {/* Image Section - Right Side */}
              <div className="px-6 md:px-8 pt-0 md:pt-8 pb-6 md:pb-8 w-full md:w-1/2">
                <div className="h-64 md:h-80 w-full overflow-hidden relative rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80"
                    alt="Blood donation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
