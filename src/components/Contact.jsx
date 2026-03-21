import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Instagram } from "lucide-react";
import { addRipple } from "../hooks/useRipple";
const WA=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

const contacts=[
  {Icon:Mail,     label:"Email",     value:"rushikeshingole467@gmail.com", href:"mailto:rushikeshingole467@gmail.com",                                          color:"#00d4ff",action:"Send Email"},
  {Icon:Phone,    label:"Phone",     value:"+91 8010688184",               href:"tel:+918010688184",                                                            color:"#22c55e",action:"Call Now"},
  {Icon:WA,       label:"WhatsApp",  value:"+91 8010688184",               href:"https://wa.me/918010688184",                                                   color:"#25d366",action:"Chat",ext:true},
  {Icon:Linkedin, label:"LinkedIn",  value:"rushikesh-ingole-b02052377",   href:"https://in.linkedin.com/in/rushikesh-ingole-b02052377",                        color:"#0a66c2",action:"Connect",ext:true},
  {Icon:Instagram,label:"Instagram", value:"@rishiiii.i12",                href:"https://www.instagram.com/rishiiii.i12?igsh=MTRoZGtxc3A2dGN4bQ==",           color:"#e1306c",action:"Follow",ext:true},
  {Icon:Github,   label:"GitHub",    value:"CodeByRushi11",                href:"https://github.com/CodeByRushi11",                                             color:"#8b949e",action:"View",ext:true},
];

export default function Contact() {
  return (
    <section id="contact" style={{background:"var(--bg)",padding:"clamp(60px,10vw,100px) 20px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"clamp(40px,8vw,64px)"}} data-reveal="up">
          <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:16,fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.15em",color:"var(--accent)",textTransform:"uppercase"}}><Send size={12}/> Get In Touch</div>
          <h2 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(28px,6vw,56px)",letterSpacing:"-0.04em",color:"var(--text)",lineHeight:1.05,marginBottom:14}}>Let's build something<br/><span className="grad-text">remarkable together</span></h2>
          <p style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(13px,2.2vw,16px)",lineHeight:1.7,color:"var(--text2)",maxWidth:500,margin:"0 auto"}}>Open to full-time roles, internships, freelance analytics projects, and collaborations.</p>
          <div className="section-line" style={{margin:"24px auto 0"}}/>
        </div>

        <div data-stagger data-reveal="up" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(clamp(220px,40vw,280px),1fr))",gap:"clamp(12px,2.5vw,16px)",marginBottom:40}}>
          {contacts.map(({Icon,label,value,href,color,action,ext})=>(
            <motion.a key={label} href={href} {...(ext?{target:"_blank",rel:"noopener noreferrer"}:{})}
              whileHover={{y:-5,scale:1.02,rotateX:2}} transition={{type:"spring",stiffness:350,damping:22}}
              className="glass btn btn-clip corner-box" onClick={e=>addRipple(e,`${color}22`)}
              style={{display:"flex",alignItems:"center",gap:"clamp(12px,3vw,16px)",padding:"clamp(14px,3vw,18px)",textDecoration:"none",transformStyle:"preserve-3d"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=color+"60";e.currentTarget.style.boxShadow=`0 12px 32px ${color}18`}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--card-border)";e.currentTarget.style.boxShadow="var(--card-shadow)"}}>
              <motion.div whileHover={{rotate:6,scale:1.1}} transition={{type:"spring",stiffness:400}}
                style={{width:44,height:44,borderRadius:12,flexShrink:0,background:`${color}14`,border:`1px solid ${color}28`,display:"flex",alignItems:"center",justifyContent:"center",color}}>
                <Icon/>
              </motion.div>
              <div style={{overflow:"hidden",flex:1}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:"0.1em",color:"var(--text3)",textTransform:"uppercase",marginBottom:2}}>{label}</div>
                <div style={{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"clamp(11px,2vw,13px)",color:"var(--text)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{value}</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,color,marginTop:2,opacity:.8}}>{action} →</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA card */}
        <motion.div whileHover={{scale:1.008}} transition={{type:"spring",stiffness:200,damping:25}}
          className="glass" data-reveal="up" style={{borderRadius:22,padding:"clamp(28px,5vw,44px)",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div className="anim-morph" style={{position:"absolute",top:-40,right:-40,width:180,height:180,background:"radial-gradient(circle,var(--accent-glow) 0%,transparent 70%)",pointerEvents:"none"}}/>
          <div className="anim-morph" style={{position:"absolute",bottom:-40,left:-40,width:160,height:160,background:"radial-gradient(circle,rgba(123,47,247,0.08) 0%,transparent 70%)",pointerEvents:"none",animationDelay:"-3s"}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:20,padding:"9px 18px",borderRadius:12,background:"var(--surface)",border:"1px solid var(--border)"}}><MapPin size={14} style={{color:"var(--accent)"}}/><span style={{fontFamily:"var(--font-body)",fontSize:"clamp(12px,2vw,14px)",color:"var(--text2)"}}>Nagpur, Maharashtra, India</span></div>
            <h3 style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(18px,4vw,26px)",letterSpacing:"-0.03em",color:"var(--text)",lineHeight:1.3,maxWidth:460,margin:"0 auto 12px"}}>Ready to turn your data into decisions?</h3>
            <p style={{fontFamily:"var(--font-body)",fontWeight:300,fontSize:"clamp(13px,2vw,15px)",lineHeight:1.7,color:"var(--text2)",maxWidth:400,margin:"0 auto 28px"}}>Whether you need a data analyst, BI developer or analytics consultant — I'm available and excited.</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center"}}>
              {[{href:"mailto:rushikeshingole467@gmail.com",label:"Send Email",s:{background:"var(--grad-main)",backgroundSize:"200%",color:"#fff",boxShadow:"0 4px 20px var(--accent-glow)"}},
                {href:"https://wa.me/918010688184",label:"WhatsApp",ext:true,s:{background:"rgba(37,211,102,0.1)",border:"1px solid rgba(37,211,102,0.3)",color:"#25d366"}},
                {href:"tel:+918010688184",label:"Call Now",s:{background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text)"}}].map(({href,label,s,ext})=>(
                <motion.a key={label} href={href} {...(ext?{target:"_blank",rel:"noopener noreferrer"}:{})}
                  whileHover={{y:-3,scale:1.04}} whileTap={{scale:.97}}
                  className="btn btn-clip" onClick={e=>addRipple(e,"rgba(255,255,255,0.18)")}
                  style={{display:"inline-flex",alignItems:"center",gap:8,padding:"clamp(10px,2.5vw,13px) clamp(18px,3vw,24px)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(12px,2vw,13px)",textDecoration:"none",...s}}>
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
