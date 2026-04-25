import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Folder,
  BarChart2,
  Globe,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { addRipple } from "../hooks/useRipple";

const ANA = [
  {
    title: "Furniture Sales Analysis Dashboard",
    sub: "Google Sheets / Excel / BI",
    desc: "End-to-end business analysis project using Google Sheets. Includes data cleaning, KPI creation, and 4 dashboards (Product, Financial, Operations, Executive). Delivered actionable insights on revenue, profit, inventory, and sales performance.",
    gh: "https://github.com/CodeByRushi11/furniture-sales-analysis.git",
    live: "https://docs.google.com/spreadsheets/d/1NorLJQBEdYwKK0ufPCHNP3teRi9pwKLydtoQCgQC1k8/edit",
    tech: [
      "Google Sheets",
      "Excel",
      "Pivot Tables",
      "Dashboard",
      "Data Cleaning",
      "Business Analysis",
    ],
    feat: true,
    badge: "🔥 Featured",
  },
  {
    title: "Blinkit Customer Feedback Analysis",
    sub: "Python / NLP / EDA",
    desc: "End-to-end analysis of 5,138 real customer reviews using sentiment analysis, category breakdown (Delivery, App, Product, Service), monthly trend tracking, and 10 data visualisations. Average rating: 3.34/5 — 34.6% neutral customers identified as growth opportunity. Includes full business report + 6 NPS improvement recommendations.",
    gh: "https://github.com/CodeByRushi11/blinkit-customer-feedback-analysis.git",
    live: "https://rushikesh-dev-portfolio.netlify.app/",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "NLP",
      "Sentiment Analysis",
      "EDA",
    ],
    feat: true,
  },
  {
    title: "Chocolate Sales Analysis",
    sub: "Power BI",
    desc: "Interactive Power BI dashboard tracking revenue, profit, trends and performance across products, customers and regions.",
    gh: "https://github.com/CodeByRushi11/Chocolate-Sales-Analysis-Power-BI-Dashboard",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    feat: true,
  },
  {
    title: "Credit Card Financial Analytics",
    sub: "BI Dashboard",
    desc: "Power BI dashboard analyzing credit card transactions and customer demographics to uncover revenue trends.",
    gh: "https://github.com/CodeByRushi11/credit-card-financial-analytics-dashboard",
    tech: ["Power BI", "DAX", "Power Query"],
    feat: true,
  },
  {
    title: "Superstore Sales Analysis",
    sub: "Python / EDA",
    desc: "Comprehensive sales and profitability analysis using Python to identify regional performance and optimization.",
    gh: "https://github.com/CodeByRushi11/superstore-data-analysis",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Grocery Inventory Analytics",
    sub: "SQL + Python",
    desc: "Inventory and KPI analysis using SQL and Python to evaluate stock movement and demand patterns.",
    gh: "https://github.com/CodeByRushi11/grocery-inventory-analysis",
    tech: ["Python", "SQL", "Pandas"],
  },
  {
    title: "Diwali Sales Analysis",
    sub: "Python / EDA",
    desc: "Festive retail EDA uncovering customer segmentation and regional revenue distribution.",
    gh: "https://github.com/CodeByRushi11/Diwali-Sales-Analysis",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Vrinda Store Excel Analysis",
    sub: "Excel Dashboard",
    desc: "Retail sales performance dashboard using Excel Pivot Tables to track KPIs and category metrics.",
    gh: "https://github.com/CodeByRushi11/Vrinda-Store-Excel-Data-Analysis",
    tech: ["Excel", "Pivot Tables", "Dashboard"],
  },
];
const WEB = [
  {
    title: "Todo Master",
    sub: "React App",
    desc: "Responsive task management app with dynamic status indicators, state management, and local storage.",
    gh: "https://github.com/CodeByRushi11/Todo-master-with-Deepseek-Ai.git",
    live: "https://todoappusingdeepseekai.netlify.app/",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    feat: true,
  },
  {
    title: "Single Vendor Task App",
    sub: "React + Routing",
    desc: "Authentication-based React app with login flow, dashboard routing and structured navigation.",
    gh: "https://github.com/CodeByRushi11/Single-vender-task1",
    live: "https://single-vender-task1.netlify.app/",
    tech: ["React", "Vite", "Routing"],
  },
  {
    title: "Portfolio Website",
    sub: "React + Framer Motion",
    desc: "This portfolio — React, Vite, Framer Motion, 3D animations, dark/light theme, fully mobile responsive.",
    gh: "https://github.com/CodeByRushi11",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    feat: true,
  },
];
const OTH = [
  {
    title: "Simple & Scientific Calculator",
    sub: "Python GUI",
    desc: "Python-based GUI calculator supporting arithmetic and scientific operations using Tkinter.",
    gh: "https://github.com/CodeByRushi11/Simple-Scientific-Calculator.git",
    tech: ["Python", "Tkinter", "Math Module"],
  },
];
const TABS = [
  { id: "ana", label: "Data Analytics", Icon: BarChart2, data: ANA },
  { id: "web", label: "Web Dev", Icon: Globe, data: WEB },
  { id: "oth", label: "Other", Icon: Terminal, data: OTH },
];

