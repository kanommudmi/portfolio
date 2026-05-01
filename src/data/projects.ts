import type { Project } from "../types";

export const DUMMY_PROJECTS: Project[] = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dhggmrfe1/image/upload/v1777277519/Screenshot_2569-04-27_at_15.06.09_pmjxhs.png",
    title: "Sleepy Monkey Hotel",
    description:
      "A modern hotel booking website built with React, featuring room browsing, reservation system, and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Built a responsive hotel booking interface with room browsing and filtering",
      "Implemented booking system with modern UI/UX design principles",
    ],
    viewDetailsLink: "https://github.com/Pannnomaly/GroupProject-6-React",
    githubLink: "https://github.com/Pannnomaly/GroupProject-6-React",
    liveDemoLink: "https://group-project-6-react.vercel.app/",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dhggmrfe1/image/upload/v1777364078/Screenshot_2569-04-28_at_15.12.53_ojmsog.png",
    title: "Game Marketplace",
    description:
      "A full-featured e-commerce platform for video games with comprehensive game catalog, shopping cart, user authentication, and admin dashboard for game and order management.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Context API",
    ],
    features: [
      "Built responsive game marketplace with 60+ games across 6 categories (Action, Racing, RPG, Shooting, Sports, Strategy)",
      "Implemented complete e-commerce functionality: shopping cart, checkout, order history, and personalized wishlists",
      "Developed user authentication system with profile management, order tracking, and purchase history",
      "Created admin dashboard with full CRUD operations for games, users, and orders management",
      "Designed dynamic product detail pages with ratings, developer info, release dates, and system requirements",
      "Integrated mock payment processing with order confirmation and email notifications",
    ],
    viewDetailsLink: "https://github.com/kanommudmi/game-marketplace",
    githubLink: "https://github.com/kanommudmi/game-marketplace",
    liveDemoLink: "https://game-marketplace-rose.vercel.app/",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dhggmrfe1/image/upload/v1777364078/Screenshot_2569-04-28_at_15.13.51_vhglbd.png",
    title: "Colmar Academy",
    description:
      "A responsive educational academy website built with HTML and Tailwind CSS, featuring course listings, campus information, thesis exhibits, and multimedia integration.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
    ],
    features: [
      "Built responsive layouts with separate mobile/desktop navigation and content",
      "Implemented 6 course categories with detailed descriptions (Software Engineering, Computer Art, Design, Data, Business, Marketing)",
      "Added campus information sections for orientation, campus details, and guest lectures",
      "Integrated thesis exhibit section with video playback support",
      "Customized Tailwind CSS theme with mint color palette and Google Fonts (Poppins, Inter)",
      "Deployed to Vercel with optimized static hosting",
    ],
    viewDetailsLink: "https://github.com/kanommudmi/boy-colmar",
    githubLink: "https://github.com/kanommudmi/boy-colmar",
    liveDemoLink: "https://boy-colmar.vercel.app",
  },
];
