"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFocus, setActiveFocus] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 150);
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = (field) => setActiveFocus(field);
  const handleBlur = () => setActiveFocus(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setGlitchEffect(true);

    setTimeout(() => {
      setGlitchEffect(false);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      name: "Email",
      value: "nityasolanki222@gmail.com",
      icon: (
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </motion.svg>
      ),
      color: "#00E5FF",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/nityasolanki",
      icon: (
        <motion.svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11.25 19h-2.5v-9h2.5v9zm-1.25-10.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm12.25 10.25h-2.5v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-2.5v-9h2.5v1.264c.563-.843 1.589-1.264 2.5-1.264 1.93 0 3.5 1.7 3.5 3.5v5.5z" />
        </motion.svg>
      ),
      color: "#0077B5",
    },
    {
      name: "GitHub",
      value: "github.com/nityasolanki",
      icon: (
        <motion.svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C18 5.3 19 5.6 19 5.6c.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A10.9 10.9 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
        </motion.svg>
      ),
      color: "#ffffff",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0f0b30] relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Mouse Follower */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-10 hidden md:block"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.2) 0%, rgba(0,229,255,0) 70%)",
          boxShadow: "0 0 15px rgba(0,229,255,0.5)",
        }}
        transition={{ type: "spring", damping: 20 }}
      />

      {/* Glowing Stars Background for Left Side */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00E5FF] opacity-50"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 50}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div
          className={`text-center mb-12 ${
            glitchEffect ? "animate-glitch" : ""
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF1F71]">
              Connect.
            </span>
          </h1>
          <p className="text-gray-300 mt-4">
            Ready to collaborate? Reach out through any of these digital
            channels.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6 relative">
            <div className="flex flex-col gap-4">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.name}
                  className="bg-[#16123f] p-4 rounded-lg border border-[#16123f] hover:border-[#00E5FF] transition-all min-h-[100px] flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div
                      className="p-2 rounded-md"
                      style={{
                        background: `${method.color}20`,
                        color: method.color,
                      }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-400 text-sm">{method.name}</h3>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form Without Right-Side Icons */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-[#16123f] p-6 rounded-lg space-y-4 border border-[#1c1a45]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {["name", "email", "subject", "message"].map((field) => (
              <div key={field}>
                <label className="text-white capitalize block mb-1">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    name={field}
                    rows="4"
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field)}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-md bg-[#0f0b30] text-white border ${
                      activeFocus === field
                        ? "border-[#00E5FF]"
                        : "border-transparent"
                    } focus:outline-none transition-all`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field)}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-md bg-[#0f0b30] text-white border ${
                      activeFocus === field
                        ? "border-[#00E5FF]"
                        : "border-transparent"
                    } focus:outline-none transition-all`}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#00E5FF] to-[#FF1F71] text-white py-2 px-6 rounded-md font-semibold hover:opacity-90 transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitted && (
              <p className="text-green-400 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
