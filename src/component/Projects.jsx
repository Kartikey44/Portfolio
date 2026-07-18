import React, { useRef } from "react";
import { projects } from "../assets/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="section py-20 px-5 md:px-8 scroll-mt-32 overflow-hidden"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 font-semibold uppercase tracking-widest">
            Portfolio
          </span>

          <h2 className="heading mt-3">Featured Projects</h2>

          <p className="paragraph mt-4 max-w-2xl mx-auto">
            Some of my best MERN Stack applications built with modern
            technologies, responsive UI, scalable backend, and clean
            architecture.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <FaChevronLeft />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex justify-center gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-2 py-4"
          >
            {projects.map((project, index) => {
              const Icon1 = project.links[0]?.icon;
              const Icon2 = project.links[1]?.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -12 }}
                  className="group relative snap-center flex-shrink-0 w-full sm:w-[340px] lg:w-[370px]"
                >
                  {/* Gradient Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 opacity-0 blur group-hover:opacity-100 transition-all duration-500" />

                  {/* Card */}
                  <div className="card relative rounded-3xl p-7 h-full flex flex-col gap-5 border border-transparent group-hover:border-purple-500/30 transition-all duration-500">
                    {/* Project Number */}
                    <span className="absolute right-5 top-5 text-5xl font-black text-purple-500/10 select-none">
                      0{index + 1}
                    </span>

                    {/* Featured */}
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white">
                        Featured
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-purple-500 dark:text-purple-400">
                        {project.role}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="paragraph text-sm leading-7 text-justify flex-grow">
                      {project.Description}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-3">
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {project.img.map((logo, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ rotate: 8, scale: 1.15 }}
                            className="glass w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                          >
                            <img
                              src={logo}
                              alt="tech"
                              className="w-7 h-7 object-contain"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links[0]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 flex justify-center items-center gap-2"
                      >
                        {Icon1 && <Icon1 />}
                        {project.links[0]?.label}
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links[1]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass flex-1 rounded-xl px-4 py-3 flex justify-center items-center gap-2 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white transition-all duration-300"
                      >
                        {Icon2 && <Icon2 />}
                        {project.links[1]?.label}
                      </motion.a>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-2 h-1 w-0 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;