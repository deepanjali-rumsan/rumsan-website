import { Container } from "@/components/ui/container";
import { Lightbulb } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* Mission Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-900"></div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Mission
              </h2>
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight text-[#4252FF]">
              Design and deploy frontier technologies
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Human-centric approach that help deliver transparent, efficient,
              and human-centered solutions at scale.
            </p>
          </div>

          {/* Center Graphic */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
              {/* Inner circle */}
              <div className="absolute inset-8 rounded-full bg-gray-100 border-2 border-b-orange-300"></div>
              {/* Center circle with lightbulb */}
              <div className="absolute inset-16 rounded-full  bg-white border-2 border-b-orange-300 flex items-center justify-center">
                <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Vision Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-900"></div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Vision
              </h2>
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight text-[#4252FF]">
              Power resilient and equitable societies
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              By redefining impact delivery through ethical, innovative
              technology.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

