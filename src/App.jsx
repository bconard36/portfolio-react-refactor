import About from './About'
import Contact from './Contact'
import Education from './Education'
import Footer from './Footer'
import HeaderContent from './HeaderContent'
import HeaderElements from './HeaderElements'
import Projects from './Projects'
import Skills from './Skills'

function App() {

  return (
    <>
      <HeaderElements>
        <HeaderContent />
      </HeaderElements>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
