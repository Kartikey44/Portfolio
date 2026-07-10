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
    <section
      id="skills"
      className="max-w-7xl mx-auto px-5 py-20 scroll-mt-28 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Technical Skills</h1>

        <p className="text-gray-400 mt-4">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      {skillSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-14">
          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`w-12 h-1 rounded-full bg-gradient-to-r ${section.color}`}
            />

            <h2 className="text-2xl font-semibold">{section.title}</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {section.data.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                flex flex-col
                items-center
                gap-4
                transition-all"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-r ${section.color}
                  blur-3xl`}
                />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="relative z-10 font-semibold">{skill.name}</h3>

                {/* Skill Level */}
                {skill.level && (
                  <span className="relative z-10 text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                    {skill.level}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
