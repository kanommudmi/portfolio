import React from 'react';
import { Award, Briefcase, Code, GraduationCap, Heart } from 'lucide-react'; // Example icons

const About: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="space-y-16 p-4 py-16 sm:p-8 sm:py-24 lg:p-12 lg:py-32">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Passionate software engineer with a knack for building scalable and
            efficient web applications.
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8">
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
          <section className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
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
                  className="rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
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
        <section className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-6 flex items-center justify-center text-3xl font-semibold">
            <Heart className="mr-3 h-8 w-8 text-red-400" /> Interests
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span>Machine Learning</span>
            <span>Photography</span>
            <span>Hiking</span>
            <span>Reading Sci-Fi</span>
            <span>Gaming</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
