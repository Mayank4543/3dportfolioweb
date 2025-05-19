"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const pageTitles = {
  "/": "Home",
  "/about": "About Me",
  "/skills": "Skills",
  "/contact": "Contact Me",
  "/projects": "Projects",
  // Add more routes as needed
};

export default function AnimatedTitle() {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [isChanging, setIsChanging] = useState(false);
  useEffect(() => {
    const baseTitle = "SevyaPort";
    let pageTitle = "";

    // Handle known fixed routes
    if (pageTitles[pathname]) {
      pageTitle = pageTitles[pathname];
    }
    // Handle project detail pages
    else if (pathname.startsWith("/projects/")) {
      const projectId = pathname.split("/").pop();
      // Format project ID for display
      const formattedId = projectId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      pageTitle = `Project: ${formattedId}`;
    } // First set state to changing
    setIsChanging(true);

    // After a short delay, update the title
    const timer = setTimeout(() => {
      // Don't show page title on home page
      if (pathname === "/") {
        setTitle("");
      } else {
        // Update component state for other pages
        setTitle(pageTitle);
      }

      // Reset changing state after animation completes
      setTimeout(() => setIsChanging(false), 300);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <div
      aria-hidden="true"
      className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
    >
      <div
        className={`text-sm text-gray-600 dark:text-gray-400 font-medium title-indicator page-title-transition ${
          isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {title && (
          <span className="px-3 py-1 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm">
            {/* Show breadcrumb for project pages */}
            {pathname.startsWith("/projects/") && (
              <span className="opacity-70 mr-2">
                <span className="hover:text-blue-500 cursor-pointer">
                  Projects
                </span>
                <span className="mx-1">›</span>
              </span>
            )}
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
