/**
 * Portfolio Configuration
 * Centralized constants to avoid hardcoded values
 */

// Site metadata
export const SITE = {
  name: "Rushikesh Ingole",
  title: "Rushikesh Ingole | AI & BI Analyst",
  description:
    "AI & Business Intelligence Analyst. Transforming raw data into strategic decisions.",
  url: "https://rushikesh-dev-portfolio.netlify.app",
  previewImage: "https://rushikesh-dev-portfolio.netlify.app/preview.png",
  favicon: "/favicon.svg",
  author: "Rushikesh Ingole",
  themeColor: "#0a0a0f",
};

// Contact information
export const CONTACT = {
  email: "rushikeshingole467@gmail.com",
  phone: "+918010688184",
  whatsapp: "918010688184",
  linkedin: "https://in.linkedin.com/in/rushikesh-ingole-b02052377",
  github: "https://github.com/CodeByRushi11",
  instagram: "https://www.instagram.com/rishiiii.i12?igsh=MTRoZGtxc3A2dGN4bQ==",
  location: "Nagpur, India",
};

// Navigation links
export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Animation settings
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    page: 0.65,
  },
  easing: [0.16, 1, 0.3, 1],
  reducedMotion: "(prefers-reduced-motion: reduce)",
};

// Scroll settings
export const SCROLL = {
  navHeight: 60,
  scrolledThreshold: 20,
  revealMargin: "-35% 0px -55% 0px",
  mobileBreakpoint: 768,
  touchTargetMin: 44,
};

// View counter settings
export const VIEW_COUNTER = {
  minViews: 100,
  initialBase: 140,
  randomRange: 60,
  fallback: 199,
  storageKey: "ri_views",
  sessionKey: "ri_counted",
};

// Accessibility
export const A11Y = {
  skipToContentId: "main-content",
  focusVisibleOutline: "2px solid var(--accent)",
  focusVisibleOffset: 3,
};

// Performance
export const PERFORMANCE = {
  particleCount: 45,
  particleDensity: 22000,
  mouseInfluenceRadius: 90,
  connectionDistance: 110,
  cursorOuterSize: 36,
  cursorInnerSize: 6,
  lerpFactor: 0.12,
};

// Breakpoints (for CSS reference)
export const BREAKPOINTS = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

// Colors (for reference)
export const COLORS = {
  accent: "#00d4ff",
  accent2: "#7b2ff7",
  accent3: "#ff6b35",
  accent4: "#22c55e",
  whatsapp: "#25d366",
  linkedin: "#0a66c2",
  instagram: "#e1306c",
  github: "#8b949e",
};
