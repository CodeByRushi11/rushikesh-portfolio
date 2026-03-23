import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, Award, Trophy } from "lucide-react";

const EDU = [
  {deg:"Bachelor of Computer Application (BCA)",school:"Santaji Mahavidyalaya, Nagpur",year:"2021–2024",pct:"85%",color:"#00d4ff",tag:"Graduate",badge:"7th Rank — RTMNU",desc:"Strong foundation in programming, database management, data structures, and analytical problem-solving — basis for advanced analytics and BI work.",wm:"BCA",icon:"🎓"},
  {deg:"HSC — 12th Grade",school:"Balaji Junior College, Nagpur",year:"2020",pct:"62%",color:"#a78bfa",tag:"Completed",desc:"Higher secondary education with focus on science and mathematics, building analytical and logical reasoning skills.",wm:"HSC",icon:"📘"},
  {deg:"SSC — 10th Grade",school:"Yashwant High School, Nagpur",year:"2018",pct:"85%",color:"#7b2ff7",tag:"Completed",desc:"Strong academic performance in secondary education with consistent dedication across core subjects including mathematics and science.",wm:"SSC",icon:"🏫"},
];

function EduCard({edu,i}) {
  const ref = useRef(null);
  const inView = useInView(ref,{once:false,margin:"-30px"});
  return (
    <motion.div ref={ref} style={{display:"flex",gap:"clamp(10px,3.5vw,24px)",alignItems:"flex-start"}}
      initial={{opacity:0,x:-36}} animate={inView?{opacity:1,x:0}:{}}
      transition={{delay:i*.13,duration:.6,ease:[.16,1,.3,1]}}>
      <div className="edu-dot">
        <motion.div initial={{scale:0}} animate={inView?{scale:1}:{}} transition={{delay:i*.13+.2,type:"spring",stiffness:400}}
          style={{width:12,height:12,borderRadius:"50%",background:edu.color,boxShadow:`0 0 12px ${edu.color}`,border:"2px solid var(--bg)",position:"relative",zIndex:1,animation:i===0?"pulseGlow 2s ease infinite":"none"}}/>
      </div>
      <motion.div whileHover={{rotateX:2,rotateY:-2,scale:1.012}} transition={{type:"spring",stiffness:280,damping:24}}
        className="glass corner-box job-card" style={{flex:1,minWidth:0,padding:"clamp(14px,3.5vw,26px)",position:"relative",overflow:"hidden",transformStyle:"preserve-3d"}}
        onMouseEnter={e=>{e.currentTarget.style.borderColor=edu.color+"55"}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--card-border)"}}>
        {/* Wipe bar */}
        <motion.div initial={{scaleX:0}} animate={inView?{scaleX:1}:{}} transition={{delay:i*.13+.35,duration:.5,ease:[.16,1,.3,1]}}
          style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${edu.color},transparent)`,transformOrigin:"left",zIndex:2}}/>
        {/* Watermark */}
        <div style={{position:"absolute",top:-8,right:"clamp(6px,2.5vw,18px)",fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(40px,9vw,84px)",lineHeight:1,color:"var(--border)",userSelect:"none",letterSpacing:"-0.06em",pointerEvents:"none",opacity:.45}}>{edu.wm}</div>
        <div style={{position:"relative",zIndex:1,paddingTop:6}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:7,marginBottom:9}}>
            <div style={{flex:1,minWidth:140}}>
              <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:4}}>
                <motion.span whileHover={{rotate:14,scale:1.2}} style={{fontSize:"clamp(16px,3.5vw,22px)",lineHeight:1,display:"inline-block"}}>{edu.icon}</motion.span>
                <h3 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(12px,2.5vw,17px)",color:"var(--text)",letterSpacing:"-0.02em",lineHeight:1.25,margin:0}}>{edu.deg}</h3>
              </div>
              <p style={{fontFamily:"var(--font-body)",fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text2)",fontWeight:500,margin:0}}>{edu.school}</p>
            </div>
            <span style={{display:"inline-flex",alignItems:"center",gap:5,padding:"3px 9px",borderRadius:100,flexShrink:0,background:edu.tag==="Graduate"?`${edu.color}16`:"var(--surface)",border:`1px solid ${edu.tag==="Graduate"?edu.color+"45":"var(--border)"}`,fontFamily:"var(--font-mono)",fontSize:9,color:edu.tag==="Graduate"?edu.color:"var(--text3)",letterSpacing:"0.1em",textTransform:"uppercase"}}>
              {edu.tag==="Graduate"&&<span style={{width:5,height:5,borderRadius:"50%",background:edu.color,animation:"pulse 1.5s ease infinite",display:"inline-block"}}/>}{edu.tag}
            </span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"clamp(7px,2vw,12px)",marginBottom:"clamp(9px,2vw,14px)"}}>
            <span style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.8vw,11px)",color:"var(--text3)"}}><Calendar size={10}/>{edu.year}</span>
            <motion.span whileHover={{scale:1.06}} style={{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 9px",borderRadius:100,background:`${edu.color}13`,border:`1px solid ${edu.color}38`,fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.8vw,11px)",color:edu.color,fontWeight:600}}>
              <Award size={9}/>{edu.pct}
            </motion.span>
            {edu.badge&&<span style={{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 9px",borderRadius:100,background:"rgba(251,191,36,.09)",border:"1px solid rgba(251,191,36,.30)",fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.8vw,11px)",color:"#fbbf24"}}><Trophy size={9}/>{edu.badge}</span>}
          </div>
          <p style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(11px,1.8vw,13px)",lineHeight:1.7,color:"var(--text2)",margin:0,borderLeft:`2px solid ${edu.color}55`,paddingLeft:"clamp(9px,1.8vw,14px)"}}>{edu.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SvgLine() {
  const ref = useRef(null);
  const inView = useInView(ref,{once:false});
  return (
    <div ref={ref} style={{position:"absolute",left:19,top:0,bottom:0,width:2,overflow:"visible"}}>
      <svg style={{position:"absolute",left:-0.5,top:0,width:2,height:"100%",overflow:"visible"}}>
        <defs><linearGradient id="eGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00d4ff"/><stop offset="50%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#7b2ff7"/></linearGradient></defs>
        <line x1="1" y1="0" x2="1" y2="100%" stroke="url(#eGrad)" strokeWidth="2"
          strokeDasharray="1200" strokeDashoffset={inView?"0":"1200"}
          style={{transition:"stroke-dashoffset 2.2s cubic-bezier(.16,1,.3,1) .2s"}}/>
      </svg>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" style={{background:"var(--bg)",padding:"clamp(60px,9vw,100px) 20px"}}>
      <style>{`.edu-dot{width:40px;flex-shrink:0;display:none;justify-content:center;padding-top:26px;}@media(min-width:560px){.edu-dot{display:flex;}}.edu-track{display:none;}@media(min-width:560px){.edu-track{display:block;}}`}</style>
      <div style={{maxWidth:880,margin:"0 auto"}}>
        <motion.div style={{textAlign:"center",marginBottom:"clamp(32px,6vw,52px)"}}
          initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-50px"}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
          <div className="sec-eyebrow"><GraduationCap size={11}/> Education</div>
          <h2 className="sec-title">Academic <span className="grad-text">Foundation</span></h2>
          <p className="sec-sub">A strong academic background combining theoretical knowledge with practical skills.</p>
          <div className="section-line"/>
        </motion.div>

        {/* Summary badges */}
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:9,marginBottom:"clamp(26px,5vw,44px)"}}>
          {[{l:"BCA Graduate",v:"85%",c:"#00d4ff"},{l:"12th Grade",v:"62%",c:"#a78bfa"},{l:"10th Grade",v:"85%",c:"#7b2ff7"}].map(({l,v,c},i)=>(
            <motion.div key={l}
              initial={{opacity:0,scale:.78}} whileInView={{opacity:1,scale:1}} viewport={{once:false}}
              transition={{delay:i*.1,type:"spring",stiffness:340,damping:22}}
              whileHover={{y:-4,scale:1.05}}
              style={{display:"flex",alignItems:"center",gap:9,padding:"9px 18px",borderRadius:11,background:`${c}0e`,border:`1px solid ${c}30`,cursor:"default"}}>
              <span style={{fontFamily:"var(--font-body)",fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text2)"}}>{l}</span>
              <span style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(15px,3vw,21px)",color:c,letterSpacing:"-0.03em"}}>{v}</span>
            </motion.div>
          ))}
        </div>

        <div style={{position:"relative"}}>
          <div className="edu-track" style={{position:"absolute",left:19,top:0,bottom:0,width:2,background:"var(--border)"}}/>
          <div className="edu-track"><SvgLine/></div>
          <div style={{display:"flex",flexDirection:"column",gap:"clamp(16px,3.5vw,24px)"}}>
            {EDU.map((edu,i)=><EduCard key={i} edu={edu} i={i}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}
