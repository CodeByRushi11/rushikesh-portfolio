import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import LiveChat from "./components/LiveChat";
import { ThemeProvider } from "./context/ThemeContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useTilt } from "./hooks/useTilt";

function Inner() {
  useScrollReveal();
  useTilt();

  /* Lenis smooth scroll */
  useEffect(() => {
    let lenis;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ duration:1.2, easing:t => Math.min(1, 1.001 - Math.pow(2, -10*t)), smooth:true });
      const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }).catch(() => {});
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  /* Desktop cursor */
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine) and (hover:hover)");
    setIsDesktop(mq.matches);
    const fn = e => setIsDesktop(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return (
    <div style={{ background:"var(--bg)", color:"var(--text)", minHeight:"100vh" }}
      className={isDesktop ? "cursor-none" : ""}>
      <LoadingScreen/>
      <ScrollProgress/>
      {isDesktop && <Cursor/>}
      <Navbar/>
      <motion.main
        initial={{ opacity:0, y:8 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.5, ease:"easeOut" }}>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </motion.main>
      <Footer/>
      <BackToTop/>
      {/* ★ Live WhatsApp Chat — fixed bottom right */}
      <LiveChat/>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Inner/>
    </ThemeProvider>
  );
}
