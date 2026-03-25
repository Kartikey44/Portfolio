import React from 'react'
import { profile,frontend,backend } from '../assets/data'

function About() {
  return (
    <div className='px-5 '>
    <div id="about" className='max-w-7xl rounded-2xl mt-24 md:mt-32 shadow-xl mx-auto px-4 sm:px-6 md:px-16 py-16 grid scroll-mt-32 transition-all duration-300 ease-in-out grid-cols-1 md:grid-cols-2 gap-10 bg-black/70 text-white'>

      {/* LEFT */}
      <div className='flex items-center justify-center'>
        <div className='bg-linear-to-tr from-[#c084fc] via-[#a855f7] to-[#7e22ce] sm:h-70 sm:w-70 w-60 h-60 flex items-center justify-center rounded-xl backdrop-blur-lg shadow-xl'>
          <img src={profile.profileImage} className='sm:h-40 sm:w-40 w-32 h-32 object-fit rounded-full z-10 bg-[#2a2a2a] flex items-center justify-center' />
        </div>
      </div>

      {/* RIGHT */}
      <div className='flex flex-col gap-6 text-justify md:pr-10'>
        <h2 className='text-4xl text-center font-semibold'>About Me</h2>

        <p className="whitespace-pre-line text-gray-300 text-sm leading-relaxed">
          {profile.summary}
        </p>
        <div className=' flex flex-wrap gap-4 '>
        {frontend.map((skill, index) => (
          
            <div key={index} className='p-2 text-sm shadow-[0_0_20px_rgba(100,100,255,0.2)] md:rounded-full rounded-xl text-[#b869f8] bg-[#8509ea]/10'>
            {skill.name}
            </div>
        ))}
        </div>
        </div>

    </div >
      </div>
  )
}

export default About