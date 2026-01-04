export interface Job {
  id: string;
  slug: string;
  title: string;
  postedDate: string;
  deadline: string;
  jobType: string;
  postOpening: string;
  shortDescription: string;
  aboutTheRole: string;
  responsibilities: string[];
  requiredQualifications: string[];
  whatWeOffer: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    slug: "senior-blockchain-developer",
    title: "Senior Blockchain Developer",
    postedDate: "2025-02-12",
    deadline: "2026-02-27",
    jobType: "Full Time (Hybrid)",
    postOpening: "1",
    shortDescription:
      "We're looking for an experienced blockchain developer to help build decentralized solutions that create real-world impact for communities. You'll work on frontier-tech projects involving smart contracts, distributed systems, and",
    aboutTheRole:
      "We're looking for an experienced blockchain developer to help build decentralized solutions that create real-world impact for communities. You'll work on frontier-tech projects involving smart contracts, distributed systems, and innovative blockchain applications.",
    responsibilities: [
      "Design and implement smart contracts on Ethereum and other blockchain platforms.",
      "Build and maintain decentralized applications (dApps) for community-focused solutions.",
      "Collaborate with cross-functional teams to integrate blockchain technology into existing systems.",
      "Conduct security audits and optimize gas efficiency for smart contracts.",
      "Mentor junior developers and contribute to technical documentation.",
      "Stay updated with the latest blockchain technologies and best practices.",
    ],
    requiredQualifications: [
      "5+ years of software development experience with 3+ years in blockchain.",
      "Strong proficiency in Solidity and smart contract development.",
      "Experience with Web3.js, Ethers.js, and blockchain development tools.",
      "Understanding of cryptography, consensus mechanisms, and distributed systems.",
      "Proven track record of deploying production-ready smart contracts.",
      "Bachelor's degree in Computer Science or equivalent experience.",
    ],
    whatWeOffer: [
      "Competitive salary with equity options.",
      "Work on meaningful projects that impact communities.",
      "Flexible remote work arrangements.",
      "Professional development budget.",
      "Health insurance and wellness benefits.",
    ],
  },
  {
    id: "2",
    slug: "full-stack-engineer",
    title: "Full-Stack Engineer",
    postedDate: "2025-02-12",
    deadline: "2026-02-27",
    jobType: "Full Time (Hybrid)",
    postOpening: "1",
    shortDescription:
      "We're seeking a versatile full-stack engineer to build scalable web applications that drive digital innovation for communities. You'll work across the entire technology stack, from frontend interfaces to backend APIs and databases.",
    aboutTheRole:
      "We're seeking a versatile full-stack engineer to build scalable web applications that drive digital innovation for communities. You'll work across the entire technology stack, from frontend interfaces to backend APIs and databases.",
    responsibilities: [
      "Develop and maintain full-stack web applications using modern frameworks.",
      "Design and implement RESTful APIs and database schemas.",
      "Collaborate with designers and product managers to deliver user-centric solutions.",
      "Write clean, maintainable code and participate in code reviews.",
      "Optimize applications for performance and scalability.",
      "Troubleshoot and debug issues across the stack.",
    ],
    requiredQualifications: [
      "3+ years of full-stack development experience.",
      "Proficiency in JavaScript/TypeScript, React, and Node.js.",
      "Experience with database design and SQL/NoSQL databases.",
      "Understanding of RESTful API design and implementation.",
      "Familiarity with version control systems (Git).",
      "Bachelor's degree in Computer Science or equivalent experience.",
    ],
    whatWeOffer: [
      "Competitive salary with equity options.",
      "Work on meaningful projects that impact communities.",
      "Flexible remote work arrangements.",
      "Professional development budget.",
      "Health insurance and wellness benefits.",
    ],
  },
  {
    id: "3",
    slug: "community-manager",
    title: "Community Manager",
    postedDate: "2025-02-12",
    deadline: "2026-02-27",
    jobType: "Full Time (Hybrid)",
    postOpening: "1",
    shortDescription:
      "Be the bridge between Rumsan and the communities we serve. You'll build relationships, gather feedback, and ensure our technology solutions meet real community needs while fostering engagement and adoption.",
    aboutTheRole:
      "Be the bridge between Rumsan and the communities we serve. You'll build relationships, gather feedback, and ensure our technology solutions meet real community needs while fostering engagement and adoption.",
    responsibilities: [
      "Build and maintain relationships with community members and stakeholders.",
      "Gather feedback and insights to inform product development.",
      "Organize community events, workshops, and engagement activities.",
      "Create content for community communication channels.",
      "Monitor community engagement metrics and report on outcomes.",
      "Collaborate with product and engineering teams to address community needs.",
    ],
    requiredQualifications: [
      "2+ years of experience in community management or related field.",
      "Excellent communication and interpersonal skills.",
      "Experience with social media and community platforms.",
      "Ability to work with diverse communities and stakeholders.",
      "Strong organizational and project management skills.",
      "Bachelor's degree in Communications, Marketing, or equivalent experience.",
    ],
    whatWeOffer: [
      "Competitive salary with equity options.",
      "Work on meaningful projects that impact communities.",
      "Flexible remote work arrangements.",
      "Professional development budget.",
      "Health insurance and wellness benefits.",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

