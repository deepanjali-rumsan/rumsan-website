"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Container } from "@/components/ui/container";

export default function PartnersSection() {
  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* First Slider */}
          <InfiniteSlider
            gap={40}
            duration={30}
            durationOnHover={50}
            className="py-4"
          >
            {/* GSMA */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/gsma-rahat-funder.png"
                alt="GSMA"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Crescent Enterprises */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rumsan-group/cresent-enterprises-award.png"
                alt="Crescent Enterprises"
                width={200}
                height={150}
                className="max-w-full max-h-full object-cover"
              />
            </div>

            {/* Stellar */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rumsan-group/stellar-logo.png"
                alt="Stellar"
                width={200}
                height={150}
                className="max-w-full max-h-full object-cover"
              />
            </div>

            {/* Circle Impact */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rumsan-group/circle-rahat-partner.png"
                alt="Circle Impact"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* GSR Foundation */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rumsan-group/partners-gsr-foundation.png"
                alt="GSR Foundation"
                width={200}
                height={150}
                className="max-w-full max-h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/stacked---mcv-gray-1.png"
                alt="Google Startups for Sustainable Development"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/logo-horizontal4x.webp"
                alt="Google Startups for Sustainable Development"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Google Startups for Sustainable Development */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rumsan-group/partners-google-startup-png.png"
                alt="Google Startups for Sustainable Development"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/heifer-nepal-logoh-cmyk-600x247.png"
                alt="Heifer Nepal"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/nepal-red-cross-logo-english-1.svg"
                alt="Google Startups for Sustainable Development"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </InfiniteSlider>

          {/* Second Slider */}
          <InfiniteSlider
            gap={40}
            duration={35}
            durationOnHover={50}
            className="py-4"
            reverse
          >
            {/* Danish Red Cross */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rumsan-group/danish-redcross-logo-removebg-preview.png"
                alt="Danish Red Cross"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Mercy Corps */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/mercy-corps-partners-rahat.png"
                alt="Mercy Corps"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* UNICEF */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/unicef-fec-final.jpg"
                alt="UNICEF"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Village Capital */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/village-capital-collab-logo.png"
                alt="Village Capital"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* New Partner 1 */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/a7c0b4eb394b74531427bc98c1e3358a4d77c1cf.png"
                alt="Partner"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/plastic-bank-2024-logo.png"
                alt="Google Startups for Sustainable Development"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* New Partner 2 */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/4dff10d018a5eef08ada279e539f6125e653f251.png"
                alt="Partner"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* New Partner 3 */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/33b27c28e6830817cb9e8dbf7cc752a816b85d5f.png"
                alt="Partner"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]">
              <Image
                src="https://assets.rumsan.net/rahat/giga-logo.png"
                alt="Google Startups for Sustainable Development"
                width={200}
                height={150}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </InfiniteSlider>
        </motion.div>
      </Container>
    </section>
  );
}
