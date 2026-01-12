"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function ProjectsSection() {
  return (
    <section className="py-10" style={{ backgroundColor: "#FDFBF7" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#3A4FEA]">Our</span>{" "}
            <span className="text-gray-600">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            From financial inclusion to climate resilience, our projects combine
            strategy and technology to create measurable, lasting change.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Explore our works
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-15">
          {/* GigaBlocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2 h-90 md:h-[350px] lg:h-[470px]"
          >
            <Image
              src="https://assets.rumsan.net/rahat/7ab37386ca1cd28d39e2f45a733bd3958bc8f991.jpg"
              alt="GigaBlocks"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                GigaBlocks
              </h3>
            </div>

            {/* Hover content (full description + Learn more) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                GigaBlocks
              </h3>
              <Link
                href="/portfolio/gigablocks"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group/link"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Plastic Bank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2 h-90 md:h-[350px] lg:h-[470px]"
          >
            <Image
              src="https://assets.rumsan.net/rahat/9223b2a5bc54298a9034bf0802cc4f93d08f6406.png"
              alt="Plastic Bank"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Plastic Bank
              </h3>
            </div>

            {/* Hover content (full description + Learn more) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Plastic Bank
              </h3>
              <Link
                href="/portfolio/plastic-bank"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group/link"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Rahat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2 h-90 md:h-[350px] lg:h-[470px]"
          >
            <Image
              src="https://assets.rumsan.net/rahat/42f5599d6170eb6956a29c57ae0a012df9b7d0d8.jpg"
              alt="Rahat"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Rahat
              </h3>
            </div>

            {/* Hover content (full description + Learn more) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Rahat
              </h3>
              <Link
                href="/portfolio/unicef"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group/link"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
