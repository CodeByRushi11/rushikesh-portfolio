import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, BarChart2, Globe, Terminal, ChevronRight } from "lucide-react";
import { addRipple } from "../hooks/useRipple";

const analytics=[
  {title:"Chocolate Sales Analysis",subtitle:"Power BI Dashboard",desc:"Interactive Power BI dashboard tracking revenue, profit, trends and performance across products, customers and regions.",github:"https://github.com/CodeByRushi11/Chocolate-Sales-Analysis-Power-BI-Dashboard",tech:["Power BI","DAX","Power Query","Data Modeling"],feat:true},
  {title:"Credit Card Financial Analytics",subtitle:"BI Dashboard",desc:"Power BI dashboard analyzing credit card transactions and customer demographics to uncover revenue trends and business insights.",github:"https://github.com/CodeByRushi11/credit-card-financial-analytics-dashboard",tech:["Power BI","DAX","Power Query"],feat:true},
  {title:"Superstore Sales Analysis",subtitle:"Python / EDA",desc:"Comprehensive sales and profitability analysis using Python to identify regional performance and revenue optimization opportunities.",github:"https://github.com/CodeByRushi11/superstore-data-analysis",tech:["Python","Pandas","NumPy","Matplotlib"]},
  {title:"Grocery Inventory Analytics",subtitle:"SQL + Python",desc:"Inventory and KPI analysis using SQL and Python to evaluate stock movement, demand patterns and optimization strategies.",github:"https://github.com/CodeByRushi11/grocery-inventory-analysis",tech:["Python","SQL","Pandas"]},
  {title:"Diwali Sales Analysis",subtitle:"Python / EDA",desc:"Festive retail EDA uncovering customer segmentation insights, purchasing behavior and regional revenue distribution.",github:"https://github.com/CodeByRushi11/Diwali-Sales-Analysis",tech:["Python","Pandas","Matplotlib","Seaborn"]},
  {title:"Vrinda Store Excel Analysis",subtitle:"Excel Dashboard",desc:"Retail sales performance dashboard using Excel Pivot Tables and Charts to track KPIs and category-level metrics.",github:"https://github.com/CodeByRushi11/Vrinda-Store-Excel-Data-Analysis",tech:["Excel","Pivot Tables","Dashboard"]},
];
const web=[
  {title:"Todo Master",subtitle:"React App",desc:"Responsive task management app with dynamic status indicators, state management, and persistent local storage.",github:"https://github.com/CodeByRushi11/Todo-master-with-Deepseek-Ai.git",live:"https://todoappusingdeepseekai.netlify.app/",tech:["React","Tailwind CSS","JavaScript"],feat:true},
  {title:"Single Vendor Task App",subtitle:"React + Routing",desc:"Authentication-based React app with secure login flow, dashboard routing and structured navigation architecture.",github:"https://github.com/CodeByRushi11/Single-vender-task1",live:"https://single-vender-task1.netlify.app/",tech:["React","Vite","Routing"]},
  {title:"Portfolio Website",subtitle:"React + Framer Motion",desc:"This portfolio — React, Vite, Framer Motion, 3D animations, dark/light theme, fully mobile responsive.",github:"https://github.com/CodeByRushi11",tech:["React","Framer Motion","Tailwind CSS"],feat:true},
];
const other=[
  {title:"Simple & Scientific Calculator",subtitle:"Python GUI",desc:"Python-based GUI calculator supporting arithmetic and scientific operations (sin, cos, log, sqrt, factorial) using Tkinter.",github:"https://github.com/CodeByRushi11/Simple-Scientific-Calculator.git",tech:["Python","Tkinter","Math Module"]},
];
const TABS=[{id:"analytics",label:"Data Analytics",Icon:BarChart2,data:analytics},{id:"web",label:"Web Dev",Icon:Globe,data:web},{id:"other",label:"Other",Icon:Terminal,data:other}];

