import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Folder, BarChart2, Globe, Terminal, ChevronRight } from "lucide-react";
import { addRipple } from "../hooks/useRipple";

const analytics = [
  {
    title: "Chocolate Sales Analysis",
    subtitle: "Power BI Dashboard",
    desc: "Interactive Power BI dashboard analyzing large-scale chocolate sales data to track revenue, profit, trends, and business performance across products, customers, and regions.",
    github: "https://github.com/CodeByRushi11/Chocolate-Sales-Analysis-Power-BI-Dashboard",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    featured: true,
  },
  {
    title: "Credit Card Financial Analytics",
    subtitle: "BI Dashboard",
    desc: "Interactive Power BI dashboard analyzing credit card transactions and customer demographics to uncover revenue trends, spending behavior, and business insights.",
    github: "https://github.com/CodeByRushi11/credit-card-financial-analytics-dashboard",
    tech: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    featured: true,
  },
  {
    title: "Superstore Sales Analysis",
    subtitle: "Python / EDA",
    desc: "Comprehensive sales and profitability analysis using Python to identify regional performance trends, high-value product categories, and revenue optimization opportunities.",
    github: "https://github.com/CodeByRushi11/superstore-data-analysis",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Grocery Inventory Analytics",
    subtitle: "SQL + Python",
    desc: "Inventory and KPI analysis using SQL and Python to evaluate stock movement, demand patterns, and data-driven inventory optimization strategies.",
    github: "https://github.com/CodeByRushi11/grocery-inventory-analysis",
    tech: ["Python", "SQL", "Pandas"],
  },
  {
    title: "Diwali Sales Analysis",
    subtitle: "Python / EDA",
    desc: "Exploratory data analysis of festive retail sales data to uncover customer segmentation insights, demographic purchasing behavior, and regional revenue distribution.",
    github: "https://github.com/CodeByRushi11/Diwali-Sales-Analysis",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Vrinda Store Excel Analysis",
    subtitle: "Excel Dashboard",
    desc: "Retail sales performance dashboard built using Excel Pivot Tables and Charts to track KPIs, monthly revenue trends, and category-level performance metrics.",
    github: "https://github.com/CodeByRushi11/Vrinda-Store-Excel-Data-Analysis",
    tech: ["Excel", "Pivot Tables", "Dashboard"],
  },
];

const web = [
  {
    title: "Todo Master",
    subtitle: "React App",
    desc: "Responsive task management app with dynamic status indicators, structured state management, and persistent local storage implementation.",
    github: "https://github.com/CodeByRushi11/Todo-master-with-Deepseek-Ai.git",
    live: "https://todoappusingdeepseekai.netlify.app/",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "Single Vendor Task App",
    subtitle: "React + Routing",
    desc: "Authentication-based React application featuring secure login flow, dashboard routing, and structured user navigation architecture.",
    github: "https://github.com/CodeByRushi11/Single-vender-task1",
    live: "https://single-vender-task1.netlify.app/",
    tech: ["React", "Vite", "Routing"],
  },
];

const other = [
  {
    title: "Simple & Scientific Calculator",
    subtitle: "Python GUI",
    desc: "Python-based GUI calculator supporting arithmetic and scientific operations (sin, cos, log, sqrt, factorial) using Tkinter.",
    github: "https://github.com/CodeByRushi11/Simple-Scientific-Calculator.git",
    tech: ["Python", "Tkinter", "Math Module"],
  },
];

const TABS = [
  { id: "analytics", label: "Data Analytics", Icon: BarChart2, data: analytics },
  { id: "web",       label: "Web Dev",        Icon: Globe,    data: web },
  { id: "other",     label: "Other",          Icon: Terminal, data: other },
];

