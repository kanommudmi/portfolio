import React from 'react';
import { Briefcase, Users, BookOpen } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const workExperience: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Developed and maintained scalable web applications using React, Node.js, and TypeScript.',
      'Implemented new features and optimized existing codebase, resulting in a 15% improvement in performance.',
      'Collaborated with cross-functional teams to define, design, and ship new products.',
      'Participated in code reviews and mentored junior developers.',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Web Innovations LLC',
    duration: 'Jun 2020 - Dec 2021',
    location: 'Austin, TX',
    description: [
      'Assisted in the development of client websites using HTML, CSS, and JavaScript.',
      'Debugged and resolved front-end issues, improving user experience.',
      'Learned version control with Git and participated in agile development cycles.',
    ],
  },
];

const leadershipExperience: ExperienceItem[] = [
  {
    title: 'Team Lead',
    company: 'University Coding Club',
    duration: 'Sep 2019 - May 2020',
    location: 'University Town, CA',
    description: [
      'Led a team of 5 students in developing a campus event management system.',
      'Organized weekly workshops on various programming topics for club members.',
      'Mentored new members, fostering a collaborative learning environment.',
    ],
  },
  {
    title: 'Volunteer Developer',
    company: 'Open Source Project X',
    duration: 'Mar 2019 - Aug 2019',
    location: 'Remote',
    description: [
      'Contributed to an open-source project by fixing bugs and adding minor features.',
      'Gained experience in collaborating with a distributed team and following project guidelines.',
    ],
  },
];

const researchExperience: ExperienceItem[] = [
  {
    title: 'Research Assistant',
    company: 'AI Research Lab',
    duration: 'Jan 2020 - May 2020',
    location: 'University Town, CA',
    description: [
      'Assisted PhD students in data collection and analysis for a machine learning project.',
      'Developed Python scripts to automate data preprocessing tasks.',
      'Contributed to a research paper on novel neural network architectures.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="space-y-16 p-4 py-16 sm:p-8 sm:py-24 lg:p-12 lg:py-32">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My Experience
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            A snapshot of my professional journey, contributions, and academic pursuits.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mx-auto max-w-7xl">
          <h2 className="mb-8 flex items-center justify-center text-3xl font-semibold">
            <Briefcase className="mr-3 h-8 w-8 text-blue-400" /> Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((item, index) => (
              <div key={index} className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 flex flex-col justify-between md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.company} &bull; {item.location}</p>
                  </div>
                  <p className="text-muted-foreground md:text-right">{item.duration}</p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Volunteering Section */}
        <section className="mx-auto max-w-7xl">
          <h2 className="mb-8 flex items-center justify-center text-3xl font-semibold">
            <Users className="mr-3 h-8 w-8 text-green-400" /> Leadership & Volunteering
          </h2>
          <div className="space-y-8">
            {leadershipExperience.map((item, index) => (
              <div key={index} className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 flex flex-col justify-between md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.company} &bull; {item.location}</p>
                  </div>
                  <p className="text-muted-foreground md:text-right">{item.duration}</p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Publications Section */}
        <section className="mx-auto max-w-7xl">
          <h2 className="mb-8 flex items-center justify-center text-3xl font-semibold">
            <BookOpen className="mr-3 h-8 w-8 text-purple-400" /> Research & Publications
          </h2>
          <div className="space-y-8">
            {researchExperience.map((item, index) => (
              <div key={index} className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 flex flex-col justify-between md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.company} &bull; {item.location}</p>
                  </div>
                  <p className="text-muted-foreground md:text-right">{item.duration}</p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
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
