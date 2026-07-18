import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../assets/data";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certification() {
  return (
    <section
      id="certifications"
      className="section container px-5 py-20 scroll-mt-32"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="heading">Certifications</h2>

        <p className="paragraph mt-3">
          Professional certifications and learning achievements.
        </p>
      </div>

      <div
        className="grid gap-8 justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 380px))",
        }}
      >
        {certifications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="card group relative overflow-hidden rounded-3xl p-7
      w-full max-w-sm flex-1 min-w-[320px] max-w-[380px]"
          >
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white mb-6">
              <FaAward size={28} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            {/* Organization */}
            <p className="text-purple-500 dark:text-purple-400 mt-2">
              {item.organization}
            </p>

            {/* Year */}
            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm">
              {item.year}
            </span>

            {/* Description */}
            <p className="paragraph mt-5 leading-7">{item.description}</p>

            {/* Button */}
            <a
              href={item.credential}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2"
            >
              View Credential
              <FaExternalLinkAlt size={13} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certification;
