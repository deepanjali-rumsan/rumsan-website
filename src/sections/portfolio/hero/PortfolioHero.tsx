import { Container } from "@/components/ui/container";

export default function PortfolioHero() {
  return (
    <section className="py-10">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#3A4FEA]">
            Our <span className="text-gray-600">Portfolio</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            At Rumsan, we&apos;re building meaningful technology that creates
            real-world impact from frontier-tech solutions to digital innovation
            for communities. We believe that great work happens when passionate
            people collaborate, learn, and grow together.
          </p>
        </div>
      </Container>
    </section>
  );
}
