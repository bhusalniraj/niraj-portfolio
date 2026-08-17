import React from "react";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Database,
  GitBranch,
  Zap,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <Code2 size={30} />,
      description: "Semantic and responsive web structure",
    },
    {
      name: "CSS / Tailwind CSS",
      icon: <Palette size={30} />,
      description: "Modern UI and responsive designs",
    },
    {
      name: "JavaScript",
      icon: <Braces size={30} />,
      description: "Interactive and dynamic applications",
    },
    {
      name: "React.js",
      icon: <Atom size={30} />,
      description: "Modern component-based applications",
    },
    {
      name: "Node.js / Express",
      icon: <Server size={30} />,
      description: "Backend and REST API development",
    },
    {
      name: "MongoDB",
      icon: <Database size={30} />,
      description: "NoSQL database management",
    },
    {
      name: "Git / GitHub",
      icon: <GitBranch size={30} />,
      description: "Version control and collaboration",
    },
    {
      name: "REST API",
      icon: <Zap size={30} />,
      description: "API integration and development",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-black
      text-gray-900 dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 font-semibold uppercase tracking-widest text-sm mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I{" "}
            <span className="text-green-500">
              Work With
            </span>
          </h2>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-500 dark:text-gray-400">
            Here are the technologies and tools I use to create modern,
            responsive and scalable web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl
              bg-gray-50 dark:bg-gray-950
              border border-gray-200 dark:border-gray-800
              hover:border-green-500
              hover:-translate-y-2
              transition-all duration-300"
            >

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl
                bg-green-500/10
                text-green-500
                flex items-center justify-center
                mb-5
                group-hover:bg-green-500
                group-hover:text-black
                transition-all duration-300"
              >
                {skill.icon}
              </div>

              {/* Name */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">
                  {skill.name}
                </h3>

                
              </div>

              

            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">

          <p className="text-gray-500 dark:text-gray-400">
            Always learning. Always building.
          </p>

          <div className="mt-4 flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/30"></span>
          </div>

        </div>

      </div>
    </section>
  );
}