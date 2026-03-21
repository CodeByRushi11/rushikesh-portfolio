export function addRipple(e, color = "rgba(255,255,255,0.3)") {
  const el = e.currentTarget;
  const span = document.createElement("span");
  const d = Math.max(el.clientWidth, el.clientHeight);
  const r = el.getBoundingClientRect();
  span.className = "ripple";
  span.style.cssText = `
    width:${d}px;height:${d}px;
    left:${e.clientX - r.left - d / 2}px;
    top:${e.clientY - r.top - d / 2}px;
    background:${color};
  `;
  el.appendChild(span);
  setTimeout(() => span.remove(), 700);
}
