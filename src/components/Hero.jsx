import { useState, useEffect, useRef } from "react";
import { Eye, ArrowDown } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import ResumeModal from "./ResumeModal";
import RotatingTypewriter from "./RotatingTypewriter";
import { addRipple } from "../hooks/useRipple";

/* Session-based view counter — refresh does NOT count */
function useViewCounter() {
  const [views, setViews] = useState(null);
  useEffect(() => {
    try {
      const KEY = "ri_views",
        SES = "ri_counted";
      let n = parseInt(localStorage.getItem(KEY) || "0", 10);
      if (n < 100) {
        n = 140 + Math.floor(Math.random() * 60);
        localStorage.setItem(KEY, String(n));
      }
      if (!sessionStorage.getItem(SES)) {
        n += 1;
        localStorage.setItem(KEY, String(n));
        sessionStorage.setItem(SES, "1");
      }
      setViews(n);
    } catch {
      setViews(199);
    }
  }, []);
  return views;
}

/* Particle canvas */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const isMob = window.innerWidth < 768;
    const canvas = ref.current;
    if (!canvas) return;
    if (isMob) {
      canvas.style.display = "none";
      return;
    }
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth),
      H = (canvas.height = window.innerHeight);
    let mx = W / 2,
      my = H / 2;
    const onR = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onM = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("resize", onR);
    window.addEventListener("mousemove", onM, { passive: true });
    const N = Math.min(45, Math.floor((W * H) / 22000));
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 1.3 + 0.4,
      a: Math.random() * 0.4 + 0.15,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        const dx = p.x - mx,
          dy = p.y - my,
          d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          p.vx += (dx / d) * 0.25;
          p.vy += (dy / d) * 0.25;
        }
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j],
            dd = Math.hypot(p.x - q.x, p.y - q.y);
          if (dd < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.05 * (1 - dd / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onR);
      window.removeEventListener("mousemove", onM);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* Profile photo with 3D tilt */
function Photo({ size }) {
  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-70, 70], [8, -8]), {
    stiffness: 280,
    damping: 26,
  });
  const ry = useSpring(useTransform(mx, [-70, 70], [-8, 8]), {
    stiffness: 280,
    damping: 26,
  });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: 800,
        display: "inline-block",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          display: "inline-block",
          position: "relative",
        }}
        className="anim-glow3d"
      >
        <div
          className="border-spin"
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: "50%",
            background: "var(--bg)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: size,
            height: size,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow:
              "0 0 36px rgba(0,212,255,0.22),0 12px 40px rgba(0,0,0,0.38)",
          }}
        >
          <img
            src="/rushikesh.jpeg"
            alt="Rushikesh Ingole"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 5,
            right: -2,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 9px",
            borderRadius: 100,
            background: "var(--bg2)",
            border: "1px solid rgba(34,197,94,0.35)",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 5px #22c55e",
              display: "inline-block",
              animation: "pulse 2s ease infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "#22c55e",
              letterSpacing: "0.06em",
            }}
          >
            Available
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

const STATS = [
  { label: "Projects", val: "10+" },
  { label: "BCA Score", val: "85%" },
  { label: "Uni Rank", val: "7th" },
  { label: "Experience", val: "1yr+" },
];

const BTNS = [
  {
    key: "gh",
    href: "https://github.com/CodeByRushi11",
    label: "GitHub",
    icon: "⚡",
    ext: true,
    style: {
      background: "var(--grad-main)",
      backgroundSize: "200%",
      color: "#fff",
      boxShadow: "0 4px 16px var(--accent-glow)",
    },
  },
  {
    key: "li",
    href: "https://www.linkedin.com/in/rushikesh-ingole-b02052377",
    label: "LinkedIn",
    icon: "💼",
    ext: true,
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border)",
      color: "var(--text)",
    },
  },
  {
    key: "ph",
    href: "tel:+918010688184",
    label: "Call",
    icon: "📞",
    style: {
      background: "rgba(34,197,94,.08)",
      border: "1px solid rgba(34,197,94,.25)",
      color: "var(--accent4)",
    },
  },
  {
    key: "cv",
    href: "/Rushikesh_ResumeAI Business Intellegence Analyst.pdf",
    label: "Resume",
    icon: "📄",
    dl: true,
    shimmer: true,
    style: {
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      color: "var(--text)",
    },
  },
];

