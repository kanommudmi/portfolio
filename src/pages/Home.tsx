import React, { useEffect, useRef } from "react";
import ProjectsSection from "../components/projects-section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage: React.FC = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });

      // Technical Skills Section Animation
      gsap.from(skillsRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".skill-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-20" ref={heroRef}>
        <h1 className="text-5xl font-bold mb-4">Anuvut Hoonchat</h1>
        <p className="text-xl">Full Stack Developer</p>
      </section>

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* Technical Skills Section */}
      <section
        className="rounded-lg py-16 mb-10 w-full max-w-4xl px-4 bg-gray-100 dark:bg-gray-900"
        ref={skillsRef}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <li className="skill-item">React</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">TypeScript</li>
          <li className="skill-item">Tailwind CSS</li>
          <li className="skill-item">Database</li>
          <li className="skill-item">Cloud</li>
        </ul>
      </section>
    </div>
  );
};

export default PortfolioPage;
