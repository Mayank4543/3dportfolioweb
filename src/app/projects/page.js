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

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-8 pb-20 sm:px-20">
      <h1 className="text-4xl font-bold mb-8 animate-fadeIn">Projects</h1>

      <p className="text-lg mb-10 max-w-3xl">
        Explore my latest projects showcasing my skills in web development,
        UI/UX design, and problem-solving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              {/* Placeholder for project images */}
              {/* <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              /> */}
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
