import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-8 pb-20 sm:px-20">
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Sevya Portfolio
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              A passionate developer creating beautiful, responsive web
              experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 text-center transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-black dark:border-white rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 text-center transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-xl transform transition duration-500 hover:scale-105">
              <Image
                src="/next.svg"
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                className="dark:invert"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    Project {item}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Project Title {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of this amazing project and the
                    technologies used.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