function Card({ p, i }) {
  const [h, setH] = useState(false);
  const isNew = !!p.badge;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.96 }}
      transition={{
        delay: i * 0.07,
        type: "spring",
        stiffness: 300,
        damping: 26,
      }}
      whileHover={{ rotateX: 2, rotateY: -2, scale: 1.015 }}
      style={{ transformStyle: "preserve-3d", height: "100%" }}
    >
      <div
        className="glass corner-box"
        style={{
          borderRadius: 16,
          padding: "clamp(14px,3vw,22px)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
          cursor: "default",
          transition: "border-color .28s, box-shadow .28s",
          /* New project gets cyan glow outline */
          ...(isNew
            ? {
                borderColor: "rgba(0,212,255,0.35)",
                boxShadow: "0 0 0 1px rgba(0,212,255,0.15),var(--card-shadow)",
              }
            : {}),
        }}
        onMouseEnter={(e) => {
          setH(true);
          e.currentTarget.style.borderColor = isNew
            ? "rgba(0,212,255,0.6)"
            : "var(--card-border-h)";
        }}
        onMouseLeave={(e) => {
          setH(false);
          e.currentTarget.style.borderColor = isNew
            ? "rgba(0,212,255,0.35)"
            : "var(--card-border)";
        }}
      >
        {/* NEW badge — animated */}
        {isNew && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: i * 0.07 + 0.4,
              type: "spring",
              stiffness: 400,
            }}
            style={{
              position: "absolute",
              top: 11,
              left: 11,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 6px rgba(0,212,255,.7)",
                  "0 0 14px rgba(0,212,255,.3)",
                  "0 0 6px rgba(0,212,255,.7)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "3px 8px",
                borderRadius: 100,
                background: "rgba(0,212,255,0.12)",
                border: "1px solid rgba(0,212,255,0.45)",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#00d4ff",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#00d4ff",
                  display: "inline-block",
                  animation: "pulse 1.2s ease infinite",
                }}
              />
              NEW
            </motion.span>
          </motion.div>
        )}

        {p.feat && !isNew && (
          <motion.div
            animate={{
              boxShadow: [
                "0 0 5px var(--accent-glow)",
                "0 0 12px var(--accent-glow)",
                "0 0 5px var(--accent-glow)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: "absolute",
              top: 11,
              right: 11,
              padding: "2px 8px",
              borderRadius: 100,
              background: "var(--tag-bg)",
              border: "1px solid var(--tag-border)",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--tag-text)",
              letterSpacing: "0.1em",
              zIndex: 1,
            }}
          >
            Featured
          </motion.div>
        )}
        {p.feat && isNew && (
          <motion.div
            animate={{
              boxShadow: [
                "0 0 5px var(--accent-glow)",
                "0 0 12px var(--accent-glow)",
                "0 0 5px var(--accent-glow)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: "absolute",
              top: 11,
              right: 11,
              padding: "2px 8px",
              borderRadius: 100,
              background: "var(--tag-bg)",
              border: "1px solid var(--tag-border)",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--tag-text)",
              letterSpacing: "0.1em",
              zIndex: 1,
            }}
          >
            Featured
          </motion.div>
        )}
        <div
          style={{
            position: "absolute",
            top: -36,
            left: -36,
            width: 100,
            height: 100,
            background: `radial-gradient(circle,rgba(0,212,255,${h ? 0.09 : 0.025}),transparent 70%)`,
            transition: "all .35s",
            pointerEvents: "none",
          }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={h ? { scaleX: 1 } : { scaleX: 0 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "var(--grad-main)",
            transformOrigin: "left",
            zIndex: 2,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 7,
            flexShrink: 0,
            paddingRight: p.feat ? 46 : 0,
            paddingLeft: isNew ? 46 : 0,
            paddingTop: 3,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.1em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 3,
              }}
            >
              {p.sub}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(12px,2.2vw,15px)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
                margin: 0,
                transition: "color .22s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              {p.title}
            </h3>
          </div>
          <motion.div
            animate={h ? { rotate: 8, scale: 1.12 } : { rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Folder
              size={15}
              style={{
                color: h ? "var(--accent)" : "var(--text3)",
                flexShrink: 0,
                marginLeft: 7,
                marginTop: 2,
              }}
            />
          </motion.div>
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(11px,1.8vw,12.5px)",
            lineHeight: 1.68,
            color: "var(--text2)",
            marginBottom: 12,
            flex: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {p.desc}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            marginBottom: 12,
            flexShrink: 0,
          }}
        >
          {p.tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 500 }}
              style={{
                padding: "2px 8px",
                borderRadius: 100,
                background: "var(--tag-bg)",
                border: "1px solid var(--tag-border)",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(8px,1.6vw,10px)",
                color: "var(--tag-text)",
                whiteSpace: "nowrap",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--tag-bg)";
                e.currentTarget.style.borderColor = "var(--tag-border)";
                e.currentTarget.style.color = "var(--tag-text)";
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            paddingTop: 10,
            borderTop: "1px solid var(--border)",
            flexShrink: 0,
            marginTop: "auto",
          }}
        >
          <a
            href={p.gh}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(9px,1.8vw,10px)",
              color: "var(--text2)",
              textDecoration: "none",
              transition: "color .2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text2)")}
          >
            <Github size={11} /> GitHub
          </a>
          {p.live && (
            <motion.a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(9px,1.8vw,10px)",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              <ExternalLink size={11} /> Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("ana");
  const cur = TABS.find((t) => t.id === active);
  const total = ANA.length + WEB.length + OTH.length;
  return (
    <section
      id="projects"
      style={{
        background: "var(--bg2)",
        padding: "clamp(60px,9vw,100px) 20px",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "clamp(32px,6vw,48px)" }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sec-eyebrow">
            <Folder size={11} /> Projects
          </div>
          <h2 className="sec-title">
            Work that <span className="grad-text">speaks</span>
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "3px 11px",
              borderRadius: 100,
              background: "var(--tag-bg)",
              border: "1px solid var(--tag-border)",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--tag-text)",
              marginTop: 8,
            }}
          >
            ✦ {total} total projects
          </div>
          <div className="section-line" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="glass-panel"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 7,
            marginBottom: "clamp(24px,4.5vw,36px)",
            flexWrap: "wrap",
            padding: "clamp(10px,2vw,14px) clamp(12px,2.5vw,18px)",
            borderRadius: 16,
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55 }}
        >
          {TABS.map(({ id, label, Icon, data }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={(e) => {
                setActive(id);
                addRipple(e, "rgba(0,212,255,.08)");
              }}
              className="btn btn-clip corner-box"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "clamp(7px,1.8vw,10px) clamp(14px,2.5vw,20px)",
                background:
                  active === id ? "var(--grad-main)" : "var(--surface)",
                backgroundSize: "200%",
                border: `1px solid ${active === id ? "transparent" : "var(--border)"}`,
                color: active === id ? "#fff" : "var(--text2)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(11px,1.8vw,13px)",
                cursor: "pointer",
                boxShadow:
                  active === id ? "0 4px 18px var(--accent-glow)" : "none",
                transition: "all .28s",
              }}
            >
              <Icon size={12} />
              {label}
              <span
                style={{
                  background:
                    active === id
                      ? "rgba(255,255,255,.18)"
                      : "var(--surface-h)",
                  borderRadius: 100,
                  padding: "1px 6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                }}
              >
                {data.length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cards with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill,minmax(min(100%,280px),1fr))",
              gap: "clamp(12px,2.5vw,20px)",
              alignItems: "stretch",
            }}
          >
            {cur.data.map((p, i) => (
              <div key={`${active}-${i}`} style={{ height: "100%" }}>
                <Card p={p} i={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={{ textAlign: "center", marginTop: "clamp(28px,5vw,44px)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55 }}
        >
          <a
            href="https://github.com/CodeByRushi11"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-clip glow-border corner-box"
            onClick={(e) => addRipple(e, "rgba(0,212,255,.09)")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "clamp(10px,2.2vw,13px) clamp(18px,3.5vw,30px)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(12px,1.8vw,14px)",
              textDecoration: "none",
            }}
          >
            <Github size={15} /> View All {total}+ Projects on GitHub{" "}
            <ChevronRight size={14} style={{ color: "var(--accent)" }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
