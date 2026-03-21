import React from 'react'
import {work} from '../assets/data'
function Work() {
  return (
    <div className='max-w-screen  text-center '>
      <h1 className='text-4xl font-bold mb-2'>What I Do</h1>
      <p className='text-gray-500 '>Areas I'm focusing on as a student developer </p>
    <div className='grid grid-cols-1 max-w-7xl py-6 gap-10 md:grid-cols-3 mx-auto'>
      {work.map((work,index)=>(<div className='bg-gray-800/40 flex flex-col gap-2 rounded-xl shadow-xl text-left px-4 pt-4 pb-6'>
        <img src={work.img} className='w-7 h-7' />
        <h1 className='font-bold mb-2'>{work.name}</h1>
        <p className='text-sm text-zinc-500'>{work.Description }</p>
      </div>))}
      </div>
      </div>
  )
}

export default Work
