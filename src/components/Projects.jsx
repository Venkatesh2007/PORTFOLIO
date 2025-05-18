import { BsRocketTakeoff } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import NeonGrid from './NeonGrid';
import { Helmet } from 'react-helmet';

const projects = [
  {
    title: "Afflicartz Website",
    desc: "Cashback platform with affiliate links and advanced tracking system for e-commerce.",
    tech: "React, Flutter, Firebase",
    link: "https://afflicartz.com"
  },
  {
    title: "Sai Ram Snacks Website",
    desc: "Custom Shopify storefront for local snack brand with tailored UI/UX and cart features.",
    tech: "HTML, CSS, JavaScript, Liquid",
    link: "https://sai-ram-snacks.myshopify.com"
  },
  {
    title: "Portfolio Website",
    desc: "Responsive personal portfolio with GSAP animations and a developer-centric theme.",
    tech: "React, TailwindCSS, GSAP",
    link: "https://badam-portfolio.netlify.app"
  },
  {
    title: "Track & Save App",
    desc: "An app to manage expenses and visualize financial goals.",
    tech: "React, TailwindCSS",
    link: "https://enchanting-cascaron-95ade5.netlify.app"
  },
  {
    title: "BUJJI - AI Friend",
    desc: "A 3D avatar AI assistant that talks, learns, and interacts like a real companion.",
    tech: "React, Three.js, Nodejs, TailwindCSS, Gemini",
    link: "https://github.com/Venkatesh2007/BUJJI_FRONTEND.git"
  }
];


const Projects = () => (
  <>
    <Helmet>
      <title>Badam Venkatesh Portfolio</title>
      <meta name="description" content="View the software projects built by Badam Venkatesh including React apps, Flutter projects, and open-source contributions." />
      <meta name="keywords" content="Badam Venkatesh projects, React projects, Flutter projects, software development portfolio, open source" />
    </Helmet>
    <section id="projects" className="relative py-20 px-6 bg-[#0a0f2a] font-mono min-h-screen overflow-hidden text-white">
      {/* Neon Grid Background */}
      <NeonGrid />

      <h2
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent text-center drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] experience-heading mb-10"
      >
        <BsRocketTakeoff className="w-10 h-10 mr-3 text-cyan-400 inline" />
        Projects
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group relative bg-[#1e293b] border border-cyan-500/30 p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.03] hover:shadow-cyan-500/60 hover:-translate-y-1 duration-300 cursor-default"
          >
            <div className="absolute -top-4 left-4 bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full shadow shadow-cyan-300">
              #{i + 1}
            </div>

            <h3 className="text-2xl font-semibold text-cyan-300 mb-2 group-hover:text-cyan-400 transition-colors duration-200">
              {proj.title}
            </h3>

            <p className="text-gray-300 text-sm mb-3">{proj.desc}</p>

            <p className="text-cyan-400 text-xs mb-4">
              <span className="font-semibold">Tech Stack:</span> {proj.tech}
            </p>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded hover:from-cyan-600 hover:to-blue-600 shadow-md transition-all"
            >
              <FiLink className="w-4 h-4 inline" /> View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  </>
);



export default Projects;
