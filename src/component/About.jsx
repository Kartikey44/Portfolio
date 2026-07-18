import React from "react";
import { motion } from "framer-motion";
import { profile, frontend, backend } from "../assets/data";

function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden py-20 px-5 md:px-8 scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card relative grid lg:grid-cols-2 gap-12 lg:gap-16 rounded-3xl p-6 md:p-10 lg:p-14"
        >
          {/* Left */}
          <div className="flex justify-center items-center order-1">
            <div className="relative group">
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  via-pink-500
                  to-cyan-500
                  blur-3xl
                  opacity-60
                  group-hover:scale-110
                  transition-all duration-700
                "
              />

              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                src={profile.profileImage}
                alt={profile.name}
                className="
                  relative
                  w-56 h-56
                  sm:w-64 sm:h-64
                  md:w-72 md:h-72
                  rounded-full
                  border-4
                  border-purple-500/40
                  object-cover
                  shadow-2xl
                "
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center order-2">
            <span className="text-purple-500 dark:text-purple-400 font-semibold uppercase tracking-wider text-sm">
              Get to Know Me
            </span>

            <h2 className="heading mt-3">About Me</h2>

            <p className="paragraph mt-6 leading-8">{profile.summary}</p>

            {/* Frontend */}
            <div className="mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3">
                {frontend.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    className="
                      px-4 py-2
                      rounded-full
                      border border-purple-500/30
                      bg-purple-500/10
                      text-purple-600
                      dark:text-purple-300
                      text-sm
                      font-medium
                      cursor-pointer
                      transition-all
                    "
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend
              </h3>

              <div className="flex flex-wrap gap-3">
                {backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    className="
                      px-4 py-2
                      rounded-full
                      border border-cyan-500/30
                      bg-cyan-500/10
                      text-cyan-600
                      dark:text-cyan-300
                      text-sm
                      font-medium
                      cursor-pointer
                      transition-all
                    "
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
