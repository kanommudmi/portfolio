import React, { useEffect, useRef } from "react";
import {
  Code,
  GraduationCap,
  Globe,
  Heart,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const interestsRef = useRef<HTMLElement>(null);
  const languagesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(heroRef.current!, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(heroRef.current!.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });

      // Introduction Section Animation
      gsap.from(introRef.current!, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current!,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Skills Section Animation
      gsap.from(skillsRef.current!, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current!,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".skill-tag", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Education Section Animation
      gsap.from(educationRef.current!, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current!,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Interests Section Animation
      gsap.from(interestsRef.current!, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: interestsRef.current!,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".interest-tag", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: interestsRef.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Languages Section Animation
      gsap.from(languagesRef.current!, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: languagesRef.current!,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".lang-tag", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: languagesRef.current!,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex-1">
      <div className="space-y-16 p-4 py-16 sm:p-8 sm:py-24 lg:p-12 lg:py-32">
        {/* Hero Section */}
        <section className="text-center" ref={heroRef}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Motivated Junior Software Developer with a background in Civil
            Engineering and hands-on experience in computer repair. Recently
            graduated from Generation Bootcamp, specializing in the MERN stack.
          </p>
        </section>

        {/* Introduction Section */}
        <section
          className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8"
          ref={introRef}
        >
          <h2 className="mb-6 text-center text-3xl font-semibold">Who I Am</h2>
          <div className="prose mx-auto max-w-4xl text-muted-foreground">
            <p>
              Hello! I'm Anuvut Hoonchat, a Junior Software Developer with a
              unique background that blends Civil Engineering and hands-on IT
              experience. My journey into software development began with a
              career shift — after working in construction and computer repair,
              I decided to pursue my passion for coding by joining the
              Generation Thailand Bootcamp.
            </p>
            <p className="mt-4">
              During the bootcamp, I specialized in the MERN stack (MongoDB,
              Express, React, Node.js) and gained practical experience building
              full-stack web applications. I thrive in environments where I can
              continuously learn and apply new skills to overcome technical
              challenges.
            </p>
            <p className="mt-4">
              I believe in writing clean, maintainable code and I'm always eager
              to learn new technologies. My diverse background has taught me
              adaptability, strong problem-solving skills, and the importance of
              teamwork — qualities I bring to every project I work on.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Skills Section */}
          <section
            className="rounded-xl border bg-card p-6 shadow-sm md:p-8"
            ref={skillsRef}
          >
            <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
              <Code className="mr-3 h-8 w-8 text-blue-400" /> My Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Express",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section
            className="rounded-xl border bg-card p-6 shadow-sm md:p-8"
            ref={educationRef}
          >
            <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
              <GraduationCap className="mr-3 h-8 w-8 text-green-400" />{" "}
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  Junior Software Developer Bootcamp
                </h3>
                <p className="text-muted-foreground">Generation Thailand</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Oct 2025 - Jan 2026
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built full-stack web applications using React,
                  Node.js/Express, and MongoDB with Mongoose. Created MERN Stack
                  CRUD projects with React (React Router, Axios), Express REST
                  API, and MongoDB via Mongoose.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor in Civil Engineering
                </h3>
                <p className="text-muted-foreground">
                  Rajamangala University of Technology Isan
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Aug 2007 - Oct 2010
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Focused on designing, constructing, and maintaining
                  infrastructure such as buildings, roads, bridges, dams, and
                  water systems.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Interests Section */}
        <section
          className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8"
          ref={interestsRef}
        >
          <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
            <Heart className="mr-3 h-8 w-8 text-red-400" /> Interests
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "programming",
              "movies",
              "Technology",
              "blockchain",
              "Gaming",
              "investing",
            ].map((interest) => (
              <span
                key={interest}
                className="interest-tag rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section
          className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8"
          ref={languagesRef}
        >
          <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
            <Globe className="mr-3 h-8 w-8 text-blue-400" /> Languages
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Thai (Native Language)",
              "English (Basic)",
              "Korean (Level 2 - Beginner)",
            ].map((lang) => (
              <span
                key={lang}
                className="lang-tag rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
