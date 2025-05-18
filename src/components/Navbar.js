"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// MorphingBackground component
const MorphingBackground = () => {
  const blobsRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!blobsRef.current) return;

      const scrollY = window.scrollY;
      const blobs = blobsRef.current.querySelectorAll(".blob");

      blobs.forEach((blob, index) => {
        // Different parallax speeds for each blob
        const speed = 0.05 + index * 0.02;
        const yOffset = scrollY * speed;
        blob.style.transform = `translateY(${yOffset}px) ${
          blob.dataset.baseTransform || ""
        }`;
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main blob group with gooey effect */}
      <div
        ref={blobsRef}
        className="absolute inset-0"
        style={{ filter: "url(#gooey)" }}
      >
        {/* Blob 1 */}
        <div
          className="blob absolute top-[-100px] left-[10%] w-72 h-72 bg-blue-300/10 dark:bg-blue-600/20 rounded-full opacity-70 animate-blob blob-effect"
          style={{ animationDelay: "0s" }}
          data-base-transform="translate(0px, 0px) scale(1)"
        />
        {/* Blob 2 */}
        <div
          className="blob absolute top-[-150px] right-[15%] w-64 h-64 bg-purple-300/10 dark:bg-purple-600/20 rounded-full opacity-70 animate-blob blob-effect"
          style={{ animationDelay: "2s" }}
          data-base-transform="translate(30px, -50px) scale(1.1)"
        />
        {/* Blob 3 */}
        <div
          className="blob absolute top-[-50px] right-[40%] w-56 h-56 bg-pink-300/10 dark:bg-pink-600/20 rounded-full opacity-70 animate-blob blob-effect"
          style={{ animationDelay: "4s" }}
          data-base-transform="translate(-20px, 20px) scale(0.9)"
        />
      </div>

      {/* SVG Morphing Blob */}
      <div className="absolute top-[-120px] left-[25%] morphing-blob">
        <div className="w-80 h-80 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-500/20 dark:from-blue-500/20 dark:via-purple-600/20 dark:to-pink-600/20 animate-morphBlob blob-effect" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        style={{ filter: "url(#noise)" }}
      ></div>

      {/* Light beam effect */}
      <div className="absolute -top-20 left-1/3 w-1/3 h-40 bg-gradient-to-b from-blue-200/10 via-purple-200/5 to-transparent dark:from-blue-400/10 dark:via-purple-400/5 dark:to-transparent transform rotate-15 animate-pulse"></div>

      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-blue-50/5 to-transparent dark:from-blue-900/5 pointer-events-none"></div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 group/navbar ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
          : "bg-white/5 dark:bg-gray-900/20 py-5 hover:bg-white/15 dark:hover:bg-gray-900/30 backdrop-blur-sm hover:backdrop-blur-md hover:before:opacity-100"
      }`}
    >
      {/* Shimmer effect overlay - only visible on hover when not scrolled */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:opacity-0 group-hover/navbar:before:opacity-100 before:transition-opacity before:duration-500 before:animate-shimmer before:bg-[length:200%_100%] pointer-events-none"></div>{" "}
      {/* Disabled Morphing Blob Background since we're using CircuitBackground */}
      {/* <MorphingBackground /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {" "}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative group overflow-hidden animate-float">
                <Image
                  src="/logo.svg"
                  alt="SevyaPort Logo"
                  width={120}
                  height={40}
                  className="transition-all duration-500 hover:scale-110 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavItem
              href="/"
              label="Home"
              isActive={pathname === "/"}
              navIndex={1}
            />
            <NavItem
              href="/about"
              label="About"
              isActive={pathname === "/about"}
              navIndex={2}
            />
            <NavItem
              href="/skills"
              label="Skills"
              isActive={pathname === "/skills"}
              navIndex={3}
            />
            <NavItem
              href="/contact"
              label="Contact"
              isActive={pathname === "/contact"}
              navIndex={4}
            />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>{" "}
      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
          isOpen ? "max-h-96" : ""
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-2 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg relative transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-8'}">
          {/* Overlay for dropdown to ensure text visibility */}
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md -z-10"></div>

          <MobileNavItem
            href="/"
            label="Home"
            isActive={pathname === "/"}
            onClick={() => setIsOpen(false)}
            navIndex={1}
          />
          <MobileNavItem
            href="/about"
            label="About"
            isActive={pathname === "/about"}
            onClick={() => setIsOpen(false)}
            navIndex={2}
          />
          <MobileNavItem
            href="/skills"
            label="Skills"
            isActive={pathname === "/skills"}
            onClick={() => setIsOpen(false)}
            navIndex={3}
          />
          <MobileNavItem
            href="/contact"
            label="Contact"
            isActive={pathname === "/contact"}
            onClick={() => setIsOpen(false)}
            navIndex={4}
          />
        </div>
      </div>
    </nav>
  );
};

// NavItem component for desktop navigation
const NavItem = ({ href, label, isActive, navIndex }) => {
  return (
    <Link
      href={href}
      className={`relative font-medium text-base transition-all duration-300 overflow-hidden group px-2 py-1 nav-item animate-fadeIn
        ${
          isActive
            ? "text-black dark:text-white text-shadow-sm"
            : "text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
        }`}
      style={{ animationDelay: `${navIndex * 0.1}s` }}
    >
      <span className="relative z-10">{label}</span> {/* Underline effect */}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out 
          ${
            isActive
              ? "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 scale-x-100"
              : "bg-blue-400 dark:bg-blue-400"
          }`}
      />
      {/* Background hover effect */}
      <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></span>
    </Link>
  );
};

// Mobile NavItem component
const MobileNavItem = ({ href, label, isActive, onClick, navIndex }) => {
  return (
    <Link
      href={href}
      className={`block py-3 px-3 rounded-md transition-all duration-300 ease-in-out transform hover:translate-x-2 nav-item animate-slideIn
        ${
          isActive
            ? "bg-gradient-to-r from-blue-100/90 to-indigo-100/90 dark:from-blue-900/90 dark:to-indigo-900/90 text-black dark:text-white font-medium text-shadow-sm"
            : "text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-gray-800/70"
        }`}
      onClick={onClick}
      style={{ animationDelay: `${navIndex * 0.1}s` }}
    >
      <div className="flex items-center">
        <span
          className={`${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}
        >
          {label}
        </span>
        {isActive && (
          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
        )}
      </div>
    </Link>
  );
};

export default Navbar;
