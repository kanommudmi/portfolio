import React from "react";
import ProjectsSection from "../components/projects-section"; // Correctly import ProjectsSection

const PortfolioPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Anuvut Hoonchat</h1>
        <p className="text-xl">Full Stack Developer</p>
      </section>

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* Technical Skills Section */}
      <section className="py-16 mb-10 w-full max-w-4xl px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <li>React</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Database</li>
          <li>Cloud</li>
        </ul>
      </section>
    </div>
  );
};

export default PortfolioPage;
