import React, { useRef } from "react";
import { projects } from "../assets/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  return (
    <div id="projects" className="max-w-7xl scroll-mt-32 px-5 py-10 mx-auto">
      {/* Heading */}
      <div className="flex flex-col text-center mb-8 gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Projects</h1>
        <p className="text-sm text-gray-400">Projects I built while learning</p>
      </div>

      {/* Slider */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-black/70 border border-white/20
          text-white hover:bg-purple-600 transition-all duration-300
          opacity-0 group-hover:opacity-100"
        >
          <FaChevronLeft className="mx-auto" />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-auto overflow-y-hidden
          scroll-smooth scrollbar-hide px-14 py-2
          "
        >
          {projects.map((project, index) => {
            const Icon1 = project.links[0]?.icon;
            const Icon2 = project.links[1]?.icon;

            return (
              <div
                key={index}
                className="relative max-w-[360px] md:w-[360px] lg:w-[360px]
                flex-shrink-0 bg-gray-900 border border-white/10
                text-white rounded-2xl p-6 md:p-8 flex flex-col gap-4
                 shadow-[0_8px_30px_rgba(168,85,247,0.25)]
                hover:shadow-[0_10px_16px_rgba(168,85,247,0.5)]
                transition duration-300
               "
              >
                {/* Featured Tag */}
                <span
                  className="absolute right-4 top-4 rounded-xl z-50
                  bg-gradient-to-l from-[#953bef] via-[#b538ef] to-[#ce22c8]
                  text-xs px-2 py-1"
                >
                  Featured
                </span>

                {/* Title */}
                <div className="flex flex-col gap-1">
                  <h1 className="text-lg md:text-xl font-bold">
                    {project.name}
                  </h1>

                  <span className="text-gray-500 text-sm">{project.role}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm text-justify leading-relaxed mt-2">
                  {project.Description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.img.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt="tech"
                      className="w-9 h-9 object-contain"
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto flex-wrap">
                  <a
                    href={project.links[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center text-sm
                    bg-gradient-to-l from-[#953bef] via-[#b538ef] to-[#ce22c8]
                    py-2 px-4 rounded-xl shadow-lg"
                  >
                    {Icon1 && <Icon1 />}
                    {project.links[0]?.label}
                  </a>

                  <a
                    href={project.links[1]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center text-sm
                    border border-white/20 py-2 px-4 rounded-xl
                    hover:bg-white/10 transition"
                  >
                    {Icon2 && <Icon2 />}
                    {project.links[1]?.label}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-black/70 border border-white/20
          text-white hover:bg-purple-600 transition-all duration-300
          opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight className="mx-auto" />
        </button>
      </div>
    </div>
  );
}

export default Projects;  