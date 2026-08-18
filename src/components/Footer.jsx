import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  // Github,
  // Linkdeln,
  // Mail,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative bg-gray-100 dark:bg-gray-950
      text-gray-900 dark:text-white
      border-t border-gray-200 dark:border-gray-800
      transition-colors duration-300"
    >
      {/* Green Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-flex items-center gap-2 text-3xl font-bold"
            >
              Niraj Bhusal
              <span className="text-green-500"></span>
            </a>

            <p className="mt-5 max-w-md text-gray-500 dark:text-gray-400 leading-7">
              Full Stack Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>

            {/* Developer Badge */}
            <div
              className="inline-flex items-center gap-2 mt-6
              px-4 py-2 rounded-lg
              bg-white dark:bg-black
              border border-gray-200 dark:border-gray-800
              text-sm"
            >
              <Code2 size={18} className="text-green-500" />
              <span>Building the web with passion</span>
            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400
                    hover:text-green-500
                    transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Connect */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-6 mb-5">
              Let's connect and create something amazing together.
            </p>

            <div className="flex gap-3">

              <a
                href="https://github.com/bhusalniraj"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-lg
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                flex items-center justify-center
                hover:bg-green-500 hover:text-black
                hover:border-green-500
                transition-all duration-300"
              >
               <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/niraj-bhusal-3a23a5405/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-lg
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                flex items-center justify-center
                hover:bg-green-500 hover:text-black
                hover:border-green-500
                transition-all duration-300"
              >
                <FaLinkedin size={25} />
              </a>

              <a
                href="https://www.instagram.com/niraj.bhusal.7165/"
                aria-label="Instgram"
                className="w-11 h-11 rounded-lg
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                flex items-center justify-center
                hover:bg-green-500 hover:text-black
                hover:border-green-500
                transition-all duration-300"
              >
              <FaInstagram size={25} />
              </a>

            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-200 dark:bg-gray-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row
          items-center justify-between gap-5"
        >

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Niraj Bhusal. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            Made with
            <Heart
              size={15}
              className="text-green-500 fill-green-500"
            />
            & Code
          </p>

          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-lg
            bg-green-500 text-black
            flex items-center justify-center
            hover:bg-green-600
            hover:-translate-y-1
            transition-all duration-300"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </footer>
  );
}