import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Image from "next/image";

const featureCards = [
  {
    title: "Innovation",
    image: "https://assets.rumsan.net/rahat/dsc-1805.jpg",
  },
  {
    title: "Human-Centered",
    image: "https://assets.rumsan.net/rahat/img-6415.jpg",
    isMiddle: true,
  },
  {
    title: "Impact",
    image:
      "https://assets.rumsan.net/rahat/whatsapp-image-2024-02-28-at-1.29.14-pm-1.jpeg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Mid-Page Feature Cards */}
      <section className="px-6 md:px-12 my-16 md:my-24 max-w-[1444px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-6 md:gap-8">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 h-56 md:h-64 lg:h-72"
              style={{
                borderRadius: "28px",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-base md:text-lg tracking-[0.3em] uppercase font-bold">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          <span style={{ color: "#4252FF" }}>From Global Initatives To</span>
          <br />
          <span className="text-gray-600">Emerging Impact Startups</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We co-design with our partners, supporters, and funders to bring
          strategies, technology, and guidance that create lasting, real-world
          impact.
        </p>
      </section>
    </div>
  );
}
