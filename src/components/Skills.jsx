import { motion } from "framer-motion";
import { Code2, Database, BarChart3, GitBranch, Zap } from "lucide-react";

const cats = [
  { Icon:BarChart3, label:"Analytics & BI",        color:"#00d4ff", skills:[{n:"Power BI",p:85},{n:"Exploratory Data Analysis",p:90},{n:"KPI Reporting",p:88},{n:"Excel Dashboards",p:82}] },
  { Icon:Database,  label:"Data & Languages",       color:"#7b2ff7", skills:[{n:"Python",p:80},{n:"SQL",p:85},{n:"Pandas / NumPy",p:82},{n:"Matplotlib / Seaborn",p:78}] },
  { Icon:Code2,     label:"Business Capabilities",  color:"#06b6d4", skills:[{n:"Sales Trend Analysis",p:88},{n:"Customer Segmentation",p:80},{n:"Inventory Optimization",p:75},{n:"Data Cleaning & Prep",p:92}] },
  { Icon:GitBranch, label:"Technical Stack",        color:"#ff6b35", skills:[{n:"React",p:78},{n:"Tailwind CSS",p:82},{n:"Git & GitHub",p:80},{n:"Vite",p:74}] },
];

/* ★ Tool cloud — each uses the .skill-chip CSS class for consistent hover */
const tools = [
  { label:"Python",  emoji:"🐍" }, { label:"Power BI", emoji:"📊" },
  { label:"SQL",     emoji:"🗄️" }, { label:"Excel",    emoji:"📈" },
  { label:"Pandas",  emoji:"🐼" }, { label:"React",    emoji:"⚛️" },
  { label:"Git",     emoji:"🔀" }, { label:"NumPy",    emoji:"🔢" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background:"var(--bg)", padding:"clamp(60px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>

        {/* ★ FULL SECTION HEADER — Skills */}
        <div style={{ textAlign:"center", marginBottom:"clamp(36px,7vw,60px)" }} data-reveal="up">
          <div className="sec-eyebrow"><Zap size={12}/> Skills & Expertise</div>
          <h2 className="sec-title">What I bring to <span className="grad-text">the table</span></h2>
          <p className="sec-sub">A well-rounded toolkit combining data analysis, business intelligence, and web development skills.</p>
          <div className="section-line" style={{ margin:"18px auto 0" }}/>
        </div>

        {/* ★ Tool cloud — uses .skill-chip class for consistent hover animation */}
        <div data-reveal="up" data-stagger style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"clamp(8px,2vw,12px)", marginBottom:"clamp(36px,7vw,56px)" }}>
          {tools.map(({ label, emoji }) => (
            <div key={label} className="skill-chip">
              <span className="skill-chip-emoji" style={{ fontSize:"clamp(14px,3vw,20px)" }}>{emoji}</span>
              <span className="skill-chip-label">{label}</span>
            </div>
          ))}
        </div>

        {/* ★ Skill cards — 3D tilt via Framer Motion */}
        <div data-stagger data-reveal="up" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))", gap:"clamp(16px,3vw,24px)" }}>
          {cats.map(({ Icon, label, skills, color }) => (
            <motion.div key={label}
              whileHover={{ rotateX:3, rotateY:-4, scale:1.025 }}
              transition={{ type:"spring", stiffness:300, damping:22 }}
              className="glass"
              style={{ borderRadius:"clamp(14px,3vw,18px)", padding:"clamp(18px,3.5vw,26px)", transformStyle:"preserve-3d" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color+"55"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; }}
            >
              {/* Icon header */}
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"clamp(16px,3vw,20px)" }}>
                <motion.div
                  whileHover={{ rotate:8, scale:1.14 }}
                  transition={{ type:"spring", stiffness:400 }}
                  style={{ width:40, height:40, borderRadius:11, background:`${color}18`, border:`1px solid ${color}40`, display:"flex", alignItems:"center", justifyContent:"center", cursor:"default" }}>
                  <Icon size={17} style={{ color }}/>
                </motion.div>
                <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:"clamp(12px,2.5vw,15px)", color:"var(--text)", letterSpacing:"-0.02em", margin:0 }}>
                  {label}
                </h3>
              </div>

              {/* Progress bars */}
              <div style={{ display:"flex", flexDirection:"column", gap:"clamp(10px,2vw,14px)" }}>
                {skills.map(({ n, p }) => (
                  <div key={n}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                      <span style={{ fontFamily:"var(--font-body)", fontSize:"clamp(11px,2vw,13px)", color:"var(--text2)" }}>{n}</span>
                      <span style={{ fontFamily:"var(--font-mono)", fontSize:"clamp(9px,1.8vw,10px)", color:"var(--text3)" }}>{p}%</span>
                    </div>
                    <div style={{ height:3, borderRadius:2, background:"var(--surface-h)", overflow:"hidden" }}>
                      <div className="skill-bar-fill"
                        style={{ height:"100%", borderRadius:2, background:`linear-gradient(90deg,${color},${color}88)`, width:`${p}%`, boxShadow:`0 0 6px ${color}55` }}/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
