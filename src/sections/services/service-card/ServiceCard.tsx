"use client";

import { Container } from "@/components/ui/container";
import ServiceCardItem from "./ServiceCardItem";

export default function ServiceCard() {
  return (
    <section className="py-10">
      <Container>
        <div className="space-y-8 md:space-y-12">
          {/* Strategy & Innovation Advisory */}
          <div id="service-1">
            <ServiceCardItem
              number="1"
              title="Strategy & Innovation Advisory"
              subtitle="Turning Bold Ideas Into Responsible, Scalable Digital Solutions"
              description="We guide organizations through digital transformation with clear strategies, human-centered system design, and responsible technology planning. Our advisory ensures that every solution we design is practical, ethical, and ready for real-world adoption. From initial concept to implementation roadmap, we help you navigate complex challenges and make informed decisions that drive sustainable impact."
              imageUrl="https://assets.rumsan.net/rahat/dsc-1894.webp"
              imageAlt="Team collaboration"
              imagePosition="right"
            />
          </div>

          {/* Blockchain & Web3 Solutions */}
          <div id="service-2">
            <ServiceCardItem
              number="2"
              title="Blockchain & Web3 Solutions"
              subtitle="Building Transparent, Secure, And Verifiable Digital Infrastructure"
              description="We build blockchain-powered systems that enhance transparency, accountability, and data integrity across humanitarian, educational, agricultural, and public-sector platforms. Our solutions leverage cutting-edge Web3 technologies to create trustless, decentralized systems that empower communities and ensure verifiable, tamper-proof records."
              imageUrl="https://assets.rumsan.net/rahat/3bf29d55d19cc3cf21ce134a843025220414d5be.jpg"
              imageAlt="Blockchain network visualization"
              imagePosition="left"
            />
          </div>

          {/* Artificial Intelligence And Automation */}
          <div id="service-3">
            <ServiceCardItem
              number="3"
              title="Artificial Intelligence & Automation"
              subtitle="AI Systems That Understand Your Organization And Enhance Your Operations"
              description="We build AI-powered tools that turn documents into knowledge, data into insights, and complex workflows into automated processes securely and responsibly. Our AI solutions are built for impact: intelligent workspaces, RAG-powered document intelligence, and predictive analytics that help organizations make better decisions faster."
              imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
              imageAlt="AI and data analytics visualization"
              imagePosition="right"
            />
          </div>

          {/* Global Delivery & Team Augmentation */}
          <div id="service-4">
            <ServiceCardItem
              number="4"
              title="Global Delivery & Team Augmentation"
              subtitle="Extend Your Capacity With Dedicated Engineering, Design, And Product Teams."
              description="We provide skilled, cross-functional teams that integrate seamlessly into your workflow —helping you deliver faster, reduce costs, and scale efficiently. Our global delivery model gives you access to experienced developers, designers, analysts, and product experts with deep knowledge of Web, Mobile, Blockchain, and AI. Whether you need a long-term team or flexible project-based support, we ensure reliable, high-quality delivery."
              imageUrl="https://assets.rumsan.net/rahat/20241114-112131-720.jpg"
              imageAlt="Global delivery and team augmentation"
              imagePosition="left"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
