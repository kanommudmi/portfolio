import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative border-t bg-card py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Anuvut Hoonchat. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
