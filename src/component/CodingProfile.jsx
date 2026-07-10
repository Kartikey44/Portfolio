import { coding } from "../assets/data";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function CodingProfile() {
  return (
    <section className="py-20 px-5 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">Coding Profiles</h2>

          <p className="text-gray-400 mt-3">
            Practicing Data Structures & Algorithms regularly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coding.map((item, index) => (
            <motion.a
              key={index}
              href={item.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8"
            >
              {/* Glow */}
              <div
                className="absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-r
                from-purple-600/20
                via-pink-500/20
                to-cyan-500/20"
              />

              <div className="relative flex items-center gap-6">
                {/* Logo */}
                <div
                  className="w-20 h-20
                  rounded-2xl
                  bg-white
                  flex items-center justify-center
                  overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-left">
                  <h3
                    className="text-2xl font-bold
                    group-hover:text-purple-400
                    transition"
                  >
                    {item.name}
                  </h3>

                  <p className="text-gray-400 mt-1">@{item.username}</p>

                  <div
                    className="inline-block
                    mt-3
                    px-3 py-1
                    rounded-full
                    bg-purple-500/10
                    text-purple-300
                    text-sm"
                  >
                    {item.stats}
                  </div>
                </div>

                {/* Arrow */}
                <FaArrowUpRightFromSquare
                  className="text-2xl
                  group-hover:rotate-45
                  transition duration-300"
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