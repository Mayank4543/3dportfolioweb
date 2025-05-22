"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Mapping of paths to page titles
const pageTitles = {
  "/": "Home",
  "/about": "About Me",
  "/skills": "Skills",
  "/contact": "Contact Me",
  "/projects": "Projects",
  // Add more routes as needed
};

/**
 * This component handles dynamic document title updates with animations
 * It's useful for client-side navigation to update the browser tab title
 */
export default function TitleUpdater() {
  const pathname = usePathname();
  useEffect(() => {
    // Handle dynamic routes or get titles from our fixed mapping
    let pageTitle = "";

    // Check if it's a fixed route we know
    if (pageTitles[pathname]) {
      pageTitle = pageTitles[pathname];
    }
    // Handle project detail pages
    else if (pathname.startsWith("/projects/")) {
      const projectId = pathname.split("/").pop();
      // Format the project ID to make it more readable
      // e.g., "project-1" -> "Project 1"
      const formattedId = projectId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      pageTitle = `Project: ${formattedId}`;
    }
    // Fallback for any other routes
    else {
      pageTitle = "Page";
    }

    const baseTitle = "SevyaPort";
    const fullTitle = `${pageTitle} | ${baseTitle}`;

    // Subtle animation effect for title changes
    if (document.title !== fullTitle) {
      // Fade out current title (visible in some browsers)
      document.title = "...";

      // Short timeout for transition effect
      setTimeout(() => {
        document.title = fullTitle;
      }, 150);

      // Set favicon with custom color based on page
      updateFaviconColor(pathname);
    }
  }, [pathname]);
  // Helper function to change favicon color based on current path
  // This is just a placeholder - implement this if you want to change
  // favicon colors for different sections of your site
  const updateFaviconColor = (path) => {
    // Get different colors for different sections
    const colorMap = {
      "/": "#3B82F6", // blue for home
      "/about": "#8B5CF6", // purple for about
      "/skills": "#10B981", // green for skills
      "/contact": "#F97316", // orange for contact
      "/projects": "#EC4899", // pink for projects
    };

    // Determine the color to use
    let color = colorMap[path] || colorMap["/"];

    // For project detail pages, use the projects color
    if (path.startsWith("/projects/")) {
      color = colorMap["/projects"];
    }

    // Attempt to update the favicon
    try {
      // Look for an existing favicon
      const existingIcon = document.querySelector('link[rel="icon"]');

      // If we find one, we can create a dynamic favicon
      if (existingIcon) {
        // Create a canvas to draw the favicon
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");

        // Draw a colored circle
        ctx.beginPath();
        ctx.arc(16, 16, 14, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();

        // Add an "S" or other initial
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("S", 16, 16);

        // Update the favicon
        existingIcon.href = canvas.toDataURL("image/pn ? +g");
      }
    } catch (e) {
      // If there's an error, just continue without updating the favicon
      console.error("Error updating favicon:", e);
    }
  };

  // This component doesn't render anything visible
  return null;
}
