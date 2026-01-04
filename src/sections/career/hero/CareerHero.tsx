import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function CareerHero() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#4252FF]">Career</span>{" "}
              <span className="text-gray-600">At Rumsan</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              At Rumsan, we&apos;re building meaningful technology that creates
              real-world impact from frontier-tech solutions to digital
              innovation for communities. We believe that great work happens
              when passionate people collaborate, learn, and grow together.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Image Section */}
      <section className="pb-20">
        <Container>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="https://assets.rumsan.net/rahat/20251111-152206.jpg"
              alt="Rumsan Team"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
