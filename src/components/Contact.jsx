import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle, Instagram } from "lucide-react";
import { addRipple } from "../hooks/useRipple";

/* WhatsApp SVG icon */
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: "rushikeshingole467@gmail.com",
    href: "mailto:rushikeshingole467@gmail.com",
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.08)",
    action: "Send Email",
  },
  {
    Icon: Phone,
    label: "Phone / Call",
    value: "+91 8010688184",
    href: "tel:+918010688184",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    action: "Call Now",
  },
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+91 8010688184",
    href: "https://wa.me/918010688184",
    color: "#25d366",
    bg: "rgba(37,211,102,0.08)",
    action: "Message on WhatsApp",
    external: true,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "rushikesh-ingole-b02052377",
    href: "https://in.linkedin.com/in/rushikesh-ingole-b02052377",
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.08)",
    action: "Connect on LinkedIn",
    external: true,
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@rishiiii.i12",
    href: "https://www.instagram.com/rishiiii.i12?igsh=MTRoZGtxc3A2dGN4bQ==",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.08)",
    action: "Follow on Instagram",
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "CodeByRushi11",
    href: "https://github.com/CodeByRushi11",
    color: "#a0a0c0",
    bg: "rgba(160,160,192,0.08)",
    action: "View GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg)", padding: "clamp(60px,10vw,100px) 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,8vw,72px)" }} data-reveal="up">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>
            <Send size={12} /> Get In Touch
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,6vw,56px)", letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.05, marginBottom: 16 }}>
            Let's build something<br />
            <span className="grad-text">remarkable together</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(13px,2.2vw,16px)", lineHeight: 1.7, color: "var(--text2)", maxWidth: 500, margin: "0 auto" }}>
            Open to full-time roles, internships, freelance analytics projects, and collaborations.
            Reach me on any platform below.
          </p>
          <div className="section-line" style={{ margin: "24px auto 0" }} />
        </div>

        {/* Contact cards grid */}
        <div
          data-stagger data-reveal="up"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(clamp(240px,40vw,300px), 1fr))", gap: 16, marginBottom: 48 }}
        >
          {contacts.map(({ Icon, label, value, href, color, bg, action, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass btn"
              onClick={e => addRipple(e, `${bg}`)}
              data-hover
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "clamp(14px,3vw,20px)", borderRadius: 16, textDecoration: "none", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${color}20`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--card-shadow)"; }}
            >
              {/* Icon circle */}
              <div style={{ width: 46, height: 46, borderRadius: 14, flexShrink: 0, background: bg, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", color, transition: "transform 0.3s ease" }}>
                <Icon />
              </div>
              {/* Text */}
              <div style={{ overflow: "hidden", flex: 1 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--text3)", textTransform: "uppercase", marginBottom: 2 }}>
                  {label}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "clamp(12px,2vw,14px)", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {value}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color, marginTop: 2, opacity: 0.8 }}>
                  {action} →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA card */}
        <div className="glass" data-reveal="up" style={{ borderRadius: 20, padding: "clamp(28px,5vw,44px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Blobs */}
          <div className="anim-morph" style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, background: "radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div className="anim-morph" style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, background: "radial-gradient(circle,rgba(123,47,247,0.06) 0%,transparent 70%)", pointerEvents: "none", animationDelay: "-3s" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "10px 20px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)" }}>
              <MapPin size={16} style={{ color: "var(--accent)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text2)" }}>Nagpur, Maharashtra, India</span>
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(20px,4vw,28px)", letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.3, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Ready to turn your data into decisions?
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(13px,2vw,15px)", lineHeight: 1.7, color: "var(--text2)", marginBottom: 28, maxWidth: 420, margin: "0 auto 28px" }}>
              Whether you're looking for a data analyst, BI developer, or analytics consultant — I'm available and excited to collaborate.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <a href="mailto:rushikeshingole467@gmail.com" className="btn" onClick={e => addRipple(e, "rgba(255,255,255,0.2)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: "var(--grad-main)", backgroundSize: "200%", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,212,255,0.2)" }}>
                <Mail size={15} /> Send Email
              </a>
              <a href="https://wa.me/918010688184" target="_blank" rel="noopener noreferrer" className="btn" onClick={e => addRipple(e, "rgba(37,211,102,0.2)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25d366", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                <span style={{ display: "flex", color: "#25d366" }}><WhatsAppIcon /></span> WhatsApp
              </a>
              <a href="tel:+918010688184" className="btn" onClick={e => addRipple(e, "rgba(34,197,94,0.2)")} data-hover
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                <Phone size={15} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
