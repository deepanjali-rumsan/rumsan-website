"use client";

import { Container } from "@/components/ui/container";
import SectorCardItem from "./SectorCardItem";
import { sectorsData } from "./sectors-data";

export default function SectorCard() {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-8 md:space-y-12">
          {sectorsData.map((sector) => (
            <SectorCardItem
              key={sector.number}
              number={sector.number}
              title={sector.title}
              subtitle={sector.subtitle}
              description={sector.description}
              imageUrl={sector.imageUrl}
              imageAlt={sector.imageAlt}
              imagePosition={sector.imagePosition}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

