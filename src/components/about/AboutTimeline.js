"use client";
import { motion } from "framer-motion";
const timeline = [
  {
    year: "2020",
    title: "Started My Journey",
    description:
      "Began learning web development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "Built My First Projects",
    description: "Created small full-stack apps, explored React and Node.js.",
  },
  {
    year: "2022",
    title: "Dived into Three.js",
    description:
      "Started integrating 3D elements and animations into websites.",
  },
  {
    year: "2023",
    title: "Freelancing & Collaborations",
    description:
      "Worked with startups to build creative, interactive websites.",
  },
  {
    year: "2024–25",
    title: "Codemynk & AI Tools",
    description:
      "Building Codemynk Resources and immersive AI interview assistants.",
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
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">
          My Journey
        </h2>

        <div className="relative border-l border-slate-700 pl-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              className="mb-10 relative"
            >
              <div className="absolute left-[-11px] top-1.5 w-5 h-5 rounded-full bg-blue-500" />
              <p className="text-blue-400 text-sm">{item.year}</p>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