function Card({p}) {
  const [h,setH]=useState(false);
  return (
    <motion.div whileHover={{rotateX:3,rotateY:-3,scale:1.015}} transition={{type:"spring",stiffness:280,damping:22}} style={{transformStyle:"preserve-3d",height:"100%"}}>
      <div className="glass corner-box" style={{borderRadius:18,padding:"clamp(16px,3.5vw,24px)",display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",position:"relative",overflow:"hidden",transition:"border-color .3s",cursor:"default"}}
        onMouseEnter={e=>{setH(true);e.currentTarget.style.borderColor="var(--card-border-h)"}}
        onMouseLeave={e=>{setH(false);e.currentTarget.style.borderColor="var(--card-border)"}}>
        {p.feat&&<div style={{position:"absolute",top:12,right:12,padding:"3px 9px",borderRadius:100,background:"var(--tag-bg)",border:"1px solid var(--tag-border)",fontFamily:"var(--font-mono)",fontSize:9,color:"var(--tag-text)",letterSpacing:"0.1em",zIndex:1}}>Featured</div>}
        <div style={{position:"absolute",top:-40,left:-40,width:110,height:110,background:`radial-gradient(circle,rgba(0,212,255,${h?.1:.03}) 0%,transparent 70%)`,transition:"all .4s",pointerEvents:"none"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,flexShrink:0,paddingRight:p.feat?50:0}}>
          <div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:"0.1em",color:"var(--accent)",textTransform:"uppercase",marginBottom:3}}>{p.subtitle}</div>
            <h3 style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(13px,2.5vw,16px)",color:"var(--text)",letterSpacing:"-0.02em",lineHeight:1.3,margin:0,transition:"color .25s"}}
              onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--text)"}>{p.title}</h3>
          </div>
          <Folder size={16} style={{color:h?"var(--accent)":"var(--text3)",flexShrink:0,marginLeft:8,marginTop:2,transition:"all .3s",transform:h?"rotate(6deg) scale(1.1)":"none"}}/>
        </div>
        <p style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(11px,2vw,13px)",lineHeight:1.7,color:"var(--text2)",marginBottom:14,flex:1,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical"}}>{p.desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:14,flexShrink:0}}>
          {p.tech.map(t=>(
            <span key={t} style={{padding:"3px 9px",borderRadius:100,background:"var(--tag-bg)",border:"1px solid var(--tag-border)",fontFamily:"var(--font-mono)",fontSize:"clamp(8px,1.8vw,10px)",color:"var(--tag-text)",whiteSpace:"nowrap",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--accent)";e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="#fff"}}
              onMouseLeave={e=>{e.currentTarget.style.background="var(--tag-bg)";e.currentTarget.style.borderColor="var(--tag-border)";e.currentTarget.style.color="var(--tag-text)"}}>
              {t}
            </span>
          ))}
        </div>
        <div style={{display:"flex",gap:14,paddingTop:12,borderTop:"1px solid var(--border)",flexShrink:0,marginTop:"auto"}}>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-line"
            style={{display:"inline-flex",alignItems:"center",gap:5,fontFamily:"var(--font-mono)",fontSize:"clamp(9px,2vw,11px)",color:"var(--text2)",textDecoration:"none",transition:"color .2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--text2)"}>
            <Github size={12}/> GitHub
          </a>
          {p.live&&<a href={p.live} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:5,fontFamily:"var(--font-mono)",fontSize:"clamp(9px,2vw,11px)",color:"var(--accent)",textDecoration:"none",transition:"all .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.color="var(--accent2)";e.currentTarget.style.gap="8px"}} onMouseLeave={e=>{e.currentTarget.style.color="var(--accent)";e.currentTarget.style.gap="5px"}}>
            <ExternalLink size={12}/> Live
          </a>}
        </div>
      </div>
    </motion.div>
  );
}

