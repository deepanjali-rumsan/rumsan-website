"use client";

import { Container } from "@/components/ui/container";
import SectorCardItem from "./SectorCardItem";
import { sectors } from "@/src/lib/data/sectors";

export default function SectorCard() {
  return (
    <section className="py-10">
      <Container>
        <div className="space-y-8 md:space-y-12">
          {sectors.map((sector) => (
            <div key={sector.id} id={`sector-${sector.number}`}>
              <SectorCardItem
                id={sector.id}
                number={sector.number}
                title={sector.title}
                subtitle={sector.subtitle}
                description={sector.description}
                imageUrl={sector.imageUrl}
                imageAlt={sector.imageAlt}
                imagePosition={sector.imagePosition}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
