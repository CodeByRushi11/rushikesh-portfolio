import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const JOBS = [
  {title:"AI & Business Intelligence Analysis Trainee",company:"The Eduspark MIDC SDC",type:"Trainee",location:"Nagpur · On-site",period:"Nov 2025 – Present · 5 mos",tag:"Current",color:"#00d4ff",
   pts:["Collected, cleaned, and transformed datasets using SQL and Excel.","Performed EDA using Python (Pandas, NumPy).","Built interactive dashboards using Power BI for business insights.","Created data models and visual reports for strategic decision-making.","Applied ML concepts for predictive analysis."],
   skills:["SQL","Python","Power BI","Excel","Data Analysis","Data Visualization"]},
  {title:"React Developer",company:"Talenterise Technokrate",type:"Internship",location:"Nagpur · Remote",period:"Apr 2025 – Jul 2025 · 4 mos",tag:"Completed",color:"#a78bfa",
   pts:["Built React web apps with clean, reusable component architecture.","Styled responsive UIs using Tailwind CSS.","Managed version control using Git and GitHub."],
   skills:["React.js","Tailwind CSS","Git","GitHub"]},
  {title:"Frontend Developer Trainee",company:"Esense IT, Nagpur",type:"Trainee",location:"Nagpur · On-site",period:"Jul 2024 – Jan 2025 · 7 mos",tag:"Completed",color:"#7b2ff7",
   pts:["Built responsive web interfaces using HTML, CSS, ReactJS.","Developed authentication pages and interactive UI components.","Contributed to CRM and WordPress projects with cross-device responsiveness."],
   skills:["HTML","CSS","JavaScript","React.js"]},
];

