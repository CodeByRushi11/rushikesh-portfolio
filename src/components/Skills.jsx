import { Code2, Database, BarChart3, GitBranch, Zap } from "lucide-react";

const categories = [
  { Icon: BarChart3, label: "Analytics & BI", color: "var(--accent)", skills: [{ name: "Power BI", pct: 85 }, { name: "Exploratory Data Analysis", pct: 90 }, { name: "KPI Reporting", pct: 88 }, { name: "Excel Dashboards", pct: 82 }] },
  { Icon: Database,  label: "Data & Languages", color: "var(--accent2)", skills: [{ name: "Python", pct: 80 }, { name: "SQL", pct: 85 }, { name: "Pandas / NumPy", pct: 82 }, { name: "Matplotlib / Seaborn", pct: 78 }] },
  { Icon: Code2,     label: "Business Capabilities", color: "#06b6d4", skills: [{ name: "Sales Trend Analysis", pct: 88 }, { name: "Customer Segmentation", pct: 80 }, { name: "Inventory Optimization", pct: 75 }, { name: "Data Cleaning & Prep", pct: 92 }] },
  { Icon: GitBranch, label: "Technical Stack", color: "var(--accent3)", skills: [{ name: "React", pct: 78 }, { name: "Tailwind CSS", pct: 82 }, { name: "Git & GitHub", pct: 80 }, { name: "Vite", pct: 74 }] },
];

const toolIcons = [
  { label: "Python",   emoji: "🐍" }, { label: "Power BI", emoji: "📊" },
  { label: "SQL",      emoji: "🗄️" }, { label: "Excel",    emoji: "📈" },
  { label: "Pandas",   emoji: "🐼" }, { label: "React",    emoji: "⚛️" },
  { label: "Git",      emoji: "🔀" }, { label: "NumPy",    emoji: "🔢" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg)", padding: "clamp(60px,10vw,100px) 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(36px,7vw,64px)" }} data-reveal="up">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>
            <Zap size={12} /> Skills & Expertise
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,6vw,52px)", letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.1 }}>
            What I bring to <span className="grad-text">the table</span>
          </h2>
          <div className="section-line" style={{ margin: "18px auto 0" }} />
        </div>

        {/* Tool cloud */}
        <div data-reveal="up" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(8px,2vw,12px)", marginBottom: "clamp(36px,7vw,64px)" }} data-stagger>
          {toolIcons.map(({ label, emoji }) => (
            <div key={label} className="glass btn" style={{ padding: "clamp(7px,1.5vw,10px) clamp(12px,2.5vw,20px)", borderRadius: 100, display: "flex", alignItems: "center", gap: 8, cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-h)"; e.currentTarget.style.transform = "translateY(-3px) scale(1.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = ""; }}>
              <span style={{ fontSize: "clamp(14px,3vw,18px)" }}>{emoji}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(9px,2vw,12px)", letterSpacing: "0.06em", color: "var(--text2)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Skill cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "clamp(16px,3vw,28px)" }} data-stagger data-reveal="up">
          {categories.map(({ Icon, label, skills, color }) => (
            <div key={label} className="glass" style={{ borderRadius: "clamp(14px,3vw,20px)", padding: "clamp(18px,3.5vw,28px)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}60`; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = ""; }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(16px,3vw,24px)" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${color}18`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(12px,2.5vw,15px)", color: "var(--text)", letterSpacing: "-0.02em" }}>{label}</h3>
              </div>
              {/* Bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px,2vw,16px)" }}>
                {skills.map(({ name, pct }) => (
                  <div key={name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px,2vw,13px)", color: "var(--text2)" }}>{name}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(9px,1.8vw,11px)", color: "var(--text3)" }}>{pct}%</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, background: "var(--surface-h)", overflow: "hidden" }}>
                      <div className="skill-bar-fill" style={{ height: "100%", borderRadius: 2, background: `linear-gradient(90deg,${color},${color}99)`, width: `${pct}%`, boxShadow: `0 0 6px ${color}60` }} />
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
