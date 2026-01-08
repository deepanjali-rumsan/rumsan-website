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
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function TeamSection() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-10">
      <Container>
        {/* Header */}
        <div className="flex items-start justify-between mb-8 md:mb-12">
          <div>
            <h5 className="text-sm md:text-base font-medium tracking-widest uppercase mb-3 text-gray-500">
              EXECUTIVES
            </h5>
            <h2>
              <span className="text-[#4252FF]">Meet Our</span>{" "}
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
              {/* Rumee Singh */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rumsan-group/rumee-singh-exec-team.jpg"
                      alt="Rumee Singh"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Rumee Singh
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        CEO and Co-Founder
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Santosh Shrestha */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rumsan-group/santosh-shrestha-exec-team.jpg"
                      alt="Santosh Shrestha"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Santosh Shrestha
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        CTO and Co-Founder
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Ruchin Singh */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rumsan-group/ruchin-singh-exec-team.jpg"
                      alt="Ruchin Singh"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Ruchin Singh
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        COO and Co-founder
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Shristi Piya */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rumsan-group/shristi-piya-exec-team.jpg"
                      alt="Shristi Piya"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Shristi Piya
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        Chief Development Officer
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Raktim Shrestha */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rumsan-group/raktim-shrestha-exec-team.jpg"
                      alt="Raktim Shrestha"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Raktim Shrestha
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        Chief Solutions Architect
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Manjik Shrestha */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rumsan-group/manjik-shrestha-exce-team.jpg"
                      alt="Manjik Shrestha"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Manjik Shrestha
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        Chief Blockchain Officer
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Nishu Bade Shrestha */}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px]">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gray-200">
                    <Image
                      src="https://assets.rumsan.net/rahat/pp-nishu.jpg"
                      alt="Nishu Bade Shrestha"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Nishu Bade Shrestha
                      </h4>
                      <p className="text-sm md:text-base text-white/90">
                        Head of Business Development
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
