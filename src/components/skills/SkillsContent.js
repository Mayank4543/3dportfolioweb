"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(0);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Programming Languages",
    "Tools",
  ];

  const skills = [
    {
      name: "JavaScript",
      level: 90,
      category: "Programming Languages",
      icon: "💻",
      color: "#FFD700",
    },
    {
      name: "React",
      level: 85,
      category: "Frontend",
      icon: "⚛️",
      color: "#00E5FF",
    },
    {
      name: "Next.js",
      level: 80,
      category: "Frontend",
      icon: "🔄",
      color: "#00E5FF",
    },
    {
      name: "Node.js",
      level: 75,
      category: "Backend",
      icon: "🖥️",
      color: "#FF1F71",
    },
    {
      name: "TypeScript",
      level: 85,
      category: "Programming Languages",
      icon: "📘",
      color: "#00E5FF",
    },
    {
      name: "TailwindCSS",
      level: 90,
      category: "Frontend",
      icon: "🎨",
      color: "#00E5FF",
    },
    {
      name: "MongoDB",
      level: 70,
      category: "Backend",
      icon: "🍃",
      color: "#FF1F71",
    },
    {
      name: "PostgreSQL",
      level: 75,
      category: "Backend",
      icon: "🐘",
      color: "#FF1F71",
    },
    {
      name: "Python",
      level: 80,
      category: "Programming Languages",
      icon: "🐍",
      color: "#FFD700",
    },
    {
      name: "Git",
      level: 85,
      category: "Tools",
      icon: "🔄",
      color: "#FF764D",
    },
    {
      name: "Docker",
      level: 70,
      category: "Tools",
      icon: "🐳",
      color: "#FF764D",
    },
    {
      name: "Redux",
      level: 80,
      category: "Frontend",
      icon: "🔄",
      color: "#00E5FF",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setAnimatedItems(skills.length);
    }, 500);
    return () => clearTimeout(timer);
  }, [skills.length]);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen relative">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[#0f0b30]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Cyberpunk decorative elements */}
        <div
          className="absolute top-20 right-10 animate-float"
          style={{ animationDuration: "8s" }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <circle
              cx="75"
              cy="75"
              r="70"
              stroke="#FF1F71"
              strokeWidth="1"
              strokeDasharray="10 5"
              className="animate-spin-slow"
              style={{ animationDuration: "30s" }}
            />
            <circle cx="75" cy="75" r="50" stroke="#00E5FF" strokeWidth="1" />
            <circle
              cx="75"
              cy="75"
              r="25"
              stroke="#FFD700"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        <div
          className="absolute bottom-20 left-10 animate-float"
          style={{ animationDuration: "10s" }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              stroke="#FFD700"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              stroke="#00E5FF"
              strokeWidth="1"
            />
            <rect
              x="40"
              y="40"
              width="20"
              height="20"
              stroke="#FF1F71"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute top-1/3 left-20 hidden lg:block">
          <div className="w-[2px] h-60 bg-gradient-to-b from-[#FF1F71] to-transparent animate-pulse-slow"></div>
        </div>

        <div className="absolute top-1/2 right-20 hidden lg:block">
          <div
            className="w-[2px] h-80 bg-gradient-to-b from-transparent to-[#00E5FF] animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Scatter dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00E5FF] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }}
          ></div>
        ))}

        {[...Array(10)].map((_, i) => (
          <div
            key={`yellow-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#FFD700] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }}
          ></div>
        ))}

        {/* Horizontal neon lines */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent"></div>
        <div className="absolute top-[85%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1F71]/30 to-transparent"></div>
      </div>

      <div className="relative z-10 pt-24 px-8 pb-20 sm:px-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-2">
          <div className="w-12 h-12 relative mr-4">
            <div className="absolute inset-0 bg-[#FF1F71] rounded-md opacity-70 blur-[10px] animate-pulse-slow"></div>
            <div className="absolute inset-0 border-2 border-[#00E5FF] rounded-md flex items-center justify-center">
              <span className="text-[#00E5FF] text-xl">S</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white">
            <span className="text-[#00E5FF] cyberpunk-text-glow">My</span>{" "}
            Skills
          </h1>
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-[#FF1F71] to-[#FF764D] mb-12 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FF1F71] to-[#FF764D] blur-[4px] opacity-70"></div>
        </div>
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category, idx) => (
            <button
              key={category}
              className={`px-5 py-2.5 rounded-md transition-all duration-300 relative overflow-hidden ${
                activeCategory === category
                  ? "text-[#00E5FF] border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
            >
              {activeCategory === category && (
                <div className="absolute inset-0 bg-[#00E5FF]/10"></div>
              )}
              <span className="relative">{category}</span>
              {activeCategory === category && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00E5FF]"></div>
              )}
            </button>
          ))}
        </div>{" "}
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-cyber-accent1/50 transition-all duration-500 group transform ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                boxShadow: `0 0 20px rgba(0,0,0,0.2)`,
                "--skill-color": skill.color,
              }}
            >
              <div className="p-6 relative overflow-hidden">
                {/* Cyberpunk-style background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#0f0b30] via-[#0f0b30] to-[#0f0b30] transition-opacity duration-500"></div>{" "}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#00E5FF]/20 via-transparent to-[#FF1F71]/20 transition-opacity duration-500"></div>
                {/* Decorative elements for each card */}
                <div className="absolute top-0 right-0 w-40 h-40 transform translate-x-20 -translate-y-20">
                  <div className="absolute inset-0 rounded-full bg-cyber-accent1/5 group-hover:bg-cyber-accent1/10 blur-2xl transition-all duration-700 group-hover:scale-125"></div>
                </div>
                <div className="flex items-center justify-between mb-6 relative">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyber-accent1 transition-colors duration-300">
                    {skill.name}
                  </h3>{" "}
                  <div className="text-2xl relative">
                    <div className="absolute inset-0 blur-sm bg-cyber-accent1/10 rounded-full scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="relative">{skill.icon}</span>
                  </div>
                </div>
                {/* Progress bar container */}
                <div className="h-3 w-full bg-white/5 rounded-full mb-3 overflow-hidden relative">
                  {/* Glow effect behind progress bar */}
                  <div className="absolute inset-0 blur-md bg-white/5 rounded-full"></div>

                  {/* Progress bar */}
                  <div
                    className="h-full rounded-full transform origin-left scale-x-0 transition-transform duration-1000 relative"
                    style={{
                      transform: isLoaded ? "scaleX(1)" : "scaleX(0)",
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color} 0%, #00E5FF 100%)`,
                    }}
                  >
                    {/* Light streak effect */}
                    <div
                      className="absolute inset-y-0 right-0 w-5 bg-white/30 skew-x-12 animate-pulse-slow"
                      style={{ animationDelay: `${index * 300}ms` }}
                    ></div>
                  </div>
                </div>{" "}
                <div className="flex justify-between text-sm mt-4">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {skill.category}
                  </span>
                  <span className="text-cyber-accent1 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30 group-hover:opacity-90 transition-opacity duration-500">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M0 64L64 0" stroke={skill.color} strokeWidth="1" />
                    <path
                      d="M16 64L64 16"
                      stroke={skill.color}
                      strokeWidth="1"
                    />
                    <path
                      d="M32 64L64 32"
                      stroke={skill.color}
                      strokeWidth="1"
                    />
                    <path
                      d="M48 64L64 48"
                      stroke={skill.color}
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                {/* Top-left circuit pattern */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-20 group-hover:opacity-60 transition-opacity duration-500 transform -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M64 64L0 0" stroke={skill.color} strokeWidth="1" />
                    <path
                      d="M64 48L16 0"
                      stroke={skill.color}
                      strokeWidth="1"
                    />
                    <path
                      d="M64 32L32 0"
                      stroke={skill.color}
                      strokeWidth="1"
                    />
                    <path
                      d="M64 16L48 0"
                      stroke={skill.color}
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-20">
          <div className="h-[2px] w-60 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent blur-[4px]"></div>
          </div>
        </div>
        {/* Additional cyberpunk element - floating data points */}
        <div className="flex justify-center mt-6 relative">
          <div className="relative h-10 w-40">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="absolute h-[3px] w-[3px] rounded-full bg-[#00E5FF] animate-pulse-slow"
                style={{
                  left: `${idx * 25}%`,
                  animationDelay: `${idx * 0.2}s`,
                  boxShadow: "0 0 5px #00E5FF",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
