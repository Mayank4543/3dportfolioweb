"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "Started College Journey",
    description:
      "Began Bachelor of Technology in Computer Science at GL Bajaj Institute of Technology and Management.",
  },
  {
    year: "2022",
    title: "Explored Web Development",
    description:
      "Created responsive web projects like Netflix Clone using HTML and CSS. Developed fundamental skills in programming.",
  },
  {
    year: "2023",
    title: "Advanced to MERN Stack",
    description:
      "Built Signal Chat App using Socket.io, React JS, Node.js, Express, and MongoDB. Expanded skills in real-time applications.",
  },
  {
    year: "2024 (Jun-Jul)",
    title: "UI/UX Internship at Codsoft",
    description:
      "Designed UI components and prototypes in Figma. Conducted user research and improved designs to reduce task completion time by 20%.",
  },
  {
    year: "2024 (Sep-Dec)",
    title: "Web Development Intern at Trade-India",
    description:
      "Created 20+ reusable components and 8+ responsive landing pages using React JS and SCSS. Implemented features like infinite scroll and modal popups.",
  },
  {
    year: "2025",
    title: "Graduation & Beyond",
    description:
      "Completed B.Tech in Computer Science Engineering. Continuing to build advanced web applications and expand technical expertise.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function AboutTimeline() {
  return (
    <section className="w-full bg-[#0c1a2c] text-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-teal-400 font-semibold uppercase tracking-wide mb-3">
            Professional Journey
          </p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            My Career Timeline
          </motion.h2>
        </div>

        {/* Timeline Content */}
        <div className="relative border-l-2 border-teal-400 pl-8 md:pl-10 ml-4 md:ml-12 py-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              className="mb-16 relative"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-25px] top-1.5 w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-400/30">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>

              {/* Timeline Content */}
              <div className="bg-[#10243f] p-6 rounded-lg shadow-lg border-l-4 border-teal-400 transform transition-all duration-300 hover:translate-x-2">
                <p className="text-teal-400 text-sm font-bold mb-2">
                  {item.year}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 md:text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Timeline End Marker */}
          <div className="absolute left-[-10px] bottom-0 w-5 h-5 rounded-full bg-teal-400"></div>
        </div>
      </div>
    </section>
  );
}
