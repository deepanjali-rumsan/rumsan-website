"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardItemProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export default function ServiceCardItem({
  number,
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  imageAlt,
  imagePosition = "right",
}: ServiceCardItemProps) {
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
          className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[500px] md:min-h-0 ${
            isImageLeft ? "md:order-2" : ""
          }`}
        >
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {number}. {title}
          </h4>
          <p
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: "#4252FF" }}
          >
            {subtitle}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            {description}
          </p>

          {/* Learn More Link */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-base md:text-lg font-semibold mb-8 group w-fit"
            style={{ color: "#4252FF" }}
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm md:text-base rounded-full font-medium transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className={`p-8 md:p-10 lg:p-12 flex items-stretch min-h-[500px] md:min-h-0 ${
            isImageLeft ? "md:order-1" : ""
          }`}
        >
          <div className="relative w-full rounded-2xl overflow-hidden">
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


