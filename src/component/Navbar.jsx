import React, { useState } from "react";
import { nav } from "../assets/data";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const { dark, setDark } = useTheme();

  const active = "#" + page;

  const handleChangePage = (id) => {
    setOpen(false);
    setPage(id.replace("#", ""));
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-3xl px-6 py-4 shadow-[0_8px_40px_rgba(0,0,0,.15)]"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleChangePage("#hero")}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent"
          >
            Kartikey.
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {nav.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleChangePage(item.id)}
                className={`relative pb-1 cursor-pointer text-[15px] font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-purple-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500"
                }`}
              >
                {item.label}

                {active === item.id && (
                  <motion.span
                    layoutId="navbar-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download="Kartikey_Saraswat_Resume.pdf"
              className="btn-primary hidden items-center gap-2 px-5 py-2.5 lg:flex"
            >
              Resume
              <FaArrowRight size={14} />
            </motion.a>

            {/* Theme */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setDark(!dark)}
              className="glass flex h-11 w-11 items-center justify-center rounded-full hover:border-purple-500 transition-all duration-300"
            >
              {dark ? (
                <MdLightMode size={22} className="text-yellow-400" />
              ) : (
                <MdDarkMode
                  size={22}
                  className="text-gray-800 dark:text-white"
                />
              )}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="glass flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            >
              {open ? (
                <RxCross1 size={24} className="text-gray-900 dark:text-white" />
              ) : (
                <RxHamburgerMenu
                  size={26}
                  className="text-gray-900 dark:text-white"
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>
      {/* Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
        transition={{ duration: 0.25 }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden"
      >
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            y: open ? 0 : -20,
            scale: open ? 1 : 0.97,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="glass absolute left-1/2 top-5 w-[92%] max-w-md -translate-x-1/2 rounded-3xl border border-white/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,.25)]"
        >
          <div className="flex flex-col gap-2">
            {nav.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -15 }}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -15,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.25,
                }}
                whileHover={{
                  x: 6,
                  backgroundColor: "rgba(168,85,247,.08)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => handleChangePage(item.id)}
                className={`relative flex items-center rounded-xl px-5 py-4 text-left text-lg font-medium transition-all duration-300 ${
                  active === item.id
                    ? "bg-purple-500/10 text-purple-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500"
                }`}
              >
                {active === item.id && (
                  <motion.div
                    layoutId="mobileIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-400"
                  />
                )}

                {item.label}
              </motion.button>
            ))}

            <motion.a
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="/resume.pdf"
              download="Kartikey_Saraswat_Resume.pdf"
              className="btn-primary mt-5 flex items-center justify-center gap-2 rounded-xl py-3"
            >
              Resume
              <FaArrowRight size={15} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar;