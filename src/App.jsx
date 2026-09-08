import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeaderContent from "./components/HeaderContent";
import HeaderElements from "./components/HeaderElements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
  );
}

export default App;
