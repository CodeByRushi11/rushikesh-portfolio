import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Database, TrendingUp, MapPin, Sparkles } from "lucide-react";

const TICKER = ["Python","Power BI","SQL","Pandas","NumPy","Matplotlib","Seaborn","Excel","DAX","Data Cleaning","EDA","KPI Reporting","Dashboards","Business Intelligence","React","Python","Power BI","SQL","Pandas","NumPy","Matplotlib","Seaborn","Excel","DAX","Data Cleaning"];
const HIGHLIGHTS = [
  {Icon:Database,   label:"Data Analytics",       color:"#00d4ff"},
  {Icon:TrendingUp, label:"Business Intelligence", color:"#7b2ff7"},
  {Icon:Brain,      label:"AI & Modeling",         color:"#ff6b35"},
  {Icon:MapPin,     label:"Nagpur, India",         color:"#22c55e"},
];
const COMPETENCIES = [
  "End-to-End Data Cleaning & EDA",
  "Advanced SQL Querying & KPI Reporting",
  "Interactive Dashboard Development",
  "Data Visualization & Insight Communication",
  "Analytical Thinking & Business Problem Solving",
];
const MINI_STATS = [
  {n:10, s:"+", label:"Projects"},
  {n:85, s:"%", label:"BCA Score"},
  {n:3,  s:"+", label:"Companies"},
  {n:20, s:"+", label:"Reports"},
];

