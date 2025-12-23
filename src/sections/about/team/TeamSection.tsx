"use client";

import { Container } from "@/components/ui/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { teamMembers } from "./team-data";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function TeamSection() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-20">
      <Container>
        {/* Header */}
        <div className="flex items-start justify-between mb-8 md:mb-12">
          <div>
            <h5 className="text-sm md:text-base font-medium tracking-widest uppercase mb-3 text-gray-500">
              EXECUTIVES
            </h5>
            <h2>
              <span style={{ color: "#4252FF" }}>Meet Our</span>{" "}
              <span className="text-gray-600">Team</span>
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <div className="flex items-center justify-between mb-4">
              <div></div>
              <div className="flex gap-2">
                <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                <CarouselNext className="relative right-0 top-0 translate-y-0" />
              </div>
            </div>
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Image with overlay text */}
                    <div className="relative w-full aspect-[3/4] bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient overlay at bottom for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                      {/* Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm md:text-base text-white/90">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
