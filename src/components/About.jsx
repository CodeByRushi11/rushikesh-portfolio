import { Brain, Database, TrendingUp, MapPin, Sparkles } from "lucide-react";

const TICKER_ITEMS = [
  "Python", "Power BI", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn",
  "Excel", "DAX", "Data Cleaning", "EDA", "KPI Reporting", "Dashboards",
  "Business Intelligence", "Predictive Modeling", "Data Visualization",
  "Python", "Power BI", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn",
  "Excel", "DAX", "Data Cleaning", "EDA", "KPI Reporting", "Dashboards",
];

const highlights = [
  { Icon: Database, label: "Data Analytics" },
  { Icon: TrendingUp, label: "Business Intelligence" },
  { Icon: Brain, label: "AI & Predictive Modeling" },
  { Icon: MapPin, label: "Nagpur, India" },
];

const competencies = [
  "End-to-End Data Cleaning & EDA",
  "Advanced SQL Querying & KPI Reporting",
  "Interactive Dashboard Development",
  "Data Visualization & Insight Communication",
  "Analytical Thinking & Business Problem Solving",
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg2)", padding: "100px 24px" }}>
      {/* Ticker strip */}
      <div style={{
        background: "var(--bg3)", borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)", padding: "12px 0", marginBottom: 80,
        overflow: "hidden",
      }}>
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {TICKER_ITEMS.map((item, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 16,
                padding: "0 20px",
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: i % 3 === 0 ? "var(--accent)" : "var(--text3)",
              }}>
                <span style={{ color: "var(--border-h)", opacity: 0.6 }}>◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }} data-reveal="up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
            color: "var(--accent)", textTransform: "uppercase",
          }}>
            <Sparkles size={12} /> About Me
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 54px)", letterSpacing: "-0.04em",
            color: "var(--text)", lineHeight: 1.1,
          }}>
            Analyst by training,<br />
            <span className="grad-text">strategist by nature</span>
          </h2>
          <div className="section-line" style={{ margin: "20px auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 40, alignItems: "start" }}>

          {/* Left */}
          <div data-reveal="left">
            <div style={{ marginBottom: 32 }}>
              {[
                <>I am an aspiring <strong style={{ color: "var(--accent)" }}>AI & Business Intelligence Analyst</strong> based in <strong>Nagpur, India</strong>. I specialize in transforming structured and unstructured data into actionable business insights that drive strategic decision-making.</>,
                `My expertise spans data cleaning, exploratory data analysis, SQL-based reporting, and interactive dashboard development using Python, Power BI, and Excel — extracting measurable value from data to drive performance improvement.`,
                `Currently deepening my capabilities in AI and analytics at MIDC Skill Development Center, I aim to bridge the gap between raw data and real-world business strategy.`,
              ].map((txt, i) => (
                <p key={i} style={{
                  fontFamily: "var(--font-body)", fontWeight: 300,
                  fontSize: 16, lineHeight: 1.8, color: "var(--text2)",
                  marginBottom: 18,
                }}>
                  {txt}
                </p>
              ))}
            </div>

            {/* Icon highlights */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} data-stagger>
              {highlights.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="glass"
                  style={{ padding: "14px 18px", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, cursor: "default" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--border-h)";
                    e.currentTarget.querySelector("svg").style.transform = "scale(1.2) rotate(8deg)";
                    e.currentTarget.querySelector("svg").style.color = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
                    e.currentTarget.querySelector("svg").style.transform = "";
                    e.currentTarget.querySelector("svg").style.color = "var(--accent2)";
                  }}
                >
                  <Icon size={18} style={{ color: "var(--accent2)", transition: "all 0.3s ease", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13, color: "var(--text)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div data-reveal="right">
            <div className="glass" style={{ borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              {/* Decorative accent */}
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 120, height: 120,
                background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                color: "var(--text)", marginBottom: 24,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ width: 4, height: 20, background: "var(--grad-main)", borderRadius: 2, display: "inline-block" }} />
                Core Competencies
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {competencies.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "12px 16px", borderRadius: 10,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "var(--border-h)";
                      e.currentTarget.style.background = "var(--surface-h)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "var(--surface)";
                      e.currentTarget.style.transform = "";
                    }}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      background: "var(--grad-main)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, color: "#fff",
                      fontFamily: "var(--font-mono)",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text2)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
