import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import CodingProfile from './component/CodingProfile'
import Skills from './component/Skills'
import Education from './component/Education'
import Work from './component/Work'
import Footer from './component/Footer'
import About from './component/About'
function App() {
  return (
    <div className='bg-[#1a1a1a] text-[#a0a0a0] min-h-screen min-w-7xl pt-24'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work/>
      <CodingProfile />
      <Education/>
      <Footer/>
      
    </div>
  )
}

export default App