import React from "react";
import {
  // Github,
  ExternalLink,
  ArrowRight,
  FolderKanban,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Car Web Project",
      description:
        "A modern and responsive car website with beautiful UI, car listings and interactive sections.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      live: "https://example.com/",
    },

  

    {
      title: "Portfolio Website",
      description:
        "A professional developer portfolio designed to showcase skills, projects, experience and contact information.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/",
      live: "https://example.com/",
    },

  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-950
      text-gray-900 dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 font-semibold uppercase tracking-widest text-sm mb-3">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Recent{" "}
            <span className="text-green-500">
              Work
            </span>
          </h2>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-500 dark:text-gray-400">
            Some of the projects I have built while learning and working
            with modern web technologies.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-7">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl
              bg-white dark:bg-black
              border border-gray-200 dark:border-gray-800
              hover:border-green-500
              transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-700"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/70
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-center justify-center"
                >
                  <div className="flex gap-3">

                

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full
                      bg-green-500 text-black
                      flex items-center justify-center
                      hover:bg-white
                      transition-colors"
                    >
                      <ExternalLink size={21} />
                    </a>

                  </div>
                </div>

                {/* Number */}
                <span
                  className="absolute top-4 left-4
                  w-10 h-10 rounded-lg
                  bg-black/80 text-green-500
                  flex items-center justify-center
                  font-bold"
                >
                  0{index + 1}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-bold
                    group-hover:text-green-500
                    transition-colors"
                  >
                    {project.title}
                  </h3>

                  <FolderKanban
                    size={24}
                    className="text-green-500 shrink-0"
                  />

                </div>

                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full
                      text-xs font-medium
                      bg-green-500/10
                      text-green-500
                      border border-green-500/20"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="flex items-center gap-5 mt-6 pt-5
                  border-t border-gray-200 dark:border-gray-800"
                >

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2
                    text-sm font-semibold
                    text-green-500
                    hover:text-green-400
                    transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={17} />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* More Projects */}
        <div className="text-center mt-12">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2
            px-6 py-3
            border border-gray-300 dark:border-gray-700
            rounded-lg
            font-semibold
            hover:border-green-500
            hover:text-green-500
            transition-all duration-300"
          >
            View More Projects
            <ArrowRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}