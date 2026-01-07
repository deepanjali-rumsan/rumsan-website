import { Container } from "@/components/ui/container";

export default function ServicesHero() {
  return (
    <section className="py-10">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4252FF]">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We help governments, humanitarian organizations, and impact-driven
            companies design, build, and scale trustworthy digital systems. Our
            work blends strategy, frontier technologies, and global delivery to
            solve real-world problems with practical, measurable impact.
          </p>
        </div>
      </Container>
    </section>
  );
}

