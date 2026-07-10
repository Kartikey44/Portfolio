import { education } from "../assets/data";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">Education</h2>

        <p className="text-gray-400 mt-3">My academic journey.</p>
      </div>

      <div className="relative">
        {/* Timeline */}
        <div
          className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[3px]
        -translate-x-1/2
        bg-gradient-to-b
        from-purple-600
        via-fuchsia-500
        to-pink-500"
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative mb-12 flex
            ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
          >
            {/* Timeline Dot */}
            <div
              className="absolute left-5 md:left-1/2
              -translate-x-1/2
              w-12 h-12
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-pink-500
              flex items-center justify-center
              shadow-lg"
            >
              <FaGraduationCap />
            </div>

            {/* Card */}
            <div
              className="ml-20 md:ml-0
              md:w-[45%]
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              p-6
              hover:border-purple-500/40
              transition"
            >
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>

              <p className="text-purple-400 mt-2">{edu.college}</p>

              <p className="text-gray-400 mt-1">{edu.location}</p>

              <div className="flex justify-between mt-6">
                <span className="text-gray-300">{edu.year}</span>

                <span className="font-semibold text-green-400">
                  {edu.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
