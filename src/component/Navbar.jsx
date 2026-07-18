import React, { useState } from "react";
import { nav } from "../assets/data";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useTheme();

  const handleScroll = (id) => {
    setOpen(false);

    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <>
      {/* Navbar */}
      <section className="glass fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Kartikey.
          </a>

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
                className="nav-link group"
              >
                {item.label}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-all"
            >
              {dark ? (
                <MdLightMode size={22} className="text-yellow-400" />
              ) : (
                <MdDarkMode size={22} className="text-gray-800" />
              )}
            </button>

            {/* Mobile Menu */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? (
                <RxCross1 size={28} className="text-gray-900 dark:text-white" />
              ) : (
                <RxHamburgerMenu
                  size={30}
                  className="text-gray-900 dark:text-white"
                />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Mobile Menu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`glass fixed top-0 left-0 w-full rounded-b-3xl shadow-xl transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 py-20">
            {nav.map((item, index) => (
              <li key={index}>
                <a
                  href={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="text-lg font-medium text-gray-700 dark:text-white hover:text-purple-500 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
