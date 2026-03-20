import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { addRipple } from "../hooks/useRipple";

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: "rushikeshingole467@gmail.com",
    href: "mailto:rushikeshingole467@gmail.com",
    color: "var(--accent)",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 8010688184",
    href: "tel:+918010688184",
    color: "var(--accent2)",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "rushikesh-ingole-b02052377",
    href: "https://in.linkedin.com/in/rushikesh-ingole-b02052377",
    color: "#0077b5",
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "CodeByRushi11",
    href: "https://github.com/CodeByRushi11",
    color: "var(--text2)",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }} data-reveal="up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
            color: "var(--accent)", textTransform: "uppercase",
          }}>
            <Send size={12} /> Get In Touch
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.04em",
            color: "var(--text)", lineHeight: 1.05, marginBottom: 20,
          }}>
            Let's build something<br />
            <span className="grad-text">remarkable together</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: 16, lineHeight: 1.7, color: "var(--text2)",
            maxWidth: 520, margin: "0 auto",
          }}>
            Open to opportunities in AI, Data Analytics, and Business Intelligence.
            I'd love to discuss analytics-driven growth, reporting strategy,
            and data-informed decision making.
          </p>
          <div className="section-line" style={{ margin: "28px auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48 }}>

          {/* Left — Contact cards */}
          <div data-reveal="left" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--text3)", marginBottom: 8,
            }}>
              Reach me at
            </p>
            {contacts.map(({ Icon, label, value, href, color, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="glass btn"
                onClick={e => addRipple(e, "rgba(0,212,255,0.08)")}
                data-hover
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "18px 20px", borderRadius: 16, textDecoration: "none",
                  transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--border-h)";
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.transform = "";
                }}
              >
                {/* Icon blob */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div style={{ overflow: "hidden" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
                    color: "var(--text3)", textTransform: "uppercase", marginBottom: 3,
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14,
                    color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right — CTA card */}
          <div data-reveal="right">
            <div
              className="glass"
              style={{
                borderRadius: 24, padding: "44px 36px",
                position: "relative", overflow: "hidden",
                height: "100%", minHeight: 320,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
            >
              {/* Decorative bg blob */}
              <div style={{
                position: "absolute", bottom: -60, right: -60,
                width: 200, height: 200,
                background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <div className="anim-morph" style={{
                position: "absolute", top: -30, left: -30,
                width: 160, height: 160,
                background: "radial-gradient(circle, rgba(123,47,247,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  marginBottom: 28,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "var(--grad-main)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }} className="anim-pulse-glow">
                    <MapPin size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Location</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>Nagpur, India</div>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 24, letterSpacing: "-0.03em",
                  color: "var(--text)", lineHeight: 1.3, marginBottom: 16,
                }}>
                  Ready to turn your data into decisions?
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontWeight: 300,
                  fontSize: 14, lineHeight: 1.7, color: "var(--text2)", marginBottom: 32,
                }}>
                  Whether you're looking for a data analyst, BI developer, or analytics consultant —
                  I'm available and excited to collaborate.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative", zIndex: 1 }}>
                <a
                  href="mailto:rushikeshingole467@gmail.com"
                  className="btn"
                  onClick={e => addRipple(e, "rgba(255,255,255,0.2)")}
                  data-hover
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    padding: "14px", borderRadius: 12,
                    background: "var(--grad-main)", backgroundSize: "200%",
                    color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 14, textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(0,212,255,0.2)",
                  }}
                >
                  <Mail size={16} /> Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
                  target="_blank" rel="noopener noreferrer"
                  className="btn glow-border"
                  onClick={e => addRipple(e, "rgba(0,212,255,0.1)")}
                  data-hover
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    padding: "14px", borderRadius: 12,
                    background: "var(--surface)", border: "1px solid var(--border)",
                    color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 14, textDecoration: "none",
                  }}
                >
                  <Linkedin size={16} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
