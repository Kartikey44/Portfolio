import React from 'react'
function Navbar() {
  return (
    <div className='hidden md:flex justify-center items-center'>
        <section className="fixed top-5 left-1/2 -translate-x-1/2 z-50 text-white bg-[#090909]/80 backdrop-blur-md px-10 py-4 rounded-full max-w-7xl flex gap-20 text-md justify-around items-center transition ease-in-out shadow-[0_8px_15px_rgba(255,255,255,0.4)]">
            <a href='#about'className="cursor-pointer hover: text-gray-300 focus:text-amber-300">About me</a>
            <a href='#skills' className="cursor-pointer hover: text-gray-300 focus:text-amber-300">Skills</a>
            <a href='projects' className="cursor-pointer hover: text-gray-300 focus:text-amber-300">Projects</a>
        </section>
    </div>
  )
}

export default Navbar