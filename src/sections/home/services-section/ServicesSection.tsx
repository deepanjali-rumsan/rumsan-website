"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TabContent {
  id: string;
  label: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

const leftPanelContent = {
  title: "WHAT WE DO",
  subtitle: "Innovation Consulting",
  description:
    "We help you navigate complexity with clear strategies and future-ready tools that turn ideas into impact.",
  backgroundImage: "https://assets.rumsan.net/rumsan-group/dsc-1842.jpg",
};

const tabsData: TabContent[] = [
  {
    id: "nature",
    label: "Nature",
    images: [
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1887.jpg",
        alt: "Mountain landscape",
        caption: "Strategy & Innovation Advisory",
      },
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1887.jpg",
        alt: "Misty forest",
        caption: "Blockchain & Web3 Solutions",
      },
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1887.jpg",
        alt: "Ocean waves",
        caption: "Artificial Intelligence & Automation",
      },
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1887.jpg",
        alt: "Wildflowers",
        caption: "Global Delivery & Team Augmentation",
      },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    images: [
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1842.jpg",
        alt: "Modern building",
        caption: "Urban Planning & Development",
      },
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1842.jpg",
        alt: "Classical architecture",
        caption: "Sustainable Architecture",
      },
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1842.jpg",
        alt: "Interior design",
        caption: "Interior Design Services",
      },
      {
        src: "https://assets.rumsan.net/rumsan-group/dsc-1842.jpg",
        alt: "City skyline",
        caption: "Smart City Solutions",
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const lastScrollY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, bottom } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (bottom < 0 || top > viewportHeight) {
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;

      const scrollStart = Math.max(0, -top);
      const containerHeight = container.offsetHeight;
      const scrollableHeight = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollableHeight));

      setScrollProgress(progress);

      const rawTabIndex = progress * tabsData.length;
      const newActiveTab = Math.min(
        tabsData.length - 1,
        Math.floor(rawTabIndex)
      );
      setActiveTab(newActiveTab);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${tabsData.length * 90}vh` }}
    >
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0 flex">
          {/* Left Panel */}
          <div className="w-full lg:w-auto relative overflow-hidden flex items-center justify-start">
            <div
              className="relative"
              style={{ width: "440px", height: "1024px", maxHeight: "100vh" }}
            >
              <Image
                src={leftPanelContent.backgroundImage || "/placeholder.svg"}
                alt={leftPanelContent.subtitle}
                fill
                className="object-cover rounded-tr-2xl rounded-br-2xl"
                priority
              />
              <div className="absolute inset-0 bg-black/40 rounded-tr-2xl rounded-br-2xl" />

              <div className="relative h-full flex items-center px-8 md:px-12 lg:px-16 py-12">
                <div className="text-white space-y-6">
                  <p className="text-xs md:text-sm font-medium tracking-widest uppercase opacity-90">
                    {leftPanelContent.title}
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                    {leftPanelContent.subtitle}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed max-w-sm text-pretty opacity-90">
                    {leftPanelContent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="hidden lg:flex lg:flex-1 bg-background relative">
            {tabsData.map((tab, tabIndex) => {
              const tabProgress = Math.max(
                0,
                Math.min(1, scrollProgress * tabsData.length - tabIndex)
              );
              const isActive = activeTab === tabIndex;
              const isPast = activeTab > tabIndex;

              let opacity = 0;
              let translateX = 0;

              if (isActive) {
                opacity = 1;
                translateX = 0;
              } else if (isPast) {
                opacity = 0;
                translateX = scrollDirection === "down" ? -100 : 100;
              } else {
                opacity = 0;
                translateX = scrollDirection === "down" ? 100 : -100;
              }

              return (
                <div
                  key={tab.id}
                  ref={(el) => {
                    sectionRefs.current[tabIndex] = el;
                  }}
                  className="absolute inset-0"
                >
                  <div className="w-full px-12 xl:px-20 py-16 flex flex-col justify-center h-full max-w-7xl">
                    {/* Tab indicators moved above "Our Services" with 6px margin */}
                    <div className="flex gap-3 w-fit mb-4">
                      {tabsData.map((t, index) => (
                        <div
                          key={t.id}
                          className={cn(
                            "h-1 rounded-full transition-all duration-300 ease-out",
                            index === activeTab
                              ? "w-10 md:w-16 bg-blue-600"
                              : "w-6 md:w-10 bg-gray-300"
                          )}
                        />
                      ))}
                    </div>

                    <div className="mb-12">
                      <h3 className="text-2xl xl:text-3xl font-bold mb-3 flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        Our Services
                      </h3>
                      <p className="text-muted-foreground text-base xl:text-lg">
                        We deliver four core service lines across three sectors
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 xl:gap-8">
                      {tab.images.map((image, imgIndex) => {
                        const baseDelay = imgIndex * 80;
                        const imageOpacity = isActive ? 1 : 0;
                        const imageTranslateX = isActive
                          ? 0
                          : scrollDirection === "down"
                          ? -60
                          : 60;

                        return (
                          <div
                            key={imgIndex}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
                            style={{
                              width: "auto",
                              height: "270px",
                              opacity: imageOpacity,
                              transform: `translateX(${imageTranslateX}px)`,
                              transition: `opacity 500ms ease-out ${baseDelay}ms, transform 500ms ease-out ${baseDelay}ms`,
                            }}
                          >
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                              <div className="absolute bottom-0 left-0 right-0 p-5 xl:p-7">
                                <p className="text-white text-base xl:text-lg font-semibold leading-tight text-balance">
                                  {image.caption}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
