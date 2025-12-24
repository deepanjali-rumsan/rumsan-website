export interface ServiceData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export const servicesData: ServiceData[] = [
  {
    number: "1",
    title: "Strategy & Innovation Advisory",
    subtitle: "Turning Bold Ideas Into Responsible, Scalable Digital Solutions",
    description:
      "We guide organizations through digital transformation with clear strategies, human-centered system design, and responsible technology planning. Our advisory ensures that every solution we design is practical, ethical, and ready for real-world adoption. From initial concept to implementation roadmap, we help you navigate complex challenges and make informed decisions that drive sustainable impact.",
    tags: [
      "Digital transformation & innovation strategy",
      "System & architecture design",
      "Pilot design & experimentation frameworks",
      "Implementation roadmap & governance",
      "Responsible technology assessments",
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "Team collaboration",
    imagePosition: "right",
  },
  {
    number: "2",
    title: "Blockchain & Web3 Solutions",
    subtitle: "Building Transparent, Secure, And Verifiable Digital Infrastructure",
    description:
      "We build blockchain-powered systems that enhance transparency, accountability, and data integrity across humanitarian, educational, agricultural, and public-sector platforms. Our solutions leverage cutting-edge Web3 technologies to create trustless, decentralized systems that empower communities and ensure verifiable, tamper-proof records.",
    tags: [
      "Decentralized Identifiers (DID)",
      "Tokenized CVA & Anticipatory Action",
      "Supply-Chain Traceability",
      "On-Chain Data Mirroring",
      "Stablecoin Integrations",
      "NFT & On-Chain Asset Generation",
      "Smart Contracts and Blockchain Oracles",
    ],
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    imageAlt: "Blockchain network visualization",
    imagePosition: "left",
  },
  {
    number: "3",
    title: "AI And Data Analytics",
    subtitle: "AI Systems That Understand Your Organization And Enhance Your Operations",
    description:
      "We build AI-powered tools that turn documents into knowledge, data into insights, and complex workflows into automated processes securely and responsibly. Our AI solutions are built for impact: intelligent workspaces, RAG-powered document intelligence, and predictive analytics that help organizations make better decisions faster.",
    tags: [
      "Rumsan AI intelligent workspace",
      "AI chatbots & support assistants",
      "RAG + document intelligence systems",
      "Custom LLM integrations",
      "Predictive analytics (climate, health, operations)",
      "Automated workflows & decision support",
    ],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    imageAlt: "AI and data analytics visualization",
    imagePosition: "right",
  },
  {
    number: "4",
    title: "Global Delivery And Team Augmentation",
    subtitle: "Extend Your Capacity With Dedicated Engineering, Design, And Product Teams.",
    description:
      "We provide skilled, cross-functional teams that integrate seamlessly into your workflow —helping you deliver faster, reduce costs, and scale efficiently. Our global delivery model gives you access to experienced developers, designers, analysts, and product experts with deep knowledge of Web, Mobile, Blockchain, and AI. Whether you need a long-term team or flexible project-based support, we ensure reliable, high-quality delivery.",
    tags: [
      "Dedicated engineering teams",
      "Design & UX teams",
      "Product management & strategy",
      "Full-stack development (Web & Mobile)",
      "Blockchain & Web3 development",
      "AI/ML engineering & integration",
      "Quality assurance & testing",
      "DevOps & cloud infrastructure",
    ],
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    imageAlt: "Global delivery and team augmentation",
    imagePosition: "left",
  },
];


