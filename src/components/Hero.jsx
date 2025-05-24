import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Helmet } from "react-helmet";


const HeroWithImage = ({ imageSrc }) => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRefs = useRef([]);
    const buttonRefs = useRef([]);
    const socialRefs = useRef([]);
    const blobRefs = useRef([]);

    // 3D tilt effect on image hover
    const handleMouseMove = (e) => {
        const el = imageRef.current;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 12;
        const rotateY = ((x - centerX) / centerX) * 12;

        gsap.to(el, {
            duration: 0.4,
            rotateX: -rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            ease: 'power3.out',
            boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(10, 50, 180, 0.5)`,
            filter: 'drop-shadow(0 0 5px rgba(130, 50, 180, 0.7))',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            duration: 0.6,
            rotateX: 0,
            rotateY: 0,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 0 0 transparent)',
            ease: 'power3.out',
        });
    };

    useEffect(() => {
        // Initial animations
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.3 }
        );

        gsap.fromTo(
            paragraphRefs.current,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                delay: 0.6,
            }
        );

        gsap.fromTo(
            buttonRefs.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.15,
                delay: 1.4,
            }
        );

        gsap.fromTo(
            socialRefs.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.1,
                delay: 1.8,
            }
        );

        gsap.to(imageRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: 0.3,
        });

        // Floating blobs slow floating animation (yoyo infinite)
        blobRefs.current.forEach((blob, i) => {
            gsap.to(blob, {
                y: 20,
                duration: 6 + i * 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: i,
            });
            gsap.to(blob, {
                x: 15,
                duration: 8 + i * 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: i + 1,
            });
        });
    }, []);

    // Hover effect for buttons
    const handleButtonHover = (index, entering) => {
        gsap.to(buttonRefs.current[index], {
            scale: entering ? 1.05 : 1,
            backgroundColor: entering ? '#00fff7' : '#1e1e2f', // neon cyan hover, dark midnight normal
            transition: 'background-color 0.3s ease',
            boxShadow: entering
                ? '0 8px 20px rgba(0, 255, 247, 0.7)'  // bright glowing cyan shadow
                : '0 4px 10px rgba(0, 255, 247, 0.3)',
        });
    };

    // Hover effect for social icons
    const handleSocialHover = (index, entering) => {
        gsap.to(socialRefs.current[index], {
            scale: entering ? 1.3 : 1,
            y: entering ? -5 : 0,
            color: entering ? '#39ff14' : '#61dafb', // neon green on hover, React blue normal
            duration: 0.3,
            ease: 'power1.out',
        });
    };


    return (
        <>
            <Helmet>
                <title>Badam Venkatesh | Passionate Developer Portfolio</title>
                <meta name="description" content="Hi, I am Badam Venkatesh, a passionate software developer open to internships and collaborations." />
                <meta name="keywords" content="Badam Venkatesh, software developer, portfolio, internships, tech, coding" />
                <meta name="author" content="Badam Venkatesh" />
                <meta property="og:title" content="Badam Venkatesh | Software Developer Portfolio" />
                <meta property="og:description" content="Hi, I am Badam Venkatesh, a passionate software developer open to internships and collaborations." />
                <meta property="og:type" content="website" />
            </Helmet>
            <section id="home" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-45 md:pt-15 py-16 overflow-hidden bg-gradient-to-tr from-indigo-900 via-blue-900 to-purple-900 text-white bg-grid-pattern">


                {/* Floating Gradient Blobs */}
                {['bg-purple-700', 'bg-blue-700', 'bg-indigo-800'].map((color, i) => (
                    <div
                        key={i}
                        ref={(el) => (blobRefs.current[i] = el)}
                        className={`absolute rounded-full filter blur-3xl opacity-50 w-[320px] h-[320px]`}
                        style={{
                            top: i === 0 ? '-120px' : i === 1 ? '20%' : 'auto',
                            left: i === 0 ? '-100px' : i === 2 ? '40%' : 'auto',
                            right: i === 1 ? '-80px' : 'auto',
                            bottom: i === 2 ? '-100px' : 'auto',
                        }}
                    />
                ))}

                {/* Image */}
                <div
                    ref={imageRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-gradient-to-br from-purple-900 to-violet-700 opacity-0 scale-95 z-10"
                    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                    <img
                        src={imageSrc}
                        alt="Badam Venkatesh"
                        className="w-full h-full object-cover rounded-3xl"
                        draggable={false}
                        loading="lazy"
                        style={{ objectPosition: '0% 0%' }}
                    />
                </div>

                {/* Text */}
                <div
                    ref={textRef}
                    className="mt-10 md:mt-0 md:ml-16 max-w-lg opacity-100 z-10"
                >
                    <h1
                        ref={headingRef}
                        className="text-5xl font-extrabold mb-4 drop-shadow-lg"
                        style={{ textShadow: '0 0 20px rgba(100,100,255,0.8)' }}
                    >
                        Hi, There!
                    </h1>
                    <h1
                        ref={headingRef}
                        className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-600 to-white bg-clip-text text-transparent"
                        style={{ textShadow: '0 0 20px rgba(100,100,255,0.8)' }}
                    >
                        I'm Badam Venkatesh
                    </h1>
                    {[
                        'Passionate about ML & GenAI | React js Developer | DSA Enthusiast | Flutter | Developed Bujji - AI Friend',
                        'I create scalable React & Flutter apps, backed by strong DSA skills. Passionate about ML and Generative AI, I built Bujji — an interactive 3D avatar that feels human.',
                    ].map((text, i) => (
                        <div
                            key={i}
                            ref={(el) => (paragraphRefs.current[i] = el)}
                            onMouseMove={(e) => handleCardTilt(e, i)}
                            onMouseLeave={() => resetCardTilt(i)}
                            className="mb-2 p-1 rounded-xl shadow-lg transition-transform duration-300 border border-white/10"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: 'rotateX(0deg) rotateY(0deg)',
                                perspective: '1000px',
                            }}
                        >
                            <p className="text-base md:text-lg font-bold text-white tracking-wide drop-shadow-[0_1px_4px_rgba(0,200,255,0.6)]">
                                {text}
                            </p>
                        </div>
                    ))}


                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <button
                            ref={(el) => (buttonRefs.current[0] = el)}
                            onMouseEnter={() => handleButtonHover(0, true)}
                            onMouseLeave={() => handleButtonHover(0, false)}
                            className="bg-cyan-600 px-6 py-2 rounded-full font-medium shadow-md transition-transform duration-300 font-mono"
                            onClick={() => {
                                const section = document.getElementById("projects");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            View Projects
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1CPvq5SO6z8KVdfHwVfWlUvwXROROr9Za/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={(el) => (buttonRefs.current[1] = el)}
                            onMouseEnter={() => handleButtonHover(1, true)}
                            onMouseLeave={() => handleButtonHover(1, false)}
                            className="bg-transparent border border-cyan-400 text-cyan-300 px-6 py-2 rounded-full hover:bg-cyan-700 transition-colors duration-300 font-mono"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 text-xl text-gray-300">
                        {[FaLinkedin, FaGithub, FaEnvelope].map((Icon, i) => (
                            <a
                                key={i}
                                href={
                                    i === 0
                                        ? 'https://linkedin.com/in/badamvenkatesh'
                                        : i === 1
                                            ? 'https://github.com/badamvenkatesh'
                                            : 'mailto:badamvenkatesh@gmail.com'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={(el) => (socialRefs.current[i] = el)}
                                onMouseEnter={() => handleSocialHover(i, true)}
                                onMouseLeave={() => handleSocialHover(i, false)}
                                className="cursor-pointer hover:text-violet-300 transition-colors duration-300"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroWithImage;
