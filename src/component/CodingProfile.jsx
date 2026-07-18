import { coding } from "../assets/data";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function CodingProfile() {
  return (
    <section id="coding" className="section py-20 px-5 md:px-8 scroll-mt-12">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="heading">Coding Profiles</h2>

          <p className="paragraph mt-3">
            Practicing Data Structures & Algorithms regularly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coding.map((item, index) => (
            <motion.a
              key={index}
              href={item.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
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
              whileTap={{
                scale: 0.98,
              }}
              className="card group relative overflow-hidden rounded-3xl p-5 md:p-8"
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  bg-gradient-to-r
                  from-purple-600/10
                  via-pink-500/10
                  to-cyan-500/10
                "
              />

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Logo */}
                <div
                  className="
                    w-16 h-16
                    md:w-20 md:h-20
                    rounded-2xl
                    bg-white
                    dark:bg-gray-100
                    flex
                    items-center
                    justify-center
                    shadow-md
                    flex-shrink-0
                  "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 md:w-14 md:h-14 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-gray-900
                      dark:text-white
                      group-hover:text-purple-500
                      dark:group-hover:text-purple-400
                      transition-colors
                    "
                  >
                    {item.name}
                  </h3>

                  <p className="paragraph mt-2 text-sm md:text-base">
                    @{item.username}
                  </p>

                  <div
                    className="
                      inline-block
                      mt-4
                      px-4
                      py-2
                      rounded-full
                      bg-purple-500/10
                      text-purple-600
                      dark:text-purple-300
                      text-sm
                      font-medium
                    "
                  >
                    {item.stats}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center">
                  <FaArrowUpRightFromSquare
                    className="
                      text-xl
                      md:text-2xl
                      text-gray-700
                      dark:text-white
                      group-hover:text-purple-500
                      dark:group-hover:text-purple-400
                      group-hover:rotate-45
                      transition-all duration-300
                    "
                  />
                </div>
              </div>

              {/* Mobile Arrow */}
              <div className="flex sm:hidden justify-center mt-5">
                <FaArrowUpRightFromSquare
                  className="
                    text-xl
                    text-purple-500
                    group-hover:rotate-45
                    transition-all duration-300
                  "
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfile;
