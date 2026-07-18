import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { FaCloudArrowDown, FaArrowRight } from "react-icons/fa6";
import { profile, socialLinks, stats } from "../assets/data";

function Hero() {
  return (
    <section
      id="hero"
      className="section relative min-h-screen lg:min-h-[calc(100vh-90px)] flex items-center overflow-hidden scroll-mt-32 py-20 lg:py-0"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl" />

      <div
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          md:px-8
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-16
          items-center
        "
      >
        {/* Left */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Internships
          </motion.div>

          {/* Heading */}
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          {/* Typewriter */}
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">
            <Typewriter
              words={[
                "Full Stack MERN Developer",
                "React Developer",
                "Backend Developer",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </p>

          {/* Tagline */}
          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-8 text-gray-600 dark:text-gray-400">
            {profile.tagline}
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-5 text-center hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold text-purple-500">
                  <CountUp
                    end={Number(String(item.value).replace(/\D/g, ""))}
                    duration={2}
                  />
                  +
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Kartikey_Saraswat_Resume.pdf"
              className="btn-primary flex items-center justify-center gap-3"
            >
              Download Resume
              <FaCloudArrowDown />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="glass flex items-center justify-center gap-3 rounded-xl px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              View Projects
              <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-secondary flex items-center justify-center"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  whileHover={{
                    y: -8,
                    rotate: 8,
                    scale: 1.15,
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex h-11 w-11 items-center justify-center rounded-xl hover:bg-purple-600 hover:border-purple-600 transition-all"
                >
                  <Icon
                    className="text-gray-800 dark:text-white group-hover:text-white"
                    size={18}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
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
                opacity-50
                group-hover:scale-110
                transition-all
                duration-700
              "
            />

            {/* Profile Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="card relative rounded-[2rem] p-5 sm:p-6 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_15px_40px_rgba(168,85,247,.35)] transition-all duration-500"
            >
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="
                  w-44 h-44
                  sm:w-56 sm:h-56
                  md:w-64 md:h-64
                  lg:w-72 lg:h-72
                  rounded-full
                  object-cover
                  border-4
                  border-purple-500/40
                  shadow-2xl
                "
              />

              <div className="mt-5 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {profile.name}
                </h2>

                <div className="mt-4 flex items-center justify-center gap-2 text-green-500 font-medium">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                  Available for Internship
                </div>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  📍 {profile.location}
                </p>

                <p className="mt-2 text-sm break-all text-gray-600 dark:text-gray-400">
                  ✉️ {profile.email}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-gray-500 dark:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v14m0 0l-6-6m6 6l6-6"
          />
        </svg>

        <span className="mt-2 text-sm">Scroll Down</span>
      </motion.a>
    </section>
  );
}

export default Hero;