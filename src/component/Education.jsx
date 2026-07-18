import { education } from "../assets/data";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="section py-20 px-5 md:px-8 scroll-mt-12">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="heading">Education</h2>
          <p className="paragraph mt-3">My academic journey.</p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              bottom-0
              w-[3px]
              -translate-x-1/2
              bg-gradient-to-b
              from-purple-600
              via-fuchsia-500
              to-pink-500
            "
          />

          {education.map((edu, index) => (
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
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Icon */}
              <div
                className="
                  absolute
                  left-5
                  md:left-1/2
                  -translate-x-1/2
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  text-white
                  z-10
                "
              >
                <FaGraduationCap />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  card
                  ml-16
                  md:ml-0
                  w-[calc(100%-4rem)]
                  md:w-[45%]
                  rounded-3xl
                  p-5
                  md:p-6
                  hover:border-purple-500/40
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>

                <p className="mt-2 text-sm md:text-base text-purple-500 dark:text-purple-400">
                  {edu.college}
                </p>

                <p className="paragraph mt-2 text-sm md:text-base">
                  {edu.location}
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-6">
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    {edu.year}
                  </span>

                  <span className="font-semibold text-green-500 dark:text-green-400">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
