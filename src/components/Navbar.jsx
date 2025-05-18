import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-mono backdrop-blur-lg bg-[#0f172a]/90 border-b border-cyan-500/10 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-widest select-none cursor-default">
          <span className="text-gray-100">&lt;Badam </span>
          <span className="text-cyan-400 glowing-text">Venkatesh/&gt;</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-base font-medium">
          {['Home', 'Experience', 'Skills', 'Projects', 'Achievements'].map((text, i) => (
            <a
              key={i}
              href={`#${text.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 hover:underline underline-offset-4 decoration-cyan-500 transition-all duration-300 ease-in-out"
            >
              {text}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-cyan-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f172a]/90 backdrop-blur border-t border-cyan-500/10 px-6 pt-4 pb-6 space-y-4 text-base font-medium text-gray-300 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {['Home', 'Experience', 'Skills', 'Projects', 'Achievements'].map((text, i) => (
          <a
            key={i}
            href={`#${text.toLowerCase()}`}
            onClick={toggleMenu}
            className="block hover:text-cyan-400 hover:translate-x-1 transition-all duration-200"
          >
            {text}
          </a>
        ))}
      </div>

      {/* Glow effect style */}
      <style jsx>{`
        .glowing-text {
          text-shadow: 0 0 2px #22d3ee, 0 0 10px #22d3ee, 0 0 20px #0ea5e9;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
