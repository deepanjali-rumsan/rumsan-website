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
            <ServiceCardItem key={service.number} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

