import React, { useEffect, useState } from "react";
import { nav } from "../assets/data";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);

  const { dark, setDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = nav.map((item) => document.querySelector(item.id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    setOpen(false);

    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-1/2 top-4 -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-500 ${scrolled ? "top-3 py-3 px-4 sm:px-6 lg:px-8 rounded-2xl glass shadow-2xl" : "top-4 py-4 px-4 sm:px-6 lg:px-8 rounded-3xl glass"}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#hero");
            }}
            className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Kartikey.
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {nav.map((item, index) => (
              <a
                key={index}
                href={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
                className={`relative text-[15px] font-medium transition-all duration-300 ${active === item.id ? "text-purple-500" : "text-gray-700 dark:text-gray-300 hover:text-purple-500"}`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Kartikey_Saraswat_Resume.pdf"
              className="hidden lg:flex btn-primary items-center gap-2 px-5 py-2.5"
            >
              Resume
              <FaArrowRight size={14} />
            </motion.a>

            {/* Theme */}
            <motion.button
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              onClick={() => setDark(!dark)}
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:border-purple-500 transition-all"
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
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden h-11 w-11 rounded-full glass flex items-center justify-center"
            >
              {open ? (
                <RxCross1 size={24} className="text-gray-900 dark:text-white" />
              ) : (
                <RxHamburgerMenu
                  size={26}
                  className="text-gray-900 dark:text-white"
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            y: open ? 0 : -500,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          className="glass absolute top-0 left-0 w-full rounded-b-3xl shadow-2xl border-b border-white/10"
        >
          <div className="flex flex-col items-center pt-24 pb-12">
            {nav.map((item, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -30,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                href={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
                className={`relative py-4 text-lg font-semibold transition-all duration-300 ${active === item.id ? "text-purple-500" : "text-gray-700 dark:text-gray-300 hover:text-purple-500"}`}
              >
                {item.label}

                {active === item.id && (
                  <motion.div
                    layoutId="mobileActive"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                )}
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download="Kartikey_Saraswat_Resume.pdf"
              className="btn-primary mt-8 flex items-center gap-2 px-6 py-3"
            >
              Download Resume
              <FaArrowRight size={15} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;