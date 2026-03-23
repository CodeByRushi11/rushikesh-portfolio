import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Heart, Instagram } from "lucide-react";
const WA=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

const NAV=[["#about","About"],["#education","Education"],["#experience","Experience"],["#skills","Skills"],["#projects","Projects"],["#contact","Contact"]];
const SOC=[
  {Icon:Github,    href:"https://github.com/CodeByRushi11",                                            color:"#8b949e",label:"GitHub"},
  {Icon:Linkedin,  href:"https://www.linkedin.com/in/rushikesh-ingole-b02052377",                      color:"#0a66c2",label:"LinkedIn"},
  {Icon:Mail,      href:"mailto:rushikeshingole467@gmail.com",                                          color:"#00d4ff",label:"Email"},
  {Icon:Phone,     href:"tel:+918010688184",                                                            color:"#22c55e",label:"Call"},
  {Icon:WA,        href:"https://wa.me/918010688184",                                                   color:"#25d366",label:"WhatsApp"},
  {Icon:Instagram, href:"https://www.instagram.com/rishiiii.i12?igsh=MTRoZGtxc3A2dGN4bQ==",           color:"#e1306c",label:"Instagram"},
];

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer style={{background:"var(--footer-bg)",position:"relative"}}>
      <div style={{overflow:"hidden",lineHeight:0,marginBottom:-1}}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{display:"block",width:"100%",height:"clamp(22px,3.5vw,48px)"}}>
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,0 L0,0 Z" fill="var(--bg)"/>
        </svg>
      </div>
      <style>{`.fgrid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:clamp(22px,5vw,46px);}@media(max-width:720px){.fgrid{grid-template-columns:1fr!important;gap:26px!important;}}`}</style>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"clamp(32px,6vw,60px) clamp(16px,4vw,24px) clamp(18px,3.5vw,28px)"}}>
        <motion.div className="fgrid" style={{marginBottom:"clamp(28px,5vw,48px)"}}
          initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:.65,ease:[.16,1,.3,1]}}>

          {/* Brand */}
          <div>
            <motion.div
              animate={{textShadow:["0 0 8px #00d4ff,0 0 18px #00d4ff","none","0 0 8px #00d4ff","none","0 0 18px #00d4ff,0 0 36px #7b2ff7"]}}
              transition={{repeat:Infinity,duration:4.5,ease:"linear"}}
              style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(15px,3.5vw,22px)",letterSpacing:"-0.04em",color:"#fff",marginBottom:11,display:"inline-block"}}>
              RUSHIKESH<span style={{color:"var(--accent)"}}>.</span>
            </motion.div>
            <p style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(11px,1.8vw,13px)",lineHeight:1.8,color:"rgba(255,255,255,0.32)",maxWidth:290,marginBottom:14}}>
              AI & Business Intelligence Analyst focused on data-driven insights, KPI reporting, and strategic analytics.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:4,marginBottom:14}}>
              {[["tel:+918010688184","📞 +91 8010688184"],["mailto:rushikeshingole467@gmail.com","✉ rushikeshingole467@gmail.com"]].map(([href,txt])=>(
                <a key={href} href={href} className="link-line" style={{fontFamily:"var(--font-mono)",fontSize:"clamp(9px,1.7vw,11px)",color:"rgba(255,255,255,0.26)",textDecoration:"none",transition:"color .2s",width:"fit-content"}}
                  onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.26)"}>{txt}</a>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {SOC.map(({Icon,href,color,label})=>(
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{y:-4,scale:1.14,rotateY:14}} whileTap={{scale:.88}}
                  transition={{type:"spring",stiffness:400,damping:20}}
                  style={{width:32,height:32,borderRadius:8,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,.38)",textDecoration:"none"}}
                  onMouseEnter={e=>{e.currentTarget.style.background=color;e.currentTarget.style.borderColor=color;e.currentTarget.style.color="#fff";e.currentTarget.style.boxShadow=`0 5px 14px ${color}40`}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.05)";e.currentTarget.style.borderColor="rgba(255,255,255,.08)";e.currentTarget.style.color="rgba(255,255,255,.38)";e.currentTarget.style.boxShadow=""}}>
                  <Icon/>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(255,255,255,.24)",marginBottom:12}}>Navigation</p>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:9}}>
              {NAV.map(([href,label],i)=>(
                <motion.li key={href} initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{delay:i*.055}}>
                  <a href={href} className="link-line" style={{fontFamily:"var(--font-body)",fontSize:"clamp(12px,1.8vw,13px)",color:"rgba(255,255,255,.33)",textDecoration:"none",transition:"color .2s"}}
                    onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.33)"}>{label}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <p style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(255,255,255,.24)",marginBottom:12}}>Status</p>
            <div style={{padding:"11px 13px",borderRadius:11,background:"rgba(0,212,255,.06)",border:"1px solid rgba(0,212,255,.14)",marginBottom:12}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                <span className="anim-career-dot" style={{width:7,height:7,borderRadius:"50%",background:"#22c55e",display:"inline-block"}}/>
                <span style={{fontFamily:"var(--font-mono)",fontSize:10,color:"#22c55e",letterSpacing:"0.06em"}}>OPEN TO WORK</span>
              </div>
              <p style={{fontFamily:"var(--font-body)",fontSize:"clamp(10px,1.7vw,12px)",color:"rgba(255,255,255,.30)",margin:0}}>Available for full-time & internship roles</p>
            </div>
            <motion.a href="mailto:rushikeshingole467@gmail.com" whileHover={{x:3}}
              style={{display:"inline-flex",alignItems:"center",gap:5,fontFamily:"var(--font-mono)",fontSize:11,color:"var(--accent)",textDecoration:"none"}}>
              Hire me
              <motion.span animate={{x:[0,3,0]}} transition={{repeat:Infinity,duration:1.1,ease:"easeInOut"}}>
                <ArrowUpRight size={11}/>
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        <div style={{borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:"clamp(12px,2.5vw,20px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
          <p style={{fontFamily:"var(--font-body)",fontSize:"clamp(10px,1.7vw,12px)",color:"rgba(255,255,255,.18)"}}>© {yr} Rushikesh Ingole. All rights reserved.</p>
          <p style={{fontFamily:"var(--font-body)",fontSize:"clamp(10px,1.7vw,12px)",color:"rgba(255,255,255,.18)",display:"flex",alignItems:"center",gap:5}}>
            Built with React &amp;
            <motion.span animate={{scale:[1,1.32,1]}} transition={{repeat:Infinity,duration:.75,ease:"easeInOut"}}>
              <Heart size={10} style={{color:"var(--accent)",fill:"var(--accent)"}}/>
            </motion.span>
            Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
