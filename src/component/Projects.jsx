import React, { useRef } from "react";
import { projects } from "../assets/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section py-20 px-5 md:px-8 scroll-mt-32">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="heading">Projects</h2>

          <p className="paragraph mt-3">Projects I built while learning.</p>
        </div>

        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
            z-20 w-12 h-12 rounded-full
            items-center justify-center
            bg-white dark:bg-gray-900
            border border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-white
            hover:bg-purple-600 hover:text-white
            transition-all duration-300
            opacity-0 group-hover:opacity-100"
          >
            <FaChevronLeft />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
              snap-x
              snap-mandatory
              py-4
            "
          >
            {projects.map((project, index) => {
              const Icon1 = project.links[0]?.icon;
              const Icon2 = project.links[1]?.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    card
                    snap-center
                    flex-shrink-0
                    w-full
                    sm:w-[340px]
                    lg:w-[360px]
                    rounded-3xl
                    p-6
                    flex
                    flex-col
                    gap-5
                    hover:border-purple-500/40
                    hover:shadow-[0_12px_30px_rgba(168,85,247,.3)]
                    transition-all
                    duration-300
                  "
                >
                  {/* Featured */}
                  <span
                    className="
                      self-end
                      rounded-full
                      bg-gradient-to-r
                      from-purple-600
                      via-fuchsia-500
                      to-pink-500
                      px-3
                      py-1
                      text-xs
                      text-white
                    "
                  >
                    Featured
                  </span>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-purple-500 dark:text-purple-400">
                      {project.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="paragraph text-sm text-justify">
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
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href={project.links[0]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      {Icon1 && <Icon1 />}
                      {project.links[0]?.label}
                    </a>

                    <a
                      href={project.links[1]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass rounded-xl px-4 py-2 flex items-center gap-2 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white transition-all"
                    >
                      {Icon2 && <Icon2 />}
                      {project.links[1]?.label}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
            z-20 w-12 h-12 rounded-full
            items-center justify-center
            bg-white dark:bg-gray-900
            border border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-white
            hover:bg-purple-600 hover:text-white
            transition-all duration-300
            opacity-0 group-hover:opacity-100"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
