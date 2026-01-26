export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  viewDetailsLink: string;
  githubLink?: string;
  liveDemoLink?: string;
}
