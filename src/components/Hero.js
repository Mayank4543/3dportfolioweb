"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Hero = ({ name = "Sanskriti JS" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideInFromRight = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0a2a] to-[#1a1a3a]">
      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00E5FF]/10 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#FF1F71]/10 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-[#00E5FF] text-lg font-mono mb-4">
              Full Stack Developer
            </h3>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I'm a passionate full stack developer who crafts digital
              experiences with a perfect blend of creativity and functionality.
              With an eye for detail and a love for clean, user-friendly designs
              & robust architecture.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-8 py-3.5 bg-gradient-to-r from-[#00E5FF] to-[#00a8cc] text-white font-medium rounded-lg 
                transition-all duration-300 hover:shadow-lg hover:shadow-[#00E5FF]/30 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>View Projects</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/contact"
                className="px-8 py-3.5 bg-transparent border-2 border-[#FF1F71] text-[#FF1F71] font-medium rounded-lg 
                hover:bg-[#FF1F71]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF1F71]/20 hover:scale-[1.02]"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              {
                icon: <FaGithub />,
                color: "text-gray-300",
                hover: "hover:text-white",
              },
              {
                icon: <FaLinkedin />,
                color: "text-blue-400",
                hover: "hover:text-blue-300",
              },
              {
                icon: <FaTwitter />,
                color: "text-sky-400",
                hover: "hover:text-sky-300",
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`text-2xl ${social.color} ${social.hover} transition-colors duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative">
          <motion.div
            variants={slideInFromRight(0.8)}
            initial="hidden"
            animate="visible"
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/hero-bg.svg"
              alt="Developer illustration"
              width={450}
              height={400}
              draggable={false}
              className="select-none object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-[#00E5FF] rounded-full flex justify-center p-1"
          >
            <motion.div
              className="w-1 h-2 bg-[#00E5FF] rounded-full"
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <span className="text-xs text-[#00E5FF] mt-2">Scroll Down</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
