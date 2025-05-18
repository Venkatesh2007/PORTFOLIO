import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: "App Developer",
        title: "Afflicartz",
        period: "Aug 2024 – Nov 2024",
        logo: "src/assets/affli_logo.png",
        website: "https://afflicartz.com",
        points: [
            "Developed cashback app & website.",
            "Integrated affiliate tracking & links.",
            "Used Flutter (mobile) & React (web).",
        ],
        tech: ["Flutter", "React", "Firebase", "Affiliate APIs"]
    },
    {
        role: "Shopify Developer Intern",
        title: "Sai Ram Snacks",
        period: "Dec 2024 – Feb 2025",
        logo: "src/assets/sairam_logo.png",
        website: "https://sairamsnacks.com",
        points: [
            "Customized an e-commerce site using Shopify.",
            "Enhanced website responsiveness.",
        ],
        tech: ["Liquid", "HTML", "CSS", "JS"]
    },
];

const Experience = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // 3D pop-in animation for heading
            gsap.from(".experience-heading", {
                scrollTrigger: {
                    trigger: ".experience-heading",
                    start: "top 90%",
                },
                opacity: 0,
                rotateX: 90,
                transformOrigin: "top center",
                duration: 1.2,
                ease: "power3.out",
            });

            // Your existing ScrollTrigger animations...
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    useEffect(() => {
        const section = sectionRef.current;

        // Animate theme color transitions
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom center",
                scrub: true,
                onEnter: () =>
                    gsap.to(section, {
                        backgroundColor: "#0f172a", // slate-900
                        color: "#ffffff",
                        duration: 0.5,
                    }),
                onLeaveBack: () =>
                    gsap.to(section, {
                        backgroundColor: "#1e3a8a", // Hero section blue-900
                        color: "#ffffff",
                        duration: 0.5,
                    }),
            },
        });

        // Animate each card
        cardsRef.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 80,
                    rotateY: 30,
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: "power4.out",
                    delay: i * 0.2,
                }
            );
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Badam Venkatesh Portfolio</title>
                <meta name="description" content="Hi, I am Badam Venkatesh, a passionate software developer open to internships and collaborations." />
                <meta name="description" content="Explore the professional experience of Badam Venkatesh, including internships, projects, and collaborations in software development." />
                <meta name="keywords" content="Badam Venkatesh experience, software developer experience, internships, developer projects, tech collaboration" />
                <meta name="author" content="Badam Venkatesh" />
                <meta property="og:title" content="Badam Venkatesh | Software Developer Portfolio" />
                <meta property="og:type" content="website" />
            </Helmet >

            <section
                id="experience"
                ref={sectionRef}
                className="min-h-screen px-6 py-20 transition-colors duration-700 flex flex-col items-center justify-center bg-blue-900 text-white bg-grid-pattern"
            >

                <h2
                    className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent text-center drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] experience-heading mb-10"
                >
                    Experience
                </h2>


                <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-3xl shadow-lg border border-cyan-500/20 transition-all duration-500 p-6 max-w-md mx-auto flex flex-col hover:shadow-[0_0_25px_#0ff] hover:scale-[1.03] hover:border-cyan-400 hover:ring-2 hover:ring-cyan-300/30"
                            style={{ minHeight: "320px", width: "310px" }}
                        >
                            {/* Top Section: Logo + Company info */}
                            <div className="flex items-center gap-6 mb-2">
                                {/* Logo */}
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} Logo`}
                                    className="w-20 h-20 object-contain rounded-md border border-cyan-400/30 shadow-md"
                                />

                                {/* Company info */}
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,191,255,0.7)]">
                                        {exp.title}
                                    </h3>
                                    <p className="text-md font-medium text-cyan-200 mt-1">{exp.role}</p>
                                    <p className="text-sm text-slate-400 mt-1">{exp.period}</p>
                                </div>
                            </div>

                            {/* Points */}
                            <ul className="list-disc pl-6 text-slate-300 flex-1 space-y-2">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-md font-mono">{point}</li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex gap-2 flex-wrap mt-2 mb-2">
                                {exp.tech.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 border border-cyan-500 text-cyan-300 rounded-full font-mono bg-slate-800/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Website Button */}
                            <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-auto text-sm font-mono px-4 py-2 border border-cyan-400 rounded-md text-cyan-300 hover:text-black hover:bg-cyan-300 hover:shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee] transition-all duration-300 relative group"
                            >
                                <span className="group-hover:pl-2 transition-all duration-300 ease-in-out">
                                    &gt; View Website
                                </span>
                            </a>
                        </div>



                    ))}
                </div>
            </section>
        </>
    );
};

export default Experience;
