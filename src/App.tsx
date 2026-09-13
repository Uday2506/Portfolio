import Nav from './components/Nav'
import Background from './components/Background'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <Background />
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
