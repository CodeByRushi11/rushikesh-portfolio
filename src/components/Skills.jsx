import { Code2, Database, BarChart3, GitBranch, Zap } from "lucide-react";

const categories = [
  {
    Icon: BarChart3, label: "Analytics & BI",
    skills: [
      { name: "Power BI", pct: 85 },
      { name: "Exploratory Data Analysis", pct: 90 },
      { name: "KPI Reporting", pct: 88 },
      { name: "Excel Dashboards", pct: 82 },
    ],
    color: "var(--accent)",
  },
  {
    Icon: Database, label: "Data & Languages",
    skills: [
      { name: "Python", pct: 80 },
      { name: "SQL", pct: 85 },
      { name: "Pandas / NumPy", pct: 82 },
      { name: "Matplotlib / Seaborn", pct: 78 },
    ],
    color: "var(--accent2)",
  },
  {
    Icon: Code2, label: "Business Capabilities",
    skills: [
      { name: "Sales Trend Analysis", pct: 88 },
      { name: "Customer Segmentation", pct: 80 },
      { name: "Inventory Optimization", pct: 75 },
      { name: "Data Cleaning & Prep", pct: 92 },
    ],
    color: "#06b6d4",
  },
  {
    Icon: GitBranch, label: "Technical Stack",
    skills: [
      { name: "React", pct: 78 },
      { name: "Tailwind CSS", pct: 82 },
      { name: "Git & GitHub", pct: 80 },
      { name: "Vite", pct: 74 },
    ],
    color: "var(--accent3)",
  },
];

const toolIcons = [
  { label: "Python",   emoji: "🐍" },
  { label: "Power BI", emoji: "📊" },
  { label: "SQL",      emoji: "🗄️" },
  { label: "Excel",    emoji: "📈" },
  { label: "Pandas",   emoji: "🐼" },
  { label: "React",    emoji: "⚛️" },
  { label: "Git",      emoji: "🔀" },
  { label: "NumPy",    emoji: "🔢" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }} data-reveal="up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
            color: "var(--accent)", textTransform: "uppercase",
          }}>
            <Zap size={12} /> Skills & Expertise
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.04em",
            color: "var(--text)", lineHeight: 1.1,
          }}>
            What I bring to <span className="grad-text">the table</span>
          </h2>
          <div className="section-line" style={{ margin: "20px auto 0" }} />
        </div>

        {/* Tool icon cloud */}
        <div
          data-reveal="up"
          style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: 12, marginBottom: 72,
          }}
          data-stagger
        >
          {toolIcons.map(({ label, emoji }) => (
            <div
              key={label}
              className="glass btn"
              style={{
                padding: "10px 20px", borderRadius: 100,
                display: "flex", alignItems: "center", gap: 10,
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-h)";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.transform = "";
              }}
            >
              <span style={{ fontSize: 18 }}>{emoji}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--text2)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Skill cards with progress bars */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}
          data-stagger
          data-reveal="up"
        >
          {categories.map(({ Icon, label, skills, color }) => (
            <div
              key={label}
              className="glass"
              style={{ borderRadius: 20, padding: "28px 24px" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color === "var(--accent)" ? "rgba(0,212,255,0.4)" : "rgba(123,47,247,0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `${color}18`,
                  border: `1px solid ${color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                  color: "var(--text)", letterSpacing: "-0.02em",
                }}>
                  {label}
                </h3>
              </div>

              {/* Progress bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {skills.map(({ name, pct }) => (
                  <div key={name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text2)" }}>
                        {name}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)" }}>
                        {pct}%
                      </span>
                    </div>
                    <div style={{
                      height: 4, borderRadius: 2,
                      background: "var(--surface-h)",
                      overflow: "hidden",
                    }}>
                      <div
                        className="skill-bar-fill"
                        style={{
                          height: "100%", borderRadius: 2,
                          background: `linear-gradient(90deg, ${color}, ${color}99)`,
                          width: `${pct}%`,
                          boxShadow: `0 0 8px ${color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
