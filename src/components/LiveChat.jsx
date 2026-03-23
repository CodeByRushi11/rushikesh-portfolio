import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const WA = "918010688184";

const QUICK = [
  "Hi! I'd like to hire you 🚀",
  "Can we discuss a project?",
  "I saw your portfolio, let's connect!",
  "Available for internship?",
];

const WA_ICON = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const inputRef = useRef(null);

  /* Focus input when panel opens */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 320);
  }, [open]);

  const send = () => {
    const text =
      msg.trim() ||
      "Hi Rushikesh! I visited your portfolio and would like to connect.";
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setMsg("");
    setOpen(false);
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <style>{`
        /* ── FAB ── */
        @keyframes fabPulse   { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.55)} 60%{box-shadow:0 0 0 14px rgba(37,211,102,0)} }
        @keyframes fabBounce  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .chat-fab {
          position:fixed; bottom:80px; right:18px; z-index:9990;
          width:54px; height:54px; border-radius:50%;
          background:linear-gradient(135deg,#25d366 0%,#128c7e 100%);
          border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 6px 22px rgba(37,211,102,.45);
          animation:fabPulse 2.4s ease infinite, fabBounce 3.2s ease-in-out infinite;
          transition:transform .2s, box-shadow .2s;
        }
        .chat-fab:hover  { animation:none; transform:scale(1.13) translateY(-3px); box-shadow:0 12px 30px rgba(37,211,102,.55); }
        .chat-fab:active { transform:scale(.93); }
        /* Red dot */
        .chat-notif {
          position:absolute; top:5px; right:5px;
          width:11px; height:11px; border-radius:50%;
          background:#ff3b3b; border:2px solid #fff;
          animation:pulse 1.4s ease infinite;
        }
        /* Mobile */
        @media(max-width:480px){
          .chat-fab{ bottom:72px; right:14px; width:50px; height:50px; }
          .chat-panel{ right:0!important; left:0!important; bottom:136px!important; margin:0 10px!important; width:auto!important; max-width:100vw!important; border-radius:18px!important; }
        }
        /* Scrollbar inside chat */
        .chat-scroll::-webkit-scrollbar { width:3px; }
        .chat-scroll::-webkit-scrollbar-track { background:transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background:rgba(37,211,102,.3); border-radius:3px; }
        /* Input */
        .chat-input {
          flex:1; resize:none; padding:9px 12px;
          border-radius:12px;
          background:var(--bg); border:1.5px solid var(--border);
          font-family:var(--font-body); font-size:13px;
          color:var(--text); outline:none; line-height:1.5;
          transition:border-color .2s;
          min-height:40px; max-height:90px;
        }
        .chat-input:focus { border-color:#25d366; }
        .chat-input::placeholder { color:var(--text3); }
        /* Quick chip */
        .chat-chip {
          text-align:left; width:100%; padding:9px 13px;
          border-radius:10px;
          background:var(--surface); border:1px solid var(--border);
          font-family:var(--font-body); font-size:12.5px; color:var(--text2);
          cursor:pointer; transition:all .18s; line-height:1.4;
        }
        .chat-chip:hover { background:rgba(37,211,102,.12); border-color:rgba(37,211,102,.35); color:#25d366; transform:translateX(3px); }
        .chat-chip.selected { background:rgba(37,211,102,.14); border-color:rgba(37,211,102,.4); color:#25d366; }
      `}</style>

      {/* ── FAB ── */}
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.18 }}
            >
              <X size={20} color="#fff" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.18 }}
            >
              <WA_ICON />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="chat-notif" />}
      </button>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            initial={{ opacity: 0, scale: 0.88, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 18 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              position: "fixed",
              bottom: 146,
              right: 18,
              width: "clamp(300px,90vw,360px)",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              boxShadow:
                "0 28px 64px rgba(0,0,0,.55), 0 0 0 1px rgba(37,211,102,.12)",
              overflow: "hidden",
              zIndex: 9989,
              display: "flex",
              flexDirection: "column",
              maxHeight: "clamp(440px,80vh,560px)",
            }}
          >
            {/* ── HEADER ── */}
            <div
              style={{
                background: "linear-gradient(135deg,#25d366 0%,#075e54 100%)",
                padding: "14px 16px",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Avatar */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.18)",
                      border: "2px solid rgba(255,255,255,.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#fff",
                    }}
                  >
                    RI
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 1,
                      right: 1,
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "#fff",
                      border: "2.5px solid #25d366",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Rushikesh Ingole
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11.5,
                      color: "rgba(255,255,255,.82)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#fff",
                        display: "inline-block",
                      }}
                    />
                    Online · Replies fast on WhatsApp
                  </div>
                </div>
                {/* Close X */}
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.15)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#fff",
                    transition: "background .2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,.28)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,.15)")
                  }
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* ── BODY ── */}
            <div
              className="chat-scroll"
              style={{ flex: 1, overflowY: "auto", padding: "14px 14px 0" }}
            >
              {/* Greeting bubble */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                  display: "flex",
                  gap: 9,
                  alignItems: "flex-start",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#25d366,#128c7e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 11,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  RI
                </div>
                <div>
                  <div
                    style={{
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      borderRadius: "0 14px 14px 14px",
                      padding: "10px 14px",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--text2)",
                      lineHeight: 1.6,
                      maxWidth: 230,
                    }}
                  >
                    👋 Hey! Saw you on my portfolio!
                    <br />
                    How can I help? 😊
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      color: "var(--text3)",
                      marginTop: 4,
                      paddingLeft: 2,
                    }}
                  >
                    Just now · ✓✓
                  </div>
                </div>
              </motion.div>

              {/* Quick chips */}
              <div
                style={{
                  marginBottom: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "var(--text3)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  Quick replies
                </div>
                {QUICK.map((q, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06 }}
                    className={`chat-chip${msg === q ? " selected" : ""}`}
                    onClick={() => setMsg(q)}
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ── INPUT ROW ── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              style={{
                padding: "10px 12px 12px",
                borderTop: "1px solid var(--border)",
                flexShrink: 0,
                background: "var(--bg2)",
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                <textarea
                  ref={inputRef}
                  className="chat-input"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Type a message..."
                  rows={1}
                />
                <motion.button
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={send}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "linear-gradient(135deg,#25d366,#128c7e)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(37,211,102,.38)",
                  }}
                >
                  <Send size={16} color="#fff" />
                </motion.button>
              </div>
              <div
                style={{
                  marginTop: 7,
                  textAlign: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  color: "var(--text3)",
                  letterSpacing: "0.06em",
                }}
              >
                Opens WhatsApp · +91 8010688184
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
