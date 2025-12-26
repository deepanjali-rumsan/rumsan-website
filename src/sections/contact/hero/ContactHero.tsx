import { Container } from "@/components/ui/container";

export default function ContactHero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4252FF]">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We&apos;re here to support you and accelerate your digital innovation.
            Whether you want to kick off a new project, explore collaboration, or
            simply ask a question, we&apos;re just a message away.
          </p>
        </div>
      </Container>
    </section>
  );
}


