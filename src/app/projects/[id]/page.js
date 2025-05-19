export function generateMetadata({ params }) {
  // This could fetch project details from a database in a real implementation
  // Here we'll just create a title based on the project ID
  const projectId = params.id;
  const formattedId = projectId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Project: ${formattedId}`,
    description: `Detailed information about the ${formattedId} project`,
  };
}

export default function ProjectDetail({ params }) {
  const projectId = params.id;

  return (
    <div className="min-h-screen pt-24 px-8 pb-20 sm:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a
            href="/projects"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center"
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
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-6 animate-fadeIn">
          Project: {projectId.split("-").join(" ")}
        </h1>

        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          {/* Placeholder for project image */}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This is a detailed view of the {projectId.split("-").join(" ")}{" "}
            project. In a real implementation, this would contain comprehensive
            information about the project's goals, technologies used, challenges
            faced, and solutions implemented.
          </p>

          <h2 className="text-2xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              React
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Next.js
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Three.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
