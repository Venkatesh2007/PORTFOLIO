import { useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas to full size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff99";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <footer className="relative px-6 py-10 bg-[#0f172a] text-white font-mono overflow-hidden">
        {/* <NeonGrid/> */}
        {/* Matrix code rain */}
        <canvas
          id="matrixCanvas"
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-15"
        ></canvas>

        {/* Floating neon blobs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <div className="absolute w-40 h-40 bg-cyan-400 blur-3xl rounded-full top-[10%] left-[5%] animate-pulse"></div>
          <div className="absolute w-32 h-32 bg-blue-500 blur-3xl rounded-full top-[60%] left-[70%] animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent text-center drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] experience-heading mb-10">
            Let’s Connect
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            I’m open to internships, collaborations, or just tech chats. Let’s build something great together.
          </p>

          {/* Contact Email */}
          <div className="flex items-center justify-center gap-3 text-green-400 hover:text-green-300 transition duration-300 mb-4">
            <EnvelopeIcon className="h-5 w-5" />
            <a
              href="mailto:badamvenkatesh2007@gmail.com"
              className="text-sm sm:text-base font-semibold tracking-wide underline-offset-4 hover:underline"
            >
              badamvenkatesh2007@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-gray-300 mt-6">
            <a
              href="https://linkedin.com/in/badamvenkatesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="text-sm group-hover:underline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Venkatesh2007"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-gray-100 transition duration-300"
            >
              <FaGithub className="h-5 w-5" />
              <span className="text-sm group-hover:underline">GitHub</span>
            </a>
          </div>

          {/* Footer Note */}
          <p className="mt-10 text-xs text-gray-500 italic">
            Designed & Built by Badam Venkatesh | {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
