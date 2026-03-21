import { useState, useEffect, useRef } from "react";
import { Eye, ArrowDown, Download } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import ResumeModal from "./ResumeModal";
import RotatingTypewriter from "./RotatingTypewriter";
import { addRipple } from "../hooks/useRipple";

function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
    let mouse = { x:W/2, y:H/2 };
    const onR = () => { W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; };
    const onM = e => { mouse={x:e.clientX,y:e.clientY}; };
    window.addEventListener("resize",onR); window.addEventListener("mousemove",onM,{passive:true});
    const N = Math.min(50,Math.floor(W*H/20000));
    const pts = Array.from({length:N},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.4+.4,a:Math.random()*.45+.2}));
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      for (let i=0;i<pts.length;i++) {
        const p=pts[i];
        const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){p.vx+=(dx/d)*.3;p.vy+=(dy/d)*.3;}
        p.vx*=.99;p.vy*=.99;p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,212,255,${p.a})`;ctx.fill();
        for(let j=i+1;j<pts.length;j++){const q=pts[j];const dd=Math.hypot(p.x-q.x,p.y-q.y);if(dd<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(0,212,255,${.06*(1-dd/120)})`;ctx.lineWidth=.6;ctx.stroke();}}
      }
      raf=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",onR);window.removeEventListener("mousemove",onM);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
}

