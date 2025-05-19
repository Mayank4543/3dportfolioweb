"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import AnimatedTitle from "./AnimatedTitle";
import TitleUpdater from "./TitleUpdater";
import PageMetadata from "./PageMetadata";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  // Track page navigation
  useEffect(() => {
    setIsNavigating(true);
    // Short timeout to simulate page transition
    const navigationTimeout = setTimeout(() => {
      setIsNavigating(false);
    }, 300);

    return () => clearTimeout(navigationTimeout);
  }, [pathname]);

  // Handle initial loading
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
      {/* This component doesn't render anything but updates the document title */}
      <TitleUpdater />

      {loading && (
        <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      )}

      {/* Animated title indicator */}
      <AnimatedTitle />

      <div
        className={`transition-all duration-1000 ${
          loading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {children}
      </div>

      {/* Navigation progress indicator */}
      {isNavigating && !loading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
        </div>
      )}
    </>
  );
}
