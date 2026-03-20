import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";

const jobs = [
  {
    title: "AI & Business Intelligence Analysis Trainee",
    company: "MIDC Skill Development Center, Butibori, Nagpur",
    period: "November 2025 – Present",
    tag: "Current",
    color: "var(--accent)",
    points: [
      "Performing structured data analysis using Excel and Python on real-world datasets.",
      "Designing dashboards and analytical reports to support data-driven business decisions.",
      "Executing data cleaning, transformation, and visualization workflows.",
    ],
  },
  {
    title: "Frontend Developer Trainee",
    company: "Esense IT, Nagpur",
    period: "July 2024 – January 2025",
    tag: "Completed",
    color: "var(--accent2)",
    points: [
      "Built responsive web interfaces using HTML, CSS, and ReactJS.",
      "Developed functional projects including authentication pages and interactive UI components.",
      "Contributed to CRM and WordPress projects ensuring cross-device responsiveness.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg2)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }} data-reveal="up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
            color: "var(--accent)", textTransform: "uppercase",
          }}>
            <Briefcase size={12} /> Experience
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.04em",
            color: "var(--text)", lineHeight: 1.1,
          }}>
            Professional <span className="grad-text">Journey</span>
          </h2>
          <div className="section-line" style={{ margin: "20px auto 0" }} />
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 27, top: 0, bottom: 0,
            width: 1, background: "var(--border)",
          }} />
          {/* Animated progress line */}
          <div
            data-reveal="up"
            style={{
              position: "absolute", left: 27, top: 0,
              width: 1, height: "100%",
              background: "linear-gradient(to bottom, var(--accent), var(--accent2))",
              transform: "scaleY(0)", transformOrigin: "top",
              transition: "transform 1.5s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
            ref={el => {
              if (!el) return;
              const io = new IntersectionObserver(([e]) => {
                if (e.isIntersecting) { el.style.transform = "scaleY(1)"; io.disconnect(); }
              }, { threshold: 0.2 });
              io.observe(el);
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {jobs.map((job, i) => (
              <div
                key={i}
                data-reveal={i % 2 === 0 ? "right" : "left"}
                style={{ display: "flex", gap: 28, alignItems: "flex-start" }}
              >
                {/* Timeline dot */}
                <div style={{
                  width: 56, flexShrink: 0, display: "flex",
                  justifyContent: "center", paddingTop: 22,
                }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: "50%",
                    background: job.color,
                    boxShadow: `0 0 16px ${job.color}`,
                    border: "2px solid var(--bg2)",
                    animation: i === 0 ? "pulseGlow 2s ease infinite" : "none",
                    zIndex: 1, position: "relative",
                  }} />
                </div>

                {/* Card */}
                <div
                  className="glass"
                  style={{ flex: 1, borderRadius: 20, padding: "32px 28px" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = job.color === "var(--accent)" ? "var(--border-h)" : "rgba(123,47,247,0.4)";
                  }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: 20, color: "var(--text)", letterSpacing: "-0.02em",
                        marginBottom: 4,
                      }}>
                        {job.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text2)" }}>
                        {job.company}
                      </p>
                    </div>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "6px 12px", borderRadius: 100,
                      background: job.tag === "Current" ? "rgba(0,212,255,0.1)" : "var(--surface)",
                      border: `1px solid ${job.tag === "Current" ? "var(--border-h)" : "var(--border)"}`,
                      fontFamily: "var(--font-mono)", fontSize: 10,
                      color: job.tag === "Current" ? "var(--accent)" : "var(--text3)",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                      {job.tag === "Current" && (
                        <span style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: "var(--accent)",
                          animation: "pulse 1.5s ease infinite",
                        }} />
                      )}
                      {job.tag}
                    </span>
                  </div>

                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: "var(--text3)", marginBottom: 20,
                  }}>
                    <Calendar size={12} /> {job.period}
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.points.map((pt, j) => (
                      <li key={j} style={{
                        display: "flex", gap: 12, alignItems: "flex-start",
                        fontFamily: "var(--font-body)", fontSize: 14,
                        color: "var(--text2)", lineHeight: 1.6,
                      }}>
                        <span style={{
                          marginTop: 6, width: 6, height: 6, borderRadius: "50%",
                          background: job.color, flexShrink: 0,
                          boxShadow: `0 0 6px ${job.color}`,
                        }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