export default function Hero() {
  const [modal, setModal] = useState(false);
  const [isMob, setIsMob] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false,
  );
  const views = useViewCounter();

  useEffect(() => {
    const fn = () => setIsMob(window.innerWidth <= 640);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const photoSize = isMob
    ? "clamp(110px,32vw,150px)"
    : "clamp(150px,17vw,195px)";
  const gifSize = isMob ? "min(160px,50vw)" : "clamp(130px,14vw,170px)";

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        /* Enough padding so stats row never clips */
        padding:
          "clamp(68px,9vw,88px) clamp(16px,4vw,28px) clamp(64px,9vw,88px)",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      <style>{`
        /* Grid: text left, photo+gif right */
        .hg {
          display:grid;
          grid-template-columns:1fr auto;
          gap:clamp(24px,5vw,64px);
          align-items:center;
          width:100%;
          margin-bottom:clamp(24px,4vw,40px);
        }
        /* CTA row */
        .hcta {
          display:flex; flex-wrap:wrap;
          gap:clamp(7px,1.8vw,10px);
          justify-content:flex-start;
        }
        /* ── Stats: CSS grid so numbers NEVER overflow ── */
        .hst {
          display:grid;
          grid-template-columns:repeat(5,1fr);
          padding-top:clamp(14px,3vw,22px);
          border-top:1px solid var(--border);
          width:100%;
          gap:0;
        }
        .hst-item {
          text-align:center;
          padding:6px 2px;
          border-right:1px solid var(--border);
        }
        .hst-item:last-child { border-right:none; }

        /* ── Mobile ── */
        @media(max-width:640px){
          .hg  { grid-template-columns:1fr!important; gap:10px!important; }
          .hpc { order:-1; display:flex; justify-content:center; }
          .htc { text-align:center!important; }
          .htc p { margin-left:auto!important; margin-right:auto!important; }
          .hcta { justify-content:center!important; }
          .hst  { grid-template-columns:repeat(3,1fr)!important; row-gap:8px!important; }
          .hst-item{ border-right:none!important; }
        }
        @media(max-width:380px){
          .hcta a,.hcta button { font-size:11px!important; padding:8px 10px!important; }
          .hst  { grid-template-columns:repeat(2,1fr)!important; }
        }

        /* View counter */
        @keyframes vg { 0%,100%{opacity:1} 50%{opacity:.5} }
        .vcnt { animation:vg 3s ease infinite; }
      `}</style>

      <Particles />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--grad-bg)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="anim-morph"
        style={{
          position: "absolute",
          top: "6%",
          right: "2%",
          width: "min(300px,42vw)",
          height: "min(300px,42vw)",
          background:
            "radial-gradient(circle,rgba(123,47,247,0.07),transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="anim-morph"
        style={{
          position: "absolute",
          bottom: "4%",
          left: "1%",
          width: "min(180px,32vw)",
          height: "min(180px,32vw)",
          background:
            "radial-gradient(circle,rgba(0,212,255,0.05),transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          animationDelay: "-4s",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1060,
          width: "100%",
          minWidth: 0,
        }}
      >
        <div className="hg">
          {/* ── TEXT ── */}
          <div className="htc" style={{ minWidth: 0 }}>
            <div
              className="anim-bounce-in"
              style={{ marginBottom: "clamp(10px,2.5vw,16px)" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "5px 13px",
                  borderRadius: 100,
                  border: "1px solid var(--border-h)",
                  background: "rgba(0,212,255,0.06)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(9px,1.8vw,11px)",
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 7px var(--accent)",
                    display: "inline-block",
                    animation: "pulse 1.5s ease infinite",
                  }}
                />
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            <div className="anim-fade-up d-1">
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(24px,5.5vw,68px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  margin: "0 0 2px",
                }}
              >
                Hi, I'm
              </h1>
              <h1
                className="grad-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(24px,5.5vw,68px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  display: "block",
                  margin: "0 0 10px",
                }}
              >
                Rushikesh Ingole
              </h1>
            </div>

            <div className="anim-fade-up d-2" style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(9px,1.8vw,11px)",
                  letterSpacing: "0.10em",
                  color: "var(--text3)",
                  textTransform: "uppercase",
                }}
              >
                📍 Nagpur, Maharashtra, India
              </span>
            </div>

            <div className="anim-fade-up d-3" style={{ marginBottom: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(13px,2.3vw,21px)",
                  color: "var(--text2)",
                }}
              >
                <RotatingTypewriter
                  texts={[
                    "AI & Business Intelligence Analyst",
                    "Data Analyst & Visualization Expert",
                    "Power BI & Python Specialist",
                    "Analytics-Driven Problem Solver",
                  ]}
                />
              </span>
            </div>

            <p
              className="anim-fade-up d-4"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(13px,1.8vw,15px)",
                lineHeight: 1.78,
                color: "var(--text2)",
                maxWidth: 460,
                margin: "0 0 clamp(16px,3vw,24px)",
              }}
            >
              I transform complex data into clean dashboards, KPI reports, and
              strategic insights — using Python, SQL, and Power BI.
            </p>

            <div className="hcta anim-fade-up d-5">
              {BTNS.map(
                ({ key, href, label, icon, ext, dl, shimmer, style }) => (
                  <a
                    key={key}
                    href={href}
                    target={ext ? "_blank" : undefined}
                    rel={ext ? "noopener noreferrer" : undefined}
                    {...(dl ? { download: true } : {})}
                    className={`btn btn-clip corner-box${shimmer ? " btn-shimmer" : ""}`}
                    onClick={(e) => addRipple(e, "rgba(255,255,255,0.18)")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "clamp(8px,1.8vw,11px) clamp(12px,2.2vw,20px)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(11px,1.7vw,13px)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      ...style,
                    }}
                  >
                    <span style={{ fontSize: "clamp(12px,1.8vw,14px)" }}>
                      {icon}
                    </span>
                    {label}
                  </a>
                ),
              )}
              <button
                onClick={(e) => {
                  addRipple(e, "rgba(0,212,255,0.14)");
                  setModal(true);
                }}
                className="btn btn-clip corner-box"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "clamp(8px,1.8vw,11px) clamp(12px,2.2vw,20px)",
                  background: "transparent",
                  border: "1px solid var(--border-h)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(11px,1.7vw,13px)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                <Eye size={13} /> Preview CV
              </button>
            </div>
          </div>

          {/* ── PHOTO + GIF ── */}
          <div className="hpc">
            <motion.div
              initial={{ opacity: 0, y: isMob ? -16 : 0, x: isMob ? 0 : 40 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: isMob ? 10 : 14,
              }}
            >
              <Photo size={photoSize} />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ width: gifSize }}
              >
                <div
                  style={{
                    borderRadius: 11,
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    boxShadow: "0 6px 24px rgba(0,212,255,0.12)",
                  }}
                >
                  <img
                    src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
                    alt="coding"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 4,
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "var(--text3)",
                    letterSpacing: "0.08em",
                  }}
                >
                  ⚡ Always coding
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── STATS — CSS grid, always visible on all screens ── */}
        <div className="hst anim-fade-up d-7">
          {STATS.map(({ label, val }) => (
            <div key={label} className="hst-item">
              <div
                className="grad-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(18px,3.5vw,30px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(7px,1.3vw,9px)",
                  letterSpacing: "0.08em",
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  marginTop: 3,
                }}
              >
                {label}
              </div>
            </div>
          ))}
          {/* Profile views — 5th stat */}
          {/* <div className="hst-item">
            <div
              className={`grad-text vcnt`}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(18px,3.5vw,30px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {views !== null ? views.toLocaleString() : "—"}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(7px,1.3vw,9px)",
                letterSpacing: "0.08em",
                color: "var(--text3)",
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              Profile Views
            </div>
          </div> */}
        </div>
      </div>

      <div
        className="anim-float"
        style={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text3)",
          zIndex: 1,
        }}
      >
        <ArrowDown size={17} />
      </div>
      {modal && <ResumeModal onClose={() => setModal(false)} />}
    </section>
  );
}
