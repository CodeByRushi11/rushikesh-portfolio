import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (href) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glitch"
            data-text="RI"
            data-hover
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 22,
              color: "var(--text)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.04em",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
          >
            RUSHIKESH INGOLE<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Desktop links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 36 }}
            className="hidden md:flex"
          >
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => go(href)}
                data-hover
                className="link-line"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: active === href ? "var(--accent)" : "var(--text2)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  paddingBottom: 2,
                }}
                onMouseEnter={(e) => {
                  if (active !== href)
                    e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  if (active !== href)
                    e.currentTarget.style.color = "var(--text2)";
                }}
              >
                {label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              data-hover
              aria-label="Toggle theme"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                color: "var(--text2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--surface-h)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--surface)";
                e.currentTarget.style.color = "var(--text2)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <span style={{ transition: "all 0.4s ease", display: "flex" }}>
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </span>
            </button>
          </div>

          {/* Mobile right */}
          <div
            style={{ display: "flex", gap: 12, alignItems: "center" }}
            className="flex md:hidden"
          >
            <button
              onClick={toggle}
              data-hover
              aria-label="Toggle theme"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text2)",
              }}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              data-hover
              aria-label="Menu"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text2)",
              }}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div
            className="anim-fade-down"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border)",
              padding: "16px 24px 24px",
            }}
          >
            {links.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => go(href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: active === href ? "var(--accent)" : "var(--text)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div style={{ height: 68 }} />
    </>
  );
}
