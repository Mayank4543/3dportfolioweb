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
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        blob: "blob 7s infinite",
        morphBlob: "morphBlob 25s ease-in-out infinite alternate",
        pulse: "pulse 8s infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 3s infinite linear",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        glow: "glow 1.5s ease-in-out infinite alternate",
        bounce: "bounce 1s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
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
          "25%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60%/40% 30% 70% 50%" },
          "75%": { borderRadius: "60% 40% 70% 30%/60% 30% 70% 40%" },
          "100%": { borderRadius: "40% 60% 30% 70%/30% 40% 70% 60%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
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
          "0%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        // You can add custom brand colors here
      },
      rotate: {
        15: "15deg",
        30: "30deg",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 0.8 },
        },
      },
      animation: {
        pulse: "pulse 8s infinite",
      },
    },
  },
  plugins: [],
};
