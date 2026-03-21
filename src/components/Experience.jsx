import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const jobs = [
  {
    title: "AI & Business Intelligence Analysis Trainee",
    company: "The Eduspark MIDC SDC",
    type: "Trainee",
    location: "Nagpur, Maharashtra, India · On-site",
    period: "Nov 2025 – Present · 5 mos",
    tag: "Current",
    color: "var(--accent)",
    colorHex: "#00d4ff",
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
    location: "Nagpur, Maharashtra, India · Remote",
    period: "Apr 2025 – Jul 2025 · 4 mos",
    tag: "Completed",
    color: "#a78bfa",
    colorHex: "#a78bfa",
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
    location: "Nagpur, Maharashtra, India · On-site",
    period: "Jul 2024 – Jan 2025 · 7 mos",
    tag: "Completed",
    color: "var(--accent2)",
    colorHex: "#7b2ff7",
    points: [
      "Built responsive web interfaces using HTML, CSS, and ReactJS.",
      "Developed functional projects including authentication pages and interactive UI components.",
      "Contributed to CRM and WordPress projects ensuring cross-device responsiveness.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Data Visualization"],
  },
];

/* ─── Card component with its own IntersectionObserver ─────────
   Each card manages its own visibility independently.
   This avoids the bug where a card deep in the section
   never triggers because the parent observer fires early.      */
function JobCard({ job, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Start hidden
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "none";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay per card for a stagger feel
          setTimeout(() => {
            el.style.transition =
              "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)";
            el.style.opacity = "1";
            el.style.transform = "none";
          }, index * 120);
          io.disconnect();
        }
      },
      // Lower threshold + generous rootMargin so even cards near
      // the bottom of the page get detected reliably
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        display: "flex",
        gap: "clamp(14px,4vw,28px)",
        alignItems: "flex-start",
      }}
    >
      {/* Timeline dot — desktop only */}
      <div
        style={{
          width: 42,
          flexShrink: 0,
          display: "none",
          justifyContent: "center",
          paddingTop: 26,
        }}
        className="sm-flex"
      >
        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: "50%",
            background: job.colorHex,
            boxShadow: `0 0 14px ${job.colorHex}`,
            border: "2px solid var(--bg2)",
            zIndex: 1,
            position: "relative",
            animation: index === 0 ? "pulseGlow 2s ease infinite" : "none",
          }}
        />
      </div>

      {/* Card */}
      <div
        className="glass"
        style={{
          flex: 1,
          borderRadius: "clamp(14px,3vw,20px)",
          padding: "clamp(18px,4vw,32px)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          /* ensure card is always block-level even before reveal */
          minHeight: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = job.colorHex + "70";
          e.currentTarget.style.boxShadow = `0 12px 40px ${job.colorHex}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--card-border)";
          e.currentTarget.style.boxShadow = "var(--card-shadow)";
        }}
      >
        {/* Top row: title + tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(14px,3vw,19px)",
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
                fontSize: "clamp(12px,2vw,14px)",
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

          {/* Status tag */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "5px 10px",
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

        {/* Meta — period + location */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: "clamp(12px,3vw,18px)",
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
            <Calendar size={11} /> {job.period}
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
            <MapPin size={11} /> {job.location}
          </span>
        </div>

        {/* Bullet points */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: `0 0 clamp(12px,3vw,16px)`,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px,1.5vw,10px)",
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
                fontSize: "clamp(12px,2vw,13px)",
                color: "var(--text2)",
                lineHeight: 1.65,
              }}
            >
              <span
                style={{
                  marginTop: 7,
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: job.colorHex,
                  flexShrink: 0,
                  boxShadow: `0 0 5px ${job.colorHex}`,
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
          {job.skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "3px 10px",
                borderRadius: 100,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(8px,1.8vw,10px)",
                color: "var(--text3)",
                letterSpacing: "0.04em",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = job.colorHex + "80";
                e.currentTarget.style.color = job.colorHex;
                e.currentTarget.style.background = job.colorHex + "12";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text3)";
                e.currentTarget.style.background = "var(--surface)";
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Animated timeline progress line ── */
function TimelineLine() {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <div
      ref={lineRef}
      style={{
        position: "absolute",
        left: 20,
        top: 0,
        width: 1,
        height: "100%",
        background:
          "linear-gradient(to bottom, var(--accent), #a78bfa, var(--accent2))",
        transform: "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 2s cubic-bezier(0.16,1,0.3,1) 0.3s",
      }}
    />
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "var(--bg2)",
        padding: "clamp(60px,10vw,100px) 20px",
      }}
    >
      {/* Inline style for .sm-flex — show dot column on ≥ 640px */}
      <style>{`
        @media (min-width: 640px) {
          .sm-flex { display: flex !important; }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{ textAlign: "center", marginBottom: "clamp(36px,7vw,64px)" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            <Briefcase size={12} /> Experience
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(26px,6vw,52px)",
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Professional <span className="grad-text">Journey</span>
          </h2>
          <div className="section-line" style={{ margin: "18px auto 0" }} />
        </div>

        {/* Timeline wrapper */}
        <div style={{ position: "relative" }}>
          {/* Static track */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border)",
            }}
          />
          {/* Animated fill */}
          <TimelineLine />

          {/* Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(20px,4vw,28px)",
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
