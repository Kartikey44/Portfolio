import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../assets/data";

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
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="section py-20 scroll-mt-5"
    >
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >

          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-500">
            Featured Work
          </span>

          <h2 className="heading mt-5">
            My Recent Projects
          </h2>

          <p className="paragraph mx-auto mt-5 max-w-2xl">
            A collection of modern full-stack applications built using the MERN stack,
            focused on scalability, performance and clean user experience.
          </p>

        </motion.div>

        {/* Carousel */}

        <div className="relative group">

          {/* Left Arrow */}

          <motion.button
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 xl:flex"
          >
            <FaChevronLeft className="text-5xl text-white/60 hover:text-purple-400 transition-colors duration-300" />
          </motion.button>

          {/* Slider */}

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide py-6 px-[max(1rem,calc((100vw-1180px)/2))]"
          >
            {projects.map((project, index) => {

              const Icon1 = project.links[0]?.icon;
              const Icon2 = project.links[1]?.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card relative flex h-[450px] w-[350px] flex-shrink-0 snap-center flex-col rounded-[28px] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_18px_45px_rgba(168,85,247,.22)]"
                >
                  {/* Project Number */}

                  <h1 className="absolute left-6 top-5 text-6xl font-black text-purple-500/10">
                    {String(index + 1).padStart(2, "0")}
                  </h1>

                  {/* Badge */}

                  <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>

                  {/* Content */}

                  <div className="relative z-10 mt-16 flex flex-1 flex-col">
                    {/* Title */}

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-purple-500">
                        {project.role}
                      </p>
                    </div>

                    {/* Description */}

                    <p className="paragraph mt-5 min-h-[100px] line-clamp-4 text-sm leading-7">
                      {project.Description}
                    </p>

                    {/* Tech Stack */}

                    <div className="mt-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                        Tech Stack
                      </p>

                      <div className="flex items-center gap-3">
                        {project.img.slice(0, 5).map((logo, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="flex h-10 w-10 items-center justify-center"
                          >
                            <img
                              src={logo}
                              alt="tech"
                              className="h-7 w-7 object-contain"
                            />
                          </motion.div>
                        ))}

                        {project.img.length > 5 && (
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10 text-xs font-semibold text-purple-500">
                            +{project.img.length - 5}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Buttons */}

                    <div className="mt-auto border-t border-white/10 pt-5">
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.links[0]?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex h-11 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-medium"
                        >
                          {Icon1 && <Icon1 className="text-base" />}
                          {project.links[0]?.label}
                        </motion.a>

                        <motion.a
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.links[1]?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass flex h-11 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                        >
                          {Icon2 && <Icon2 className="text-base" />}
                          {project.links[1]?.label}
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}

          <motion.button
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 xl:flex"
          >
            <FaChevronRight className="text-5xl text-white/60 transition-colors duration-300 hover:text-purple-400" />
          </motion.button>
          
        </div>

      </div>
            
    </motion.section>
  );
}

export default Projects;