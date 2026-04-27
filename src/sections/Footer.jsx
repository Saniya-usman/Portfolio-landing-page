import gihub from '../assets/github.png';
import linkedin from '../assets/linkedIn.png';
import instagram from '../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#020617] via-[#1b2c52] to-[#0e1f3a] text-gray-400 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row 
      items-center justify-between gap-4">

        {/* LEFT */}
        <p className="text-sm">
          © {new Date().getFullYear()} Saniya. All rights reserved.
        </p>

        {/* CENTER LINKS */}
        <ul className="flex gap-6 text-sm">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-3">
          
          <a href="https://github.com/Saniya-usman" target="_blank">
            <div className="w-10 h-10 flex items-center justify-center 
            rounded-full bg-white/10 hover:bg-white/20 transition">
              <img src={gihub} className="w-5" />
            </div>
          </a>

          <a href="https://linkedin.com/in/saniya-bammanalli-ab6b78334/" target="_blank">
            <div className="w-10 h-10 flex items-center justify-center 
            rounded-full bg-white/10 hover:bg-white/20 transition">
              <img src={linkedin} className="w-5" />
            </div>
          </a>

          <a href="https://instagram.com/sw.eetie5391/" target="_blank">
            <div className="w-10 h-10 flex items-center justify-center 
            rounded-full bg-white/10 hover:bg-white/20 transition">
              <img src={instagram} className="w-5" />
            </div>
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;