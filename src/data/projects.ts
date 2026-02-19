import type { Project } from "../types";

export const DUMMY_PROJECTS: Project[] = [
  {
    id: "1",
    image: "https://placehold.co/600x400/1E293B/E2E8F0?text=Sleepy+Monkey+Hotel",
    title: "Sleepy Monkey Hotel",
    description:
      "A modern hotel booking website built with React, featuring room browsing, reservation system, and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Built a responsive hotel booking interface with room browsing and filtering",
      "Implemented booking system with modern UI/UX design principles",
    ],
    viewDetailsLink: "https://github.com/Pannnomaly/GroupProject-6-React",
    githubLink: "https://github.com/Pannnomaly/GroupProject-6-React",
    liveDemoLink: "https://group-project-6-react.vercel.app/",
  },
  {
    id: "2",
    image: "https://placehold.co/600x400/1E293B/E2E8F0?text=PokeArena+Preview",
    title: "PokeArena",
    description:
      "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
    technologies: ["Move", "Aptos", "NFTs", "React"],
    features: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic",
    ],
    viewDetailsLink: "#",
    liveDemoLink: "#",
  },
  {
    id: "3",
    image:
      "https://placehold.co/600x400/1E293B/E2E8F0?text=Lightning+Time+Preview",
    title: "Lightning Time",
    description:
      "A Bitcoin Lightning Network-powered time tracking web app that allows users to check in for work and automatically receive payments in Satoshis.",
    technologies: [
      "Bitcoin",
      "Lightning Network",
      "LNbits",
      "Soulbound Tokens",
    ],
    features: [
      "Built a real-time tracking system with automatic Bitcoin payments via Lightning Network",
      "Implemented an admin dashboard for monitoring work time and payment statistics",
    ],
    viewDetailsLink: "#",
    githubLink: "#",
    liveDemoLink: "#",
  },
];
