import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about",      label: "About" },
  { href: "#education",  label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [active,   setActive]   = useState("");
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Close menu on resize to desktop */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive("#" + e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const go = (href) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.15)" : "none",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 20px",
          height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glitch" data-text="RUSHIKESH."
            data-hover
            style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "var(--text)", background: "none", border: "none",
              cursor: "pointer", letterSpacing: "-0.04em",
              transition: "color 0.3s", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
          >
            RUSHIKESH<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2.5vw,32px)" }}
            className="hidden md:flex">
            {links.map(({ href, label }) => (
              <button key={href} onClick={() => go(href)} data-hover className="link-line"
                style={{
                  fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: active === href ? "var(--accent)" : "var(--text2)",
                  background: "none", border: "none", cursor: "pointer",
                  transition: "color 0.3s ease", paddingBottom: 2,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { if (active !== href) e.currentTarget.style.color = "var(--text)"; }}
                onMouseLeave={e => { if (active !== href) e.currentTarget.style.color = "var(--text2)"; }}
              >
                {label}
              </button>
            ))}
            {/* Theme toggle */}
            <button onClick={toggle} data-hover aria-label="Toggle theme"
              style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--surface)", border: "1px solid var(--border)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease", color: "var(--text2)", flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-h)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--surface)";   e.currentTarget.style.color = "var(--text2)";  e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          {/* Mobile right */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="flex md:hidden">
            <button onClick={toggle} aria-label="Toggle theme"
              style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "var(--surface)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "var(--text2)",
              }}
            >
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              style={{
                width: 34, height: 34, borderRadius: 8,
                background: "var(--surface)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "var(--text2)",
                transition: "all 0.2s ease",
              }}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: open ? "1px solid var(--border)" : "none",
        }} className="md:hidden">
          <div style={{ padding: "8px 20px 20px" }}>
            {links.map(({ href, label }, i) => (
              <button
                key={href}
                onClick={() => go(href)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "14px 0",
                  borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
                  fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: active === href ? "var(--accent)" : "var(--text)",
                  background: "none", border: "none",
                  borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
                  cursor: "pointer", transition: "color 0.2s",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: "var(--text3)", marginRight: 12, letterSpacing: "0.1em",
                }}>
                  0{i + 1}
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: 60 }} />
    </>
  );
}
