import { Component } from "react";

/**
 * Error Boundary Component
 * Catches React errors and displays fallback UI
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
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
          role="alert"
          aria-live="assertive"
        >
          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              marginBottom: "1rem",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              color: "var(--text2)",
              marginBottom: "1.5rem",
              maxWidth: "400px",
            }}
          >
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          <button
            onClick={this.handleRetry}
            style={{
              padding: "0.75rem 1.5rem",
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
