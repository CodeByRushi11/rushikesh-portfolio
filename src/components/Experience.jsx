import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const jobs = [
  {
    title: "AI & Business Intelligence Analysis Trainee",
    company: "The Eduspark MIDC SDC",
    type: "Trainee",
    location: "Nagpur, Maharashtra · On-site",
    period: "Nov 2025 – Present · 5 mos",
    tag: "Current",
    color: "#00d4ff",
    points: [
      "Collected, cleaned, and transformed datasets using SQL and Excel.",
      "Performed exploratory data analysis (EDA) using Python (Pandas, NumPy).",
      "Built interactive dashboards using Power BI for business insights.",
      "Created data models and visual reports to support strategic decision-making.",
      "Applied basic machine learning concepts for predictive analysis.",
    ],
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Excel",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "React Developer",
    company: "Talenterise Technokrate",
    type: "Internship",
    location: "Nagpur, Maharashtra · Remote",
    period: "Apr 2025 – Jul 2025 · 4 mos",
    tag: "Completed",
    color: "#a78bfa",
    points: [
      "Built and maintained React-based web applications with clean, reusable components.",
      "Styled responsive UIs using Tailwind CSS for mobile and desktop.",
      "Managed version control workflows using Git and GitHub.",
    ],
    skills: ["React.js", "Tailwind CSS", "Git", "GitHub"],
  },
  {
    title: "Frontend Developer Trainee",
    company: "Esense IT, Nagpur",
    type: "Trainee",
    location: "Nagpur, Maharashtra · On-site",
    period: "Jul 2024 – Jan 2025 · 7 mos",
    tag: "Completed",
    color: "#7b2ff7",
    points: [
      "Built responsive web interfaces using HTML, CSS, and ReactJS.",
      "Developed functional projects including authentication pages and interactive UI components.",
      "Contributed to CRM and WordPress projects ensuring cross-device responsiveness.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Data Visualization"],
  },
];

function JobCard({ job, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "none";
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            el.style.transition =
              "opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1)";
            el.style.opacity = "1";
            el.style.transform = "none";
          }, index * 120);
          io.disconnect();
        }
      },
      { threshold: 0.04, rootMargin: "0px 0px -20px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "clamp(12px,4vw,28px)",
        alignItems: "flex-start",
      }}
    >
      {/* Timeline dot */}
      <div className="exp-dot">
        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: "50%",
            background: job.color,
            boxShadow: `0 0 14px ${job.color}`,
            border: "2px solid var(--bg2)",
            position: "relative",
            zIndex: 1,
            animation: index === 0 ? "pulseGlow 2s ease infinite" : "none",
          }}
        />
      </div>

      {/* 3D card */}
      <motion.div
        whileHover={{ rotateX: 2, rotateY: -3, scale: 1.012 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="glass corner-box job-card"
        style={{
          flex: 1,
          minWidth: 0,
          padding: "clamp(16px,4vw,30px)",
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = job.color + "60";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--card-border)";
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div style={{ flex: 1, minWidth: 160 }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(13px,3vw,18px)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
                marginBottom: 4,
                lineHeight: 1.3,
              }}
            >
              {job.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(11px,2vw,14px)",
                color: "var(--text2)",
                fontWeight: 500,
                margin: 0,
              }}
            >
              {job.company}
              <span style={{ color: "var(--text3)", fontWeight: 300 }}>
                {" "}
                · {job.type}
              </span>
            </p>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 10px",
              borderRadius: 100,
              flexShrink: 0,
              background:
                job.tag === "Current"
                  ? "rgba(0,212,255,0.1)"
                  : "var(--surface)",
              border: `1px solid ${job.tag === "Current" ? "var(--border-h)" : "var(--border)"}`,
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: job.tag === "Current" ? "var(--accent)" : "var(--text3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {job.tag === "Current" && (
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  animation: "pulse 1.5s ease infinite",
                  display: "inline-block",
                }}
              />
            )}
            {job.tag}
          </span>
        </div>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(8px,2vw,14px)",
            marginBottom: "clamp(10px,3vw,18px)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(9px,2vw,11px)",
              color: "var(--text3)",
            }}
          >
            <Calendar size={11} />
            {job.period}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(9px,2vw,11px)",
              color: "var(--text3)",
            }}
          >
            <MapPin size={11} />
            {job.location}
          </span>
        </div>

        {/* Bullet points */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 clamp(10px,3vw,16px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(5px,1.5vw,9px)",
          }}
        >
          {job.points.map((pt, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(11px,2vw,13px)",
                color: "var(--text2)",
                lineHeight: 1.65,
              }}
            >
              <span
                style={{
                  marginTop: 6,
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: job.color,
                  flexShrink: 0,
                  boxShadow: `0 0 5px ${job.color}`,
                }}
              />
              {pt}
            </li>
          ))}
        </ul>

        {/* Skill chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(5px,1.5vw,8px)",
            paddingTop: "clamp(10px,2vw,14px)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {job.skills.map((s) => (
            <span
              key={s}
              style={{
                padding: "3px 10px",
                borderRadius: 100,
                background: "var(--tag-bg)",
                border: "1px solid var(--tag-border)",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(8px,1.8vw,10px)",
                color: "var(--tag-text)",
                letterSpacing: "0.04em",
                transition: "all .2s",
                whiteSpace: "nowrap",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = job.color + "18";
                e.currentTarget.style.borderColor = job.color + "60";
                e.currentTarget.style.color = job.color;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--tag-bg)";
                e.currentTarget.style.borderColor = "var(--tag-border)";
                e.currentTarget.style.color = "var(--tag-text)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef(null);
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transform = "scaleY(1)";
          io.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="experience"
      style={{
        background: "var(--bg2)",
        padding: "clamp(60px,10vw,100px) 20px",
      }}
    >
      <style>{`
        .exp-dot  { width:42px;flex-shrink:0;display:none;justify-content:center;padding-top:26px; }
        @media(min-width:600px){ .exp-dot{display:flex;} }
        .exp-track,.exp-line{ display:none; }
        @media(min-width:600px){ .exp-track,.exp-line{display:block;} }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* ★ FULL SECTION HEADER — Experience */}
        <div
          style={{ textAlign: "center", marginBottom: "clamp(36px,7vw,60px)" }}
          data-reveal="up"
        >
          <div className="sec-eyebrow">
            <Briefcase size={12} /> Experience
          </div>
          <h2 className="sec-title">
            Professional <span className="grad-text">Journey</span>
          </h2>
          <p className="sec-sub">
            Real-world experience across analytics, web development, and
            frontend engineering — building meaningful, data-driven products.
          </p>
          <div className="section-line" style={{ margin: "18px auto 0" }} />
        </div>

        {/* ★ Timeline */}
        <div style={{ position: "relative" }}>
          <div
            className="exp-track"
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border)",
            }}
          />
          <div
            className="exp-line"
            ref={lineRef}
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              width: 1,
              height: "100%",
              background: "linear-gradient(to bottom,#00d4ff,#a78bfa,#7b2ff7)",
              transform: "scaleY(0)",
              transformOrigin: "top",
              transition: "transform 2s cubic-bezier(.16,1,.3,1) .3s",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(18px,4vw,28px)",
            }}
          >
            {jobs.map((job, i) => (
              <JobCard key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
