"use client";

import { Container } from "@/components/ui/container";
import { WordRotate } from "@/components/ui/word-rotate";
import DecorativeSquares from "./DecorativeSquares";

export default function Hero() {
  const slogans = [
    <>
      Bridging Yesterday&apos;s Problems With{" "}
      <span className="text-gray-500">Tomorrow&apos;s Solution</span>
    </>,
    <>
      Rumsan Is An <br />
      Impact{" "}
      <span className="text-gray-500">
        Innovation
        <br />
        Company
      </span>
    </>,
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <DecorativeSquares />

      <Container>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="leading-tight mb-8 relative min-h-[200px] md:min-h-[240px] lg:min-h-[280px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[120%] h-[120%] rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(78, 85, 288, 0.3) 0%, rgba(66, 82, 255, 0.3) 40%, transparent 70%)",
                }}
              />
            </div>
            <span
              className="block text-4xl md:text-5xl lg:text-6xl font-bold relative z-10"
              style={{ color: "#4252FF" }}
            >
              <WordRotate
                words={slogans}
                duration={5000}
                className="inline-block"
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed mx-auto">
            We use blockchain and AI to support impact - driven companies,
            governments, humanitarian organizations build trustworthy, scalable
            digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 text-white rounded-2xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 text-base"
              style={{ backgroundColor: "#4252FF" }}
            >
              Talk to our team
              <span>→</span>
            </button>
            <button
              className="px-8 py-4 bg-white rounded-2xl font-semibold hover:bg-blue-50 transition-colors text-base"
              style={{
                color: "#4252FF",
                borderWidth: "2px",
                borderColor: "#4252FF",
              }}
            >
              Explore our work
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
