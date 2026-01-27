import React from 'react';
import type { Project } from '../types';
import { Button } from './ui/button';
import { ArrowUpRight, Github, Link } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onImageClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onImageClick,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => onImageClick(project)}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="text-gray-300 text-sm mb-6 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ArrowUpRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="text-white border-gray-600 hover:bg-gray-700"
            asChild
          >
            <a
              href={project.viewDetailsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <div className="flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Link className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
