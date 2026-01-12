export interface Sector {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  services: {
    icon: string;
    title: string;
  }[];
  detailedDescription?: string;
}

export const sectors: Sector[] = [
  {
    id: "impact-companies",
    number: "1",
    title: "Rumsan For Impact Companies",
    subtitle: "Scaling Purpose With Technology",
    description:
      "We help purpose-driven organizations use technology to scale their mission, prove their impact, and build trust with customers, partners, and investors. Impact companies operate in complex environments balancing mission, sustainability, and growth. We provide the digital infrastructure, tools, and expertise to help them navigate these challenges and amplify their positive impact.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Impact companies technology",
    imagePosition: "right",
    detailedDescription:
      "We help purpose-driven organizations use technology to scale their mission, prove their impact, and build trust with customers, partners, and investors. Impact companies operate in complex environments balancing mission, sustainability, and growth. We provide the digital infrastructure, tools, and expertise to help them navigate these challenges and amplify their positive impact.",
    services: [
      {
        icon: "sparkles",
        title: "Digital product design (Web, Mobile, Portals, dashboards)",
      },
      {
        icon: "zap",
        title: "Blockchain-powered reward & incentive mechanisms",
      },
      {
        icon: "users",
        title: "Team augmentation for long-term engineering capacity",
      },
      {
        icon: "wave",
        title: "AI tools for impact reporting, analytics & workflow automation",
      },
      {
        icon: "rocket",
        title: "From MVP to scale: roadmap, architecture & global rollout",
      },
      {
        icon: "lock",
        title: "Traceability & transparency systems",
      },
    ],
  },
  {
    id: "government",
    number: "2",
    title: "Rumsan For Government",
    subtitle: "Building Systems For Accountability",
    description:
      "Governments need systems that are secure, citizen-centric, and built for long-term adoption. We help public sector organizations design and implement digital solutions that enhance transparency, improve service delivery, and build public trust. Our approach combines rigorous security practices, user-centered design, and sustainable technology choices that serve citizens effectively.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    imageAlt: "Government digital systems",
    imagePosition: "left",
    detailedDescription:
      "Governments need systems that are secure, citizen-centric, and built for long-term adoption. We help public sector organizations design and implement digital solutions that enhance transparency, improve service delivery, and build public trust. Our approach combines rigorous security practices, user-centered design, and sustainable technology choices that serve citizens effectively.",
    services: [
      {
        icon: "sparkles",
        title: "Digital product design (Web, Mobile, Portals, dashboards)",
      },
      {
        icon: "zap",
        title: "Blockchain-powered reward & incentive mechanisms",
      },
      {
        icon: "users",
        title: "Team augmentation for long-term engineering capacity",
      },
      {
        icon: "wave",
        title: "AI tools for impact reporting, analytics & workflow automation",
      },
      {
        icon: "rocket",
        title: "From MVP to scale: roadmap, architecture & global rollout",
      },
      {
        icon: "lock",
        title: "Traceability & transparency systems",
      },
    ],
  },
  {
    id: "humanitarian-development",
    number: "3",
    title: "Rumsan For Humanitarian And Development Partners",
    subtitle: "Delivering Aid Efficiently, Transparently, And At Scale",
    description:
      "We build reliable, secure digital tools that help humanitarian and development organizations deliver aid efficiently, transparently, and at scale. From cash transfer systems to program management platforms, our solutions are designed for challenging field conditions, diverse user needs, and long-term sustainability. We work closely with local partners, governments, and field teams to ensure our technology serves those who need it most.",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    imageAlt: "Humanitarian and development technology",
    imagePosition: "right",
    detailedDescription:
      "We build reliable, secure digital tools that help humanitarian and development organizations deliver aid efficiently, transparently, and at scale. From cash transfer systems to program management platforms, our solutions are designed for challenging field conditions, diverse user needs, and long-term sustainability. We work closely with local partners, governments, and field teams to ensure our technology serves those who need it most.",
    services: [
      {
        icon: "sparkles",
        title: "Digital product design (Web, Mobile, Portals, dashboards)",
      },
      {
        icon: "zap",
        title: "Blockchain-powered reward & incentive mechanisms",
      },
      {
        icon: "users",
        title: "Team augmentation for long-term engineering capacity",
      },
      {
        icon: "wave",
        title: "AI tools for impact reporting, analytics & workflow automation",
      },
      {
        icon: "rocket",
        title: "From MVP to scale: roadmap, architecture & global rollout",
      },
      {
        icon: "lock",
        title: "Traceability & transparency systems",
      },
    ],
  },
];

export function getSectorById(id: string): Sector | undefined {
  return sectors.find((sector) => sector.id === id);
}
