"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectorCardItemProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export default function SectorCardItem({
  id,
  number,
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  imagePosition = "right",
}: SectorCardItemProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
      <div
        className={`grid md:grid-cols-2 gap-0 md:items-stretch ${
          isImageLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div
          className={`p-6 md:p-10 lg:p-12 flex flex-col justify-center md:min-h-0 ${
            isImageLeft ? "md:order-2" : ""
          }`}
        >
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {number}. {title}
          </h4>
          <p className="text-xl md:text-2xl font-semibold mb-6 text-[#3A4FEA]">
            {subtitle}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            {description}
          </p>

          {/* Learn More Link */}
          <Link
            href={`/sectors/${id}`}
            className="inline-flex items-center gap-2 text-base md:text-lg font-semibold mb-8 group w-fit text-[#3A4FEA]"
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Image */}
        <div
          className={`p-6 md:p-10 lg:p-12 flex items-stretch md:min-h-0 ${
            isImageLeft ? "md:order-1" : ""
          }`}
        >
          <div className="relative w-full rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
