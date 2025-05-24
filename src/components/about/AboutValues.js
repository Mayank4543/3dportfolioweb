"use client";

import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../../public/Life-1.json";

// Dynamically import Lottie with ssr: false
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function AboutValues() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="w-full bg-[#001328] text-white px-6 md:px-16 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2">
        <div className="mb-4 text-teal-300 uppercase tracking-wide font-semibold">
          My Values
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The three C&apos;s of craftery
        </h2>
        <div className="space-y-8 text-lg text-gray-300">
          <div className="bg-[#062243] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h4 className="text-xl font-semibold text-white mb-2">Chemistry</h4>
            <p>
              Be it between people, products, or experiences; our way of life is
              sparked by the catalytic connections that make up our
              collaborative atmosphere.
            </p>
          </div>
          <div className="bg-[#062243] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h4 className="text-xl font-semibold text-white mb-2">Curiosity</h4>
            <p>
              We thrive in the freedom of our open-mindedness. We inspire,
              support, and learn from one another.
            </p>
          </div>
          <div className="bg-[#062243] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h4 className="text-xl font-semibold text-white mb-2">
              Creative turbulence
            </h4>
            <p>
              Our approach is that of hungry inventors, propelled by our shared
              instinct to break boundaries and shake things up.
            </p>
          </div>
        </div>
        <a
          href="/contact"
          className="inline-flex mt-10 items-center text-[#6fffdb] border-b-2 border-[#6fffdb] hover:text-white hover:border-white transition-all"
        >
          Contact Me
          <svg
            className="ml-2 w-4 h-4 transform rotate-90"
            viewBox="0 0 16 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.13 7.98-1.56-1.52-3.46 3.41V-1h-2.18v10.88L3.46 6.46 1.9 7.98l6.11 6.02z"
              fill="#6fffdb"
              transform="matrix(0 1 1 0 1.53 -1.53)"
            />
          </svg>
        </a>
      </div>

      <div className="w-full md:w-1/2 max-w-md mt-10 md:mt-0">
        <div className="bg-[#062243] p-4 rounded-lg shadow-lg">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </section>
  );
}