function Grid({tabKey,projects}) {
  const ref=useRef(null);
  useEffect(()=>{
    const g=ref.current; if(!g) return;
    const ws=Array.from(g.querySelectorAll(".pcw"));
    ws.forEach(el=>{el.style.transition="none";el.style.opacity="0";el.style.transform="translateY(22px)";});
    void g.offsetHeight;
    const ts=ws.map((el,i)=>setTimeout(()=>{el.style.transition="opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1)";el.style.opacity="1";el.style.transform="none";},i*70));
    return()=>ts.forEach(clearTimeout);
  },[tabKey]);
  return (
    <div ref={ref} style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,290px),1fr))",gap:"clamp(14px,3vw,22px)",alignItems:"stretch"}}>
      {projects.map((p,i)=><div key={`${tabKey}-${i}`} className="pcw" style={{opacity:0,height:"100%"}}><Card p={p}/></div>)}
    </div>
  );
}

export default function Projects() {
  const [active,setActive]=useState("analytics");
  const cur=TABS.find(t=>t.id===active);
  const total=analytics.length+web.length+other.length;
  return (
    <section id="projects" style={{background:"var(--bg2)",padding:"clamp(60px,10vw,100px) 20px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"clamp(36px,7vw,52px)"}} data-reveal="up">
          <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.15em",color:"var(--accent)",textTransform:"uppercase"}}><Folder size={12}/> Projects</div>
          <h2 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(26px,6vw,52px)",letterSpacing:"-0.04em",color:"var(--text)",lineHeight:1.1,margin:"0 0 10px"}}>Work that <span className="grad-text">speaks</span></h2>
          <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:100,background:"var(--tag-bg)",border:"1px solid var(--tag-border)",fontFamily:"var(--font-mono)",fontSize:11,color:"var(--tag-text)"}}>✦ {total} total projects</div>
          <div className="section-line" style={{margin:"16px auto 0"}}/>
        </div>
        <div data-reveal="up" style={{display:"flex",justifyContent:"center",gap:8,marginBottom:"clamp(28px,5vw,40px)",flexWrap:"wrap"}}>
          {TABS.map(({id,label,Icon,data})=>(
            <motion.button key={id} whileHover={{scale:1.04}} whileTap={{scale:.97}}
              onClick={e=>{setActive(id);addRipple(e,"rgba(0,212,255,0.1)");}}
              className="btn btn-clip corner-box"
              style={{display:"inline-flex",alignItems:"center",gap:8,padding:"clamp(8px,2vw,10px) clamp(16px,3vw,22px)",background:active===id?"var(--grad-main)":"var(--surface)",backgroundSize:"200%",border:`1px solid ${active===id?"transparent":"var(--border)"}`,color:active===id?"#fff":"var(--text2)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(11px,2vw,13px)",cursor:"pointer",boxShadow:active===id?"0 4px 20px var(--accent-glow)":"none",transition:"all .3s"}}>
              <Icon size={13}/>{label}
              <span style={{background:active===id?"rgba(255,255,255,0.2)":"var(--surface-h)",borderRadius:100,padding:"1px 7px",fontFamily:"var(--font-mono)",fontSize:10}}>{data.length}</span>
            </motion.button>
          ))}
        </div>
        <Grid tabKey={active} projects={cur.data}/>
        <div style={{textAlign:"center",marginTop:"clamp(32px,5vw,48px)"}} data-reveal="up">
          <a href="https://github.com/CodeByRushi11" target="_blank" rel="noopener noreferrer"
            className="btn btn-clip glow-border corner-box" onClick={e=>addRipple(e,"rgba(0,212,255,0.1)")}
            style={{display:"inline-flex",alignItems:"center",gap:10,padding:"clamp(11px,2.5vw,14px) clamp(20px,4vw,32px)",background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(12px,2vw,14px)",textDecoration:"none"}}>
            <Github size={16}/> View All {total}+ Projects on GitHub <ChevronRight size={15} style={{color:"var(--accent)"}}/>
          </a>
        </div>
      </div>
    </section>
  );
}
