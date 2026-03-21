import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState("in");
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"),  1600);
    const t2 = setTimeout(() => setPhase("gone"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (phase === "gone") return null;

  return (
    <div id="loader" className={phase === "out" ? "out" : ""} style={{ flexDirection:"column", gap:20 }}>
      {/* 3D orbiting rings */}
      <div style={{ position:"relative", width:70, height:70, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="loader-ring-1"/>
        <div className="loader-ring-2"/>
        {/* Orbiting dot */}
        <div style={{ position:"absolute", width:70, height:70, animation:"orbits 1.8s linear infinite" }}>
          <div style={{ position:"absolute", top:0, left:"50%", marginLeft:-4, width:8, height:8, borderRadius:"50%", background:"var(--accent)", boxShadow:"0 0 12px var(--accent)", transform:"translateY(-4px)" }}/>
        </div>
        {/* Center glow */}
        <div style={{ position:"absolute", width:12, height:12, borderRadius:"50%", background:"var(--accent2)", boxShadow:"0 0 16px var(--accent2)", animation:"pulse 1s ease infinite" }}/>
      </div>

      <div style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:17, letterSpacing:"0.18em", color:"var(--text2)" }} className={phase==="out"?"anim-flicker":""}>
        RUSHIKESH<span style={{color:"var(--accent)"}}>.</span>
      </div>

      <div style={{ display:"flex", gap:4, alignItems:"flex-end", height:28 }}>
        {[0,1,2,3,4].map(i=><div key={i} className="wave-bar" style={{animationDelay:`${i*.12}s`}}/>)}
      </div>
    </div>
  );
}
