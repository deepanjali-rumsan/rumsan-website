"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    src: "https://assets.rumsan.net/rahat/dsc-1894.webp",
    alt: "Team collaboration",
  },
  {
    src: "https://assets.rumsan.net/rahat/3bf29d55d19cc3cf21ce134a843025220414d5be.jpg",
    alt: "Team working together",
  },
  {
    src: "https://assets.rumsan.net/rahat/img-9438.jpg",
    alt: "Office workspace",
  },
  {
    src: "https://assets.rumsan.net/rahat/dsc-1865.jpg",
    alt: "Team meeting",
  },
  {
    src: "https://assets.rumsan.net/rahat/20251111-152206.jpg",
    alt: "Rumsan team",
  },
];

export default function CareerImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full py-10 overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          slidesToScroll: 1,
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 lg:pl-8 basis-[85%] md:basis-[45%] lg:basis-[40%]"
            >
              <div
                className={`relative h-[200px] md:h-[300px] lg:h-[300px] transition-opacity duration-300 ${
                  index === current - 1 ? "opacity-100" : "opacity-80"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index + 1 ? "bg-[#3A4FEA] w-8" : "bg-gray-300 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
