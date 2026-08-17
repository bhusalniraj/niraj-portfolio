import React, { useEffect, useState } from "react";

import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";

export default function Navbar() {
  // -----------------------------
  // Dark / Light Mode
  // -----------------------------
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  // -----------------------------
  // Mobile Menu
  // -----------------------------
  const [menuOpen, setMenuOpen] = useState(false);

  // -----------------------------
  // Apply Theme
  // -----------------------------
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // -----------------------------
  // Navigation Links
  // -----------------------------
  const navLinks = [
    {
      name: "Home",
      id: "home",
      icon: <Home size={18} />,
    },
    {
      name: "About",
      id: "about",
      icon: <User size={18} />,
    },
    {
      name: "Skills",
      id: "skills",
      icon: <Code2 size={18} />,
    },
    {
      name: "Projects",
      id: "projects",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Contact",
      id: "contact",
      icon: <Mail size={18} />,
    },
  ];

  // -----------------------------
  // Smooth Scroll
  // -----------------------------
  const handleNavClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu
    setMenuOpen(false);
  };

  // -----------------------------
  // Theme Toggle
  // -----------------------------
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // -----------------------------
  // Mobile Menu Toggle
  // -----------------------------
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50

        bg-white/95
        dark:bg-black/95

        backdrop-blur-md

        border-b
        border-gray-200
        dark:border-gray-800

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* =================================
            NAVBAR MAIN
        ================================= */}
        <div className="h-20 flex items-center justify-between">

          {/* =================================
              LOGO
          ================================= */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="
              text-2xl
              font-bold
              text-gray-900
              dark:text-white

              hover:text-green-500

              transition-colors
              duration-300
            "
          >
            Niraj Bhusal
            <span className="text-green-500"></span>
          </button>

          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}
          <div className="hidden md:flex items-center gap-1">

            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="
                  flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-lg

                  text-gray-600
                  dark:text-gray-300

                  hover:text-green-500

                  hover:bg-gray-100
                  dark:hover:bg-gray-900

                  transition-all
                  duration-300
                "
              >
                {link.icon}

                {link.name}
              </button>
            ))}

          </div>

          {/* =================================
              RIGHT SIDE
          ================================= */}
          <div className="flex items-center gap-3">

            {/* =================================
                DARK / LIGHT BUTTON
            ================================= */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="
                w-11
                h-11

                flex
                items-center
                justify-center

                rounded-full

                bg-gray-100
                dark:bg-gray-900

                border
                border-gray-300
                dark:border-gray-700

                text-gray-800
                dark:text-green-400

                hover:bg-green-500
                hover:text-black

                hover:border-green-500

                transition-all
                duration-300
              "
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* =================================
                MOBILE MENU BUTTON
            ================================= */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="
                md:hidden

                w-11
                h-11

                flex
                items-center
                justify-center

                rounded-lg

                bg-gray-100
                dark:bg-gray-900

                text-gray-800
                dark:text-white

                border
                border-gray-300
                dark:border-gray-700

                hover:border-green-500
                hover:text-green-500

                transition-all
                duration-300
              "
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>
        </div>

        {/* =================================
            MOBILE NAVIGATION
        ================================= */}
        {menuOpen && (
          <div className="md:hidden pb-5">

            <div
              className="
                flex
                flex-col
                gap-2

                p-3

                rounded-xl

                bg-gray-100
                dark:bg-gray-950

                border
                border-gray-200
                dark:border-gray-800
              "
            >

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="
                    flex
                    items-center
                    gap-3

                    w-full

                    px-4
                    py-3

                    rounded-lg

                    text-left

                    text-gray-700
                    dark:text-gray-300

                    hover:bg-green-500
                    hover:text-black

                    transition-all
                    duration-300
                  "
                >
                  {link.icon}

                  {link.name}
                </button>
              ))}

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}