import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./project-card";
import type { Project } from "../types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef(null);
  const modalImageRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".project-card", {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.8,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //         end: "bottom top",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   }, sectionRef);
  //
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.fromTo(
        modalImageRef.current,
        { scale: 0.8, y: 50 },
        { scale: 1, y: 0, duration: 0.3, ease: "power3.out" },
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    gsap.to(modalImageRef.current, {
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power3.in",
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setSelectedProject(null);
      },
    });
  };

  return (
    <>
      <section className="py-16 w-full max-w-6xl px-4 mx-auto" ref={sectionRef}>
        <h2 className="text-5xl font-bold text-center text-white mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              <ProjectCard project={project} onImageClick={handleImageClick} />
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 opacity-0"
          onClick={handleCloseModal}
        >
          <div
            ref={modalImageRef}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-4 bg-gray-800 text-white rounded-full p-2 leading-none hover:bg-gray-700 focus:outline-none"
              aria-label="Close image view"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
