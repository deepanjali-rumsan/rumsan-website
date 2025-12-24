"use client";

import { Container } from "@/components/ui/container";
import ServiceCardItem from "./ServiceCardItem";
import { servicesData } from "./services-data";

export default function ServiceCard() {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-8 md:space-y-12">
          {servicesData.map((service) => (
            <ServiceCardItem
              key={service.number}
              number={service.number}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              imagePosition={service.imagePosition}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

