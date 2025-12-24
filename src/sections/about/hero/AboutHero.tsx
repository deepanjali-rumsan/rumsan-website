import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[500px] md:h-[500px] lg:h-[500px]">
      <Image
        src="https://assets.rumsan.net/rahat/20251111-152206.jpg"
        alt="Rumsan Team"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          About Rumsan
        </h1>
      </div>
    </section>
  );
}

