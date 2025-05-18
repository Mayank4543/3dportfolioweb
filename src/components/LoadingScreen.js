"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate loading with progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Add a small delay before hiding the loader
          setTimeout(() => {
            setVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 600);

          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5; // Increment by 5-15%
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="w-full max-w-md px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-20 animate-pulse">
            <Image
              src="/logo.svg"
              alt="SevyaPort Logo"
              layout="fill"
              objectFit="contain"
              className="dark:invert"
            />
          </div>
        </div>
        {/* Loading message */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Welcome to SevyaPort
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Initializing digital experience...
          </p>
        </div>
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Loading percentage */}
        <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400 font-mono">
          {Math.min(progress, 100)}%
        </div>{" "}
        {/* Circuit-inspired loading animation */}
        <div className="mt-10 relative h-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 300 120"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            {/* Background grid */}
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-200 dark:text-gray-800"
                opacity="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Main circuit paths */}
            <path
              d="M10,60 H50 L60,40 H120 L130,60 H170 L180,40 H240 L260,60 H290"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5,2"
              className="text-gray-300 dark:text-gray-600"
              strokeLinecap="round"
            />

            <path
              d="M10,60 H50 L60,80 H120 L130,60 H170 L180,80 H240 L260,60 H290"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5,2"
              className="text-gray-300 dark:text-gray-600"
              strokeLinecap="round"
            />

            {/* Animated circuit path that glows */}
            <path
              d="M10,60 H50 L60,40 H120 L130,60 H170 L180,40 H240 L260,60 H290"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="1000"
              style={{
                animation: "circuit-pulse 4s infinite ease-in-out",
              }}
              opacity="0.6"
              strokeLinecap="round"
            />

            {/* Data transfer animation */}
            <path
              d="M10,60 H290"
              stroke="url(#pulse-gradient)"
              strokeWidth="2"
              strokeDasharray="10,5"
              style={{
                animation: "data-transfer 3s infinite linear",
              }}
              opacity="0.7"
              strokeLinecap="round"
            />

            {/* Linear gradient for pulse effect */}
            <linearGradient
              id="pulse-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>

            {/* Circuit node points */}
            {[10, 50, 120, 170, 240, 290].map((x, i) => (
              <circle
                key={`node-${i}`}
                cx={x}
                cy={60}
                r={i % 2 === 0 ? 4 : 3}
                className="fill-blue-500 dark:fill-blue-400"
                style={{
                  animation: "node-glow 2s infinite ease-in-out",
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}

            {/* Junction points */}
            <rect
              x="58"
              y="38"
              width="4"
              height="4"
              className="fill-purple-500"
            />
            <rect
              x="128"
              y="58"
              width="4"
              height="4"
              className="fill-purple-500"
            />
            <rect
              x="178"
              y="38"
              width="4"
              height="4"
              className="fill-purple-500"
            />
            <rect
              x="258"
              y="58"
              width="4"
              height="4"
              className="fill-purple-500"
            />

            {/* Moving pulses along the path */}
            <circle
              cx="10"
              cy="60"
              r="4"
              className="fill-blue-600 dark:fill-blue-300"
              opacity="0.8"
            >
              <animateMotion
                path="M0,0 H40 L50,-20 H110 L120,0 H160 L170,-20 H230 L250,0 H280"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx="10"
              cy="60"
              r="3"
              className="fill-purple-500"
              opacity="0.8"
            >
              <animateMotion
                path="M0,0 H40 L50,20 H110 L120,0 H160 L170,20 H230 L250,0 H280"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* CPU/Processor in the middle */}
            <rect
              x="130"
              y="50"
              width="40"
              height="20"
              rx="2"
              className="fill-gray-700 dark:fill-gray-800 stroke-blue-400"
              strokeWidth="1"
            />
            <text
              x="150"
              y="64"
              textAnchor="middle"
              className="text-xs fill-white"
              fontSize="8"
            >
              CPU
            </text>

            {/* Binary data flowing animation */}
            <text
              className="fill-blue-500 dark:fill-blue-400 font-mono text-xs"
              opacity="0.7"
            >
              <textPath href="#data-path" startOffset={progress + "%"}>
                10101011010010110
              </textPath>
            </text>
            <path id="data-path" d="M10,90 H290" fill="none" />
          </svg>

          {/* Status messages */}
          <div className="absolute top-8 left-1/4 w-1/2 flex justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
            <div>
              System: <span className="text-green-500">Online</span>
            </div>
            <div>
              Memory: <span className="text-blue-500">Allocated</span>
            </div>
            <div>
              Status: <span className="text-yellow-500">Loading</span>
            </div>
          </div>

          <div className="absolute bottom-0 w-full text-center text-sm text-gray-500 dark:text-gray-400 font-mono">
            <div className="flex items-center justify-center space-x-2">
              <span>Initializing interface</span>
              <span className="inline-flex">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1 h-1 bg-blue-500 rounded-full mx-0.5"
                    style={{
                      animation: "pulse-dots 1.5s infinite",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
