import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
const App = () => {
  return (
    <div className='min-h-screen relative'>
      <div className="sparkles absolute inset-0 -z-10 pointer-events-none" />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
      

    
  )
}

export default App