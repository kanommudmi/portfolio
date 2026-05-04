import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Header: React.FC = () => {
  return (
    <header className="w-full relative border-b bg-background px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo/Site Title */}
        <Link to="/" className="text-xl font-bold">
          Anuvut Hoonchat
        </Link>

        {/* Navigation Links */}
        <nav className="hidden space-x-6 md:flex">
          <Link to="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary">
            About
          </Link>
          <Link to="/experience" className="text-foreground hover:text-primary">
            Experience
          </Link>
          <Link to="/projects" className="text-foreground hover:text-primary">
            Projects
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Right Section: Search and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost" size="icon"> */}
          {/*   <Search className="h-5 w-5" /> */}
          {/*   <span className="sr-only">Search</span> */}
          {/* </Button> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
