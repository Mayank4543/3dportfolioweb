"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MorphingBackground = () => {
  const blobsRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!blobsRef.current) return;

      const scrollY = window.scrollY;
      const blobs = blobsRef.current.querySelectorAll(".blob");

      blobs.forEach((blob, index) => {
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
      <div
        ref={blobsRef}
        className="absolute inset-0"
        style={{ filter: "url(#gooey)" }}
      >
        <div
          className="blob absolute top-[-100px] left-[10%] w-72 h-72 bg-blue-300/10 dark:bg-blue-600/20 rounded-full opacity-70 animate-blob"
          style={{ animationDelay: "0s" }}
          data-base-transform="translate(0px, 0px) scale(1)"
        />
        <div
          className="blob absolute top-[-150px] right-[15%] w-64 h-64 bg-purple-300/10 dark:bg-purple-600/20 rounded-full opacity-70 animate-blob"
          style={{ animationDelay: "2s" }}
          data-base-transform="translate(30px, -50px) scale(1.1)"
        />
        <div
          className="blob absolute top-[-50px] right-[40%] w-56 h-56 bg-pink-300/10 dark:bg-pink-600/20 rounded-full opacity-70 animate-blob"
          style={{ animationDelay: "4s" }}
          data-base-transform="translate(-20px, 20px) scale(0.9)"
        />
      </div>
      <div className="absolute top-[-120px] left-[25%]">
        <div className="w-80 h-80 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-500/20 dark:from-blue-500/20 dark:via-purple-600/20 dark:to-pink-600/20 animate-morphBlob" />
      </div>
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        style={{ filter: "url(#noise)" }}
      ></div>
      <div className="absolute -top-20 left-1/3 w-1/3 h-40 bg-gradient-to-b from-blue-200/10 via-purple-200/5 to-transparent dark:from-blue-400/10 dark:via-purple-400/5 dark:to-transparent transform rotate-15 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-blue-50/5 to-transparent dark:from-blue-900/5 pointer-events-none"></div>
    </div>
  );
};

const NavItem = ({ href, label, isActive, navIndex }) => (
  <Link href={href}>
    <span
      className={`relative font-medium text-base transition-all duration-300 overflow-hidden group px-2 py-1 nav-item animate-fadeIn ${
        isActive
          ? "text-black dark:text-white text-shadow-sm"
          : "text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
      }`}
      style={{ animationDelay: `${navIndex * 0.1}s` }}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
          isActive
            ? "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 scale-x-100"
            : "bg-blue-400 dark:bg-blue-400"
        }`}
      />
      <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></span>
    </span>
  </Link>
);

const MobileNavItem = ({ href, label, isActive, onClick }) => (
  <Link href={href} onClick={onClick}>
    <span
      className={`block px-4 py-2 rounded-md transition-all duration-300 ${
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
    </span>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navRef.current.style.setProperty("--mouse-x", `${x}px`);
      navRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0b30]/90 backdrop-blur-md py-2 shadow-md"
          : "bg-[#0f0b30]/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                <span className="text-[#00E5FF]">Sanskriti</span> Solanki
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-md transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[#00E5FF] font-medium"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Bellerinashine"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-all duration-300 text-sm"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0b30]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-base rounded-md ${
                  pathname === link.href
                    ? "text-[#00E5FF] font-medium"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Bellerinashine"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-base"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
