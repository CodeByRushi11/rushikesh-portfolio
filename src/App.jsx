import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

function Inner() {
  useScrollReveal();
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }} className="cursor-none">
      <LoadingScreen />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Inner />
    </ThemeProvider>
  );
}
