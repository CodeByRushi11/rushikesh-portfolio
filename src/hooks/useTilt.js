import { useEffect } from "react";

export function useTilt() {
  useEffect(() => {
    const isMobile = window.matchMedia("(pointer:coarse)").matches;
    if (isMobile) return;

    const attached = new WeakSet();

    function attach(card) {
      if (attached.has(card)) return;
      attached.add(card);

      let raf = null;
      let tRX = 0, tRY = 0, cRX = 0, cRY = 0;
      const lerp = (a, b, t) => a + (b - a) * t;

      const loop = () => {
        cRX = lerp(cRX, tRX, 0.12);
        cRY = lerp(cRY, tRY, 0.12);
        card.style.transform = `perspective(900px) rotateX(${cRX.toFixed(3)}deg) rotateY(${cRY.toFixed(3)}deg) translateZ(4px)`;
        if (Math.abs(cRX - tRX) > 0.01 || Math.abs(cRY - tRY) > 0.01) {
          raf = requestAnimationFrame(loop);
        } else {
          cRX = tRX; cRY = tRY; raf = null;
        }
      };

      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        tRX = ((e.clientY - r.top  - r.height/2) / (r.height/2)) * -6;
        tRY = ((e.clientX - r.left - r.width /2) / (r.width /2)) *  6;
        if (!raf) raf = requestAnimationFrame(loop);
      };

      const onLeave = () => {
        tRX = 0; tRY = 0;
        card.style.borderColor = "";
        card.style.boxShadow   = "";
        if (!raf) raf = requestAnimationFrame(loop);
      };

      const onEnter = () => {
        card.style.boxShadow   = "var(--card-shadow-h)";
        card.style.borderColor = "var(--card-border-h)";
        card.style.zIndex      = "2";
      };

      const onLeave2 = () => { card.style.zIndex = ""; };

      card.addEventListener("mousemove",  onMove,  { passive:true });
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave2);
    }

    const scan = () => {
      document.querySelectorAll(".glass, .tilt3d").forEach(attach);
    };

    scan();

    // Re-scan when DOM changes (tab switches, lazy mount)
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList:true, subtree:true });

    return () => mo.disconnect();
  }, []);
}
