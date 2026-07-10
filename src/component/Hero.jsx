import React from "react";
import { FaCloudArrowDown, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { profile, socialLinks, stats } from "../assets/data";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-90px)] flex items-center overflow-hidden scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full px-5 md:px-8 py-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Internships
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          {/* Role */}
          <p className="mt-3 text-lg md:text-xl text-gray-300">
            {profile.role}
          </p>

          {/* Tagline */}
          <p className="mt-4 max-w-xl text-gray-400 leading-7">
            {profile.tagline}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-7">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="text-gray-400 text-sm">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-7">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Kartikey_Saraswat_Resume.pdf"
              className="flex items-center gap-3 px-6 py-3 rounded-xl
              bg-gradient-to-r
              from-purple-600
              via-fuchsia-500
              to-pink-500
              font-semibold text-white shadow-xl"
            >
              Download Resume
              <FaCloudArrowDown />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-3 px-6 py-3 rounded-xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              text-white hover:bg-white/10"
            >
              View Projects
              <FaArrowRight />
            </motion.a>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-7">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  hover:bg-purple-600
                  transition"
                >
                  <Icon size={18} className="text-white" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full
              bg-gradient-to-r
              from-purple-600
              via-pink-500
              to-cyan-500
              blur-3xl
              opacity-50
              group-hover:scale-110
              transition duration-700"
            />
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-[2rem]
              p-5 md:p-6
              shadow-[0_10px_40px_rgba(168,85,247,0.18)]"
            >
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-56 h-56 md:w-64 md:h-64
                rounded-full
                object-cover
                border-4 border-purple-500/40
                shadow-2xl"
              />

              <div className="mt-5 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {profile.name}
                </h2>

                <p className="text-purple-400 mt-1">{profile.role}</p>

                <p className="text-gray-400 text-sm mt-3">
                  📍 {profile.location}
                </p>

                <p className="text-gray-400 text-sm mt-2 break-all">
                  ✉️ {profile.email}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;