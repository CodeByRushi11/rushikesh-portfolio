import { Github, Linkedin, Mail, Phone, ArrowUpRight, Heart, Instagram } from "lucide-react";

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const navLinks = [
  ["#about","About"],["#education","Education"],["#experience","Experience"],
  ["#skills","Skills"],["#projects","Projects"],["#contact","Contact"],
];

const socials = [
  { Icon: Github,      href: "https://github.com/CodeByRushi11",                                              label: "GitHub",    color: "#a0a0c0" },
  { Icon: Linkedin,    href: "https://www.linkedin.com/in/rushikesh-ingole-b02052377",                        label: "LinkedIn",  color: "#0a66c2" },
  { Icon: Mail,        href: "mailto:rushikeshingole467@gmail.com",                                            label: "Email",     color: "#00d4ff" },
  { Icon: Phone,       href: "tel:+918010688184",                                                              label: "Call",      color: "#22c55e" },
  { Icon: WhatsAppIcon,href: "https://wa.me/918010688184",                                                     label: "WhatsApp", color: "#25d366" },
  { Icon: Instagram,   href: "https://www.instagram.com/rishiiii.i12?igsh=MTRoZGtxc3A2dGN4bQ==",             label: "Instagram", color: "#e1306c" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--footer-bg)", position: "relative" }}>
      {/* Wave SVG */}
      <div style={{ overflow: "hidden", lineHeight: 0, marginBottom: -1 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(30px,5vw,60px)" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--bg)" />
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,8vw,72px) 20px clamp(24px,5vw,40px)" }}>
        <div className="grid-cols-footer" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "clamp(28px,5vw,48px)", marginBottom: "clamp(40px,7vw,60px)" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px,4vw,26px)", letterSpacing: "-0.04em", color: "#fff", marginBottom: 14 }}>
              RUSHIKESH<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(12px,2vw,14px)", lineHeight: 1.8, color: "rgba(255,255,255,0.4)", maxWidth: 300, marginBottom: 20 }}>
              AI & Business Intelligence Analyst focused on delivering data-driven insights,
              KPI reporting frameworks, and strategic analytics that drive measurable growth.
            </p>
            {/* Contact quick info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
              <a href="tel:+918010688184" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                📞 +91 8010688184
              </a>
              <a href="mailto:rushikeshingole467@gmail.com" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                ✉ rushikeshingole467@gmail.com
              </a>
            </div>
            {/* Social icons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {socials.map(({ Icon, href, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} data-hover
                  style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 6px 16px ${color}40`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Navigation</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="link-line" style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12px,2vw,14px)", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Status</p>
            <div style={{ padding: "12px 14px", borderRadius: 12, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "pulse 2s ease infinite", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#22c55e", letterSpacing: "0.06em" }}>OPEN TO WORK</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px,2vw,12px)", color: "rgba(255,255,255,0.4)", margin: 0 }}>Available for full-time & internship roles</p>
            </div>
            <a href="mailto:rushikeshingole467@gmail.com" data-hover
              style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--accent)", textDecoration: "none", transition: "gap 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.gap = "10px"}
              onMouseLeave={e => e.currentTarget.style.gap = "5px"}>
              Hire me <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "clamp(16px,4vw,28px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px,2vw,12px)", color: "rgba(255,255,255,0.2)" }}>
            © {year} Rushikesh Ingole. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px,2vw,12px)", color: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", gap: 5 }}>
            Built with React & <Heart size={10} style={{ color: "var(--accent)", animation: "heartbeat 2s ease infinite" }} /> Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
