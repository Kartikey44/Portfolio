import React from 'react'
import {projects} from '../assets/data'
function Projects() {
  return (
    <div id="projects" className="max-w-7xl scroll-mt-32 mx-auto bg-transparent " >
      <div className='flex flex-col text-center mb-5 gap-2'>
      <h1 className='text-4xl font-bold text-white text-center'>Projects</h1>
      <p className='text-sm text-gray-500'>Projects i built while learining </p>
      </div>
      {projects.map((project, index) => {
        const Icon1 = project.links[0]?.icon;
        const Icon2 = project.links[1]?.icon;
        return (
          <div key={index} className='relative bg-black/60 border-2 border-white/10 text-white rounded-2xl shadow-2xl max-w-120 p-10 flex flex-col text-justify gap-8 hover:shadow-[0_10px_40px_rgba(128,29,173,0.5)] '>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xl font-bold'>{project.name}</h1>
              <span className='text-gray-600 text-sm'>{project.role}</span>
            </div>
            <span className='absolute right-5 top-5 rounded-2xl bg-linear-to-l from-[#953bef] via-[#b538ef] to-[#ce22c8] text-sm p-1'>Featured</span>
            <p className='text-gray-300 text-sm'>{project.Description}</p>
            <div className="flex flex-wrap gap-4">
              {project.img.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="tech"
                  className="w-10 h-10 object-contain"
                />
              ))}
            </div>
            <div className='flex gap-4'>
              <a key={index}
                href={project.links[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <div className=' flex gap-2 items-center text-sm justify-center bg-linear-to-l from-[#953bef] via-[#b538ef] to-[#ce22c8] py-2 px-4   rounded-xl shadow-xl'>
                  {Icon1 && <Icon1 className="text-white text-sm" />}
                  {project.links[0]?.label}
                </div>
              </a>
              <a
                key={index}
                href={project.links[1]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border text-sm border-white/20 py-2 px-4 rounded-xl hover:bg-white/10 transition">
                {Icon2 && <Icon2 className="text-white text-sm" />}
                {project.links[1]?.label || "GitHub"}
              </a>
            </div>
          </div>
        );   })}
    </div>
  )
}

export default Projects
