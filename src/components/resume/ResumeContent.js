"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ResumeContent = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setRotate({ x: 15, y: -15 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation based on mouse position (limited range)
    const rotateX = Math.min(Math.max((mouseY / rect.height) * 20, -20), 20);
    const rotateY = Math.min(Math.max((-mouseX / rect.width) * 20, -20), 20);

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  const personalInfo = {
    name: "Sanskriti",
    title: "Web Developer",
    location: "Noida, India",
    email: "nityasolanki222@gmail.com",
    phone: "+91 7060914899",
    photo: "/assets/image1.jpeg", // Update with your actual photo path
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Bellerinashine",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sanskriti-nitya/",
        icon: "linkedin",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
        icon: "twitter",
      },
    ],
    summary:
      "Web developer with experience in React, JavaScript, and responsive design. Skilled in developing user-focused applications with clean, efficient code. Passionate about creating intuitive interfaces that enhance user experience.",
  };
  const experience = [
    {
      company: "Trade-India",
      position: "Web Development Intern (SDE Intern)",
      period: "September 2024 - December 2024",
      description:
        "Created 20+ reusable responsive components, 8+ responsive landing pages, and 5+ unique features using React JS and SCSS, including infinite scroll, modal pop with URL change without rendering the entire page. Organized page layout and content using over 20 components, adapting to pass data for a responsive structure.",
      technologies: ["React", "SCSS", "JavaScript", "Responsive Design"],
    },
    {
      company: "Codsoft",
      position: "UI/UX Intern",
      period: "June 2024 - July 2024",
      description:
        "Designed UI components and interactive prototypes using Figma, ensuring consistency across mobile and web platforms. Conducted user research and usability testing to identify pain points, resulting in design changes that reduced task completion time by 20%.",
      technologies: ["Figma", "Prototyping", "User Research", "UI/UX Design"],
    },
  ];
  const education = [
    {
      institution: "Your University",
      degree: "Bachelor of Technology in Computer Science",
      period: "2021 - 2025",
      description:
        "Focusing on Computer Science fundamentals, Data Structures and Algorithms, Web Development, and Software Engineering principles.",
    },
  ];
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS/SCSS", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "C/C++", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "UI/UX Design", level: 75 },
    { name: "Git/GitHub", level: 85 },
  ];
  const projects = [
    {
      name: "Signal | Chat App",
      description:
        "Real-time chat application with features like group chat, typing indicators, and secure authentication using Socket.io, React JS, Express, Node.js, and MongoDB",
      link: "https://github.com",
    },
    {
      name: "CuddleCloud Weather App",
      description:
        "Weather application providing real-time updates with an intuitive UI using JavaScript, Weather API, HTML, and CSS",
      link: "https://github.com",
    },
    {
      name: "Netflix Clone",
      description:
        "Responsive Netflix UI clone with pixel-perfect design and adaptive layouts using HTML and CSS with Flexbox and Grid",
      link: "https://github.com",
    },
  ];
  const certifications = [
    {
      name: "Dance Performance & Choreography",
      issuer: "Cultural & Corporate Events",
      year: "Ongoing",
    },
    {
      name: "Graphic Design & Visual Content",
      issuer: "Figma & Canva",
      year: "Ongoing",
    },
    {
      name: "Technical Workshops Leader",
      issuer: "DSA & Competitive Programming",
      year: "2023",
    },
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "experience":
        return (
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#00E5FF]/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {job.position}
                  </h3>
                  <span className="text-[#00E5FF] text-sm">{job.period}</span>
                </div>
                <h4 className="text-lg text-white/80 mb-3">{job.company}</h4>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#FF1F71]/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-[#FF1F71] text-sm">{edu.period}</span>
                </div>
                <h4 className="text-lg text-white/80 mb-3">
                  {edu.institution}
                </h4>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#FFD700]/20 transition-all duration-300"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-[#FFD700]">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00E5FF] to-[#FFD700]"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "projects":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#FF764D]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF764D] hover:text-[#FF764D]/80 transition-colors flex items-center"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        );
      case "certifications":
        return (
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#00E5FF]/20 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-semibold text-white">
                    {cert.name}
                  </h3>
                  <span className="text-[#00E5FF] text-sm">{cert.year}</span>
                </div>
                <p className="text-gray-300">Issued by {cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

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
        <div className="absolute top-20 right-10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle
              cx="60"
              cy="60"
              r="58"
              stroke="#FF1F71"
              strokeWidth="1"
              strokeDasharray="8 8"
              className="animate-spin-slow"
            />
            <circle cx="60" cy="60" r="40" stroke="#00E5FF" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect
              x="5"
              y="5"
              width="70"
              height="70"
              stroke="#FFD700"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
            <rect
              x="20"
              y="20"
              width="40"
              height="40"
              stroke="#00E5FF"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute top-1/3 left-20 hidden lg:block">
          <div className="w-[2px] h-60 bg-gradient-to-b from-[#FF1F71] to-transparent"></div>
        </div>
        <div className="absolute top-1/2 right-20 hidden lg:block">
          <div className="w-[2px] h-80 bg-gradient-to-b from-transparent to-[#00E5FF]"></div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative pt-24 px-6 pb-16 sm:px-10 max-w-7xl mx-auto z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center mb-2">
          <div className="w-12 h-12 relative mr-4">
            <div className="absolute inset-0 bg-[#FF1F71] rounded-md opacity-70 blur-[10px] animate-pulse-slow"></div>
            <div className="absolute inset-0 border-2 border-[#00E5FF] rounded-md flex items-center justify-center">
              <span className="text-[#00E5FF] text-xl">S</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            <span className="text-[#00E5FF] cyberpunk-text-glow">My</span>{" "}
            Resume
          </h1>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-[#FF1F71] to-[#FF764D] mb-12"></div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 3D Interactive Profile Card */}
          <motion.div
            className="lg:w-1/3 p-1 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 via-[#FF1F71]/20 to-[#FFD700]/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-full h-full bg-[#0f0b30]/95 backdrop-blur-sm rounded-lg p-6 overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${
                  isLoaded ? rotate.x : 0
                }deg) rotateY(${isLoaded ? rotate.y : 0}deg)`,
                transition: "transform 0.5s ease-out",
              }}
            >
              <div
                className="flex flex-col items-center relative"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="w-32 h-32 mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#FF1F71] blur-sm animate-pulse-slow"></div>
                  <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-[#00E5FF]/50">
                    <Image
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">
                  {personalInfo.name}
                </h2>
                <p className="text-[#00E5FF] mb-4">{personalInfo.title}</p>

                <div className="w-full space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-[#00E5FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-[#00E5FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-[#00E5FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 w-full mb-6">
                  {personalInfo.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {link.icon === "github" && (
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        )}
                        {link.icon === "linkedin" && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                        {link.icon === "twitter" && (
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>

                <p className="text-gray-300 text-center text-sm">
                  {personalInfo.summary}
                </p>

                <div className="absolute top-0 right-0 w-16 h-16 opacity-30">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M0 64L64 0" stroke="#00E5FF" strokeWidth="1" />
                    <path d="M16 64L64 16" stroke="#00E5FF" strokeWidth="1" />
                    <path d="M32 64L64 32" stroke="#00E5FF" strokeWidth="1" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-16 h-16 opacity-30">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M64 64L0 0" stroke="#FF1F71" strokeWidth="1" />
                    <path d="M64 48L16 0" stroke="#FF1F71" strokeWidth="1" />
                    <path d="M64 32L32 0" stroke="#FF1F71" strokeWidth="1" />
                  </svg>
                </div>

                <Link
                  href="/Pawan-Gupta-Resume.pdf"
                  target="_blank"
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-[#00E5FF]/20 to-[#FF1F71]/20 border border-[#00E5FF]/50 rounded-md hover:from-[#00E5FF]/30 hover:to-[#FF1F71]/30 transition-all duration-300 text-white flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Download PDF
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Sections tabs */}
          <div className="lg:w-2/3">
            <div className="flex overflow-x-auto mb-8 pb-2 scrollbar-hide gap-4">
              {[
                "experience",
                "education",
                "skills",
                "projects",
                "certifications",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`px-4 py-2 rounded-md transition-all whitespace-nowrap ${
                    activeSection === section
                      ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/50 shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                      : "bg-white/5 text-gray-300 border border-transparent hover:border-white/20"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
