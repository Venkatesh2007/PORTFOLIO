import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <Navbar/>
            <div className="font-sans bg-primary text-white">
                <Hero imageSrc="src/assets/badam.jpg"/>
                <Experience />
                <Skills />
                <Education />
                <Projects />
                <Achievements />
                <Contact />
            </div>
        </>
    )
}
export default App;
