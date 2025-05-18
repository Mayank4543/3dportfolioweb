"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Force a minimum loading time for visual effect
  useEffect(() => {
    // This guarantees a minimum loading time of 2.5 seconds
    const minLoadTime = setTimeout(() => {
      setLoadingComplete(true);
    }, 2500);

    // Check if resources are loaded
    const checkResources = () => {
      if (document.readyState === "complete") {
        setLoadingComplete(true);
      }
    };

    window.addEventListener("load", checkResources);

    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener("load", checkResources);
    };
  }, []);

  const handleLoadingComplete = () => {
    // Add a fade-out transition effect for the loading screen
    setTimeout(() => {
      setLoading(false);

      // Scroll to top when loading completes
      window.scrollTo(0, 0);

      // Enable scrolling on body
      document.body.style.overflow = "auto";

      // Trigger any entrance animations for the main content
      document.body.classList.add("content-loaded");
    }, 600);
  };

  // When loadingComplete is true, tell the loading screen to finish
  useEffect(() => {
    if (loadingComplete && loading) {
      handleLoadingComplete();
    }
  }, [loadingComplete, loading]);

  // Prevent scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      )}
      <div
        className={`transition-all duration-1000 ${
          loading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
