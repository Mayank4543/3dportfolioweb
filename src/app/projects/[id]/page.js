"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Import the projects data
import { projects } from "../../../components/project/Project";

export default function ProjectDetail({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === params.id);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a001f] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a001f] text-white pt-24 px-8 pb-20 sm:px-20">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-[#ff66cc] to-[#66ccff] rounded-lg text-white font-medium hover:opacity-90 transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a001f] text-white pt-24 px-8 pb-20 sm:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-[#66ccff] hover:text-[#ff66cc] transition-colors duration-200 inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff66cc] to-[#66ccff] bg-clip-text text-transparent animate-fadeIn">
          {project.title}
        </h1>

        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
              {project.details &&
                project.details.map((detail, index) => (
                  <li key={index} className="pl-2">
                    {detail}
                  </li>
                ))}
            </ul>
          </div>

          <div className="bg-[#1a1a40]/80 rounded-xl p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4 border-b border-[#66ccff]/30 pb-2">
              Project Info
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-400">Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-[#ff66cc]/20 text-[#ff66cc]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.github && (
                <div>
                  <h4 className="text-sm text-gray-400">Links</h4>
                  <div className="mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-[#66ccff] transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub Repository
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-[#ff66cc] to-[#66ccff] rounded-lg text-white font-medium hover:opacity-90 transition inline-flex items-center"
          >
            Interested in working together?{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
