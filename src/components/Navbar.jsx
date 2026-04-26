import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [active, setActive] = useState("home");
 useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(id);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className='absolute top-0 left-0 w-full z-50 px-10 py-5 
    flex justify-between items-center  text-white transition duration-300'>
      
      {/* LOGO */}
      <h2 className='font-bold  text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Saniya</h2>

      {/* MENU */}
      <ul className='flex gap-8 transition-all duration-300 font-bold'>
        <li><a href="#home" className={`pb-1 border-b-2 ${
      active === "home" 
        ? "border-white" 
        : "border-transparent hover:border-white"
    }`}>Home</a></li>
        <li><a href="#about" className={`pb-1 border-b-2  ${
      active === "about" 
        ? "border-white" 
        : "border-transparent hover:border-white "
    }`}>About</a></li>
        <li><a href="#skills" className={`pb-1 border-b-2 ${
      active === "skills" 
        ? "border-white" 
        : "border-transparent hover:border-white"
    }`}>Skills</a></li>
        <li><a href="#projects" className={`pb-1 border-b-2 ${
      active === "projects" 
        ? "border-white" 
        : "border-transparent hover:border-white"
    }`}>Projects</a></li>
        <li><a href="#contact" className={`pb-1 border-b-2 ${
      active === "contact" 
        ? "border-white" 
        : "border-transparent hover:border-white"
    }`}>Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar