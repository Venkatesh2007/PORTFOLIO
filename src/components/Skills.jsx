import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiShopify,
  SiFlutter, SiGit, SiFirebase, SiMongodb, SiBootstrap,
  SiTensorflow, SiOpenai
} from "react-icons/si";

import { FaCode, FaJava } from "react-icons/fa";
import { Helmet } from "react-helmet";


gsap.registerPlugin(ScrollTrigger);

// Define skill-icon pairs
const skills = [
  { name: "GenAi", icon: <SiOpenai size={28} /> },
  { name: "ML", icon: <SiTensorflow size={28} /> },
  { name: "C++", icon: <SiCplusplus size={28} /> },
  { name: "Java", icon: <FaJava size={28} /> },
  { name: "Python", icon: <SiPython size={28} /> },
  { name: "C", icon: <FaCode size={28} /> },
  { name: "HTML", icon: <SiHtml5 size={28} /> },
  { name: "CSS", icon: <SiCss3 size={28} /> },
  { name: "JavaScript", icon: <SiJavascript size={28} /> },
  { name: "React", icon: <SiReact size={28} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
  { name: "Node.js", icon: <SiNodedotjs size={28} /> },
  { name: "Express.js", icon: <SiExpress size={28} /> },
  { name: "Shopify", icon: <SiShopify size={28} /> },
  { name: "Flutter", icon: <SiFlutter size={28} /> },
  { name: "Git", icon: <SiGit size={28} /> },
  { name: "Firebase", icon: <SiFirebase size={28} /> },
  { name: "MongoDB", icon: <SiMongodb size={28} /> },
  { name: "BootStrap", icon: <SiBootstrap size={28} /> },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-heading", {
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 85%",
        },
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom center",
          scrub: true,
          onEnter: () =>
            gsap.to(sectionRef.current, {
              backgroundColor: "#0f172a",
              color: "#ffffff",
              duration: 0.5,
            }),
          onLeaveBack: () =>
            gsap.to(sectionRef.current, {
              backgroundColor: "#1e3a8a",
              color: "#ffffff",
              duration: 0.5,
            }),
        },
      });

      skillRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Badam Venkatesh Portfolio</title>
        <meta name="description" content="Technical skills of Badam Venkatesh including React, JavaScript, Firebase, TailwindCSS, GSAP, and more." />
        <meta name="keywords" content="Badam Venkatesh skills, React, JavaScript, Firebase, TailwindCSS, GSAP, frontend development" />
      </Helmet>
      <section
        id="skills"
        ref={sectionRef}
        className="min-h-screen py-20 px-6 transition-colors duration-700 flex flex-col items-center justify-center bg-blue-900 text-white bg-grid-pattern"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] skills-heading">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl w-full">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillRefs.current[index] = el)}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 text-cyan-300 border border-cyan-400/30 rounded-xl px-4 py-5 text-center shadow-md hover:shadow-[0_0_20px_#0ff] transition-all font-mono text-sm tracking-wide"
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
