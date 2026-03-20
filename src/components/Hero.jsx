import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Download, Eye, ArrowDown } from "lucide-react";
import ResumeModal from "./ResumeModal";
import RotatingTypewriter from "./RotatingTypewriter";
import { addRipple } from "../hooks/useRipple";

/* ─── Canvas Particle System ──────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let mouse = { x: W / 2, y: H / 2 };

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMouse = (e) => { mouse = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse, { passive: true });

    // Create particles
    const count = Math.min(80, Math.floor(W * H / 18000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Mouse repel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += (dx / dist) * 0.3;
          p.vy += (dy / dist) * 0.3;
        }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}

/* ─── Hero ──────────────────────────────────── */
export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 200); return () => clearTimeout(t); }, []);

  const stats = [
    { num: "6+", label: "Projects Built" },
    { num: "3+", label: "Tools Mastered" },
    { num: "85%", label: "Academic Score" },
    { num: "7th", label: "University Rank" },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", textAlign: "center",
        padding: "100px 24px 80px",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Particle network */}
      <ParticleCanvas />

      {/* Gradient background blobs */}
      <div style={{ position: "absolute", inset: 0, background: "var(--grad-bg)", pointerEvents: "none", zIndex: 0 }} />

      {/* Morphing blob accent */}
      <div className="anim-morph" style={{
        position: "absolute", top: "10%", right: "8%",
        width: 420, height: 420,
        background: "radial-gradient(circle, rgba(123,47,247,0.08) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="anim-morph" style={{
        position: "absolute", bottom: "5%", left: "5%",
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0, animationDelay: "-4s",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, width: "100%" }}>

        {/* Status badge */}
        <div
          className={`anim-bounce-in ${mounted ? "" : "d-0"}`}
          style={{ marginBottom: 28 }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 20px", borderRadius: 100,
            border: "1px solid var(--border-h)",
            background: "rgba(0,212,255,0.06)",
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em",
            color: "var(--accent)", backdropFilter: "blur(8px)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)", animation: "pulse 1.5s ease infinite",
              display: "inline-block",
            }} />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Main heading */}
        <div className={`anim-fade-up d-1`} style={{ marginBottom: 8 }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(44px, 8vw, 88px)",
            lineHeight: 1.0, letterSpacing: "-0.04em",
            color: "var(--text)", marginBottom: 0,
          }}>
            Data Meets
          </h1>
          <h1 className="grad-text" style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(44px, 8vw, 88px)",
            lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 0,
            display: "block",
          }}>
            Intelligence.
          </h1>
        </div>

        {/* Typewriter */}
        <div className={`anim-fade-up d-3`} style={{ marginBottom: 24, marginTop: 20 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "var(--text2)",
          }}>
            <RotatingTypewriter
              texts={[
                "AI & Business Intelligence Analyst",
                "Data Analyst & Visualization Expert",
                "Power BI & Python Specialist",
                "Analytics-Driven Problem Solver",
              ]}
            />
          </div>
        </div>

        {/* Description */}
        <p className={`anim-fade-up d-4`} style={{
          fontFamily: "var(--font-body)", fontWeight: 300,
          fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75,
          color: "var(--text2)", maxWidth: 600, margin: "0 auto 40px",
        }}>
          I transform messy, complex data into clean dashboards, KPI reports,
          and strategic insights that move businesses forward — using Python,
          SQL, Power BI, and analytical thinking.
        </p>

        {/* CTA Buttons */}
        <div
          className={`anim-fade-up d-5`}
          style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 56 }}
        >
          {/* Primary */}
          <a
            href="https://github.com/CodeByRushi11"
            target="_blank" rel="noopener noreferrer"
            className="btn"
            onClick={e => addRipple(e, "rgba(255,255,255,0.2)")}
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 26px", borderRadius: 12,
              background: "var(--grad-main)", backgroundSize: "200%",
              color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 14, letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(0,212,255,0.25)",
              textDecoration: "none",
            }}
          >
            <Github size={17} /> View GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
            target="_blank" rel="noopener noreferrer"
            className="btn glow-border"
            onClick={e => addRipple(e, "rgba(0,212,255,0.15)")}
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 26px", borderRadius: 12,
              background: "var(--surface)", border: "1px solid var(--border)",
              color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 14, letterSpacing: "0.02em", textDecoration: "none",
              backdropFilter: "blur(8px)",
            }}
          >
            <Linkedin size={17} /> LinkedIn
          </a>

          {/* Download */}
          <a
            href="/Rushikesh_ResumeAI Business Intellegence Analyst.pdf"
            download
            className="btn"
            onClick={e => addRipple(e, "rgba(255,255,255,0.2)")}
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 26px", borderRadius: 12,
              background: "var(--bg3)", border: "1px solid var(--border)",
              color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 14, textDecoration: "none",
            }}
          >
            <Download size={17} /> Resume
          </a>

          {/* Preview */}
          <button
            onClick={e => { addRipple(e, "rgba(0,212,255,0.15)"); setModalOpen(true); }}
            className="btn"
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 26px", borderRadius: 12,
              background: "transparent", border: "1px solid var(--border-h)",
              color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 14, cursor: "pointer",
            }}
          >
            <Eye size={17} /> Preview
          </button>
        </div>

        {/* Stats row */}
        <div
          className={`anim-fade-up d-7`}
          style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0 40px",
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
          }}
          data-stagger
        >
          {stats.map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", padding: "8px 0" }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(28px, 5vw, 40px)",
                letterSpacing: "-0.04em",
              }} className="grad-text">
                {num}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--text3)", textTransform: "uppercase" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="anim-float"
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", color: "var(--text3)", zIndex: 1 }}
      >
        <ArrowDown size={22} />
      </div>

      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
