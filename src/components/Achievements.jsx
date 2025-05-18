import { Helmet } from 'react-helmet';
import { FiAward, FiCode, FiBookOpen, FiUsers } from 'react-icons/fi';

const achievements = [
  {
    icon: <FiCode className="text-cyan-400 w-6 h-6" />,
    title: '300+ Problems Solved',
    desc: 'On LeetCode, focused on data structures & algorithms.',
  },
  {
    icon: <FiUsers className="text-purple-400 w-6 h-6" />,
    title: 'Team Lead - Smart India Hackathon 2024',
    desc: 'Led a team to develop an innovative solution for industry problem statement.',
  },
  {
    icon: <FiAward className="text-yellow-400 w-6 h-6" />,
    title: 'Rank 1 in University',
    desc: 'Achieved CGPA 9.92, top rank among all students.',
  },
  {
    icon: <FiBookOpen className="text-green-400 w-6 h-6" />,
    title: 'Machine Learning Specialization',
    desc: (
      <>
        Completed{' '}
        <a
          href="https://coursera.org/verify/specialization/L6DINDHE7IR1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-600"
        >
          Coursera Certification
        </a>
      </>
    ),
  },
  {
    icon: <FiUsers className="text-pink-400 w-6 h-6" />,
    title: 'VJ Hackathon 2024 Participation',
    desc: 'Participated and contributed to team project in VJH Hackathon.',
  },
];

const Achievements = () => (
  <>
    <Helmet>
      <title>Badam Venkatesh Portfolio</title>
      <meta name="description" content="Achievements, awards, and recognitions earned by Badam Venkatesh in the field of software development." />
      <meta name="keywords" content="Badam Venkatesh achievements, awards, software developer recognition, coding contests, hackathons" />
    </Helmet>
    <section id="achievements" className="relative py-16 px-6 bg-[#0f172a] font-mono text-white min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0f172a] via-[#1e293b] to-black opacity-100 z-0" />
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 z-0 pointer-events-none">
        {[...Array(400)].map((_, i) => (
          <div
            key={i}
            className="border border-cyan-400 opacity-10"
            style={{
              animation: `pulseGrid 5s ease-in-out infinite`,
              animationDelay: `${(i % 20) * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent text-center drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] experience-heading mb-10">
        Achievements & Certifications
      </h2>

      {/* Cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {achievements.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="flex items-start space-x-4 bg-[#1e293bcc] backdrop-blur-md border border-cyan-600/30 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="mt-1">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-1">{title}</h3>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
      @keyframes pulseGrid {
        0%, 100% {
          opacity: 0.08;
        }
        50% {
          opacity: 0.2;
        }
      }
    `}</style>
    </section>
  </>
);

export default Achievements;
