import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOut(true), 1400);
    const t2 = setTimeout(() => setGone(true), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      id="loader"
      className={out ? "out" : ""}
      style={{ background: "var(--bg)", flexDirection: "column", gap: 24 }}
    >
      {/* Animated logo mark */}
      <div style={{ position: "relative", width: 64, height: 64 }}>
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTopColor: "var(--accent)",
          animation: "spin 1s linear infinite",
        }} />
        <div style={{
          position: "absolute", inset: 8,
          borderRadius: "50%",
          border: "2px solid transparent",
          borderBottomColor: "var(--accent2)",
          animation: "spinReverse 0.8s linear infinite",
        }} />
        <div style={{
          position: "absolute", inset: "50%",
          transform: "translate(-50%,-50%)",
          width: 10, height: 10,
          borderRadius: "50%",
          background: "var(--accent)",
          boxShadow: "0 0 12px var(--accent)",
          animation: "pulse 1s ease infinite",
        }} />
      </div>

      {/* Name */}
      <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "var(--text2)" }}>
        RUSHIKESH <span style={{ color: "var(--accent)" }}>INGOLE</span>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: 8 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    </div>
  );
}
