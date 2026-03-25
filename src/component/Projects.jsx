import React from 'react'
import { projects } from '../assets/data'

function Projects() {
  return (
    <div
      id="projects"
      className="max-w-7xl scroll-mt-32 px-5 py-10 mx-auto"
    >
      {/* Heading */}
      <div className="flex flex-col text-center mb-8 gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Projects
        </h1>
        <p className="text-sm text-gray-400">
          Projects I built while learning
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-6 items-center">
        {projects.map((project, index) => {
          const Icon1 = project.links[0]?.icon;
          const Icon2 = project.links[1]?.icon;

          return (
            <div
              key={index}
              className="relative w-full max-w-90 bg-black/60 border border-white/10 
              text-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 md:gap-6 
              shadow-[0_8px_30px_rgba(168,85,247,0.25)] 
              transition duration-300 
              md:hover:shadow-[0_12px_40px_rgba(168,85,247,0.5)]"
            >
              {/* Featured Tag */}
              <span className="absolute right-4 top-4 rounded-xl 
              bg-linear-to-l from-[#953bef] via-[#b538ef] to-[#ce22c8] 
              text-xs px-2 py-1">
                Featured
              </span>

              {/* Title */}
              <div className="flex flex-col gap-1">
                <h1 className="text-lg md:text-xl font-bold">
                  {project.name}
                </h1>
                <span className="text-gray-500 text-xs md:text-sm">
                  {project.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.Description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.img.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="tech"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.links[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 items-center text-sm 
                  bg-linear-to-l from-[#953bef] via-[#b538ef] to-[#ce22c8] 
                  py-2 px-4 rounded-xl shadow-lg">
                    {Icon1 && <Icon1 />}
                    {project.links[0]?.label}
                  </div>
                </a>

                <a
                  href={project.links[1]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm 
                  border border-white/20 py-2 px-4 rounded-xl 
                  hover:bg-white/10 transition"
                >
                  {Icon2 && <Icon2 />}
                  {project.links[1]?.label || "GitHub"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;