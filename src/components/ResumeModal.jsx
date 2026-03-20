import { useState } from "react";
import { Download, ExternalLink, X } from "lucide-react";
import { addRipple } from "../hooks/useRipple";

const PDF = "/Rushikesh_ResumeAI Business Intellegence Analyst.pdf";

export default function ResumeModal({ onClose }) {
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(onClose, 320);
  };

  return (
    <div
      onClick={e => e.target === e.currentTarget && close()}
      style={{
        position: "fixed", inset: 0,
        background: "var(--overlay)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9000, padding: 20,
        opacity: closing ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <div style={{
        background: "var(--bg2)", border: "1px solid var(--border)",
        borderRadius: 20, width: "100%", maxWidth: 900,
        height: "88vh", display: "flex", flexDirection: "column",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        transform: closing ? "scale(0.95) translateY(20px)" : "scale(1)",
        opacity: closing ? 0 : 1,
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        animation: closing ? "none" : "zoomIn 0.35s cubic-bezier(0.16,1,0.3,1) both",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "18px 24px", borderBottom: "1px solid var(--border)",
          background: "var(--bg3)",
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text)", margin: 0, letterSpacing: "-0.02em" }}>
              Resume Preview
            </h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", margin: "2px 0 0", letterSpacing: "0.06em" }}>
              Rushikesh Ingole — AI & BI Analyst
            </p>
          </div>
          <button
            onClick={close}
            data-hover
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: "var(--surface)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--text2)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-h)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.color = "var(--text2)"; }}
          >
            <X size={16} />
          </button>
        </div>

        {/* PDF */}
        <iframe
          src={PDF}
          title="Resume"
          style={{ flex: 1, border: "none", background: "#fff" }}
        />

        {/* Footer */}
        <div style={{
          display: "flex", gap: 12, justifyContent: "flex-end",
          padding: "14px 20px", borderTop: "1px solid var(--border)",
          background: "var(--bg3)",
        }}>
          <a
            href={PDF}
            target="_blank" rel="noopener noreferrer"
            className="btn"
            onClick={e => addRipple(e, "rgba(255,255,255,0.2)")}
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 10,
              background: "var(--surface)", border: "1px solid var(--border)",
              color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 13, textDecoration: "none",
            }}
          >
            <ExternalLink size={14} /> Open
          </a>
          <a
            href={PDF}
            download
            className="btn"
            onClick={e => addRipple(e, "rgba(255,255,255,0.2)")}
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 10,
              background: "var(--grad-main)", backgroundSize: "200%",
              color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 13, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,212,255,0.2)",
            }}
          >
            <Download size={14} /> Download
          </a>
        </div>
      </div>
    </div>
  );
}
