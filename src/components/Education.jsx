import { GraduationCap, Trophy, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }} data-reveal="up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
            color: "var(--accent)", textTransform: "uppercase",
          }}>
            <GraduationCap size={12} /> Education
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.04em",
            color: "var(--text)", lineHeight: 1.1,
          }}>
            Academic <span className="grad-text">Foundation</span>
          </h2>
          <div className="section-line" style={{ margin: "20px auto 0" }} />
        </div>

        {/* Card */}
        <div
          className="glass"
          data-reveal="scale"
          style={{ borderRadius: 24, padding: "48px 40px", position: "relative", overflow: "hidden" }}
        >
          {/* Big decorative number */}
          <div style={{
            position: "absolute", top: -20, right: 24,
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 140, lineHeight: 1,
            color: "var(--border)", userSelect: "none",
            letterSpacing: "-0.08em",
          }}>
            BCA
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28 }}>
              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                background: "var(--grad-main)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 24px rgba(0,212,255,0.2)",
              }} className="anim-float">
                <GraduationCap size={26} color="#fff" />
              </div>

              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24,
                  color: "var(--text)", marginBottom: 4, letterSpacing: "-0.03em",
                }}>
                  Bachelor of Computer Application
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text2)", fontWeight: 400 }}>
                  Santaji Mahavidyalaya, Nagpur
                </p>
              </div>
            </div>

            {/* Meta row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              {[
                { Icon: Calendar, text: "September 2021 – June 2024" },
                { Icon: Award, text: "85% Score", accent: true },
                { Icon: Trophy, text: "7th Rank — RTMNU", accent: true },
              ].map(({ Icon, text, accent }) => (
                <span
                  key={text}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "8px 16px", borderRadius: 100,
                    background: accent ? "rgba(0,212,255,0.08)" : "var(--surface)",
                    border: `1px solid ${accent ? "var(--border-h)" : "var(--border)"}`,
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: accent ? "var(--accent)" : "var(--text2)",
                    letterSpacing: "0.04em",
                  }}
                >
                  <Icon size={13} />
                  {text}
                </span>
              ))}
            </div>

            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 300,
              fontSize: 15, lineHeight: 1.8, color: "var(--text2)",
              borderLeft: "2px solid var(--border-h)", paddingLeft: 20,
            }}>
              Built a strong foundation in programming, database management, data structures,
              and analytical problem-solving. Developed technical proficiency in software
              development and data handling, forming the basis for advanced work in analytics
              and business intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
