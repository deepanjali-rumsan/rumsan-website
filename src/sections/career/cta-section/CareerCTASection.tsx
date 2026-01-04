"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function CareerCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://assets.rumsan.net/rahat/b13e15cdc2ea9a365f7a5dd3f19308a8777cb0de.jpg"
          alt="Career opportunity"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="relative min-h-[350px] md:min-h-[320px] flex flex-col justify-between">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6 md:space-y-8 pt-4 md:pt-6"
          >
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to
              <br />
              Join Our Team?
            </h2>

            {/* Sub-text */}
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
              Let&apos;s discuss how you can contribute to meaningful projects
              that create real-world impact and drive social change.
            </p>
          </motion.div>

          {/* Button positioned in lower right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="self-end md:self-start md:ml-auto mt-8 md:mt-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
