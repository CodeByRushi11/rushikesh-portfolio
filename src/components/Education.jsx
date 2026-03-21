import { GraduationCap, Trophy, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg)", padding: "clamp(60px,10vw,100px) 20px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(36px,7vw,64px)" }} data-reveal="up">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>
            <GraduationCap size={12} /> Education
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,6vw,52px)", letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.1 }}>
            Academic <span className="grad-text">Foundation</span>
          </h2>
          <div className="section-line" style={{ margin: "18px auto 0" }} />
        </div>

        <div className="glass" data-reveal="scale" style={{ borderRadius: "clamp(16px,3vw,24px)", padding: "clamp(24px,5vw,48px)", position: "relative", overflow: "hidden" }}>
          {/* Decorative watermark */}
          <div style={{ position: "absolute", top: -10, right: "clamp(8px,3vw,24px)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(60px,14vw,140px)", lineHeight: 1, color: "var(--border)", userSelect: "none", letterSpacing: "-0.08em", pointerEvents: "none" }}>
            BCA
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px,3vw,20px)", marginBottom: "clamp(16px,4vw,28px)", flexWrap: "wrap" }}>
              <div style={{ width: "clamp(44px,8vw,56px)", height: "clamp(44px,8vw,56px)", borderRadius: "clamp(12px,2vw,16px)", flexShrink: 0, background: "var(--grad-main)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,212,255,0.2)" }} className="anim-float">
                <GraduationCap size={22} color="#fff" />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(16px,3.5vw,24px)", color: "var(--text)", marginBottom: 4, letterSpacing: "-0.03em" }}>
                  Bachelor of Computer Application
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px,2vw,15px)", color: "var(--text2)", fontWeight: 400 }}>
                  Santaji Mahavidyalaya, Nagpur
                </p>
              </div>
            </div>

            {/* Meta badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px,2vw,12px)", marginBottom: "clamp(16px,4vw,28px)" }}>
              {[
                { Icon: Calendar, text: "Sep 2021 – Jun 2024",   accent: false },
                { Icon: Award,    text: "85% Score",             accent: true },
                { Icon: Trophy,   text: "7th Rank — RTMNU",      accent: true },
              ].map(({ Icon, text, accent }) => (
                <span key={text} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "clamp(6px,1.5vw,8px) clamp(12px,2.5vw,16px)", borderRadius: 100, background: accent ? "rgba(0,212,255,0.08)" : "var(--surface)", border: `1px solid ${accent ? "var(--border-h)" : "var(--border)"}`, fontFamily: "var(--font-mono)", fontSize: "clamp(9px,2vw,12px)", color: accent ? "var(--accent)" : "var(--text2)", letterSpacing: "0.04em" }}>
                  <Icon size={11} />{text}
                </span>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(13px,2vw,15px)", lineHeight: 1.8, color: "var(--text2)", borderLeft: "2px solid var(--border-h)", paddingLeft: "clamp(12px,3vw,20px)" }}>
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
