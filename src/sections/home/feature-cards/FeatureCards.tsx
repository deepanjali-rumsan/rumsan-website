import Image from "next/image";
import { Container } from "@/components/ui/container";

export default function FeatureCards() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_0.7fr] gap-6 md:gap-8 items-end">
          {/* Innovation with Purpose */}
          <div
            className="relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-56 md:h-64 lg:h-72"
            style={{
              borderRadius: "28px",
            }}
          >
            <Image
              src="https://assets.rumsan.net/rahat/component-5.png"
              alt="Innovation with Purpose"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-lg md:text-xl tracking-[0.7em] uppercase font-bold">
                Innovation with Purpose
              </p>
            </div>
          </div>

          {/* Human-Centric Design */}
          <div
            className="relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-48 md:h-52 lg:h-60"
            style={{
              borderRadius: "28px",
            }}
          >
            <Image
              src="https://assets.rumsan.net/rahat/whatsapp-image-2024-02-28-at-1.29.14-pm-1.jpeg"
              alt="Human-Centric Design"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-lg md:text-xl tracking-[0.7em] uppercase font-bold">
                Human-Centric Design
              </p>
            </div>
          </div>

          {/* Impact First */}
          <div
            className="relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-64 md:h-72 lg:h-80"
            style={{
              borderRadius: "28px",
            }}
          >
            <Image
              src="https://assets.rumsan.net/rahat/component-8.png"
              alt="Impact First"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-lg md:text-xl tracking-[0.7em] uppercase font-bold">
                Impact First
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
