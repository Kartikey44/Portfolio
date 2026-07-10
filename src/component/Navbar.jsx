import React,{useState} from 'react'
import {nav} from '../assets/data'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <section
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-xl backdrop-blur-2xl px-6 py-4 flex justify-between items-center transition-all duration-300
"
      >
        <a
          href="#hero"
          className=" text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent hover:scale-105 transition"        >
          Kartikey.
        </a>
        <div className="hidden md:flex items-center justify-center gap-8">
          {nav.map((nav, id) => (
            <a
              href={nav.id}
              key={id}
              onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  document.querySelector(nav.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 300);
              }}
              className="
relative
group
text-gray-300
hover:text-white
transition
"
            >
              {nav.label}
            </a>
          ))}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden z-50 relative "
        >
          {!open ? <RxHamburgerMenu size={30} /> : <RxCross1 size={30} />}
        </div>
      </section>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30
      ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 left-0 w-full text-white rounded-b-2xl shadow-xl z-40
          bg-[linear-gradient(to_bottom,#374151EE,#111827EE)] backdrop-blur-md
          transform transition-all duration-300 ease-in-out
            ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
        >
          <ul className="flex mt-16 flex-col gap-6 items-center p-10 justify-center">
            {nav.map((nav, id) => (
              <li key={id}>
                <a
                  href={nav.id}
                  onClick={(e) => {
                    e.preventDefault();

                    setOpen(false);

                    setTimeout(() => {
                      document.querySelector(nav.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 300);
                  }}
                  className="cursor-pointer text-lg transition-all duration-200 ease-in-out hover:translate-x-2 hover:text-gray-300 "
                >
                  <span
                    className="
absolute
left-0
-bottom-1
h-[2px]
w-0
bg-gradient-to-r
from-purple-500
to-pink-500
transition-all
duration-300
group-hover:w-full"
                  />
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar