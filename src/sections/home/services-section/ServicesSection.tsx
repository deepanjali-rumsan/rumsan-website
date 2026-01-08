"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState<"services" | "sectors">(
    "services"
  );
  const servicesRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current || !sectorsRef.current) return;

      const scrollTop = window.scrollY;
      const servicesTop = servicesRef.current.offsetTop;
      const sectorsTop = sectorsRef.current.offsetTop;
      const viewportMiddle = scrollTop + window.innerHeight / 2;

      if (viewportMiddle < sectorsTop) {
        setActiveTab("services");
      } else {
        setActiveTab("sectors");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: "services" | "sectors") => {
    if (section === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (section === "sectors" && sectorsRef.current) {
      sectorsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Section - Hero */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="sticky top-0 relative flex h-screen w-full flex-col bg-slate-900 p-8 text-white lg:p-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://assets.rumsan.net/rumsan-group/dsc-1842.jpg"
                alt="Background"
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-slate-800/30" />
            </div>

            {/* Content - Top Section */}
            <div className="relative z-10 flex flex-col justify-start space-y-8">
              <div>
                <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                  Innovation
                  <br />
                  Consulting
                </h1>
                <p className="mb-8 max-w-md text-base leading-relaxed text-white/90">
                  We help you navigate complexity with clear strategies and
                  future-ready tools that turn ideas into impact.
                </p>
                <Button className="h-auto rounded-lg bg-[#4252FF] px-6 py-3.5 text-base font-medium text-white hover:bg-blue-800 cursor-pointer">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="absolute right-0 top-[60%] z-20 w-[500px] hidden lg:flex flex-col items-end">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("services")}
                  className={`flex items-center justify-between rounded-s-lg px-30 py-4 text-left text-lg font-medium transition-all ${
                    activeTab === "services"
                      ? "bg-white text-slate-900 shadow-lg hover:bg-gray-50"
                      : "bg-slate-700/50 text-white backdrop-blur-sm hover:bg-slate-600/50"
                  }`}
                >
                  Our Services
                  {activeTab === "services" && (
                    <ArrowRight className="ml-3 h-5 w-5" />
                  )}
                </button>
                <button
                  onClick={() => scrollToSection("sectors")}
                  className={`flex items-center justify-between rounded-s-lg px-30 py-4 text-left text-lg font-medium transition-all ${
                    activeTab === "sectors"
                      ? "bg-white text-slate-900 shadow-lg hover:bg-gray-50"
                      : "bg-slate-700/50 text-white backdrop-blur-sm hover:bg-slate-600/50"
                  }`}
                >
                  Our Sectors
                  {activeTab === "sectors" && (
                    <ArrowRight className="ml-3 h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:col-span-7 flex w-full flex-col bg-stone-50">
          {/* Services Section */}
          <div
            ref={servicesRef}
            className=" px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-10"
          >
            <h5 className="text-sm md:text-base font-medium tracking-widest uppercase mb-3 text-gray-500">
              WHAT WE DO
            </h5>
            <div className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="mb-3 flex items-center gap-2 text-xl text-[#4252FF] font-semibold sm:text-2xl">
                Our
                <span className="text-gray-500">Services </span>
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Our work blends strategy, frontier technologies, and global
                delivery to solve real-world problems with practical, measurable
                impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-2 md:grid-cols-2 md:gap-4 lg:gap-4">
              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/b76aa1d121680c01de1fec6d7ef566cec77f9da5.jpg"
                    alt="Strategy & Innovation Advisory"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Strategy & Innovation Advisory
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Strategy & Innovation Advisory
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/933a9ae47def7afda0989236b403a7e7f5365812.jpg"
                    alt="Blockchain & Web3 Solutions"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Blockchain & Web3 Solutions
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Blockchain & Web3 Solutions
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58   sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/3bf29d55d19cc3cf21ce134a843025220414d5be.jpg"
                    alt="Artificial Intelligence & Automation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Artificial Intelligence & Automation
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Artificial Intelligence & Automation
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/bb6aa67663eb67ecebbbba2e1d4705934a6d85a3.jpg"
                    alt="Global Delivery & Team Augmentation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Global Delivery & Team Augmentation
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Global Delivery & Team Augmentation
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sectors Section */}
          <div
            ref={sectorsRef}
            className=" px-4 py-8 sm:px-6 sm:py-5 md:px-8 md:py-5 lg:px-12 lg:py-5 xl:px-16 xl:py-5"
          >
            <div className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-[#4252FF] sm:text-2xl">
                Our
                <span className="text-gray-500">Sectors </span>
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                We bring deep expertise across key industries, delivering
                tailored solutions that address sector-specific challenges and
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-2 md:grid-cols-2 md:gap-4 lg:gap-4">
              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rumsan-group/dsc-1842.jpg"
                    alt="Financial Services"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Financial Services
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Financial Services
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/dsc-1799.jpg"
                    alt="Healthcare & Life Sciences"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Healthcare & Life Sciences
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Healthcare & Life Sciences
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/img-5518.jpg"
                    alt="Education & Public Sector"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Education & Public Sector
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Education & Public Sector
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="group border-0 bg-white overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 relative rounded-2xl">
                <div className="relative w-full h-58 sm:h-56 md:h-64">
                  <Image
                    src="https://assets.rumsan.net/rahat/b76aa1d121680c01de1fec6d7ef566cec77f9da5.jpg"
                    alt="Retail & Consumer Goods"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                    }}
                  ></div>

                  {/* Default content (title only) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500 group-hover:opacity-0">
                    <h4 className="text-white text-xl md:text-2xl font-bold">
                      Retail & Consumer Goods
                    </h4>
                  </div>

                  {/* Hover content (title + Learn more) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Retail & Consumer Goods
                    </h4>
                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
