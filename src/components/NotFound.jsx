import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 404 Not Found Page
 */
export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        background: "var(--bg)",
        color: "var(--text)",
      }}
      role="main"
      aria-labelledby="not-found-title"
    >
      <h1
        id="not-found-title"
        style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          fontWeight: 800,
          fontFamily: "var(--font-display)",
          lineHeight: 1,
          marginBottom: "1rem",
          background: "var(--grad-main)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "clamp(1.25rem, 4vw, 2rem)",
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "var(--text2)",
          maxWidth: "400px",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.75rem",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 500,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 20px var(--accent-glow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Home size={18} aria-hidden="true" />
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.75rem",
            background: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 500,
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--surface-h)";
            e.currentTarget.style.borderColor = "var(--border-h)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--surface)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Go Back
        </button>
      </div>
    </motion.div>
  );
}
