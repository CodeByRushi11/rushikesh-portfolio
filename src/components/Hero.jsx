import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Download, Eye, ArrowDown, Phone, Sparkles } from "lucide-react";
import ResumeModal from "./ResumeModal";
import RotatingTypewriter from "./RotatingTypewriter";
import { addRipple } from "../hooks/useRipple";

/* ─── Canvas particles (desktop only) ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.innerWidth < 768) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let mouse = { x: W / 2, y: H / 2 };
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    const onMouse  = (e) => { mouse = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("resize",    onResize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    const count = Math.min(55, Math.floor(W * H / 18000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.5 + 0.2,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x; const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) { p.vx += (dx / dist) * 0.3; p.vy += (dy / dist) * 0.3; }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]; const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.07 * (1 - d / 120)})`; ctx.lineWidth = 0.6; ctx.stroke();
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
    <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />
  );
}

/* ─── Animated profile photo card ─── */
function ProfileCard() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Rotating gradient border ring */}
      <div style={{
        position: "absolute", inset: -3,
        borderRadius: "50%",
        background: "conic-gradient(from 0deg, #00d4ff, #7b2ff7, #ff6b35, #00d4ff)",
        animation: "spin 4s linear infinite",
        zIndex: 0,
      }} />
      {/* White gap ring */}
      <div style={{
        position: "absolute", inset: -1,
        borderRadius: "50%",
        background: "var(--bg)",
        zIndex: 1,
      }} />
      {/* Photo */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "clamp(130px, 22vw, 200px)",
        height: "clamp(130px, 22vw, 200px)",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 0 40px rgba(0,212,255,0.25), 0 20px 60px rgba(0,0,0,0.4)",
      }}>
        <img
          src="/rushikesh.jpeg"
          alt="Rushikesh Ingole"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top",
            display: "block",
          }}
        />
      </div>

      {/* Status badge pinned bottom-right */}
      <div style={{
        position: "absolute", bottom: 6, right: 6, zIndex: 3,
        display: "flex", alignItems: "center", gap: 5,
        padding: "5px 10px", borderRadius: 100,
        background: "var(--bg2)",
        border: "1px solid rgba(34,197,94,0.4)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", animation: "pulse 2s ease infinite", display: "inline-block" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#22c55e", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>Available</span>
      </div>

      {/* Floating tag — top left */}
      <div style={{
        position: "absolute", top: 8, left: -20, zIndex: 3,
        padding: "5px 10px", borderRadius: 8,
        background: "var(--bg3)", border: "1px solid var(--border)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        animation: "float 4s ease-in-out infinite",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--accent)", letterSpacing: "0.06em" }}>📊 Power BI</span>
      </div>

      {/* Floating tag — bottom left */}
      <div style={{
        position: "absolute", bottom: 24, left: -28, zIndex: 3,
        padding: "5px 10px", borderRadius: 8,
        background: "var(--bg3)", border: "1px solid var(--border)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        animation: "float 5s ease-in-out infinite",
        animationDelay: "-2s",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--accent2)", letterSpacing: "0.06em" }}>🐍 Python</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { num: "6+",  label: "Projects" },
    { num: "3+",  label: "Tools" },
    { num: "85%", label: "Score" },
    { num: "7th", label: "Rank" },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative", minHeight: "100svh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px 60px",
        overflow: "hidden", background: "var(--bg)",
      }}
    >
      <ParticleCanvas />
      <div style={{ position: "absolute", inset: 0, background: "var(--grad-bg)", pointerEvents: "none", zIndex: 0 }} />
      {/* Blobs */}
      <div className="anim-morph" style={{ position: "absolute", top: "8%", right: "3%", width: "min(360px,48vw)", height: "min(360px,48vw)", background: "radial-gradient(circle,rgba(123,47,247,0.07) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div className="anim-morph" style={{ position: "absolute", bottom: "5%", left: "2%", width: "min(240px,38vw)", height: "min(240px,38vw)", background: "radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0, animationDelay: "-4s" }} />

      {/* ── MAIN CONTENT ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, width: "100%" }}>

        {/* Two-column layout: text left, photo right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(28px,6vw,72px)",
          alignItems: "center",
          marginBottom: "clamp(28px,5vw,48px)",
        }}
          className="hero-grid"
        >
          {/* LEFT — text */}
          <div style={{ textAlign: "left" }}>
            {/* Badge */}
            <div className="anim-bounce-in" style={{ marginBottom: "clamp(14px,3vw,22px)" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px", borderRadius: 100,
                border: "1px solid var(--border-h)", background: "rgba(0,212,255,0.06)",
                fontFamily: "var(--font-mono)", fontSize: "clamp(9px,2vw,11px)",
                letterSpacing: "0.08em", color: "var(--accent)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)", display: "inline-block", animation: "pulse 1.5s ease infinite" }} />
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Heading */}
            <div className="anim-fade-up d-1">
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,7vw,80px)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "var(--text)", margin: "0 0 4px" }}>
                Hi, I'm
              </h1>
              <h1 className="grad-text" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,7vw,80px)", lineHeight: 1.0, letterSpacing: "-0.04em", display: "block", margin: "0 0 16px" }}>
                Rushikesh Ingole
              </h1>
            </div>

            {/* Location tag */}
            <div className="anim-fade-up d-2" style={{ marginBottom: 12 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.12em", color: "var(--text3)", textTransform: "uppercase" }}>
                📍 Nagpur, Maharashtra, India
              </span>
            </div>

            {/* Typewriter */}
            <div className="anim-fade-up d-3" style={{ marginBottom: 18 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(14px,3vw,26px)", color: "var(--text2)" }}>
                <RotatingTypewriter texts={[
                  "AI & Business Intelligence Analyst",
                  "Data Analyst & Visualization Expert",
                  "Power BI & Python Specialist",
                  "Analytics-Driven Problem Solver",
                ]} />
              </div>
            </div>

            {/* Description */}
            <p className="anim-fade-up d-4" style={{
              fontFamily: "var(--font-body)", fontWeight: 300,
              fontSize: "clamp(13px,2vw,16px)", lineHeight: 1.75,
              color: "var(--text2)", maxWidth: 520, marginBottom: "clamp(22px,4vw,36px)",
            }}>
              I transform messy, complex data into clean dashboards, KPI reports,
              and strategic insights that move businesses forward — using Python,
              SQL, Power BI, and analytical thinking.
            </p>

            {/* CTA Buttons */}
            <div className="anim-fade-up d-5" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px,2vw,12px)" }}>
              <a href="https://github.com/CodeByRushi11" target="_blank" rel="noopener noreferrer"
                className="btn" onClick={e => addRipple(e, "rgba(255,255,255,0.2)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)", borderRadius: 10, background: "var(--grad-main)", backgroundSize: "200%", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(11px,2vw,13px)", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,212,255,0.25)" }}>
                <Github size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rushikesh-ingole-b02052377" target="_blank" rel="noopener noreferrer"
                className="btn glow-border" onClick={e => addRipple(e, "rgba(0,212,255,0.15)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)", borderRadius: 10, background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(11px,2vw,13px)", textDecoration: "none" }}>
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="tel:+918010688184"
                className="btn" onClick={e => addRipple(e, "rgba(34,197,94,0.2)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)", borderRadius: 10, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(11px,2vw,13px)", textDecoration: "none" }}>
                <Phone size={14} /> Call Me
              </a>
              <a href="/Rushikesh_ResumeAI Business Intellegence Analyst.pdf" download
                className="btn" onClick={e => addRipple(e, "rgba(255,255,255,0.15)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)", borderRadius: 10, background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(11px,2vw,13px)", textDecoration: "none" }}>
                <Download size={14} /> Resume
              </a>
              <button onClick={e => { addRipple(e, "rgba(0,212,255,0.15)"); setModalOpen(true); }}
                className="btn" data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)", borderRadius: 10, background: "transparent", border: "1px solid var(--border-h)", color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(11px,2vw,13px)", cursor: "pointer" }}>
                <Eye size={14} /> Preview CV
              </button>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="anim-fade-left d-3 hero-photo-col" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ProfileCard />
          </div>
        </div>

        {/* Stats row */}
        <div className="anim-fade-up d-7 hero-stats" style={{
          display: "flex", justifyContent: "flex-start",
          flexWrap: "wrap", gap: "0 clamp(24px,5vw,48px)",
          paddingTop: "clamp(20px,4vw,32px)",
          borderTop: "1px solid var(--border)",
        }}>
          {stats.map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", padding: "8px 0", minWidth: 56 }}>
              <div className="grad-text" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(22px,5vw,38px)", letterSpacing: "-0.04em" }}>{num}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(9px,1.8vw,11px)", letterSpacing: "0.08em", color: "var(--text3)", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="anim-float" style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", color: "var(--text3)", zIndex: 1 }}>
        <ArrowDown size={20} />
      </div>

      {/* Mobile responsive: stack photo above text */}
      <style>{`
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .hero-photo-col {
            order: -1;
          }
          .hero-grid > div:first-child {
            text-align: center !important;
          }
          .hero-grid > div:first-child p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-grid > div:first-child > div[class*="anim"] {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-stats { justify-content: center !important; }
        }
      `}</style>

      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
