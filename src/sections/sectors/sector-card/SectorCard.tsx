"use client";

import { Container } from "@/components/ui/container";
import SectorCardItem from "./SectorCardItem";

export default function SectorCard() {
  return (
    <section className="py-10">
      <Container>
        <div className="space-y-8 md:space-y-12">
          {/* Rumsan For Impact Companies */}
          <SectorCardItem
            number="1"
            title="Rumsan For Impact Companies: Scaling Purpose With Technology"
            subtitle="Scaling Purpose With Technology"
            description="We help purpose-driven organizations use technology to scale their mission, prove their impact, and build trust with customers, partners, and investors. Impact companies operate in complex environments balancing mission, sustainability, and growth. We provide the digital infrastructure, tools, and expertise to help them navigate these challenges and amplify their positive impact."
            imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
            imageAlt="Impact companies technology"
            imagePosition="right"
          />

          {/* Rumsan For Government */}
          <SectorCardItem
            number="2"
            title="Rumsan For Government: Building Systems For Accountability"
            subtitle="Building Systems For Accountability"
            description="Governments need systems that are secure, citizen-centric, and built for long-term adoption. We help public sector organizations design and implement digital solutions that enhance transparency, improve service delivery, and build public trust. Our approach combines rigorous security practices, user-centered design, and sustainable technology choices that serve citizens effectively."
            imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
            imageAlt="Government digital systems"
            imagePosition="left"
          />

          {/* Rumsan For Humanitarian And Development Partners */}
          <SectorCardItem
            number="3"
            title="Rumsan For Humanitarian And Development Partners"
            subtitle="Delivering Aid Efficiently, Transparently, And At Scale"
            description="We build reliable, secure digital tools that help humanitarian and development organizations deliver aid efficiently, transparently, and at scale. From cash transfer systems to program management platforms, our solutions are designed for challenging field conditions, diverse user needs, and long-term sustainability. We work closely with local partners, governments, and field teams to ensure our technology serves those who need it most."
            imageUrl="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
            imageAlt="Humanitarian and development technology"
            imagePosition="right"
          />
        </div>
      </Container>
    </section>
  );
}

