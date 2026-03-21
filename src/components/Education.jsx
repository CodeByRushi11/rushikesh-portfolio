import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Trophy } from "lucide-react";

const education = [
  {
    degree:"Bachelor of Computer Application (BCA)", school:"Santaji Mahavidyalaya, Nagpur",
    year:"2021 – 2024", pct:"85%", color:"#00d4ff", tag:"Graduate",
    highlight:"7th Rank — RTMNU",
    desc:"Built a strong foundation in programming, database management, data structures, and analytical problem-solving — forming the basis for advanced work in analytics and BI.",
    watermark:"BCA", icon:"🎓",
  },
  {
    degree:"HSC — 12th Grade", school:"Balaji Junior College, Nagpur",
    year:"2020", pct:"62%", color:"#a78bfa", tag:"Completed",
    desc:"Completed higher secondary education with focus on science and mathematics, building analytical and logical reasoning skills that underpin data-driven thinking.",
    watermark:"HSC", icon:"📘",
  },
  {
    degree:"SSC — 10th Grade", school:"Yashwant High School, Nagpur",
    year:"2018", pct:"85%", color:"#7b2ff7", tag:"Completed",
    desc:"Achieved strong academic performance with consistent dedication across core subjects including mathematics and science.",
    watermark:"SSC", icon:"🏫",
  },
];

