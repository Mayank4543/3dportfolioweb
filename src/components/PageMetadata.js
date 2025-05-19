"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

/**
 * This component adds additional meta tags based on the current route
 * It supplements the static metadata defined in the page.js files
 */
export default function PageMetadata() {
  const pathname = usePathname();
  const [metaTags, setMetaTags] = useState({
    themeColor: "#3B82F6",
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image",
  });

  useEffect(() => {
    // Define theme colors and other metadata for different routes
    const routeMetadata = {
      "/": {
        themeColor: "#3B82F6", // blue
        ogImage: "/og-image-home.jpg",
      },
      "/about": {
        themeColor: "#8B5CF6", // purple
        ogImage: "/og-image-about.jpg",
      },
      "/skills": {
        themeColor: "#10B981", // green
        ogImage: "/og-image-skills.jpg",
      },
      "/contact": {
        themeColor: "#F97316", // orange
        ogImage: "/og-image-contact.jpg",
      },
      "/projects": {
        themeColor: "#EC4899", // pink
        ogImage: "/og-image-projects.jpg",
      },
    };

    // Get metadata for the current route or default to home
    let metadata = routeMetadata["/"];

    if (routeMetadata[pathname]) {
      metadata = routeMetadata[pathname];
    } else if (pathname.startsWith("/projects/")) {
      metadata = routeMetadata["/projects"];
    }

    // Update the state
    setMetaTags((prev) => ({
      ...prev,
      ...metadata,
    }));

    // Optionally, directly manipulate the DOM for theme-color
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", metadata.themeColor);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = metadata.themeColor;
      document.head.appendChild(meta);
    }
  }, [pathname]);

  return <></>;
}
