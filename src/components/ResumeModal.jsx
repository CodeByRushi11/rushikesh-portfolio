import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import { addRipple } from "../hooks/useRipple";

const PDF = "/Rushikesh_ResumeAI Business Intellegence Analyst.pdf";

export default function ResumeModal({ onClose }) {
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(onClose, 320);
  };

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          onClick={(e) => e.target === e.currentTarget && close()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--overlay)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(10px,3vw,24px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 28 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            style={{
              width: "100%",
              maxWidth: 900,
              height: "clamp(520px,88vh,860px)",
              display: "flex",
              flexDirection: "column",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow:
                "0 40px 100px rgba(0,0,0,.72), 0 0 0 1px rgba(0,212,255,0.08)",
              position: "relative",
            }}
          >
            {/* Glowing gradient top accent bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                zIndex: 10,
                background:
                  "linear-gradient(90deg,#00d4ff,#7b2ff7,#ff6b35,#00d4ff)",
                backgroundSize: "200%",
                animation: "borderFlow 3s ease infinite",
              }}
            />

            {/* ── Header ── */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 20px",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg3)",
                flexShrink: 0,
                marginTop: 2,
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(14px,3vw,17px)",
                    color: "var(--text)",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Resume Preview
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(8px,2vw,10px)",
                    color: "var(--accent)",
                    margin: "3px 0 0",
                    letterSpacing: "0.08em",
                  }}
                >
                  RUSHIKESH INGOLE · AI & BI ANALYST
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {/* Status dot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 12px",
                    borderRadius: 100,
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 6px #22c55e",
                      display: "inline-block",
                      animation: "pulse 2s ease infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      color: "#22c55e",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Available
                  </span>
                </div>

                {/* Close */}
                <button
                  onClick={close}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--text2)",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,60,60,0.14)";
                    e.currentTarget.style.color = "#ff4444";
                    e.currentTarget.style.borderColor = "rgba(255,60,60,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--surface)";
                    e.currentTarget.style.color = "var(--text2)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* ── PDF iframe — takes all remaining space ── */}
            <div
              style={{
                flex: 1,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <iframe
                src={PDF}
                title="Rushikesh Ingole Resume"
                style={{
                  flex: 1,
                  width: "100%",
                  border: "none",
                  background: "#fff",
                  display: "block",
                }}
              />
            </div>

            {/* ── Footer ── */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 10,
                padding: "12px 20px",
                borderTop: "1px solid var(--border)",
                background: "var(--bg3)",
                flexShrink: 0,
              }}
            >
              <a
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-clip"
                onClick={(e) => addRipple(e, "rgba(255,255,255,0.15)")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 18px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={14} /> Open
              </a>
              <a
                href={PDF}
                download="Rushikesh_Ingole_Resume.pdf"
                className="btn btn-clip btn-shimmer"
                onClick={(e) => addRipple(e, "rgba(255,255,255,0.22)")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 22px",
                  background: "var(--grad-main)",
                  backgroundSize: "200%",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  boxShadow: "0 4px 18px var(--accent-glow)",
                }}
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
