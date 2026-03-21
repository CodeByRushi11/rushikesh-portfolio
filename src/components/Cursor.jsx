import { useEffect, useRef } from "react";

export default function Cursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const pos      = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const rafRef   = useRef(null);

  useEffect(() => {
    /* ── Completely disable on ANY touch / pointer-coarse device ── */
    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return; // cursor stays hidden via CSS too

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    outer.style.opacity = "0";
    inner.style.opacity = "0";

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      inner.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      outer.style.opacity = "1";
      inner.style.opacity = "1";

      const t = e.target;
      const isHover = !!t.closest("a,button,[role='button'],input,textarea,label,[data-hover]");
      outer.classList.toggle("hover", isHover);
      inner.classList.toggle("hover", isHover);
    };

    const mousedown = () => { outer.classList.add("click"); inner.classList.add("click"); };
    const mouseup   = () => { outer.classList.remove("click"); inner.classList.remove("click"); };

    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.12);
      outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.12);
      outer.style.transform = `translate(${outerPos.current.x - 18}px, ${outerPos.current.y - 18}px)`;
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    window.addEventListener("mousemove",  move,      { passive: true });
    window.addEventListener("mousedown",  mousedown);
    window.addEventListener("mouseup",    mouseup);
    window.addEventListener("mouseleave", () => { outer.style.opacity = "0"; inner.style.opacity = "0"; });
    window.addEventListener("mouseenter", () => { outer.style.opacity = "1"; inner.style.opacity = "1"; });

    return () => {
      window.removeEventListener("mousemove",  move);
      window.removeEventListener("mousedown",  mousedown);
      window.removeEventListener("mouseup",    mouseup);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" />
    </>
  );
}
