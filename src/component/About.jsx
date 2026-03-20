import React from 'react'
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import {profile,socialLinks} from '../assets/data' 
function About() {
  const threshold = 25;
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.3;
    const y = (e.clientY - top) / height - 0.3;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <div id="about" className='grid max-w-7xl scroll-mt-32 md:px-16 mt-16 gap-10 md:grid-cols-2 mx-auto '>

      {/* LEFT CARD */}
      <div 
        className='min-h-100 min-w-md rounded-2xl bg-[rgb(80,10,255,0.9)] p-6 flex flex-col items-center gap-4 
        transition duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]'
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        <img 
          src={profile.profileImage} 
          className="h-60 w-60 object-cover rounded-full border-4 border-white 
                     shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        />

        <div className='text-center'>
          <h1 className='font-semibold text-xl text-white'>Let's connect</h1>
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

      {/* RIGHT CONTENT */}
      <div className='flex flex-col gap-6 text-white'>

        {/* STATUS */}
        <span className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5)] text-sm">
          <GoDotFill className="text-green-400 animate-pulse" />
          Open to Work
        </span>

        {/* NAME */}
        <div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-200'>
            {profile.name}
          </h1>
          <p className='text-xl text-gray-400 mt-1'>
            {profile.role}
          </p>
        </div>

        {/* ABOUT */}
        <p className='text-gray-300 leading-relaxed'>
          {profile.summary}
        </p>

        {/* BUTTONS */}
        <div className='flex flex-wrap gap-6 mt-4'>
          <a
            href='/resume.pdf'
            download='Kartikey_Saraswat_Resume.pdf'
            className='flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition'>
            Download Resume <FaCloudArrowDown />
          </a>

          <button id="#projects" className='flex items-center gap-2 px-5 py-2 transition'>
            View Projects <IoIosArrowDown />
          </button>
        </div>

      </div>
    </div>
  )
}

export default About