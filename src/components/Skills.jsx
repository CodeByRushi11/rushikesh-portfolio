import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, BarChart3, GitBranch, Zap } from "lucide-react";

const CATS = [
  {Icon:BarChart3,label:"Analytics & BI",      color:"#00d4ff",skills:[{n:"Power BI",p:85},{n:"EDA & Analysis",p:90},{n:"KPI Reporting",p:88},{n:"Excel Dashboards",p:82}]},
  {Icon:Database, label:"Data & Languages",     color:"#7b2ff7",skills:[{n:"Python",p:80},{n:"SQL",p:85},{n:"Pandas / NumPy",p:82},{n:"Matplotlib / Seaborn",p:78}]},
  {Icon:Code2,    label:"Business Skills",      color:"#06b6d4",skills:[{n:"Sales Analysis",p:88},{n:"Customer Segmentation",p:80},{n:"Inventory Optimization",p:75},{n:"Data Cleaning",p:92}]},
  {Icon:GitBranch,label:"Technical Stack",      color:"#ff6b35",skills:[{n:"React",p:78},{n:"Tailwind CSS",p:82},{n:"Git & GitHub",p:80},{n:"Vite",p:74}]},
];
const TOOLS = [
  {l:"Python",e:"🐍"},{l:"Power BI",e:"📊"},{l:"SQL",e:"🗄️"},
  {l:"Excel",e:"📈"},{l:"Pandas",e:"🐼"},{l:"React",e:"⚛️"},
  {l:"Git",e:"🔀"},{l:"NumPy",e:"🔢"},
];

function Ring({pct,color,size=36}) {
  const ref = useRef(null);
  const inView = useInView(ref,{once:false,margin:"-10px"});
  const r=(size-4)/2, c=2*Math.PI*r, off=c-(pct/100)*c;
  return (
    <svg ref={ref} width={size} height={size} style={{flexShrink:0}}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--border)" strokeWidth="2.5"/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="2.5"
        strokeDasharray={c} strokeDashoffset={inView?off:c} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{transition:"stroke-dashoffset 1.3s cubic-bezier(.16,1,.3,1) .15s"}}/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={color} fontSize="9" fontFamily="var(--font-mono)" fontWeight="700">{pct}</text>
    </svg>
  );
}

function SkillCard({Icon,label,skills,color,index}) {
  return (
    <motion.div
      initial={{opacity:0,y:36,scale:.95}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:false,margin:"-30px"}}
      transition={{delay:index*.09,type:"spring",stiffness:280,damping:24}}
      whileHover={{rotateX:3,rotateY:-4,scale:1.02}}
      className="glass" style={{borderRadius:"clamp(12px,2.5vw,17px)",padding:"clamp(16px,3vw,24px)",transformStyle:"preserve-3d",position:"relative",overflow:"hidden"}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"50"}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--card-border)"}}>
      <div style={{position:"absolute",top:-18,right:-18,width:72,height:72,borderRadius:"50%",border:`1px dashed ${color}28`,animation:"spin 14s linear infinite",pointerEvents:"none"}}/>
      <div style={{display:"flex",alignItems:"center",gap:11,marginBottom:"clamp(14px,2.5vw,18px)"}}>
        <motion.div whileHover={{rotate:14,scale:1.16}} transition={{type:"spring",stiffness:400}}
          style={{width:38,height:38,borderRadius:10,background:`${color}16`,border:`1px solid ${color}38`,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Icon size={16} style={{color}}/>
        </motion.div>
        <h3 style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(12px,2.2vw,14px)",color:"var(--text)",letterSpacing:"-0.02em",margin:0}}>{label}</h3>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"clamp(9px,1.8vw,13px)"}}>
        {skills.map(({n,p})=>(
          <div key={n}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
              <span style={{fontFamily:"var(--font-body)",fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text2)"}}>{n}</span>
              <Ring pct={p} color={color} size={34}/>
            </div>
            <div style={{height:2.5,borderRadius:2,background:"var(--surface-h)",overflow:"hidden"}}>
              <div className="bar-fill" style={{height:"100%",borderRadius:2,background:`linear-gradient(90deg,${color},${color}80)`,width:`${p}%`,boxShadow:`0 0 5px ${color}44`}}/>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{background:"var(--bg)",padding:"clamp(60px,9vw,100px) 20px"}}>
      <div style={{maxWidth:1160,margin:"0 auto"}}>
        <motion.div style={{textAlign:"center",marginBottom:"clamp(32px,6vw,52px)"}}
          initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-50px"}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
          <div className="sec-eyebrow"><Zap size={11}/> Skills & Expertise</div>
          <h2 className="sec-title">What I bring to <span className="grad-text">the table</span></h2>
          <p className="sec-sub">A well-rounded toolkit combining data analysis, business intelligence, and web development.</p>
          <div className="section-line"/>
        </motion.div>

        {/* Tool chips */}
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"clamp(7px,1.8vw,11px)",marginBottom:"clamp(32px,6vw,52px)"}}>
          {TOOLS.map(({l,e},i)=>(
            <motion.div key={l}
              initial={{opacity:0,scale:0,rotate:-10}} whileInView={{opacity:1,scale:1,rotate:0}} viewport={{once:false}}
              transition={{delay:i*.055,type:"spring",stiffness:400,damping:22}}
              className="chip">
              <span className="chip-emoji" style={{fontSize:"clamp(13px,2.5vw,18px)"}}>{e}</span>
              <span className="chip-label">{l}</span>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,250px),1fr))",gap:"clamp(14px,2.5vw,22px)"}}>
          {CATS.map((c,i)=><SkillCard key={c.label} {...c} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
