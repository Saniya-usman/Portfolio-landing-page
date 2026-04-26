import gihub from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';

const Contact = () => {
  return (
    <section
  id="contact"
  className="min-h-screen flex items-center justify-center px-10
  bg-gradient-to-br from-[#020617] via-[#1b2c52] to-[#0e1f3a] text-white"
>
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-bold mb-4 
      bg-gradient-to-r from-blue-400 to-purple-500 
      bg-clip-text text-transparent">
        Contact Me
      </h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        I'm open to internships, collaborations, and exciting opportunities.
        Let’s build something amazing together 🚀
      </p>

      {/* Email Box */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-lg 
      p-5 rounded-2xl mb-6 shadow-lg">
        <p className="text-gray-400 text-sm">Email</p>
        <p className="text-lg font-semibold">saniyabammanalli@gmail.com</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-4">

  {/* GITHUB */}
  <a href="https://github.com/Saniya-usman" target="_blank" rel="noopener noreferrer">
    <div className="w-12 h-12 flex items-center justify-center 
    rounded-full bg-white/50 border border-white/20 
    backdrop-blur-md hover:scale-110 hover:bg-white/20 
    transition duration-300 cursor-pointer">
      <img 
        src={gihub} 
        className="w-15 h-15 object-contain" 
      />
    </div>
  </a>

  {/* LINKEDIN */}
  <a href="https://www.linkedin.com/in/saniya-bammanalli-ab6b78334/" target="_blank" rel="noopener noreferrer">
    <div className="w-12 h-12 flex items-center justify-center 
    rounded-full bg-white/50 border border-white/20 
    backdrop-blur-md hover:scale-110 hover:bg-white/20 
    transition duration-300 cursor-pointer">
      <img 
        src={linkedin} 
        className="w-8 h-8 object-contain" 
      />
    </div>
  </a>

  {/* INSTAGRAM */}
  <a href="https://www.instagram.com/sw.eetie5391/" target="_blank" rel="noopener noreferrer">
    <div className="w-12 h-12 flex items-center justify-center 
    rounded-full bg-white/50 border border-white/20 
    backdrop-blur-md hover:scale-110 hover:bg-white/20 
    transition duration-300 cursor-pointer">
      <img 
        src={instagram}
        className="w-15 h-15 object-contain" 
      />
    </div>
  </a>

  {/* WHATSAPP */}
  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
    <div className="w-12 h-12 flex items-center justify-center 
    rounded-full bg-white/50 border border-white/20 
    backdrop-blur-md hover:scale-110 hover:bg-white/20 
    transition duration-300 cursor-pointer">
      <img 
        src={whatsapp}
        className="w-8 h-8 object-contain" 
      />
    </div>
  </a>

</div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl 
    p-8 rounded-3xl shadow-2xl">

      <form className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="bg-transparent border border-white/20 rounded-lg p-3 
          focus:outline-none focus:border-purple-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-transparent border border-white/20 rounded-lg p-3 
          focus:outline-none focus:border-purple-400"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="bg-transparent border border-white/20 rounded-lg p-3 
          focus:outline-none focus:border-purple-400"
        />

        {/* BUTTON */}
        <button
          className="mt-4 py-3 rounded-lg font-semibold 
          bg-gradient-to-r from-blue-500 to-purple-600 
          hover:from-purple-600 hover:to-blue-500 
          transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Send Message 🚀
        </button>

      </form>
    </div>

  </div>
  
</section>
  );
};

export default Contact;