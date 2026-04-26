import profile from "../assets/downloaddddddd.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#020617] via-[#213054] to-[#1d2a3f] text-white px-10 py-20"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">

        {/* LEFT - IMAGE */}
        <div className="relative w-72 md:w-[400px]">
          
          <div className="absolute w-64 h-64 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>

          <img
            src={profile}
            alt="Saniya"
            className="relative w-full h-auto object-contain 
            drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT - TEXT */}
        <div className="max-w-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 
          bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
  I am a passionate Computer Science Engineering student with a strong interest in web development and problem-solving. 
  I enjoy building modern, responsive, and user-friendly web applications.
</p>

<p className="mt-4 text-gray-400 leading-relaxed">
  Currently, I am focusing on Full Stack Web Development and Data Structures & Algorithms using Java. 
  I have worked on projects like a Virtual Clothing Assistant and UI/UX designs using Figma, which helped me improve both design and development skills.
</p>

<p className="mt-4 text-gray-400 leading-relaxed">
  I am actively preparing for internships and placement opportunities where I can apply my skills, 
  gain real-world experience, and grow as a software engineer.
</p>

<p className="mt-4 text-gray-400 leading-relaxed">
  I believe in continuous learning, consistency, and improving a little every day.
</p>
<div className="mt-6">
  <h3 className="text-xl font-semibold text-white mb-3">Interests</h3>
  
  <div className="flex flex-wrap gap-3">
    {["Web Development", "UI/UX Design", "Problem Solving"].map((item, i) => (
      <span key={i} className="px-4 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-sm text-blue-300">
        {item}
      </span>
    ))}
  </div>
</div>
          {/* STATS */}
          <p className="mt-6 text-blue-300 font-medium">
  Open to internship opportunities and collaborations 🚀
</p>

        </div>

      </div>
    </section>
  );
};

export default About;