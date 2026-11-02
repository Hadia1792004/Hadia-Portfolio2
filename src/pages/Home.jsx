import About from '../components/sections/About.jsx'
import Contact from '../components/sections/Contact.jsx'
import Education from '../components/sections/Education.jsx'
import Experience from '../components/sections/Experience.jsx'
import Hero from '../components/sections/Hero.jsx'
import Projects from '../components/sections/Projects.jsx'
import Skills from '../components/sections/Skills.jsx'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}

export default Home
