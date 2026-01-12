import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Target, Lightbulb } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-10 " style={{ backgroundColor: "#FDFBF7" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-5 items-stretch">
          {/* Left Column - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://assets.rumsan.net/rahat/img-9438.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Mission and Vision */}
          <div className="flex flex-col justify-center space-y-12">
            {/* Mission Block */}
            <div className="space-y-4">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-[#f97316]" />
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Mission
                </h4>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Design and deploy frontier technologies human-centric approach
                that help deliver transparent, efficient, and human-centered
                solutions at scale.
              </p>
            </div>
            <hr />
            {/* Vision Block */}
            <div className="space-y-4">
                <Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-[#f97316]" />
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Vision
                </h4>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Power resilient and equitable societies by redefining impact
                delivery through ethical, innovative technology.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
