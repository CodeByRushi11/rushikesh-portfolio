import { useState, useEffect, useRef, useCallback } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SCROLL } from "../config";

const LINKS = [
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
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Merged useEffect for scroll and resize handlers
  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > SCROLL.scrolledThreshold);
    const handleResize = () => {
      if (window.innerWidth >= SCROLL.mobileBreakpoint) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        }),
      { rootMargin: SCROLL.revealMargin, threshold: 0 },
    );

    const t = setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }, 400);

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  const go = useCallback((href) => {
    setActive(href);
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Set focus for accessibility
      target.setAttribute("tabindex", "-1");
      target.focus();
    }
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      <style>{`
        .nd { display:flex;align-items:center;gap:clamp(6px,1.6vw,22px); }
        .nm { display:none;align-items:center;gap:8px; }
        .ndr{ display:none; }
        @media(max-width:767px){ .nd{display:none!important} .nm{display:flex!important} .ndr{display:block!important} }
        .ham{ display:flex;flex-direction:column;gap:5px;align-items:center;justify-content:center; }
        .hl { display:block;width:20px;height:2px;background:currentColor;border-radius:2px;transition:transform .28s,opacity .28s;transform-origin:center; }
        .ho .hl:nth-child(1){ transform:translateY(7px) rotate(45deg); }
        .ho .hl:nth-child(2){ opacity:0;transform:scaleX(0); }
        .ho .hl:nth-child(3){ transform:translateY(-7px) rotate(-45deg); }
        .di{ transform:translateX(-16px);opacity:0;transition:transform .38s cubic-bezier(.16,1,.3,1),opacity .38s; }
        .do .di{ transform:none;opacity:1; }
        .do .di:nth-child(1){transition-delay:.04s} .do .di:nth-child(2){transition-delay:.08s}
        .do .di:nth-child(3){transition-delay:.12s} .do .di:nth-child(4){transition-delay:.16s}
        .do .di:nth-child(5){transition-delay:.20s} .do .di:nth-child(6){transition-delay:.24s}
        .do .di:nth-child(7){transition-delay:.28s}
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          background: scrolled || open ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled || open ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || open ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transition: "background .35s,border-color .35s,box-shadow .35s",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,.10)" : "none",
        }}
        className="anim-fade-down"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(14px,4vw,32px)",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="glitch"
            data-text="RUSHIKESH."
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(14px,3.5vw,19px)",
              color: "var(--text)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.04em",
              padding: 0,
              whiteSpace: "nowrap",
              transition: "color .22s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
            aria-label="Go to homepage"
          >
            RUSHIKESH<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="nd" role="menubar">
            {LINKS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`nav-link${active === href ? " active" : ""}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: active === href ? 600 : 400,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: active === href ? "var(--accent)" : "var(--text2)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 2px 6px",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => {
                  if (active !== href)
                    e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  if (active !== href)
                    e.currentTarget.style.color = "var(--text2)";
                }}
                role="menuitem"
                aria-current={active === href ? "page" : undefined}
              >
                {label}
              </button>
            ))}
            <div
              style={{
                width: 1,
                height: 16,
                background: "var(--border)",
                flexShrink: 0,
                margin: "0 4px",
              }}
            />
            <button
              onClick={toggle}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .22s",
                color: "var(--text2)",
                flexShrink: 0,
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
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="nm">
            <button
              onClick={toggle}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              style={{
                width: 34,
                height: 34,
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
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>
            <button
              onClick={toggleMenu}
              className={open ? "ho" : ""}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: open ? "rgba(0,212,255,.10)" : "var(--surface)",
                border: `1px solid ${open ? "var(--border-h)" : "var(--border)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: open ? "var(--accent)" : "var(--text2)",
                transition: "all .22s",
              }}
            >
              <div className="ham">
                <span className="hl" />
                <span className="hl" />
                <span className="hl" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className="ndr"
          style={{
            overflow: "hidden",
            maxHeight: open ? "560px" : "0",
            transition: "max-height .48s cubic-bezier(.16,1,.3,1)",
            background: "var(--nav-bg)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            borderTop: open ? "1px solid var(--border)" : "none",
          }}
          role="menu"
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          <div
            className={open ? "do" : ""}
            style={{ padding: "8px clamp(14px,4vw,24px) 22px" }}
          >
            {LINKS.map(({ href, label }, i) => (
              <button
                key={href}
                onClick={() => go(href)}
                className="di"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  textAlign: "left",
                  padding: "13px 0",
                  border: "none",
                  borderBottom:
                    i < LINKS.length - 1 ? "1px solid var(--border)" : "none",
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: active === href ? "var(--accent)" : "var(--text)",
                  background: "none",
                  cursor: "pointer",
                  transition: "color .2s,padding-left .2s",
                }}
                onMouseEnter={(e) => {
                  if (active !== href) {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.paddingLeft = "6px";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== href) {
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.paddingLeft = "0";
                  }
                }}
                role="menuitem"
                aria-current={active === href ? "page" : undefined}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: active === href ? "var(--accent)" : "var(--text3)",
                    minWidth: 22,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
                {active === href && (
                  <span
                    style={{
                      marginLeft: "auto",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      boxShadow: "0 0 6px var(--accent)",
                    }}
                  />
                )}
              </button>
            ))}
            <div
              className="di"
              style={{
                marginTop: 14,
                paddingTop: 14,
                borderTop: "1px solid var(--border)",
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:+918010688184"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 12px",
                  borderRadius: 8,
                  background: "rgba(34,197,94,.09)",
                  border: "1px solid rgba(34,197,94,.25)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#22c55e",
                  textDecoration: "none",
                }}
                aria-label="Call +91 8010688184"
              >
                📞 +91 8010688184
              </a>
              <a
                href="https://wa.me/918010688184"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 12px",
                  borderRadius: 8,
                  background: "rgba(37,211,102,.09)",
                  border: "1px solid rgba(37,211,102,.25)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#25d366",
                  textDecoration: "none",
                }}
                aria-label="Open WhatsApp (opens in new tab)"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: 60 }} />
    </>
  );
}
