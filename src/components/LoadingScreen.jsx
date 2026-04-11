import { useEffect, useState, useRef } from "react";

/* ─── Industry-level loading screen ───────────────────────
   Phase 1 (0–1600ms): progress bar fills 0→100 with steps,
     each step shows what's "loading"
   Phase 2 (1600–2400ms): reveal + fade-out
   Phase 3 (2400ms+): unmount
────────────────────────────────────────────────────────── */
const STEPS = [
  { pct: 15, label: "Initialising environment…" },
  { pct: 32, label: "Loading components…" },
  { pct: 55, label: "Preparing animations…" },
  { pct: 74, label: "Fetching project data…" },
  { pct: 88, label: "Applying glass effects…" },
  { pct: 100, label: "Ready to launch 🚀" },
];

export default function LoadingScreen() {
  const [phase, setPhase] = useState("in"); // "in" | "reveal" | "out" | "gone"
  const [pct, setPct] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [dots, setDots] = useState("");
  const rafRef = useRef(null);
  const startRef = useRef(Date.now());

  /* Smooth progress bar using rAF */
  useEffect(() => {
    const TOTAL = 1550; // ms for bar to go 0→100
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const progress = Math.min((elapsed / TOTAL) * 100, 100);
      setPct(Math.round(progress));

      // Advance step label
      const idx = STEPS.findIndex((s) => s.pct > progress);
      setStepIdx(idx === -1 ? STEPS.length - 1 : Math.max(0, idx - 1));

      if (progress < 100) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* Dot animation */
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 380);
    return () => clearInterval(id);
  }, []);

  /* Phase transitions */
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 1600);
    const t2 = setTimeout(() => setPhase("out"), 2000);
    const t3 = setTimeout(() => setPhase("gone"), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "gone") return null;

  const isOut = phase === "out" || phase === "reveal";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: isOut ? 0 : 1,
        transform: isOut ? "scale(1.03)" : "scale(1)",
        transition:
          "opacity .65s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1)",
        pointerEvents: isOut ? "none" : "all",
      }}
    >
      {/* Ambient background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(0,212,255,0.07),transparent 70%)",
          pointerEvents: "none",
          animation: "morphBg 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(123,47,247,0.07),transparent 70%)",
          pointerEvents: "none",
          animation: "morphBg 10s ease-in-out infinite",
          animationDelay: "-4s",
        }}
      />

      {/* ── GLASS CARD ── */}
      <div
        style={{
          position: "relative",
          width: "clamp(300px,85vw,420px)",
          padding: "clamp(32px,5vw,48px) clamp(28px,5vw,44px)",
          borderRadius: 24,
          /* Glassmorphism */
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          overflow: "hidden",
        }}
      >
        {/* Inner shimmer line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)",
            pointerEvents: "none",
          }}
        />
        {/* Accent colour corner glow */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 120,
            height: 120,
            background:
              "radial-gradient(circle,rgba(0,212,255,.12),transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 100,
            height: 100,
            background:
              "radial-gradient(circle,rgba(123,47,247,.10),transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* ── LOGO + RI MONOGRAM ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Monogram circle */}
          <div
            style={{
              position: "relative",
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Outer spinning gradient ring */}
            <div
              style={{
                position: "absolute",
                inset: -3,
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg,#00d4ff,#7b2ff7,#ff6b35,transparent 75%,#00d4ff)",
                animation: "spin 2.5s linear infinite",
              }}
            />
            {/* Inner glass circle */}
            <div
              style={{
                position: "absolute",
                inset: 3,
                borderRadius: "50%",
                background: "var(--bg)",
              }}
            />
            {/* RI text */}
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 22,
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg,#00d4ff,#7b2ff7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RI
            </span>
          </div>

          {/* Name */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(17px,4vw,22px)",
                letterSpacing: "0.12em",
                color: "var(--text)",
              }}
            >
              RUSHIKESH<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                color: "var(--text3)",
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              AI & BI Analyst
            </div>
          </div>
        </div>

        {/* ── 3 SPINNING RINGS ── */}
        <div
          style={{
            position: "relative",
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Ring 1 — large, slow */}
          <div
            style={{
              position: "absolute",
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "2px solid transparent",
              borderTopColor: "var(--accent)",
              borderRightColor: "var(--accent)",
              animation: "loadRing 1.4s linear infinite",
            }}
          />
          {/* Ring 2 — medium, reverse */}
          <div
            style={{
              position: "absolute",
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "2px solid transparent",
              borderBottomColor: "var(--accent2)",
              borderLeftColor: "var(--accent2)",
              animation: "loadRing 1.0s linear infinite reverse",
            }}
          />
          {/* Ring 3 — small, fast */}
          <div
            style={{
              position: "absolute",
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "1.5px solid transparent",
              borderTopColor: "var(--accent3)",
              animation: "loadRing 0.7s linear infinite",
            }}
          />
          {/* Center dot */}
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 10px var(--accent)",
              animation: "pulse 1s ease infinite",
            }}
          />
        </div>

        {/* ── PROGRESS SECTION ── */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Status label */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(9px,2vw,11px)",
                color: "var(--text3)",
                letterSpacing: "0.06em",
                transition: "all .3s",
              }}
            >
              {STEPS[stepIdx]?.label}
              {dots}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(10px,2vw,13px)",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.04em",
                minWidth: 38,
                textAlign: "right",
              }}
            >
              {pct}%
            </span>
          </div>

          {/* Progress bar track */}
          <div
            style={{
              width: "100%",
              height: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.07)",
              overflow: "hidden",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {/* Animated fill */}
            <div
              style={{
                height: "100%",
                borderRadius: 4,
                width: `${pct}%`,
                background: "linear-gradient(90deg,#00d4ff,#7b2ff7,#ff6b35)",
                backgroundSize: "200%",
                animation: "borderFlow 1.5s linear infinite",
                boxShadow: "0 0 8px rgba(0,212,255,0.6)",
                transition: "width .05s linear",
              }}
            />
          </div>

          {/* Step dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 2,
            }}
          >
            {STEPS.map((s, i) => (
              <div
                key={i}
                style={{
                  width: i === stepIdx ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background:
                    pct >= s.pct ? "var(--accent)" : "rgba(255,255,255,0.12)",
                  boxShadow:
                    pct >= s.pct ? "0 0 6px var(--accent-glow)" : "none",
                  transition: "all .35s cubic-bezier(.16,1,.3,1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── WAVE BARS ── */}
        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "flex-end",
            height: 24,
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                display: "inline-block",
                width: 3,
                height: `${8 + Math.sin(i * 0.9) * 8 + 4}px`,
                background: `linear-gradient(to top,var(--accent),var(--accent2))`,
                borderRadius: 2,
                animation: `waveBar 1s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                boxShadow: "0 0 4px var(--accent-glow)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom tip */}
      <div
        style={{
          marginTop: 20,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          color: "var(--text3)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          opacity: 0.6,
        }}
      >
        Portfolio · Rushikesh Ingole
      </div>
    </div>
  );
}
