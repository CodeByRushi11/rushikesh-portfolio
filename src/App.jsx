import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    // hide native cursor so custom cursor is visible
    <div className="bg-white text-gray-900 scroll-smooth cursor-none">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
