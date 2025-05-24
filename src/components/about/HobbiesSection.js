"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HobbiesSection() {
  const containerRef = useRef(null);
  const slideshowRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of slides with titles and descriptions - wrapped in useMemo to prevent re-creation on each render
  const slides = useMemo(
    () => [
      {
        image: "sketch.jpg",
        title: "Sketching",
        description:
          "Expressing ideas visually helps me think more creatively about design solutions.",
      },
      {
        image: "dancing.jpg",
        title: "Dancing",
        description:
          "Movement keeps me energized and helps me approach problems with fresh perspective.",
      },
      {
        image: "reading.jpg",
        title: "Reading",
        description:
          "Books expand my thinking and inspire new approaches to technical challenges.",
      },
    ],
    []
  );

  // Slideshow cycling logic
  useEffect(() => {
    let interval;
    const startSlideshow = () => {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // Change slide every 3 seconds
    };

    // GSAP animation for slideshow with ScrollTrigger
    const ctx = gsap.context(() => {
      const slideshow = slideshowRef.current;

      // Ensure the slideshow container fades in on scroll
      gsap.fromTo(
        slideshow,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: slideshow,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: false,
          },
        }
      );

      // Animate the slideshow when it enters the viewport
      ScrollTrigger.create({
        trigger: slideshow,
        start: "top center",
        onEnter: () => startSlideshow(), // Start slideshow when container enters viewport
        onLeaveBack: () => clearInterval(interval), // Stop slideshow when scrolling back up
      });

      // GSAP animation for each slide transition
      gsap.fromTo(
        slideshow.querySelector("img"),
        {
          opacity: 0,
          scale: 0.95,
          y: 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, [activeSlide, slides]);

  return (
    <section
      className="bg-[#031225] text-white py-24 px-6 md:px-16 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
        {/* Left Text */}
        <div className="md:w-1/2 z-20">
          <p className="text-teal-400 font-semibold uppercase mb-3 tracking-wider">
            HOBBIES & INTERESTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Life beyond the screen
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            I believe that creativity flows between different areas of life. My
            hobbies not only provide balance but also spark inspiration that
            enhances my work as a developer.
          </p>

          {/* Hobby indicators */}
          <div className="flex space-x-4 mt-6">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "bg-teal-400 w-10" : "bg-gray-500"
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`View ${slide.title}`}
              />
            ))}
          </div>

          {/* Current slide info */}
          <div className="mt-8 bg-[#0a2440] p-6 rounded-lg border-l-4 border-teal-400">
            <h3 className="text-xl font-semibold text-white mb-2">
              {slides[activeSlide].title}
            </h3>
            <p className="text-gray-300">{slides[activeSlide].description}</p>
          </div>
        </div>

        {/* Right Side Slideshow */}
        <div className="md:w-1/2 relative">
          <div
            ref={slideshowRef}
            className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
          >
            <Image
              src={`/assets/${slides[activeSlide].image}`}
              alt={slides[activeSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
