import notesapp from "../assets/notesapp.jpeg";
import counterapp from "../assets/counterapp.jpeg";
import clothingapp from "../assets/VCA.png";
import movieapp from "../assets/Movieapp.jpeg";
import weatherapp from "../assets/weatherapp.jpeg";
import portfolioapp from "../assets/portfolioapp.jpeg";
const projects = [
  {
    title: "Notes App",
    desc: "A simple notes app to add and manage tasks.",
    img: notesapp,
    tech: ["React", "Tailwind"],
    code: "#",
    live: "#"
  },
  {
    title: "Counter App",
    desc: "Interactive counter with modern UI design.",
    img: counterapp,
    tech: ["React"],
    code: "#",
    live: "#"
  },
  {
    title: "Virtual Clothing Assistant",
  desc: "A smart web app that helps users choose outfits based on style and preferences with an interactive UI.",
  img: clothingapp,
  tech: ["HTML", "CSS", "JavaScript", "Figma"],
  code: "#",
  live: "#"
  },
  {
  title: "Movie App",
  desc: "A responsive movie browsing app that allows users to explore, search, and view movie details with a modern UI.",
  img: movieapp,
  tech: ["React", "CSS"],
  code: "#",
  live: "#"
},
{
  title: "Weather App",
  desc: "Modern weather app with dark/light mode, showing temperature, humidity and wind using a clean UI.",
  img: weatherapp,
  tech: ["React", "Tailwind CSS"],
  code: "#",
  live: "#"
},
  {
    title: "Portfolio Website",
    desc: "Personal portfolio to showcase my projects.",
    img: portfolioapp,
    tech: ["React", "Tailwind"],
    code: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#213054] to-[#1d2a3f] text-white px-10 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 
        bg-gradient-to-r from-blue-400 to-purple-500 
        bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-2xl overflow-hidden 
              border border-white/10 hover:scale-105 
              transition duration-300 shadow-lg"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  className="w-full h-48 object-cover 
                  hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-left">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 
                      bg-blue-500/10 text-blue-300 
                      rounded-full border border-blue-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">

                  <a
                    href={project.code}
                    className="flex-1 text-center py-2 rounded-lg 
                    border border-white/20 hover:bg-white hover:text-black 
                    transition"
                  >
                    Code
                  </a>

                  <a
                    href={project.live}
                    className="flex-1 text-center py-2 rounded-lg 
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    hover:scale-105 transition"
                  >
                    Live
                  </a>

                </div>
                

              </div>

            </div>
          ))}

        </div>
        <div className="mt-12">
  <button className="px-6 py-3 rounded-full 
  bg-gradient-to-r from-blue-500 to-purple-500 
  hover:scale-105 transition">
    View All Projects
  </button>
</div>

      </div>
    </section>
  );
};

export default Projects;