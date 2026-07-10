import React from "react";
import { motion } from "framer-motion";
import { profile, frontend, backend } from "../assets/data";

function About() {
  return (
    <section className="px-5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="about"
        className="relative max-w-7xl mx-auto mt-24 md:mt-32
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8 md:p-16
        grid grid-cols-1 lg:grid-cols-2
        gap-14
        scroll-mt-32"
      >
        {/* LEFT */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full
              bg-gradient-to-r
              from-purple-600
              via-pink-500
              to-cyan-500
              blur-3xl
              opacity-60
              group-hover:scale-110
              transition duration-700"
            />

            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              src={profile.profileImage}
              alt="Profile"
              className="relative
              w-72 h-72
              rounded-full
              border-4 border-purple-500/40
              object-cover
              shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          <span className="text-purple-400 font-medium">Get to know me</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">About Me</h2>

          <p className="mt-6 text-gray-300 leading-8">{profile.summary}</p>

          {/* Frontend */}
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-4">Frontend</h3>

            <div className="flex flex-wrap gap-3">
              {frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  className="px-4 py-2
                  rounded-full
                  border border-purple-500/30
                  bg-purple-500/10
                  text-purple-300
                  cursor-pointer"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-4">Backend</h3>

            <div className="flex flex-wrap gap-3">
              {backend.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  className="px-4 py-2
                  rounded-full
                  border border-cyan-500/30
                  bg-cyan-500/10
                  text-cyan-300
                  cursor-pointer"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;