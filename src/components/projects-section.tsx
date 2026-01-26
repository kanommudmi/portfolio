import React from "react";
import ProjectCard from "./project-card";
import type { Project } from "../types";

const DUMMY_PROJECTS: Project[] = [
  {
    id: "1",
    image: "https://placehold.co/600x400/1E293B/E2E8F0?text=Zenith+Preview",
    title: "Zenith",
    description:
      "A decentralized music application enabling artists to mint and sell their music as NFTs.",
    technologies: ["Solidity", "Polygon", "Ethereum", "IPFS"],
    features: [
      "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon",
    ],
    viewDetailsLink: "#",
    githubLink: "#",
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

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 w-full max-w-6xl px-4 mx-auto">
      <h2 className="text-5xl font-bold text-center text-white mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
