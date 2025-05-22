"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HobbiesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#031225] text-white py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start relative z-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 z-20" data-aos="fade-right">
          <p className="text-teal-400 font-semibold uppercase mb-3">HOBBIES</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Life beyond the screen
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I enjoy sketching ideas, exploring nature, and immersing myself in
            sci-fi worlds. These hobbies give me clarity and creativity that
            often inspire my projects.
          </p>
        </div>

        {/* Right Side - Overlapping Stacked Images */}
        <div className="md:w-1/2 relative h-[800px]">
          <div
            className="absolute top-0 left-0 w-full h-72 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <Image
              src="/assets/sketch.jpg"
              alt="Sketching"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div
            className="absolute top-32 left-0 w-full h-72 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Image
              src="/assets/dancing.jpg"
              alt="Dancing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div
            className="absolute top-64 left-0 w-full h-72 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/assets/reading.jpg"
              alt="Reading"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
