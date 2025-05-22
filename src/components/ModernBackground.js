"use client";

import { useEffect, useRef } from "react";

const ModernBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#0f0b30]"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Animated gradient blob */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div
          className="absolute top-[-20%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-[100px] animate-blob"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-[50%] left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-cyan-400/30 to-transparent blur-[100px] animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-l from-pink-500/30 to-transparent blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Random geometric elements */}
      <div className="absolute top-[10%] right-[10%]">
        <div className="w-16 h-16 rounded-full border-2 border-yellow-400/20"></div>
      </div>
      <div className="absolute bottom-[15%] right-[20%]">
        <div className="w-12 h-12 rounded-full bg-cyan-400/10"></div>
      </div>
      <div className="absolute top-[30%] left-[8%]">
        <div className="w-20 h-20 rounded-full border-2 border-pink-500/20"></div>
      </div>

      {/* Dots */}
      <div className="absolute top-[20%] right-[30%] grid grid-cols-5 gap-2">
        {[...Array(25)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="w-1 h-1 rounded-full bg-cyan-400/30"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ModernBackground;
