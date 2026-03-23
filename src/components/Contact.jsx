import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Instagram } from "lucide-react";
import { addRipple } from "../hooks/useRipple";
const WA=()=><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

const CONTACTS=[
  {Icon:Mail,     label:"Email",     val:"rushikeshingole467@gmail.com", href:"mailto:rushikeshingole467@gmail.com",                                       color:"#00d4ff", action:"Send Email"},
  {Icon:Phone,    label:"Phone",     val:"+91 8010688184",               href:"tel:+918010688184",                                                         color:"#22c55e", action:"Call Now"},
  {Icon:WA,       label:"WhatsApp",  val:"+91 8010688184",               href:"https://wa.me/918010688184",                                                color:"#25d366", action:"Chat Now", ext:true},
  {Icon:Linkedin, label:"LinkedIn",  val:"rushikesh-ingole-b02052377",   href:"https://in.linkedin.com/in/rushikesh-ingole-b02052377",                     color:"#0a66c2", action:"Connect", ext:true},
  {Icon:Instagram,label:"Instagram", val:"@rishiiii.i12",                href:"https://www.instagram.com/rishiiii.i12?igsh=MTRoZGtxc3A2dGN4bQ==",        color:"#e1306c", action:"Follow", ext:true},
  {Icon:Github,   label:"GitHub",    val:"CodeByRushi11",                href:"https://github.com/CodeByRushi11",                                          color:"#8b949e", action:"View Profile", ext:true},
];

export default function Contact() {
  return (
    <section id="contact" style={{background:"var(--bg)",padding:"clamp(60px,9vw,100px) 20px"}}>
      <div style={{maxWidth:1060,margin:"0 auto"}}>

        <motion.div style={{textAlign:"center",marginBottom:"clamp(32px,6vw,52px)"}}
          initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-50px"}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
          <div className="sec-eyebrow"><Send size={11}/> Get In Touch</div>
          <h2 className="sec-title">Let's build something</h2>
          <h2 className="anim-shimmer-text" style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(24px,5.5vw,50px)",letterSpacing:"-0.04em",lineHeight:1.1}}>remarkable together</h2>
          <p className="sec-sub">Open to full-time roles, internships, freelance analytics projects, and collaborations.</p>
          <div className="section-line"/>
        </motion.div>

        {/* Contact cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,260px),1fr))",gap:"clamp(10px,2.2vw,14px)",marginBottom:36}}>
          {CONTACTS.map(({Icon,label,val,href,color,action,ext},i)=>(
            <motion.a key={label} href={href} {...(ext?{target:"_blank",rel:"noopener noreferrer"}:{})}
              initial={{opacity:0,y:26,scale:.95}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:false,margin:"-20px"}}
              transition={{delay:i*.065,type:"spring",stiffness:320,damping:26}}
              whileHover={{y:-5,scale:1.02,rotateX:2}}
              className="glass btn btn-clip corner-box" onClick={e=>addRipple(e,`${color}20`)}
              style={{display:"flex",alignItems:"center",gap:"clamp(11px,2.5vw,15px)",padding:"clamp(12px,2.5vw,16px)",textDecoration:"none",transformStyle:"preserve-3d"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"55";e.currentTarget.style.boxShadow=`0 10px 28px ${color}16`}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--card-border)";e.currentTarget.style.boxShadow="var(--card-shadow)"}}>
              <motion.div whileHover={{rotate:10,scale:1.12}} transition={{type:"spring",stiffness:400}}
                style={{width:42,height:42,borderRadius:11,flexShrink:0,background:`${color}12`,border:`1px solid ${color}26`,display:"flex",alignItems:"center",justifyContent:"center",color,position:"relative"}}>
                <Icon/>
                <motion.div style={{position:"absolute",width:42,height:42,borderRadius:"50%",border:`1px dashed ${color}38`}} animate={{rotate:360}} transition={{repeat:Infinity,duration:5,ease:"linear"}}/>
              </motion.div>
              <div style={{overflow:"hidden",flex:1,minWidth:0}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:"0.1em",color:"var(--text3)",textTransform:"uppercase",marginBottom:2}}>{label}</div>
                <div style={{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"clamp(10px,1.8vw,12px)",color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{val}</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,color,marginTop:2,opacity:.75}}>{action} →</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div whileHover={{scale:1.007}} transition={{type:"spring",stiffness:200,damping:25}}
          className="glass" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:false}}
          style={{borderRadius:20,padding:"clamp(24px,4.5vw,40px)",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div className="anim-morph" style={{position:"absolute",top:-38,right:-38,width:160,height:160,background:"radial-gradient(circle,var(--accent-glow),transparent 70%)",pointerEvents:"none"}}/>
          <div className="anim-morph" style={{position:"absolute",bottom:-38,left:-38,width:140,height:140,background:"radial-gradient(circle,rgba(123,47,247,.07),transparent 70%)",pointerEvents:"none",animationDelay:"-3s"}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:9,marginBottom:18,padding:"8px 16px",borderRadius:11,background:"var(--surface)",border:"1px solid var(--border)"}}>
              <MapPin size={13} style={{color:"var(--accent)"}}/><span style={{fontFamily:"var(--font-body)",fontSize:"clamp(11px,1.8vw,13px)",color:"var(--text2)"}}>Nagpur, Maharashtra, India</span>
            </div>
            <h3 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(16px,3.5vw,24px)",letterSpacing:"-0.03em",color:"var(--text)",lineHeight:1.3,maxWidth:440,margin:"0 auto 11px"}}>Ready to turn your data into decisions?</h3>
            <p style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(12px,1.8vw,14px)",lineHeight:1.7,color:"var(--text2)",maxWidth:380,margin:"0 auto 24px"}}>Whether you need a data analyst, BI developer or analytics consultant — I'm available and excited.</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"}}>
              {[
                {href:"mailto:rushikeshingole467@gmail.com",label:"Send Email",s:{background:"var(--grad-main)",backgroundSize:"200%",color:"#fff",boxShadow:"0 4px 18px var(--accent-glow)"}},
                {href:"https://wa.me/918010688184",label:"WhatsApp",ext:true,s:{background:"rgba(37,211,102,.09)",border:"1px solid rgba(37,211,102,.28)",color:"#25d366"}},
                {href:"tel:+918010688184",label:"Call Now",s:{background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text)"}},
              ].map(({href,label,s,ext})=>(
                <motion.a key={label} href={href} {...(ext?{target:"_blank",rel:"noopener noreferrer"}:{})}
                  whileHover={{y:-3,scale:1.04}} whileTap={{scale:.96}}
                  className="btn btn-clip" onClick={e=>addRipple(e,"rgba(255,255,255,.16)")}
                  style={{display:"inline-flex",alignItems:"center",gap:7,padding:"clamp(9px,2.2vw,12px) clamp(16px,3vw,22px)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(12px,1.8vw,13px)",textDecoration:"none",...s}}>
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
