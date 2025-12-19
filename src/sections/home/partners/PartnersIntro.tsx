import { Container } from "@/components/ui/container";

export default function PartnersIntro() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <h2 className="mb-8 leading-tight">
          <span style={{ color: "#4252FF" }}>From Global Initatives To</span>
          <br />
          <span className="text-gray-600">Emerging Impact Startups</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We co-design with our partners, supporters, and funders to bring
          strategies, technology, and guidance that create lasting, real-world
          impact.
        </p>
      </Container>
    </section>
  );
}
