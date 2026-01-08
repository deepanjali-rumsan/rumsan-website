import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-10">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4252FF]">
            About <span className="text-gray-600">Rumsan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
           At Rumsan, we’re building meaningful technology that creates real-world impact from frontier-tech solutions to digital innovation for communities. We believe that great work happens when passionate people collaborate, learn, and grow together.
          </p>
        </div>
      </Container>
    </section>
  );
}

