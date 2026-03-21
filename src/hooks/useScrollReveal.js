import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    /* 1. [data-reveal] + [data-stagger] */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            e.target.querySelectorAll(".skill-bar-fill").forEach(b => b.classList.add("active"));
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal],[data-stagger]").forEach(el => io.observe(el));

    /* 2. Counter animation */
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el  = e.target;
          const end = parseInt(el.dataset.count || "0", 10);
          const suffix = el.dataset.suffix || "";
          const dur = 1600, step = 16;
          let cur = 0;
          const inc = end / (dur / step);
          const tick = () => {
            cur = Math.min(cur + inc, end);
            el.textContent = Math.round(cur) + suffix;
            if (cur < end) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count]").forEach(el => counterIO.observe(el));

    /* 3. Parallax */
    const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));
    const onScroll = () => {
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax || "0.25");
        const rect  = el.getBoundingClientRect();
        const mid   = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${mid * speed}px)`;
      });
    };
    if (parallaxEls.length) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      counterIO.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
