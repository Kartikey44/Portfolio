import React from 'react'
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import {profile,socialLinks} from '../assets/data' 
function Hero() {
  return (
  <div
  id="hero"
  className="grid max-w-7xl mx-auto mt-24 md:mt-32 px-4 sm:px-6 md:px-16 gap-8 md:gap-12 
             md:grid-cols-2 scroll-mt-50"
>
  {/* LEFT CARD */}
      <div className='flex flex-col gap-5 text-white'>

        {/* STATUS */}
        <span className=" items-center text-lg rounded-full text-[#8a8a8a] text-bold">
          Hi there , I'm
        </span>
        {/* NAME */}
        <div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-200'>
            {profile.name}
          </h1>
          <p className='text-xl text-gray-400 mt-3'>
            {profile.role} | Student Developer
          </p>
        </div>

        {/* ABOUT */}
        <p className='text-gray-300 leading-relaxed'>
          {profile.tagline}
        </p>

        {/* BUTTONS */}
        <div className='flex flex-wrap gap-6 mt-4'>
          <a
            href='/resume.pdf'
            download='Kartikey_Saraswat_Resume.pdf'
            className='flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition'>
            Download Resume <FaCloudArrowDown />
          </a>
        <a href="#projects">
         <button
              className='flex cursor-pointer items-center gap-2 px-5 py-2  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 transform-gpu'>
            View Projects <IoIosArrowDown />
            </button>
            </a>
        </div>
      </div>
   {/* RIGHT CONTENT */}
  <div
    className="w-full max-w-md max-w-xl mx-auto min-h-75 sm:min-h-87.5 md:min-h-100 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center gap-4 transition duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] pb-24"
  >
        <img 
          src={profile.profileImage} 
          className="h-60 w-60 object-cover rounded-full 
                     shadow-[0_0_10px_rgba(255,255,255,0.2) shadow-xl]"
        />

        <div className='text-center'>
          <h1 className='font-semibold text-xl text-white'>Let's Connect</h1>
          <p className='text-gray-200 text-sm'>{profile.email}</p>
        </div>

        {/* ICONS */}
       <div className='flex gap-6'>
  {socialLinks.map((item, index) => {
    const Icon = item.icon;
    return (
      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
        <Icon className='text-white hover:scale-110 transition' size={20} />
      </a>
    );
  })}
</div>
      </div>

    </div>
  )
}

export default Hero