function Counter({end, suffix=""}) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {once:false, margin:"-30px"});
  useEffect(() => {
    if (!inView) { setV(0); return; }
    const dur=1400, step=16, inc=end/(dur/step);
    let cur=0;
    const tick = () => { cur=Math.min(cur+inc,end); setV(Math.round(cur)); if(cur<end) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, [inView, end]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function FloatDot({style,anim,delay}) {
  return <div style={{position:"absolute",borderRadius:"50%",opacity:.3,animation:`${anim} ${8}s ease-in-out infinite`,animationDelay:delay,pointerEvents:"none",zIndex:0,boxShadow:`0 0 8px currentColor`,...style}}/>;
}

export default function About() {
  return (
    <section id="about" style={{background:"var(--bg2)",padding:"clamp(60px,9vw,100px) 20px 0",position:"relative",overflow:"hidden"}}>
      {/* Decorative bg dots */}
      <FloatDot style={{width:8,height:8,top:"14%",left:"6%",color:"var(--accent)",background:"var(--accent)"}} anim="drift1" delay="0s"/>
      <FloatDot style={{width:6,height:6,top:"72%",left:"4%",color:"var(--accent2)",background:"var(--accent2)"}} anim="drift2" delay="-2s"/>
      <FloatDot style={{width:9,height:9,top:"30%",right:"5%",color:"var(--accent3)",background:"var(--accent3)"}} anim="drift3" delay="-1s"/>
      <FloatDot style={{width:5,height:5,top:"82%",right:"8%",color:"var(--accent)",background:"var(--accent)"}} anim="drift1" delay="-3s"/>

      {/* Ticker */}
      <div style={{background:"var(--bg3)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)",padding:"9px 0",marginBottom:"clamp(36px,7vw,60px)",overflow:"hidden"}}>
        <div className="ticker-wrap"><div className="ticker-inner">
          {TICKER.map((t,i)=>(
            <span key={i} style={{display:"inline-flex",alignItems:"center",gap:10,padding:"0 16px",fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.8vw,11px)",letterSpacing:"0.08em",textTransform:"uppercase",color:i%3===0?"var(--accent)":"var(--text3)"}}>
              <span style={{opacity:.35}}>◆</span>{t}
            </span>
          ))}
        </div></div>
      </div>

      <div style={{maxWidth:1160,margin:"0 auto",paddingBottom:"clamp(60px,9vw,100px)",position:"relative",zIndex:1}}>

        {/* Header */}
        <motion.div style={{textAlign:"center",marginBottom:"clamp(32px,6vw,52px)"}}
          initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-50px"}}
          transition={{duration:.65,ease:[.16,1,.3,1]}}>
          <div className="sec-eyebrow"><Sparkles size={11}/> About Me</div>
          <h2 className="sec-title">Analyst by training,</h2>
          <h2 className="anim-shimmer-text" style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(24px,5.5vw,50px)",letterSpacing:"-0.04em",lineHeight:1.1}}>
            strategist by nature
          </h2>
          <div className="section-line"/>
        </motion.div>

        {/* Mini stats */}
        <motion.div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"clamp(8px,2vw,14px)",marginBottom:"clamp(32px,6vw,52px)"}}
          initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-30px"}} transition={{duration:.6}}>
          {MINI_STATS.map(({n,s,label},i)=>(
            <motion.div key={label}
              initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:false}}
              transition={{delay:i*.09,type:"spring",stiffness:320,damping:24}}
              whileHover={{y:-5,scale:1.05}}
              className="glass stat-card corner-box"
              style={{padding:"clamp(10px,2vw,16px) clamp(16px,3vw,24px)",borderRadius:12,textAlign:"center",minWidth:80}}>
              <div className="grad-text" style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(22px,4vw,34px)",letterSpacing:"-0.04em"}}>
                <Counter end={n} suffix={s}/>
              </div>
              <div style={{fontFamily:"var(--font-mono)",fontSize:"clamp(8px,1.6vw,10px)",letterSpacing:"0.1em",color:"var(--text3)",textTransform:"uppercase",marginTop:3}}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"clamp(22px,4vw,38px)",alignItems:"start"}}>

          {/* Left */}
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,margin:"-40px"}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
            {[
              <><strong style={{color:"var(--accent)"}}>AI & Business Intelligence Analyst</strong> based in <strong>Nagpur, India</strong>. I specialize in transforming data into actionable business insights that drive strategic decision-making.</>,
              "My expertise spans data cleaning, EDA, SQL-based reporting, and interactive dashboard development using Python, Power BI, and Excel.",
              "Currently deepening capabilities in AI and analytics at The Eduspark MIDC SDC, bridging raw data to real-world business strategy.",
            ].map((txt,i)=>(
              <motion.p key={i} initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{delay:i*.12,duration:.55}}
                style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(13px,2vw,15px)",lineHeight:1.8,color:"var(--text2)",marginBottom:14}}>
                {i===0?<>I am an aspiring {txt}</>:txt}
              </motion.p>
            ))}

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:10}}>
              {HIGHLIGHTS.map(({Icon,label,color},i)=>(
                <motion.div key={label}
                  initial={{opacity:0,scale:.85}} whileInView={{opacity:1,scale:1}} viewport={{once:false}}
                  transition={{delay:.25+i*.07,type:"spring",stiffness:340,damping:24}}
                  className="glass hi-card corner-box"
                  style={{padding:"clamp(9px,1.8vw,13px)",borderRadius:12,display:"flex",alignItems:"center",gap:9}}>
                  <div className="hi-icon" style={{width:32,height:32,borderRadius:8,background:`${color}18`,border:`1px solid ${color}30`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background .25s,border-color .25s"}}>
                    <Icon size={14} style={{color,transition:"color .25s"}}/>
                  </div>
                  <span style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text)"}}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:false,margin:"-40px"}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
            <motion.div className="glass anim-float-3d"
              style={{borderRadius:18,padding:"clamp(20px,3.5vw,32px)",position:"relative",overflow:"hidden"}}
              whileHover={{scale:1.012}} transition={{type:"spring",stiffness:260,damping:24}}>
              <div style={{position:"absolute",top:-28,right:-28,width:120,height:120,background:"radial-gradient(circle,rgba(0,212,255,.07),transparent 70%)",pointerEvents:"none"}}/>
              <div style={{position:"absolute",bottom:-18,left:-18,width:90,height:90,background:"radial-gradient(circle,rgba(123,47,247,.06),transparent 70%)",pointerEvents:"none"}}/>
              <h3 style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(14px,2.8vw,17px)",color:"var(--text)",marginBottom:18,display:"flex",alignItems:"center",gap:9}}>
                <span style={{width:3,height:20,background:"var(--grad-main)",borderRadius:2,display:"inline-block"}}/>Core Competencies
              </h3>
              <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:9}}>
                {COMPETENCIES.map((item,i)=>(
                  <motion.li key={i} whileHover={{x:5}} transition={{type:"spring",stiffness:420,damping:26}}
                    style={{display:"flex",alignItems:"flex-start",gap:11,padding:"9px 12px",borderRadius:9,background:"var(--surface)",border:"1px solid var(--border)",cursor:"default",transition:"background .2s,border-color .2s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--card-border-h)";e.currentTarget.style.background="var(--surface-h)"}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.background="var(--surface)"}}>
                    <span style={{width:20,height:20,borderRadius:5,flexShrink:0,background:"var(--grad-main)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#fff",fontFamily:"var(--font-mono)"}}>{String(i+1).padStart(2,"0")}</span>
                    <span style={{fontFamily:"var(--font-body)",fontSize:"clamp(12px,1.8vw,13px)",color:"var(--text2)",lineHeight:1.55}}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
