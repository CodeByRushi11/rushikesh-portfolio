import { motion } from "framer-motion";
import { Brain, Database, TrendingUp, MapPin, Sparkles } from "lucide-react";

const TICKER = [
  "Python",
  "Power BI",
  "SQL",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Excel",
  "DAX",
  "Data Cleaning",
  "EDA",
  "KPI Reporting",
  "Dashboards",
  "Business Intelligence",
  "React",
  "Python",
  "Power BI",
  "SQL",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Excel",
  "DAX",
  "Data Cleaning",
  "EDA",
  "KPI Reporting",
];

const highlights = [
  { Icon: Database, label: "Data Analytics", color: "#00d4ff" },
  { Icon: TrendingUp, label: "Business Intelligence", color: "#7b2ff7" },
  { Icon: Brain, label: "AI & Modeling", color: "#ff6b35" },
  { Icon: MapPin, label: "Nagpur, India", color: "#22c55e" },
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
    <section
      id="about"
      style={{
        background: "var(--bg2)",
        padding: "clamp(60px,10vw,100px) 20px 0",
      }}
    >
      {/* ── Ticker ── */}
      <div
        style={{
          background: "var(--bg3)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "10px 0",
          marginBottom: "clamp(40px,8vw,64px)",
          overflow: "hidden",
        }}
      >
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {TICKER.map((item, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "0 18px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(9px,2vw,11px)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: i % 3 === 0 ? "var(--accent)" : "var(--text3)",
                }}
              >
                <span style={{ opacity: 0.4 }}>◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingBottom: "clamp(60px,10vw,100px)",
        }}
      >
        {/* ── Section header ── */}
        <div
          style={{ textAlign: "center", marginBottom: "clamp(36px,7vw,60px)" }}
          data-reveal="up"
        >
          <div className="sec-eyebrow">
            <Sparkles size={12} /> About Me
          </div>
          <h2 className="sec-title">Analyst by training,</h2>
          <h2
            className="grad-text"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(26px,6vw,54px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            strategist by nature
          </h2>
          <div className="section-line" style={{ margin: "18px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
            gap: "clamp(24px,5vw,40px)",
            alignItems: "start",
          }}
        >
          {/* ── Left ── */}
          <div data-reveal="left">
            {[
              <>
                I am an aspiring{" "}
                <strong style={{ color: "var(--accent)" }}>
                  AI & Business Intelligence Analyst
                </strong>{" "}
                based in <strong>Nagpur, India</strong>. I specialize in
                transforming structured and unstructured data into actionable
                business insights that drive strategic decision-making.
              </>,
              "My expertise spans data cleaning, exploratory data analysis, SQL-based reporting, and interactive dashboard development using Python, Power BI, and Excel.",
              "Currently deepening capabilities in AI and analytics at The Eduspark MIDC SDC, bridging the gap between raw data and real-world business strategy.",
            ].map((txt, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "clamp(13px,2.2vw,16px)",
                  lineHeight: 1.8,
                  color: "var(--text2)",
                  marginBottom: 16,
                }}
              >
                {txt}
              </p>
            ))}

            {/* ★ Highlight cards — about-hi-card class for consistent hover */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginTop: 8,
              }}
              data-stagger
            >
              {highlights.map(({ Icon, label, color }) => (
                <div
                  key={label}
                  className="glass about-hi-card corner-box"
                  style={{
                    padding: "clamp(10px,2vw,14px)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    className="hi-icon"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: `${color}18`,
                      border: `1px solid ${color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background .3s, border-color .3s",
                    }}
                  >
                    <Icon
                      size={15}
                      style={{ color, transition: "color .3s" }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "clamp(11px,2vw,13px)",
                      color: "var(--text)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — 3D float card ── */}
          <div data-reveal="right">
            <motion.div
              className="glass anim-float-3d"
              style={{
                borderRadius: 20,
                padding: "clamp(22px,4vw,36px)",
                position: "relative",
                overflow: "hidden",
                transformStyle: "preserve-3d",
              }}
              whileHover={{ rotateX: 0, rotateY: 0, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
            >
              {/* 3D depth glow layers */}
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 140,
                  height: 140,
                  background:
                    "radial-gradient(circle,rgba(0,212,255,0.08) 0%,transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: -20,
                  width: 100,
                  height: 100,
                  background:
                    "radial-gradient(circle,rgba(123,47,247,0.07) 0%,transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(15px,3vw,18px)",
                  color: "var(--text)",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 22,
                    background: "var(--grad-main)",
                    borderRadius: 2,
                    display: "inline-block",
                  }}
                />
                Core Competencies
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {competencies.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      cursor: "default",
                      transition: "background .2s, border-color .2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--card-border-h)";
                      e.currentTarget.style.background = "var(--surface-h)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "var(--surface)";
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        flexShrink: 0,
                        background: "var(--grad-main)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(12px,2vw,14px)",
                        color: "var(--text2)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