/* ─── Single project card ───────────────────────────────────────
   KEY FIX: the card itself is display:flex + flex-direction:column
   AND height:100% so it always fills its grid cell completely.
   The description gets flex:1 to push the tags & links to the
   bottom, making every card visually the same height.           */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass"
      style={{
        /* ── equal height fix ── */
        height: "100%",            /* fill the grid cell */
        boxSizing: "border-box",

        borderRadius: 20,
        padding: "28px 24px",

        /* flex column so desc stretches and links pin to bottom */
        display: "flex",
        flexDirection: "column",

        transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        setHovered(true);
        e.currentTarget.style.borderColor = "var(--border-h)";
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "var(--card-shadow-h)";
      }}
      onMouseLeave={e => {
        setHovered(false);
        e.currentTarget.style.borderColor = "var(--card-border)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--card-shadow)";
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          padding: "3px 10px", borderRadius: 100,
          background: "rgba(0,212,255,0.1)",
          border: "1px solid var(--border-h)",
          fontFamily: "var(--font-mono)", fontSize: 9,
          color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          Featured
        </div>
      )}

      {/* Corner glow */}
      <div style={{
        position: "absolute", top: -40, left: -40,
        width: 120, height: 120,
        background: `radial-gradient(circle, rgba(0,212,255,${hovered ? 0.1 : 0.03}) 0%, transparent 70%)`,
        transition: "all 0.4s ease", pointerEvents: "none",
      }} />

      {/* ── SECTION 1 : title row (fixed height) ── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 12,
        flexShrink: 0,          /* never shrink */
      }}>
        <div style={{ paddingRight: 28 /* space for featured badge */ }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
            color: "var(--accent)", textTransform: "uppercase", marginBottom: 4,
          }}>
            {project.subtitle}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
              color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.3,
              transition: "color 0.3s", margin: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
          >
            {project.title}
          </h3>
        </div>
        <Folder
          size={18}
          style={{
            color: hovered ? "var(--accent)" : "var(--text3)",
            flexShrink: 0, marginTop: 4,
            transition: "all 0.3s ease",
            transform: hovered ? "rotate(6deg) scale(1.1)" : "none",
          }}
        />
      </div>

      {/* ── SECTION 2 : description (flex:1 — grows to fill space) ── */}
      <p style={{
        fontFamily: "var(--font-body)", fontWeight: 300,
        fontSize: 13, lineHeight: 1.75, color: "var(--text2)",
        margin: "0 0 20px",
        flex: 1,               /* THIS is what makes all cards equal height */
        /* clamp long text so no card ever becomes taller than others */
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 4,    /* max 4 lines of description */
        WebkitBoxOrient: "vertical",
      }}>
        {project.desc}
      </p>

      {/* ── SECTION 3 : tech tags (fixed, pinned above footer) ── */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 6,
        marginBottom: 20, flexShrink: 0,
      }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              padding: "4px 10px", borderRadius: 100,
              background: "var(--surface)", border: "1px solid var(--border)",
              fontFamily: "var(--font-mono)", fontSize: 10,
              color: "var(--text3)", letterSpacing: "0.04em",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--border-h)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.background = "rgba(0,212,255,0.06)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text3)";
              e.currentTarget.style.background = "var(--surface)";
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* ── SECTION 4 : links footer (always at bottom) ── */}
      <div style={{
        display: "flex", gap: 16,
        paddingTop: 16,
        borderTop: "1px solid var(--border)",
        flexShrink: 0,          /* never shrink */
        marginTop: "auto",      /* extra safety: stick to bottom */
      }}>
        <a
          href={project.github}
          target="_blank" rel="noopener noreferrer"
          className="link-line"
          onClick={e => addRipple(e, "rgba(0,212,255,0.1)")}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
            color: "var(--text2)", textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}
        >
          <Github size={14} /> GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
              color: "var(--accent)", textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--accent2)";
              e.currentTarget.style.gap = "8px";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.gap = "6px";
            }}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── Grid with stagger-on-mount animation ──────────────────────
   The wrapper div for each card (.proj-card-wrap) starts hidden
   and is revealed by JS timers — works on every tab switch
   without relying on IntersectionObserver.

   EQUAL HEIGHT: grid items use align-items:stretch (default)
   and each .proj-card-wrap is height:100%, so ProjectCard
   (also height:100%) fills the full grid row height.          */
function AnimatedGrid({ tabKey, projects }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const wrappers = Array.from(grid.querySelectorAll(".proj-card-wrap"));

    // 1. Snap all to hidden — no transition yet
    wrappers.forEach(el => {
      el.style.transition = "none";
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
    });

    // 2. Flush paint so the hidden state is committed
    void grid.offsetHeight;

    // 3. Stagger reveal
    const timers = wrappers.map((el, i) =>
      setTimeout(() => {
        el.style.transition =
          "opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 75)
    );

    return () => timers.forEach(clearTimeout);
  }, [tabKey]);

  return (
    <div
      ref={gridRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 24,
        /* align-items defaults to stretch — grid rows share the
           same height, making all cards in a row equal height  */
        alignItems: "stretch",
      }}
    >
      {projects.map((project, i) => (
        <div
          key={`${tabKey}-${i}`}
          className="proj-card-wrap"
          style={{
            opacity: 0,
            height: "100%",      /* fill grid cell so card inside can do height:100% */
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive] = useState("analytics");
  const current = TABS.find(t => t.id === active);

  return (
    <section id="projects" style={{ background: "var(--bg2)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }} data-reveal="up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
            color: "var(--accent)", textTransform: "uppercase",
          }}>
            <Folder size={12} /> Projects
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.04em",
            color: "var(--text)", lineHeight: 1.1,
          }}>
            Work that <span className="grad-text">speaks</span>
          </h2>
          <div className="section-line" style={{ margin: "20px auto 0" }} />
        </div>

        {/* Tabs */}
        <div
          data-reveal="up"
          style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48, flexWrap: "wrap" }}
        >
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={e => { setActive(id); addRipple(e, "rgba(0,212,255,0.1)"); }}
              className="btn"
              data-hover
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 100,
                background: active === id ? "var(--grad-main)" : "var(--surface)",
                backgroundSize: "200%",
                border: `1px solid ${active === id ? "transparent" : "var(--border)"}`,
                color: active === id ? "#fff" : "var(--text2)",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                cursor: "pointer",
                boxShadow: active === id ? "0 4px 20px rgba(0,212,255,0.2)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatedGrid tabKey={active} projects={current.data} />

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }} data-reveal="up">
          <a
            href="https://github.com/CodeByRushi11"
            target="_blank" rel="noopener noreferrer"
            className="btn glow-border"
            onClick={e => addRipple(e, "rgba(0,212,255,0.1)")}
            data-hover
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 32px", borderRadius: 12,
              background: "var(--surface)", border: "1px solid var(--border)",
              color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 14, textDecoration: "none", backdropFilter: "blur(8px)",
            }}
          >
            <Github size={17} /> See All Projects on GitHub
            <ChevronRight size={16} style={{ color: "var(--accent)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
