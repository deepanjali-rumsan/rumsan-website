import { Container } from "@/components/ui/container";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FellowshipBannerSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[450px]">
            <Image
              src="https://assets.rumsan.net/rahat/dsc-1801.jpg"
              alt="Fellowship Program"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16">
              {/* Top Section - Title and Description */}
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Join our fellowship program
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  Looking for a different opportunity? Our fellowship program
                  offers hands-on experience working on impactful projects while
                  learning from industry experts.
                </p>
              </div>

              {/* Bottom Section - CTA Button */}
              <div className="flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Talk to our team
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

