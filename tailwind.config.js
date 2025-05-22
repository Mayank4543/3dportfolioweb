/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      animation: {
        wave: "wave 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        blob: "blob 7s infinite",
        morphBlob: "morphBlob 25s ease-in-out infinite alternate",
        pulse: "pulse 8s infinite",
        shimmer: "shimmer 3s infinite linear",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        bounce: "bounce 1s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        // Cyberpunk theme animations
        neonPulse: "neonPulse 3s infinite ease-in-out",
        neonFloat: "neonFloat 6s infinite ease-in-out",
        neonGlow: "neonGlow 3s infinite ease-in-out",
        cyberBlob: "cyberBlob 15s infinite ease-in-out",
        "spin-slow": "spin 15s linear infinite",
        "pulse-slow": "pulse 5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        morphBlob: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 100, 255, 0.5)" },
          "100%": {
            boxShadow:
              "0 0 20px rgba(0, 100, 255, 0.9), 0 0 35px rgba(0, 100, 255, 0.5)",
          },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(20deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Cyberpunk animations
        neonPulse: {
          "0%": { opacity: 0.6 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.6 },
        },
        neonFloat: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        neonGlow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 229, 255, 0.5)" },
          "50%": {
            boxShadow:
              "0 0 15px rgba(0, 229, 255, 0.8), 0 0 20px rgba(0, 229, 255, 0.5)",
          },
          "100%": { boxShadow: "0 0 5px rgba(0, 229, 255, 0.5)" },
        },
        cyberBlob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      colors: {
        // Add cyberpunk theme colors
        cyber: {
          bg: "#0f0b30",
          accent1: "#00E5FF",
          accent2: "#FF1F71",
          accent3: "#FFD700",
          accent4: "#FF764D",
        },
      },
    },
  },
  plugins: [],
};
