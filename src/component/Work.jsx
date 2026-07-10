import React from "react";
import { motion } from "framer-motion";
import { work } from "../assets/data";

function Work() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 py-20 scroll-mt-32 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">What I Do</h1>

        <p className="text-gray-400 mt-3">
          Areas I'm currently focusing on as a Full Stack MERN Developer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8"
          >
            {/* Gradient Line */}
            <div
              className="absolute top-0 left-0
              h-1 w-full
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-cyan-400"
            />

            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0
              group-hover:opacity-100
              transition duration-500
              bg-gradient-to-r
              from-purple-500/10
              via-pink-500/10
              to-cyan-400/10"
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="w-16 h-16
                rounded-2xl
                bg-white/10
                flex items-center justify-center
                mb-6"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-9 h-9 object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold">{item.name}</h2>

              {/* Description */}
              <p className="mt-5 text-gray-400 leading-7">{item.Description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;
