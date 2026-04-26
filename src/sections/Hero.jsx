import profile from "../assets/downloaddddddd.png";
import Navbar from "../components/Navbar"; 
import mycv from "../assets/mycv.jpeg";
import { useEffect, useState } from "react";
const Hero = () => {
  const roles = ["Frontend Developer", "React Developer", "UI Designer"];

const [text, setText] = useState("");
const [index, setIndex] = useState(0);
const [char, setChar] = useState(0);

useEffect(() => {
  const typing = setTimeout(() => {
    setText(roles[index].slice(0, char + 1));
    setChar(char + 1);

    if (char === roles[index].length) {
      setTimeout(() => {
        setChar(0);
        setIndex((index + 1) % roles.length);
      }, 1500);
    }
  }, 100);

  return () => clearTimeout(typing);
}, [char, index]);
  return (
    <section
      id="home"
      className=" min-h-screen flex items-center justify-center 
bg-gradient-to-br from-[#020617] via-[#213054] to-[#1d2a3f] text-white"
    >
      <Navbar/>
      
      <div className="max-w-7xl p-5 w-full flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT - TEXT */}
        <div className="text-center md:text-left max-w-2xl">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight 
text-white italic
bg-clip-text text-transparent">
  Hi, I'm Saniya 👋
</h1>

<div className="mt-4 text-2xl md:text-3xl font-semibold text-blue-300">
  {text}
  <span className="animate-pulse">|</span>
</div>

<p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-xl">
  I am passionate about building modern, responsive, and user-friendly web applications. 
  I enjoy turning ideas into real-world projects using React, Tailwind CSS, and clean UI design.
</p>

<p className="mt-3 text-gray-400 text-base max-w-xl">
  Currently focusing on improving my development skills, working on real projects, 
  and preparing for internships in the tech industry.
</p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10 justify-center md:justify-start">
            
            <a
  href={mycv} target="_blank" rel="noopener noreferrer"
  download
  className="relative px-8 py-3 rounded-full font-semibold text-white
  bg-gradient-to-r from-blue-500 to-purple-500 
  shadow-lg 
  hover:scale-105 hover:shadow-blue-500/40 
  transition duration-300 overflow-hidden"
>
  Download CV ⬇️
</a>

           <a
  href="#contact"
  className="px-8 py-3 rounded-full font-semibold text-white
  border border-white/30 backdrop-blur-md
  hover:bg-white/80 hover:text-black 
  hover:scale-105 transition duration-300"
>
  Hire Me  💼
</a>

          </div>

        </div>

        {/* RIGHT - IMAGE */}
       <div className="relative w-80 md:w-[420px]">
  
  <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>

  <img
    src={profile}
    alt="Saniya"
    className="relative w-full h-auto object-contain 
    hover:scale-105 transition duration-500 drop-shadow-2xl"
  />
</div>

      </div>

    </section>
  );
};

export default Hero;