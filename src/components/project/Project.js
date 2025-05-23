"use client"; // Add this directive to mark the file as a Client Component

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects showcasing my skills and expertise",
};

const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A responsive task management application with drag-and-drop functionality and user authentication.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Material UI", "DnD"],
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with animated UI elements and modern design principles.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "Animation"],
  },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-[#0a001f] mt-[10] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* Cosmic Background with Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
              }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f]/80 to-[#1a0033]/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center perspective-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 transform-style-3d animate-pulse hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-500">
            <span className="bg-gradient-to-r from-[#ff66cc] to-[#66ccff] bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn">
            Explore my latest projects showcasing my skills in web development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Floating 3D Orbs */}
        <div className="absolute top-[10%] left-[10%] animate-spin-slow">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff66cc] to-[#66ccff] transform-style-3d rotate-x-45 rotate-y-45 shadow-lg shadow-[#ff66cc]/50"></div>
        </div>
        <div className="absolute bottom-[15%] right-[10%] animate-spin-slow">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#66ccff] to-[#ff66cc] transform-style-3d rotate-x-60 rotate-y-60 shadow-lg shadow-[#66ccff]/50"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative px-8 sm:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group bg-[#1a1a40]/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-style-3d hover:scale-105 hover:-translate-z-10 hover:border-[#ff66cc]/50 border border-transparent animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a001f]/80 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
                <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                {/* Placeholder for project images */}
                {/* <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-[#ff66cc] to-[#66ccff] bg-clip-text text-transparent transition-colors duration-300 group-hover:from-[#66ccff] group-hover:to-[#ff66cc]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 transition-opacity duration-300 group-hover:opacity-80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-[#ff66cc]/20 text-[#ff66cc] transition-colors duration-300 group-hover:bg-[#66ccff]/20 group-hover:text-[#66ccff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CSS for Animations and 3D Effects */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .rotate-x-45 {
          transform: rotateX(45deg);
        }

        .rotate-y-45 {
          transform: rotateY(45deg);
        }

        .rotate-x-60 {
          transform: rotateX(60deg);
        }

        .rotate-y-60 {
          transform: rotateY(60deg);
        }

        .hover\\:rotate-x-6:hover {
          transform: rotateX(6deg);
        }

        .hover\\:rotate-y-6:hover {
          transform: rotateY(6deg);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:-translate-z-10:hover {
          transform: translateZ(-10px);
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
