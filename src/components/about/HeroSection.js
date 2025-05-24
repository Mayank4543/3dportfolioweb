"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-tr from-teal-200 to-cyan-300 px-6 md:px-16 py-20 overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 max-w-xl text-left z-10 mb-12 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
          About Me
        </h1>
        <p className="text-slate-900 text-lg md:text-xl leading-relaxed">
          My journey in tech started with a curiosity for how things work, which
          evolved into a love for coding and building innovative solutions that
          make a positive impact.
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="w-full h-[400px] md:w-1/2 flex justify-center items-center z-10">
        <iframe
          src="https://lottie.host/embed/d75c5fb3-3d69-41f2-8fdd-f3b2d8e7ee1e/BspCqbV22x.lottie"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C236.92 72.29 152.44 88.14 77.15 81.89 28.73 77.91 0 60 0 60V120h1200V0c0 0-86.68 47.58-161.95 54.89-75.27 7.31-149.28-9.7-233.75-25.55-84.47-15.85-169.05-31.7-253.52-21.15-84.47 10.55-168.95 48.25-229.39 47.25z"
            fill="#0F172A"
          />
        </svg>
      </div>
    </section>
  );
}
