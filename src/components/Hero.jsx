import React from "react";
// import { ArrowRight, Download, Github, Linkedin, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 overflow-hidden
      bg-white dark:bg-black
      text-gray-900 dark:text-white
      transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-7">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-gray-100 dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              text-green-500 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for Work
            </div>

            {/* Heading */}
            <div>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Niraj
                <span className="text-green-500"> Bhusal</span>
              </h1>
            </div>

            {/* Role */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack{" "}
              <span className="text-green-500">
                Developer 

               
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-gray-600 dark:text-gray-400 text-base md:text-lg leading-8">
              I build modern, responsive and user-friendly web applications
              using React, JavaScript, Node.js, Express and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2"> 

              <div className="h-px w-16 bg-gray-300 dark:bg-gray-800"></div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                Let's connect
              </span>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

              {/* Profile Card */}
              <div className="relative w-72 h-72 md:w-96 md:h-96
                rounded-3xl
                bg-gray-100 dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                flex items-center justify-center
                overflow-hidden
                shadow-2xl"
              >

                {/* Green Border Circle */}
                <div className="absolute w-64 h-64 md:w-80 md:h-80
                  rounded-full border-2 border-green-500/40"
                ></div>

                {/* Developer Icon */}
                <div className="relative flex flex-col items-center gap-4">

                 

                  <div className="text-center">
                    <p className="text-xl font-bold">
                      Niraj Bhusal
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Web Developer 
                    </p>
                  </div>

                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-3 py-2
                  bg-black text-green-400
                  rounded-lg text-xs font-semibold
                  border border-green-500/30"
                >
                  React.js
                </div>

                <div className="absolute bottom-6 left-6 px-3 py-2
                  bg-black text-green-400
                  rounded-lg text-xs font-semibold
                  border border-green-500/30"
                >
                  MERN Stack
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            ["2+", "Projects"],
            ["6+", "Skills"],
            ["1+", "Years Learning"],
            ["100%", "Passion"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="p-5 rounded-xl
              bg-gray-100 dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              hover:border-green-500/50
              transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-green-500">
                {number}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}