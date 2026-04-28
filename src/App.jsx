import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useTilt } from "./hooks/useTilt";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components for code splitting
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Cursor = lazy(() => import("./components/Cursor"));
const LoadingScreen = lazy(() => import("./components/LoadingScreen"));
const BackToTop = lazy(() => import("./components/BackToTop"));
const ScrollProgress = lazy(() => import("./components/ScrollProgress"));
const LiveChat = lazy(() => import("./components/LiveChat"));

// Loading fallback component
function LoadingFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        color: "var(--text)",
      }}
      aria-label="Loading page"
      role="status"
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: "3px solid var(--border)",
          borderTopColor: "var(--accent)",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function Inner() {
  useScrollReveal();
  useTilt();

  /* Lenis smooth scroll with cleanup */
  useEffect(() => {
    let lenis = null;
    let rafId = null;

    import("lenis")
      .then(({ default: Lenis }) => {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        });

        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      })
      .catch(() => {
        // Fallback to native scroll if Lenis fails
      });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  /* Desktop cursor detection */
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine) and (hover:hover)");
    setIsDesktop(mq.matches);

    const fn = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", fn);

    return () => mq.removeEventListener("change", fn);
  }, []);

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
      className={isDesktop ? "cursor-none" : ""}
    >
      <Suspense fallback={<LoadingFallback />}>
        <LoadingScreen />
        <ScrollProgress />
        {isDesktop && <Cursor />}
        <Navbar />
        <motion.main
          id="main-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          role="main"
          aria-label="Main content"
        >
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </motion.main>
        <Footer />
        <BackToTop />
        <LiveChat />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Inner />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
