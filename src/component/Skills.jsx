import React from "react";
import { motion } from "framer-motion";
import { frontend, backend, tools } from "../assets/data";

function Skills() {
  const skillSections = [
    {
      title: "Frontend",
      color: "from-cyan-500 to-blue-500",
      data: frontend,
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      data: backend,
    },
    {
      title: "Tools",
      color: "from-purple-500 to-pink-500",
      data: tools,
    },
  ];

  return (
    <section id="skills" className="section py-20 px-5 md:px-8 scroll-mt-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="heading">Technical Skills</h2>

          <p className="paragraph mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 last:mb-0">
            {/* Category Heading */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className={`h-1 w-10 md:w-12 rounded-full bg-gradient-to-r ${section.color}`}
              />

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
              {section.data.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="card group relative overflow-hidden rounded-2xl p-4 md:p-6 flex flex-col items-center gap-4 cursor-pointer"
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-r ${section.color}`}
                  />

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="relative z-10 text-center text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>

                  {/* Level */}
                  {skill.level && (
                    <span className="relative z-10 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-300">
                      {skill.level}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