function ProfilePhoto({ isMobile }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my,[-80,80],[10,-10]),{stiffness:300,damping:28});
  const ry = useSpring(useTransform(mx,[-80,80],[-10,10]),{stiffness:300,damping:28});
  const handleMove = e => {
    if (isMobile) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX-r.left-r.width/2); my.set(e.clientY-r.top-r.height/2);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };
  return (
    <motion.div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{perspective:900,display:"inline-block",position:"relative"}}>
      <motion.div style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d",display:"inline-block",position:"relative"}} className="anim-glow3d">
        <div className="border-spin" style={{position:"absolute",inset:-4,borderRadius:"50%",zIndex:0}}/>
        <div style={{position:"absolute",inset:-1,borderRadius:"50%",background:"var(--bg)",zIndex:1}}/>
        <div style={{position:"relative",zIndex:2,width:"clamp(130px,20vw,195px)",height:"clamp(130px,20vw,195px)",borderRadius:"50%",overflow:"hidden",boxShadow:"0 0 40px rgba(0,212,255,0.24),0 16px 48px rgba(0,0,0,0.4)"}}>
          <img src="/rushikesh.jpeg" alt="Rushikesh Ingole" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block"}}/>
        </div>
        {/* Status badge */}
        <div style={{position:"absolute",bottom:5,right:-2,zIndex:3,display:"flex",alignItems:"center",gap:5,padding:"4px 9px",borderRadius:100,background:"var(--bg2)",border:"1px solid rgba(34,197,94,0.4)",whiteSpace:"nowrap"}}>
          <span style={{width:6,height:6,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 6px #22c55e",display:"inline-block",animation:"pulse 2s ease infinite"}}/>
          <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"#22c55e",letterSpacing:"0.06em"}}>Available</span>
        </div>
        {/* Float tags — desktop only */}
        {!isMobile&&(<>
          <div className="anim-float" style={{position:"absolute",bottom:30,left:-36,zIndex:3,padding:"5px 10px",borderRadius:8,background:"var(--bg3)",border:"1px solid var(--border)",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",animationDelay:"-2s",whiteSpace:"nowrap"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"var(--accent2)",letterSpacing:"0.05em"}}>🐍 Python</span>
          </div>
          <div className="anim-float" style={{position:"absolute",top:10,left:-34,zIndex:3,padding:"5px 10px",borderRadius:8,background:"var(--bg3)",border:"1px solid var(--border)",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",whiteSpace:"nowrap"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"var(--accent)",letterSpacing:"0.05em"}}>📊 Power BI</span>
          </div>
        </>)}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [modalOpen,setModalOpen] = useState(false);
  const [isMobile,setIsMobile] = useState(typeof window!=="undefined"?window.innerWidth<=640:false);
  useEffect(()=>{ const fn=()=>setIsMobile(window.innerWidth<=640); window.addEventListener("resize",fn); return()=>window.removeEventListener("resize",fn); },[]);

  const stats = [
    {label:"Projects",  count:10, suffix:"+"},
    {label:"Score",     count:85, suffix:"%"},
    {label:"Uni Rank",  text:"7th"},
    {label:"KPI Reports",text:"20+"},
  ];

  /* Buttons: all use btn-clip for corner-flip effect */
  const btns = [
    {key:"gh",   href:"https://github.com/CodeByRushi11",                                      label:"GitHub",   icon:"⚡", ext:true,  s:{background:"var(--grad-main)",backgroundSize:"200%",color:"#fff",boxShadow:"0 4px 18px var(--accent-glow)"}},
    {key:"li",   href:"https://www.linkedin.com/in/rushikesh-ingole-b02052377",               label:"LinkedIn", icon:"💼", ext:true,  s:{background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text)"}},
    {key:"ph",   href:"tel:+918010688184",                                                     label:"Call",     icon:"📞",             s:{background:"rgba(34,197,94,0.09)",border:"1px solid rgba(34,197,94,0.28)",color:"var(--accent4)"}},
    {key:"cv",   href:"/Rushikesh_ResumeAI Business Intellegence Analyst.pdf",               label:"Resume",   icon:"📄", dl:true,   extra:"btn-shimmer", s:{background:"var(--bg3)",border:"1px solid var(--border)",color:"var(--text)"}},
  ];

  return (
    <section id="hero" style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"80px 20px 56px",overflow:"hidden",background:"var(--bg)"}}>
      <style>{`
        .hg{display:grid;grid-template-columns:1fr auto;gap:clamp(24px,6vw,72px);align-items:center;width:100%;margin-bottom:clamp(22px,5vw,38px);}
        .hcta{display:flex;flex-wrap:wrap;gap:clamp(8px,2vw,11px);justify-content:flex-start;}
        .hst{display:flex;flex-wrap:wrap;gap:0 clamp(20px,5vw,48px);justify-content:flex-start;padding-top:clamp(16px,4vw,26px);border-top:1px solid var(--border);width:100%;}
        @media(max-width:640px){
          .hg{grid-template-columns:1fr!important;text-align:center!important;}
          .hpc{order:-1;margin-bottom:8px;}
          .htc{text-align:center!important;}
          .htc p{margin-left:auto!important;margin-right:auto!important;}
          .hcta{justify-content:center!important;}
          .hst{justify-content:center!important;}
        }
        @media(max-width:380px){ .hcta a,.hcta button{font-size:11px!important;padding:8px 11px!important;} }
      `}</style>

      <ParticleCanvas/>
      <div style={{position:"absolute",inset:0,background:"var(--grad-bg)",pointerEvents:"none",zIndex:0}}/>
      <div className="anim-morph" style={{position:"absolute",top:"8%",right:"3%",width:"min(340px,45vw)",height:"min(340px,45vw)",background:"radial-gradient(circle,rgba(123,47,247,0.07) 0%,transparent 70%)",pointerEvents:"none",zIndex:0}}/>
      <div className="anim-morph" style={{position:"absolute",bottom:"5%",left:"2%",width:"min(220px,35vw)",height:"min(220px,35vw)",background:"radial-gradient(circle,rgba(0,212,255,0.05) 0%,transparent 70%)",pointerEvents:"none",zIndex:0,animationDelay:"-4s"}}/>

      <div style={{position:"relative",zIndex:1,maxWidth:1060,width:"100%"}}>
        <div className="hg">
          <div className="htc">
            {/* Badge */}
            <div className="anim-bounce-in" style={{marginBottom:"clamp(12px,3vw,20px)"}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:7,padding:"6px 14px",borderRadius:100,border:"1px solid var(--border-h)",background:"rgba(0,212,255,0.06)",fontFamily:"var(--font-mono)",fontSize:"clamp(9px,2vw,11px)",letterSpacing:"0.08em",color:"var(--accent)"}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"var(--accent)",boxShadow:"0 0 8px var(--accent)",display:"inline-block",animation:"pulse 1.5s ease infinite"}}/>
                OPEN TO OPPORTUNITIES
              </span>
            </div>
            {/* Name */}
            <div className="anim-fade-up d-1">
              <h1 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(28px,6.5vw,76px)",lineHeight:1.0,letterSpacing:"-0.04em",color:"var(--text)",margin:"0 0 3px"}}>Hi, I'm</h1>
              <h1 className="grad-text" style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(28px,6.5vw,76px)",lineHeight:1.0,letterSpacing:"-0.04em",display:"block",margin:"0 0 12px"}}>Rushikesh Ingole</h1>
            </div>
            <div className="anim-fade-up d-2" style={{marginBottom:10}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"clamp(9px,2vw,12px)",letterSpacing:"0.1em",color:"var(--text3)",textTransform:"uppercase"}}>📍 Nagpur, Maharashtra, India</span>
            </div>
            <div className="anim-fade-up d-3" style={{marginBottom:14}}>
              <span style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(13px,2.8vw,24px)",color:"var(--text2)"}}>
                <RotatingTypewriter texts={["AI & Business Intelligence Analyst","Data Analyst & Visualization Expert","Power BI & Python Specialist","Analytics-Driven Problem Solver"]}/>
              </span>
            </div>
            <p className="anim-fade-up d-4" style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(13px,2vw,15px)",lineHeight:1.78,color:"var(--text2)",maxWidth:500,margin:"0 0 clamp(18px,4vw,28px)"}}>
              I transform complex data into clean dashboards, KPI reports, and strategic insights — using Python, SQL, and Power BI.
            </p>

            {/* CTA buttons — btn-clip corner flip */}
            <div className="hcta anim-fade-up d-5">
              {btns.map(({key,href,label,icon,ext,dl,extra,s})=>(
                <a key={key} href={href}
                  target={ext?"_blank":undefined} rel={ext?"noopener noreferrer":undefined}
                  {...(dl?{download:true}:{})}
                  className={`btn btn-clip corner-box ${extra||""}`}
                  onClick={e=>addRipple(e,"rgba(255,255,255,0.18)")}
                  style={{display:"inline-flex",alignItems:"center",gap:7,padding:"clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(11px,2vw,13px)",textDecoration:"none",whiteSpace:"nowrap",...s}}>
                  <span>{icon}</span>{label}
                </a>
              ))}
              <button onClick={e=>{addRipple(e,"rgba(0,212,255,0.15)");setModalOpen(true);}}
                className="btn btn-clip corner-box"
                style={{display:"inline-flex",alignItems:"center",gap:7,padding:"clamp(9px,2vw,12px) clamp(14px,2.5vw,22px)",borderRadius:"0 12px 0 12px",background:"transparent",border:"1px solid var(--border-h)",color:"var(--accent)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(11px,2vw,13px)",cursor:"pointer",whiteSpace:"nowrap"}}>
                <Eye size={14}/> Preview CV
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="hpc anim-fade-left d-3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ProfilePhoto isMobile={isMobile}/>
          </div>
        </div>

        {/* Stats */}
        <div className="hst anim-fade-up d-7">
          {stats.map(({label,count,suffix,text})=>(
            <div key={label} style={{textAlign:"center",padding:"8px 0",minWidth:56}}>
              <div className="grad-text" style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(22px,5vw,36px)",letterSpacing:"-0.04em"}}
                {...(count?{"data-count":count,"data-suffix":suffix||""}:{})}>
                {text||(count+suffix)}
              </div>
              <div style={{fontFamily:"var(--font-mono)",fontSize:"clamp(8px,1.8vw,10px)",letterSpacing:"0.08em",color:"var(--text3)",textTransform:"uppercase"}}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="anim-float" style={{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",color:"var(--text3)",zIndex:1}}>
        <ArrowDown size={20}/>
      </div>
      {modalOpen&&<ResumeModal onClose={()=>setModalOpen(false)}/>}
    </section>
  );
}
