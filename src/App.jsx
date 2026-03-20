import React from 'react'
import About from './component/About'
import Navbar from './component/Navbar'
import CodingProfile from './component/CodingProfile'
import Skills from './component/Skills'
import Education from './component/Education'
import Footer from './component/Footer'

function App() {
  return (
    <div className='bg-[#1a1a1a] text-[#a0a0a0] min-h-screen min-w-7xl pt-24'>
      <Navbar/>
      <About />
      <CodingProfile />
      <Education/>
      <Skills />
      <Footer/>
      
    </div>
  )
}

export default App