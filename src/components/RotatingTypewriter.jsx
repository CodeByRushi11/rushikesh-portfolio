import { useEffect, useState } from "react";

export default function RotatingTypewriter({
  texts = [], typingSpeed = 75, deletingSpeed = 35, pauseMs = 2200, className = ""
}) {
  const [idx, setIdx] = useState(0);
  const [disp, setDisp] = useState("");
  const [del, setDel] = useState(false);

  const cur = texts[idx];

  useEffect(() => {
    let t;
    if (!del && disp.length < cur.length)
      t = setTimeout(() => setDisp(cur.slice(0, disp.length + 1)), typingSpeed);
    else if (!del && disp.length === cur.length)
      t = setTimeout(() => setDel(true), pauseMs);
    else if (del && disp.length > 0)
      t = setTimeout(() => setDisp(cur.slice(0, disp.length - 1)), deletingSpeed);
    else if (del && disp.length === 0) {
      setDel(false);
      setIdx(p => (p + 1) % texts.length);
    }
    return () => clearTimeout(t);
  }, [disp, del, cur, typingSpeed, deletingSpeed, pauseMs, texts.length]);

  return (
    <span className={className}>
      {disp}
      <span className="anim-blink" style={{ color: "var(--accent)", marginLeft: 2 }}>|</span>
    </span>
  );
}
