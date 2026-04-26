const skills = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 90
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 85
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 80
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 75
  },
  {
    name: "Tailwind",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    level: 90
  },
  {
    name: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 70
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 65
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 80
  }
];
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#020617] via-[#213054] to-[#1d2a3f]  text-white px-10 py-20"
    >
      <div className="max-w-7xl w-full text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-4xl font-bold mb-12 
        bg-gradient-to-r from-blue-400 to-purple-500 
        bg-clip-text text-transparent">
          My Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">

  {skills.map((skill, index) => (
    <div
      key={index}
      className="bg-[#0f172a] p-5 h-40 rounded-2xl border border-white/10 
      hover:scale-105 hover:shadow-blue-500/20 transition duration-300 shadow-md"
    >
      
      {/* TOP */}
      <div className="flex items-center gap-3 mb-4">
        <img src={skill.img} className="w-10 h-10" />
        <h3 className="font-semibold text-white">{skill.name}</h3>
      </div>

      {/* TEXT */}
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>Proficiency</span>
        <span>{skill.level}%</span>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden ">
        <div
          className="h-full transition-all duration-700 bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>

    </div>
  ))}

</div>

      </div>
    </section>
  );
};

export default Skills;