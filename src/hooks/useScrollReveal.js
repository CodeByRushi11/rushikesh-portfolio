import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            // skill bars
            e.target.querySelectorAll(".skill-bar-fill").forEach(b => b.classList.add("active"));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const els = document.querySelectorAll("[data-reveal], [data-stagger]");
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
