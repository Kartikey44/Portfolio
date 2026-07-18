import React from "react";
import { motion } from "framer-motion";
import { work } from "../assets/data";

function Work() {
  return (
    <section id="services" className="section py-20 px-5 md:px-8 scroll-mt-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="heading">What I Do</h2>

          <p className="paragraph mt-4 max-w-2xl mx-auto">
            Areas I'm currently focusing on as a Full Stack MERN Developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {work.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="card group relative overflow-hidden rounded-3xl p-6 md:p-8"
            >
              {/* Gradient Line */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-cyan-400
                "
              />

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-r
                  from-purple-500/10
                  via-pink-500/10
                  to-cyan-400/10
                "
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    md:w-16
                    md:h-16
                    rounded-2xl
                    bg-gray-100
                    dark:bg-white/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-8 h-8 md:w-9 md:h-9 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="paragraph mt-4 leading-7 text-sm md:text-base">
                  {item.Description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
