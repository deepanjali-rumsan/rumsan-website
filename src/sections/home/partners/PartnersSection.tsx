"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Container } from "@/components/ui/container";

const partners = [
  {
    id: "gsma",
    title: "GSMA",
    logo: "https://assets.rumsan.net/rahat/gsma-rahat-funder.png",
  },
  {
    id: "crescent",
    title: "Crescent Enterprises",
    logo: "https://assets.rumsan.net/rumsan-group/cresent-enterprises-award.png",
  },
  {
    id: "stellar",
    title: "Stellar",
    logo: "https://assets.rumsan.net/rumsan-group/stellar-logo.png",
  },
  {
    id: "circle",
    title: "Circle Impact",
    logo: "https://assets.rumsan.net/rumsan-group/circle-rahat-partner.png",
  },
  {
    id: "gsr",
    title: "GSR Foundation",
    logo: "https://assets.rumsan.net/rumsan-group/partners-gsr-foundation.png",
  },
  {
    id: "google",
    title: "Google Startups for Sustainable Development",
    logo: "https://assets.rumsan.net/rumsan-group/partners-google-startup-png.png",
  },
  {
    id: "red-cross",
    title: "Danish Red Cross",
    logo: "https://assets.rumsan.net/rumsan-group/danish-redcross-logo-removebg-preview.png",
  },
  {
    id: "mercy-corps",
    title: "Mercy Corps",
    logo: "https://assets.rumsan.net/rahat/mercy-corps-partners-rahat.png",
  },
  {
    id: "unicef",
    title: "UNICEF",
    logo: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/unicef-fec-final.jpg",
  },
  {
    id: "villagecapital",
    title: "Village Capital",
    logo: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/village-capital-collab-logo.png",
  },
  {
    id: "mit-solve",
    title: "MIT Solve",
    logo: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/mit-solve-logo-home-page.png",
  },
];

// Split partners into two groups
const partnersFirst = partners.slice(0, 6);
const partnersSecond = partners.slice(6);

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
            className="py-8"
          >
            {partnersFirst.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.title}
                  width={200}
                  height={150}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Second Slider */}
          <InfiniteSlider
            gap={40}
            duration={35}
            durationOnHover={50}
            className="py-8"
            reverse
          >
            {partnersSecond.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-6 bg-white rounded-xl min-w-[200px] h-[150px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.title}
                  width={200}
                  height={150}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>
        </motion.div>
      </Container>
    </section>
  );
}
