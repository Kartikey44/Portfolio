import React from 'react'
import {nav} from '../assets/data'
function Navbar() {
  return (
    <div className='hidden md:flex justify-center items-center'>
        <section className="fixed top-0 left-1/2 -translate-x-1/2 z-50 text-white bg-[#090909]/60  backdrop-blur-md px-15 py-7 w-full gap-20 text-md grid grid-cols-2 transition ease-in-out shadow-[0_8px_15px_rgba(255,255,255,0.4)]">
        <a href="#hero" className='text-center bg-linear-to-tr from-[#1c1325] via-[#801dad] to-[#3c22ce] text-4xl bg-clip-text font-bold text-transparent hover:scale-110 transition duration-200 ease-in-out'>Kartikey.</a>    
        <div className='flex items-center justify-center gap-8'>
          {nav.map((nav, id) => (
            <a href={nav.id} className="cursor-pointer text-sm transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300 focus:text-amber-30">{nav.label}</a>
          ))}
          </div>
        </section>
    </div>
  )
}

export default Navbar