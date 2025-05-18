import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "🎓 Bachelor of Technology (CSE)",
    institution: "RGUKT Basar",
    date: "Sept 2023 – May 2027",
    current: true,
  },
  {
    degree: "📘 Pre-University Course (PUC)",
    institution: "RGUKT Basar",
    date: "July 2021 – May 2023",
    grade: "CGPA: 9.92",
  },
  {
    degree: "🏫 Schooling",
    institution: "KLR New Indira Priyadarshini School",
    date: "April 2021",
    grade: "CGPA: 10",
  }
];

const Education = () => {

  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-heading",
        { y: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".education-heading",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.05,
            ease: "power3.out",
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
        <meta name="description" content="Learn about the educational background of Badam Venkatesh including degrees, certifications, and training related to software development." />
        <meta name="keywords" content="Badam Venkatesh education, software development courses, coding certifications, developer training" />
      </Helmet>
      <section
        id="ed"
        ref={sectionRef}
        className="relative py-20 px-6 bg-[#0f172a] text-white font-mono overflow-hidden bg-grid-pattern"
      >
        {/* Background floating blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute w-40 h-40 bg-cyan-400 blur-3xl rounded-full top-[10%] left-[5%] animate-pulse"></div>
          <div className="absolute w-32 h-32 bg-blue-500 blur-3xl rounded-full top-[40%] left-[70%] animate-pulse"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] skills-heading">
          Education
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full">
            {/* Progress bar (animated scroll indicator) */}
            <div className="absolute left-0 top-0 w-full bg-cyan-300 rounded-full origin-top h-full scale-y-[0]" id="scroll-progress"></div>
          </div>

          <div className="space-y-14 pl-14">
            {educationData.map((edu, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute left-[-8px] top-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white shadow shadow-cyan-300"></div>

                {/* Card */}
                <div className="bg-slate-800 p-5 rounded-xl border border-cyan-500/20 shadow-md hover:shadow-cyan-500/30 transition-all transform hover:scale-[1.02] hover:-translate-y-1 duration-300">
                  <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                    {edu.degree}
                    {edu.current && (
                      <span className="bg-cyan-700 text-xs text-white px-2 py-0.5 rounded-full animate-pulse">
                        Pursuing
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.date}</p>
                  {edu.grade && (
                    <p className="text-sm mt-1 text-cyan-400 font-semibold">
                      {edu.grade}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
