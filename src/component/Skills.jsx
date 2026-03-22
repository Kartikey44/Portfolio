import React from 'react'
import { frontend,backend,tools } from '../assets/data'

function Skills() {
  return (
    <div id="skills" className='text-white scroll-mt-20 text-center py-12'>
      
      <h1 className='text-3xl font-bold mb-2'>
        Technical Skills  </h1>
      <p className='text-md mb-8 text-[#6a6a6b]'>Technologies and tools I've been working with</p>
    
        <h2 className=' text-2xl font-semibold'>Frontend</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-7xl mb-10 mt-3 mx-auto">
        {frontend.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center gap-2 bg-[#4a4a4a] p-4 rounded-lg hover:scale-105 transition"
          >
            <img src={skill.img} className="h-16 w-18 object-contain" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
          {/* backend */}
          <h2 className='text-2xl font-semibold  mb-3'>Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-10 max-w-7xl mx-auto">
        {backend.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center gap-2 bg-[#4a4a4a] p-4 rounded-lg hover:scale-105 transition"
          >
            <img src={skill.img} className="h-16 w-18 object-contain" />
            <p>{skill.name}</p>
          </div>
        ))}
          </div>
          {/* Tool */}
          <h2 className='text-2xl font-semibold  mb-3'>Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {tools.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center gap-2 bg-[#4a4a4a] p-4 rounded-lg hover:scale-105 transition"
          >
            <img src={skill.img} className="h-16 w-18 object-contain" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills