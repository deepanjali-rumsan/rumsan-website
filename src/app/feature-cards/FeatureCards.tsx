import Image from "next/image";

const featureCards = [
  {
    title: "Innovation",
    image: "https://assets.rumsan.net/rahat/component-5.png",
  },
  {
    title: "Human-Centered",
    image:
      "https://assets.rumsan.net/rahat/whatsapp-image-2024-02-28-at-1.29.14-pm-1.jpeg",
  },
  {
    title: "Impact",
    image: "https://assets.rumsan.net/rahat/component-8.png",
  },
];

export default function FeatureCards() {
  return (
    <section className="my-16 md:my-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_0.7fr] gap-6 md:gap-8 items-end">
          {featureCards.map((card, index) => (
            <div
              key={card.title}
              className={`relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${
                index === 1 ? "h-48 md:h-52 lg:h-60" : "h-56 md:h-64 lg:h-72"
              }`}
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
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg md:text-xl tracking-[0.7em] uppercase font-bold">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
