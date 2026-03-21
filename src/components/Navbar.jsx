import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const LINKS = [
  { href:"#about",      label:"About" },
  { href:"#education",  label:"Education" },
  { href:"#experience", label:"Experience" },
  { href:"#skills",     label:"Skills" },
  { href:"#projects",   label:"Projects" },
  { href:"#contact",    label:"Contact" },
];

export default function Navbar() {
  const [active,   setActive]   = useState("");
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = e => { if (navRef.current && !navRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    document.addEventListener("touchstart", fn, { passive:true });
    return () => { document.removeEventListener("mousedown",fn); document.removeEventListener("touchstart",fn); };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ★ Active section tracking — ALL sections */
  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1));
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin:"-30% 0px -60% 0px", threshold:0 }
    );
    // Wait a tick so sections are mounted
    const t = setTimeout(() => {
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }, 300);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);

  const go = href => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <>
      <style>{`
        /* ── Layout ── */
        .nav-desk { display:flex; align-items:center; gap:clamp(8px,1.8vw,26px); }
        .nav-mob  { display:none; align-items:center; gap:10px; }
        .nav-drw  { display:none; }
        @media(max-width:767px){
          .nav-desk { display:none !important; }
          .nav-mob  { display:flex  !important; }
          .nav-drw  { display:block !important; }
        }

        /* ── Hamburger morph ── */
        .ham { display:flex;flex-direction:column;gap:5px;align-items:center;justify-content:center; }
        .ham-ln { display:block;width:20px;height:2px;background:currentColor;border-radius:2px;
                  transition:transform .3s ease,opacity .3s ease;transform-origin:center; }
        .ham-open .ham-ln:nth-child(1){ transform:translateY(7px) rotate(45deg); }
        .ham-open .ham-ln:nth-child(2){ opacity:0; transform:scaleX(0); }
        .ham-open .ham-ln:nth-child(3){ transform:translateY(-7px) rotate(-45deg); }

        /* ── Drawer stagger ── */
        .di { transform:translateX(-18px); opacity:0;
              transition:transform .4s cubic-bezier(.16,1,.3,1), opacity .4s ease; }
        .do .di { transform:none; opacity:1; }
        .do .di:nth-child(1){transition-delay:.04s}
        .do .di:nth-child(2){transition-delay:.08s}
        .do .di:nth-child(3){transition-delay:.12s}
        .do .di:nth-child(4){transition-delay:.16s}
        .do .di:nth-child(5){transition-delay:.20s}
        .do .di:nth-child(6){transition-delay:.24s}
        .do .di:nth-child(7){transition-delay:.28s}

        /* ── Theme toggle spin ── */
        .theme-btn:hover svg { transform:rotate(20deg); }
        .theme-btn svg { transition:transform .3s ease; }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:9998,
          background:(scrolled||open) ? "var(--nav-bg)" : "transparent",
          backdropFilter:(scrolled||open) ? "blur(22px)" : "none",
          WebkitBackdropFilter:(scrolled||open) ? "blur(22px)" : "none",
          borderBottom:scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition:"background .4s, box-shadow .4s, border-color .4s",
          boxShadow:scrolled ? "0 2px 24px rgba(0,0,0,.12)" : "none",
        }}
        className="anim-fade-down"
      >
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(16px,4vw,36px)", height:62, display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* ── Logo ── */}
          <button
            onClick={() => { setOpen(false); window.scrollTo({top:0,behavior:"smooth"}); }}
            className="glitch" data-text="RUSHIKESH."
            style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(15px,4vw,20px)", color:"var(--text)", background:"none", border:"none", cursor:"pointer", letterSpacing:"-0.04em", transition:"color .3s", padding:0, whiteSpace:"nowrap" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
          >
            RUSHIKESH<span style={{color:"var(--accent)"}}>.</span>
          </button>

          {/* ── Desktop nav ── */}
          <div className="nav-desk">
            {LINKS.map(({ href, label }) => {
              const isActive = active === href;
              return (
                <button
                  key={href}
                  onClick={() => go(href)}
                  className={`nav-link-pill${isActive ? " active" : ""}`}
                  style={{
                    fontFamily:"var(--font-body)", fontSize:12, fontWeight:isActive?600:500,
                    letterSpacing:"0.07em", textTransform:"uppercase",
                    color: isActive ? "var(--accent)" : "var(--text2)",
                    background:"none", border:"none", cursor:"pointer",
                    /* Extra padding-bottom so underline sits cleanly below text */
                    padding:"5px 2px 6px", whiteSpace:"nowrap", lineHeight:1,
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--text2)"; }}
                >
                  {label}
                </button>
              );
            })}

            {/* Divider */}
            <div style={{ width:1, height:18, background:"var(--border)", flexShrink:0, margin:"0 2px" }}/>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="theme-btn"
              style={{
                width:36, height:36, borderRadius:"50%",
                background:"var(--surface)", border:"1px solid var(--border)",
                cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                transition:"background .3s, border-color .3s, box-shadow .3s",
                color:"var(--text2)", flexShrink:0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--surface-h)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow = "0 0 10px var(--accent-glow)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--surface)";
                e.currentTarget.style.color = "var(--text2)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {theme === "dark" ? <Sun size={14}/> : <Moon size={14}/>}
            </button>
          </div>

          {/* ── Mobile controls ── */}
          <div className="nav-mob">
            <button onClick={toggle}
              style={{ width:36, height:36, borderRadius:"50%", background:"var(--surface)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"var(--text2)" }}>
              {theme==="dark" ? <Sun size={14}/> : <Moon size={14}/>}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              className={open ? "ham-open" : ""}
              style={{ width:36, height:36, borderRadius:10, background:open?"rgba(0,212,255,0.12)":"var(--surface)", border:`1px solid ${open?"var(--border-h)":"var(--border)"}`, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:open?"var(--accent)":"var(--text2)", transition:"all .25s" }}>
              <div className="ham">
                <span className="ham-ln"/><span className="ham-ln"/><span className="ham-ln"/>
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className="nav-drw"
          style={{ overflow:"hidden", maxHeight:open?"580px":"0", transition:"max-height .5s cubic-bezier(.16,1,.3,1)", background:"var(--nav-bg)", backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", borderTop:open?"1px solid var(--border)":"none" }}>
          <div className={open ? "do" : ""} style={{ padding:"8px clamp(14px,4vw,24px) 28px" }}>
            {LINKS.map(({ href, label }, i) => (
              <button key={href} onClick={() => go(href)} className="di"
                style={{ display:"flex", alignItems:"center", gap:14, width:"100%", textAlign:"left", padding:"14px 0", borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:i<LINKS.length-1?"1px solid var(--border)":"none", fontFamily:"var(--font-display)", fontSize:22, fontWeight:800, letterSpacing:"-0.03em", color:active===href?"var(--accent)":"var(--text)", background:"none", cursor:"pointer", transition:"color .2s, padding-left .2s" }}
                onMouseEnter={e => { if (active!==href) { e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.paddingLeft="8px"; } }}
                onMouseLeave={e => { if (active!==href) { e.currentTarget.style.color="var(--text)"; e.currentTarget.style.paddingLeft="0"; } }}>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:active===href?"var(--accent)":"var(--text3)", minWidth:24 }}>
                  {String(i+1).padStart(2,"00")}
                </span>
                {label}
                {active===href && <span style={{ marginLeft:"auto", width:6, height:6, borderRadius:"50%", background:"var(--accent)", boxShadow:"0 0 8px var(--accent)" }}/>}
              </button>
            ))}
            <div className="di" style={{ marginTop:16, paddingTop:16, borderTop:"1px solid var(--border)", display:"flex", gap:10, flexWrap:"wrap" }}>
              <a href="tel:+918010688184" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:8, background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.25)", fontFamily:"var(--font-mono)", fontSize:11, color:"#22c55e", textDecoration:"none" }}>📞 +91 8010688184</a>
              <a href="https://wa.me/918010688184" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:8, background:"rgba(37,211,102,0.1)", border:"1px solid rgba(37,211,102,0.25)", fontFamily:"var(--font-mono)", fontSize:11, color:"#25d366", textDecoration:"none" }}>💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height:62 }}/>
    </>
  );
}