function EduCard({ edu, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity = "0"; el.style.transform = "translateY(28px)"; el.style.transition = "none";
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1)";
          el.style.opacity = "1"; el.style.transform = "none";
        }, index * 120);
        io.disconnect();
      }
    }, { threshold:.04, rootMargin:"0px 0px -20px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <div ref={ref} style={{ display:"flex", gap:"clamp(12px,4vw,28px)", alignItems:"flex-start" }}>
      {/* Timeline dot */}
      <div className="edu-dot">
        <div style={{ width:13, height:13, borderRadius:"50%", background:edu.color, boxShadow:`0 0 14px ${edu.color}`, border:"2px solid var(--bg)", position:"relative", zIndex:1, animation:index===0?"pulseGlow 2s ease infinite":"none" }}/>
      </div>

      {/* 3D card */}
      <motion.div
        whileHover={{ rotateX:2, rotateY:-3, scale:1.015 }}
        transition={{ type:"spring", stiffness:300, damping:24 }}
        className="glass corner-box"
        style={{ flex:1, minWidth:0, borderRadius:"clamp(14px,3vw,20px)", padding:"clamp(16px,4vw,28px)", position:"relative", overflow:"hidden", transformStyle:"preserve-3d" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = edu.color+"60"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; }}
      >
        {/* Watermark */}
        <div style={{ position:"absolute", top:-8, right:"clamp(8px,3vw,20px)", fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(44px,10vw,90px)", lineHeight:1, color:"var(--border)", userSelect:"none", letterSpacing:"-0.06em", pointerEvents:"none", opacity:.5 }}>
          {edu.watermark}
        </div>

        <div style={{ position:"relative", zIndex:1 }}>
          {/* Top row */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:10 }}>
            <div style={{ flex:1, minWidth:160 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                <span style={{ fontSize:"clamp(18px,4vw,24px)", lineHeight:1 }}>{edu.icon}</span>
                <h3 style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(13px,2.8vw,18px)", color:"var(--text)", letterSpacing:"-0.02em", lineHeight:1.2, margin:0 }}>
                  {edu.degree}
                </h3>
              </div>
              <p style={{ fontFamily:"var(--font-body)", fontSize:"clamp(11px,2vw,14px)", color:"var(--text2)", fontWeight:500, margin:0 }}>
                {edu.school}
              </p>
            </div>
            <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:100, flexShrink:0, background:edu.tag==="Graduate"?`${edu.color}18`:"var(--surface)", border:`1px solid ${edu.tag==="Graduate"?edu.color+"50":"var(--border)"}`, fontFamily:"var(--font-mono)", fontSize:9, color:edu.tag==="Graduate"?edu.color:"var(--text3)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
              {edu.tag==="Graduate" && <span style={{ width:5, height:5, borderRadius:"50%", background:edu.color, animation:"pulse 1.5s ease infinite", display:"inline-block" }}/>}
              {edu.tag}
            </span>
          </div>

          {/* Meta */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"clamp(8px,2vw,14px)", marginBottom:"clamp(10px,2.5vw,16px)" }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:5, fontFamily:"var(--font-mono)", fontSize:"clamp(9px,2vw,11px)", color:"var(--text3)" }}>
              <Calendar size={11}/>{edu.year}
            </span>
            <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"3px 10px", borderRadius:100, background:`${edu.color}15`, border:`1px solid ${edu.color}40`, fontFamily:"var(--font-mono)", fontSize:"clamp(9px,2vw,11px)", color:edu.color, fontWeight:600 }}>
              <Award size={10}/>{edu.pct}
            </span>
            {edu.highlight && (
              <span style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"3px 10px", borderRadius:100, background:"rgba(250,204,21,0.1)", border:"1px solid rgba(250,204,21,0.35)", fontFamily:"var(--font-mono)", fontSize:"clamp(9px,2vw,11px)", color:"#fbbf24" }}>
                <Trophy size={10}/>{edu.highlight}
              </span>
            )}
          </div>

          {/* Desc */}
          <p style={{ fontFamily:"var(--font-body)", fontWeight:300, fontSize:"clamp(11px,2vw,13px)", lineHeight:1.75, color:"var(--text2)", margin:0, borderLeft:`2px solid ${edu.color}60`, paddingLeft:"clamp(10px,2vw,16px)" }}>
            {edu.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Education() {
  const lineRef = useRef(null);
  useEffect(() => {
    const el = lineRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.transform="scaleY(1)"; io.disconnect(); } }, { threshold:.05 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section id="education" style={{ background:"var(--bg)", padding:"clamp(60px,10vw,100px) 20px" }}>
      <style>{`
        .edu-dot  { width:42px;flex-shrink:0;display:none;justify-content:center;padding-top:28px; }
        @media(min-width:600px){ .edu-dot{display:flex;} }
        .edu-track,.edu-line{ display:none; }
        @media(min-width:600px){ .edu-track,.edu-line{display:block;} }
      `}</style>

      <div style={{ maxWidth:900, margin:"0 auto" }}>

        {/* ★ FULL SECTION HEADER — Education */}
        <div style={{ textAlign:"center", marginBottom:"clamp(36px,7vw,60px)" }} data-reveal="up">
          <div className="sec-eyebrow"><GraduationCap size={12}/> Education</div>
          <h2 className="sec-title">Academic <span className="grad-text">Foundation</span></h2>
          <p className="sec-sub">A strong academic background in computer science and technology, combining theoretical knowledge with practical skills.</p>
          <div className="section-line" style={{ margin:"18px auto 0" }}/>
        </div>

        {/* ★ Summary badges */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10, marginBottom:"clamp(28px,5vw,48px)" }} data-reveal="up">
          {[
            { l:"BCA Graduate", v:"85%", c:"#00d4ff" },
            { l:"12th Grade",   v:"62%", c:"#a78bfa" },
            { l:"10th Grade",   v:"85%", c:"#7b2ff7" },
          ].map(({ l, v, c }) => (
            <motion.div key={l}
              whileHover={{ y:-4, scale:1.05 }}
              transition={{ type:"spring", stiffness:400, damping:20 }}
              style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 20px", borderRadius:12, background:`${c}10`, border:`1px solid ${c}35`, cursor:"default" }}>
              <span style={{ fontFamily:"var(--font-body)", fontSize:"clamp(11px,2vw,13px)", color:"var(--text2)" }}>{l}</span>
              <span style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(16px,3vw,22px)", color:c, letterSpacing:"-0.03em" }}>{v}</span>
            </motion.div>
          ))}
        </div>

        {/* ★ Timeline */}
        <div style={{ position:"relative" }}>
          <div className="edu-track" style={{ position:"absolute", left:20, top:0, bottom:0, width:1, background:"var(--border)" }}/>
          <div className="edu-line" ref={lineRef} style={{ position:"absolute", left:20, top:0, width:1, height:"100%", background:"linear-gradient(to bottom,#00d4ff,#a78bfa,#7b2ff7)", transform:"scaleY(0)", transformOrigin:"top", transition:"transform 2s cubic-bezier(.16,1,.3,1) .3s" }}/>
          <div style={{ display:"flex", flexDirection:"column", gap:"clamp(18px,4vw,28px)" }}>
            {education.map((edu, i) => <EduCard key={i} edu={edu} index={i}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}
