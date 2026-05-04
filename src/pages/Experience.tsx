import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  duration: string;
  description: string[];
}

const workExperience: ExperienceItem[] = [
  {
    title: 'Work in South Korea',
    duration: 'Nov 2014 - Jul 2025',
    description: [
      'Packing, sorting, and picking fruits (apples, grapes, strawberries)',
      'Planting, watering, fertilizing, and general farm maintenance',
    ],
  },
  {
    title: 'Computer Technician (IT Technician)',
    duration: 'Jan 2011 - Feb 2012',
    description: [
      'Cleaning and maintaining hardware',
      'Upgrading RAM and SSD',
      'Installing Windows and applications',
      'Fixing system errors and boot issues',
      'Data backup and recovery',
    ],
  },
  {
    title: 'Civil Engineering Internship',
    duration: 'Oct 2010 - Jan 2010',
    description: [
      'Inspected construction work and read construction drawings',
      'Coordinated with foremen and contractors',
    ],
  },
];

const Experience: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(heroRef.current!, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(heroRef.current!.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Work Experience Section Animation
      gsap.from(workRef.current!, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: workRef.current!,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from('.work-experience-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: workRef.current!,
          start: 'top 75%',
          toggleActions: 'play none none none',
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
            My Experience
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            A snapshot of my professional journey and work experience.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mx-auto max-w-7xl" ref={workRef}>
          <h2 className="mb-8 flex items-center justify-center text-3xl font-semibold">
            <Briefcase className="mr-3 h-8 w-8 text-blue-400" /> Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((item, index) => (
              <div key={index} className="rounded-xl border bg-card p-6 shadow-sm md:p-8 experience-card work-experience-card">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </div>
                <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
