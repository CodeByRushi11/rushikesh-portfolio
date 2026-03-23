import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    /* ─── 1. [data-reveal] + [data-stagger] — BIDIRECTIONAL
       Fires on scroll DOWN (add .revealed) and
       reverses on scroll UP (remove .revealed) so
       the animation replays when you scroll back down. ─── */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            e.target.querySelectorAll(".skill-bar-fill").forEach(b => b.classList.add("active"));
          } else {
            /* ★ Remove on exit → re-animates on next scroll */
            e.target.classList.remove("revealed");
            e.target.querySelectorAll(".skill-bar-fill").forEach(b => b.classList.remove("active"));
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal],[data-stagger]").forEach(el => io.observe(el));

    /* ─── 2. Counter — re-runs on every scroll into view ─── */
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el     = e.target;
          const end    = parseInt(el.dataset.count || "0", 10);
          const suffix = el.dataset.suffix || "";
          const dur = 1400, step = 16;
          let cur = 0;
          const inc = end / (dur / step);
          const tick = () => {
            cur = Math.min(cur + inc, end);
            el.textContent = Math.round(cur) + suffix;
            if (cur < end) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count]").forEach(el => counterIO.observe(el));

    /* ─── 3. Parallax ─── */
    const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));
    const onScroll = () => {
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax || "0.25");
        const rect  = el.getBoundingClientRect();
        const mid   = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${mid * speed}px)`;
      });
    };
    if (parallaxEls.length) window.addEventListener("scroll", onScroll, { passive:true });

    return () => {
      io.disconnect();
      counterIO.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
