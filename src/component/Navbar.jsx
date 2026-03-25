import React,{useState} from 'react'
import {nav} from '../assets/data'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-center items-center'>
        <section className="fixed top-0 left-1/2 -translate-x-1/2 z-50 text-white bg-gray-700  backdrop-blur-md px-5 md:px-15 py-5 md:py-7 w-full md:gap-20 flex justify-between md:grid grid-cols-2 transition ease-in-out">
        <a href="#hero" className='text-center bg-linear-to-tr from-[#1c1325] via-[#801dad] to-[#3c22ce] text-2xl md:text-4xl bg-clip-text font-bold text-transparent md:hover:scale-110 transition duration-200 ease-in-out'>Kartikey.</a>    
        <div className='hidden md:flex items-center justify-center gap-8'>
          {nav.map((nav, id) => (
            <a href={nav.id}
              key={id}
              onClick={(e) => {
    e.preventDefault();
    setTimeout(() => {
      document.querySelector(nav.id)?.({
        behavior: "smooth",
      });
    }, 300); 
  }}
              className="cursor-pointer text-sm transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300 focus:text-amber-30">{nav.label}</a>
          ))}
        </div>
     
        <div onClick={ ()=>(setOpen(!open))} className='md:hidden z-50 relative '>
          {!open ? 
          <RxHamburgerMenu size={30} />:
        <RxCross1 size={30}/>
          }  
        </div>
      </section>
      <div onClick={()=>(setOpen(false))} className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30
      ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div
          onClick={(e) => e.stopPropagation()}
         className={`fixed top-0 left-0 w-full text-white rounded-b-2xl shadow-xl z-40
          bg-[linear-gradient(to_bottom,#374151EE,#111827EE)] backdrop-blur-md
          transform transition-all duration-300 ease-in-out
            ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
          <ul className='flex mt-16 flex-col gap-6 items-center p-10 justify-center'>
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
  className="cursor-pointer text-lg transition-all duration-200 ease-in-out hover:translate-x-2 hover:text-gray-300"
>
  {nav.label}
</a>
              </li>
           ))}
          </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar