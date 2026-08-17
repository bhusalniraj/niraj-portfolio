import React from "react";
import {
  User,
  Code2,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-950
      text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 font-semibold uppercase tracking-widest text-sm mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Know More About{" "}
            <span className="text-green-500">Me</span>
          </h2>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Card */}
          <div className="relative">

            <div className="absolute -top-5 -left-5 w-24 h-24
              border-l-2 border-t-2 border-green-500"
            ></div>

            <div className="absolute -bottom-5 -right-5 w-24 h-24
              border-r-2 border-b-2 border-green-500"
            ></div>

            <div className="relative p-8 md:p-10
              bg-white dark:bg-black
              border border-gray-200 dark:border-gray-800
              rounded-2xl shadow-xl"
            >

              <div className="w-16 h-16 rounded-xl
                bg-green-500/10
                flex items-center justify-center mb-6"
              >
                <User className="text-green-500" size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-5">
                I'm Niraj Bhusal
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-8 mb-5">
                I'm a passionate Full Stack Developer who loves creating
                modern, responsive and user-friendly web applications.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-8">
                I enjoy learning new technologies and turning ideas into
                real-world digital experiences using modern web technologies.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-7
                text-green-500 font-semibold
                hover:text-green-400 transition-colors"
              >
                Let's Work Together
                <ArrowRight size={19} />
              </a>

            </div>
          </div>

          {/* Right Content */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Building Digital Experiences
              <span className="text-green-500"> That Matter.</span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
              My focus is on building clean, scalable and high-performance
              websites. I care about both design and functionality, making
              sure every project provides a great user experience.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="p-5 rounded-xl
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                hover:border-green-500
                transition-all duration-300"
              >
                <Code2 className="text-green-500 mb-4" size={28} />

                <h4 className="font-bold text-lg mb-2">
                  Development
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Modern frontend and backend development.
                </p>
              </div>

              <div className="p-5 rounded-xl
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                hover:border-green-500
                transition-all duration-300"
              >
                <Briefcase className="text-green-500 mb-4" size={28} />

                <h4 className="font-bold text-lg mb-2">
                  Projects
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Building practical and creative web projects.
                </p>
              </div>

              <div className="p-5 rounded-xl
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                hover:border-green-500
                transition-all duration-300"
              >
                <GraduationCap className="text-green-500 mb-4" size={28} />

                <h4 className="font-bold text-lg mb-2">
                  Learning
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Always learning new technologies and tools.
                </p>
              </div>

              <div className="p-5 rounded-xl
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                hover:border-green-500
                transition-all duration-300"
              >
                <User className="text-green-500 mb-4" size={28} />

                <h4 className="font-bold text-lg mb-2">
                  Problem Solving
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Finding simple solutions to complex problems.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}