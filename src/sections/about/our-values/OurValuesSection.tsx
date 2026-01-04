import { Container } from "@/components/ui/container";
import {
  Target,
  Scale,
  Lightbulb,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function OurValuesSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 md:mb-16 text-center">
          <p className=" text-gray-600 text-lg md:text-base font-medium tracking-widest uppercase mb-3">
            OUR VALUES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#4252FF]">
            What Drives Us
            <span className="text-gray-500"> Forward</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: Impact First */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Target className="w-10 h-10 md:w-12 md:h-12 text-[#f97316]" />
            </div>
            <h5 className="text-xl md:text-2xl font-bold text-black mb-3">
              Impact First
            </h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We build technology that strengthens dignity, equity, and
              community resilience.
            </p>
          </div>

          {/* Card 2: Ethics by Design */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Scale className="w-10 h-10 md:w-12 md:h-12 text-[#f97316]" />
            </div>
            <h5 className="text-xl md:text-2xl font-bold text-black mb-3">
              Ethics by Design
            </h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our solutions prioritize transparency, privacy, and accountability
              from day one.
            </p>
          </div>

          {/* Card 3: Innovation with Purpose */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-[#f97316]" />
            </div>
            <h5 className="text-xl md:text-2xl font-bold text-black mb-3">
              Innovation with Purpose
            </h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We apply frontier tech not for hype, but to solve real problems
              for real people.
            </p>
          </div>

          {/* Card 4: Collaboration Over Silos */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Network className="w-10 h-10 md:w-12 md:h-12 text-[#f97316]" />
            </div>
            <h5 className="text-xl md:text-2xl font-bold text-black mb-3">
              Collaboration Over Silos
            </h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We co-create with governments, global agencies, and communities to
              ensure solutions are inclusive and implementable.
            </p>
          </div>

          {/* Card 5: Reliability & Trust */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-[#f97316]" />
            </div>
            <h5 className="text-xl md:text-2xl font-bold text-black mb-3">
              Reliability & Trust
            </h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We build systems that are stable, auditable, and trustworthy,
              especially where they matter most.
            </p>
          </div>

          {/* Card 6: Human-Centered Technology */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-[#f97316]" />
            </div>
            <h5 className="text-xl md:text-2xl font-bold text-black mb-3">
              Human-Centered Technology
            </h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We design digital tools that empower people, simplify processes,
              and respect local contexts.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
