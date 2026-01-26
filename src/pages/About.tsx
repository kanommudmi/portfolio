import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, Code, GraduationCap, Heart } from 'lucide-react'; // Example icons
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const interestsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Introduction Section Animation
      gsap.from(introRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Skills Section Animation
      gsap.from(skillsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(".skill-tag", {
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

      // Education Section Animation
      gsap.from(educationRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Interests Section Animation
      gsap.from(interestsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: interestsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from(".interest-tag", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: interestsRef.current,
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
            Passionate software engineer with a knack for building scalable and
            efficient web applications.
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8" ref={introRef}>
          <h2 className="mb-6 text-center text-3xl font-semibold">Who I Am</h2>
          <div className="prose mx-auto max-w-4xl text-muted-foreground">
            <p>
              Hello! I'm Anuvut Hoonchat, a dedicated software engineer with a strong foundation in modern web technologies. My journey into software development began with a fascination for problem-solving and creating impactful digital experiences. I thrive in environments where I can continuously learn and apply new skills to overcome technical challenges.
            </p>
            <p className="mt-4">
              Over the years, I've had the privilege of working on diverse projects, ranging from developing robust backend systems to crafting intuitive user interfaces. I believe in writing clean, maintainable, and efficient code that stands the test of time. My expertise spans across various programming languages and frameworks, always with an eye towards best practices and emerging trends.
            </p>
            <p className="mt-4">
              Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active through various hobbies. I'm always eager to connect with fellow enthusiasts and collaborate on exciting ventures.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Skills Section */}
          <section className="rounded-xl border bg-card p-6 shadow-sm md:p-8" ref={skillsRef}>
            <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
              <Code className="mr-3 h-8 w-8 text-blue-400" /> My Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go',
                'Tailwind CSS', 'GraphQL', 'REST APIs', 'SQL', 'NoSQL', 'AWS', 'Docker',
                'Kubernetes', 'Git', 'CI/CD',
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
          <section className="rounded-xl border bg-card p-6 shadow-sm md:p-8" ref={educationRef}>
            <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
              <GraduationCap className="mr-3 h-8 w-8 text-green-400" /> Education
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University Name, City, State</p>
                <p className="mt-1 text-sm text-muted-foreground">Graduated: May 20XX</p>
                <p className="text-sm text-muted-foreground">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management</p>
              </div>
              {/* Add more education entries if needed */}
            </div>
          </section>
        </div>

        {/* Interests Section */}
        <section className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8" ref={interestsRef}>
          <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
            <Heart className="mr-3 h-8 w-8 text-red-400" /> Interests
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning',
              'Photography',
              'Hiking',
              'Reading Sci-Fi',
              'Gaming',
            ].map((interest) => (
              <span key={interest} className="interest-tag rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