function JobCard({job,i}) {
  const ref = useRef(null);
  const inView = useInView(ref,{once:false,margin:"-30px"});
  const xFrom = i%2===0 ? -42 : 42;
  return (
    <motion.div ref={ref} style={{display:"flex",gap:"clamp(10px,3.5vw,24px)",alignItems:"flex-start"}}
      initial={{opacity:0,x:xFrom}} animate={inView?{opacity:1,x:0}:{}}
      transition={{delay:i*.12,duration:.6,ease:[.16,1,.3,1]}}>
      <div className="exp-dot">
        <motion.div initial={{scale:0}} animate={inView?{scale:1}:{}} transition={{delay:i*.12+.22,type:"spring",stiffness:400}}
          style={{width:12,height:12,borderRadius:"50%",background:job.color,boxShadow:`0 0 12px ${job.color}`,border:"2px solid var(--bg2)",position:"relative",zIndex:1,animation:i===0?"pulseGlow 2s ease infinite":"none"}}/>
      </div>
      <motion.div whileHover={{rotateX:2,rotateY:-2,scale:1.01}} transition={{type:"spring",stiffness:280,damping:24}}
        className="glass corner-box job-card" style={{flex:1,minWidth:0,padding:"clamp(14px,3.5vw,26px)",position:"relative",overflow:"hidden",transformStyle:"preserve-3d"}}
        onMouseEnter={e=>{e.currentTarget.style.borderColor=job.color+"55"}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--card-border)"}}>
        <motion.div initial={{scaleX:0}} animate={inView?{scaleX:1}:{}} transition={{delay:i*.12+.32,duration:.48,ease:[.16,1,.3,1]}}
          style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${job.color},transparent)`,transformOrigin:"left",zIndex:2}}/>
        <div style={{position:"relative",zIndex:1,paddingTop:6}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:7,marginBottom:7}}>
            <div style={{flex:1,minWidth:140}}>
              <h3 style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(12px,2.5vw,17px)",color:"var(--text)",letterSpacing:"-0.02em",marginBottom:3,lineHeight:1.3}}>{job.title}</h3>
              <p style={{fontFamily:"var(--font-body)",fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text2)",fontWeight:500,margin:0}}>{job.company}<span style={{color:"var(--text3)",fontWeight:300}}> · {job.type}</span></p>
            </div>
            <span style={{display:"inline-flex",alignItems:"center",gap:4,padding:"3px 9px",borderRadius:100,flexShrink:0,background:job.tag==="Current"?"rgba(0,212,255,.09)":"var(--surface)",border:`1px solid ${job.tag==="Current"?"var(--border-h)":"var(--border)"}`,fontFamily:"var(--font-mono)",fontSize:9,color:job.tag==="Current"?"var(--accent)":"var(--text3)",letterSpacing:"0.1em",textTransform:"uppercase"}}>
              {job.tag==="Current"&&<span style={{width:5,height:5,borderRadius:"50%",background:"var(--accent)",animation:"pulse 1.5s ease infinite",display:"inline-block"}}/>}{job.tag}
            </span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"clamp(7px,2vw,12px)",marginBottom:"clamp(9px,2.5vw,14px)"}}>
            <span style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.8vw,10px)",color:"var(--text3)"}}><Calendar size={10}/>{job.period}</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:4,fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.8vw,10px)",color:"var(--text3)"}}><MapPin size={10}/>{job.location}</span>
          </div>
          <ul style={{listStyle:"none",padding:0,margin:"0 0 clamp(9px,2.5vw,14px)",display:"flex",flexDirection:"column",gap:"clamp(4px,1.2vw,7px)"}}>
            {job.pts.map((pt,j)=>(
              <motion.li key={j} initial={{opacity:0,x:8}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:i*.12+.28+j*.055}}
                style={{display:"flex",gap:9,alignItems:"flex-start",fontFamily:"var(--font-body)",fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text2)",lineHeight:1.6}}>
                <span style={{marginTop:6,width:4,height:4,borderRadius:"50%",background:job.color,flexShrink:0,boxShadow:`0 0 4px ${job.color}`}}/>
                {pt}
              </motion.li>
            ))}
          </ul>
          <div style={{display:"flex",flexWrap:"wrap",gap:"clamp(4px,1.2vw,7px)",paddingTop:"clamp(9px,2vw,12px)",borderTop:"1px solid var(--border)"}}>
            {job.skills.map(s=>(
              <motion.span key={s} whileHover={{y:-3,scale:1.08}} whileTap={{scale:.93}} transition={{type:"spring",stiffness:500,damping:22}}
                style={{padding:"3px 9px",borderRadius:100,background:"var(--tag-bg)",border:"1px solid var(--tag-border)",fontFamily:"var(--font-mono)",fontSize:"clamp(8px,1.6vw,10px)",color:"var(--tag-text)",letterSpacing:"0.04em",cursor:"default",display:"inline-block"}}
                onMouseEnter={e=>{e.currentTarget.style.background=job.color+"15";e.currentTarget.style.borderColor=job.color+"50";e.currentTarget.style.color=job.color;}}
                onMouseLeave={e=>{e.currentTarget.style.background="var(--tag-bg)";e.currentTarget.style.borderColor="var(--tag-border)";e.currentTarget.style.color="var(--tag-text)";}}>
                {s}
              </motion.span>
            ))}
          </div>
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
        <defs><linearGradient id="xGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00d4ff"/><stop offset="50%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#7b2ff7"/></linearGradient></defs>
        <line x1="1" y1="0" x2="1" y2="100%" stroke="url(#xGrad)" strokeWidth="2"
          strokeDasharray="1200" strokeDashoffset={inView?"0":"1200"}
          style={{transition:"stroke-dashoffset 2.2s cubic-bezier(.16,1,.3,1) .2s"}}/>
      </svg>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{background:"var(--bg2)",padding:"clamp(60px,9vw,100px) 20px"}}>
      <style>{`.exp-dot{width:40px;flex-shrink:0;display:none;justify-content:center;padding-top:25px;}@media(min-width:560px){.exp-dot{display:flex;}}.exp-track{display:none;}@media(min-width:560px){.exp-track{display:block;}}`}</style>
      <div style={{maxWidth:880,margin:"0 auto"}}>
        <motion.div style={{textAlign:"center",marginBottom:"clamp(32px,6vw,52px)"}}
          initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-50px"}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
          <div className="sec-eyebrow"><Briefcase size={11}/> Experience</div>
          <h2 className="sec-title">Professional <span className="grad-text">Journey</span></h2>
          <p className="sec-sub">Real-world experience across analytics, web development, and frontend engineering.</p>
          <div className="section-line"/>
        </motion.div>
        <div style={{position:"relative"}}>
          <div className="exp-track" style={{position:"absolute",left:19,top:0,bottom:0,width:2,background:"var(--border)"}}/>
          <div className="exp-track"><SvgLine/></div>
          <div style={{display:"flex",flexDirection:"column",gap:"clamp(16px,3.5vw,24px)"}}>
            {JOBS.map((job,i)=><JobCard key={i} job={job} i={i}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}
