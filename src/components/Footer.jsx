import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";

const navLinks = [
  ["#about", "About"], ["#education", "Education"],
  ["#experience", "Experience"], ["#skills", "Skills"],
  ["#projects", "Projects"], ["#contact", "Contact"],
];

const socials = [
  { Icon: Github,   href: "https://github.com/CodeByRushi11", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/rushikesh-ingole-b02052377", label: "LinkedIn" },
  { Icon: Mail,     href: "mailto:rushikeshingole467@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--footer-bg)", position: "relative" }}>
      {/* Wave SVG top */}
      <div style={{ overflow: "hidden", lineHeight: 0, marginBottom: -1 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="var(--bg)"
          />
          <path
            d="M0,30 C360,60 1080,0 1440,30"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="6 4"
            style={{
              strokeDashoffset: 300,
              animation: "drawLine 3s linear forwards",
            }}
          />
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 40px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 64, flexWrap: "wrap" }}
          className="grid-cols-footer">
          
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26,
              letterSpacing: "-0.04em", color: "#fff", marginBottom: 16,
            }}>
              RUSHIKESH<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14,
              lineHeight: 1.8, color: "rgba(255,255,255,0.4)", maxWidth: 320,
            }}>
              AI & Business Intelligence Analyst focused on delivering data-driven insights,
              KPI reporting frameworks, and strategic analytics that drive measurable growth.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  data-hover
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.5)", textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,212,255,0.3)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              marginBottom: 20,
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="link-line"
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14,
                      color: "rgba(255,255,255,0.45)", textDecoration: "none",
                      transition: "color 0.2s", display: "inline-flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              marginBottom: 20,
            }}>
              Status
            </p>
            <div style={{
              padding: "14px 16px", borderRadius: 12,
              background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)",
              marginBottom: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e", animation: "pulse 2s ease infinite",
                  display: "inline-block",
                }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#22c55e", letterSpacing: "0.06em" }}>
                  OPEN TO WORK
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>
                Available for full-time & internship roles
              </p>
            </div>
            <a
              href="mailto:rushikeshingole467@gmail.com"
              data-hover
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em",
                color: "var(--accent)", textDecoration: "none",
                transition: "gap 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.gap = "10px"}
              onMouseLeave={e => e.currentTarget.style.gap = "6px"}
            >
              Hire me <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 28,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            © {year} Rushikesh Ingole. All rights reserved.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.25)",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            Built with React, Tailwind CSS & <Heart size={11} style={{ color: "var(--accent)", animation: "heartbeat 2s ease infinite" }} /> Vite
          </p>
        </div>
      </div>

      {/* Responsive footer grid style */}
      <style>{`
        .grid-cols-footer {
          grid-template-columns: 2fr 1fr 1fr;
        }
        @media (max-width: 768px) {
          .grid-cols-footer {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
