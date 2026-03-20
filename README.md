# Rushikesh Ingole — Industry-Level Portfolio

> **Premium React portfolio** for Rushikesh Ingole, AI & Business Intelligence Analyst.  
> Built for impact — engineered to keep visitors engaged.

---

## ✨ Design Philosophy

**Aesthetic Direction:** Dark-first luxury tech — deep navy blacks, electric cyan accent (`#00d4ff`), indigo gradient, warm orange highlight. Premium font pairing of **Syne** (display) + **DM Sans** (body) + **JetBrains Mono** (code/labels). Every element intentional, nothing generic.

---

## 🚀 Features

### 🌗 Theme System
- Dark (default) / Light mode with single click toggle in navbar
- Flash-free via inline `<script>` in `index.html`
- Persists via `localStorage`, respects `prefers-color-scheme`
- Full CSS variable system — every color, shadow, background adapts

### 🎬 Animation System — Complete List

| Category | Animations Used |
|---|---|
| **Entrance** | `fadeUp`, `fadeLeft`, `fadeRight`, `zoomIn`, `bounceIn`, `flipX` |
| **Scroll Reveal** | `IntersectionObserver` — `fade-up`, `fade-left`, `fade-right`, `scale`, `flip` |
| **Stagger** | Sequential child reveal (0.07s per child, up to 8 children) |
| **Continuous** | `float`, `floatX`, `spin`, `spinReverse`, `pulse`, `pulseGlow`, `morphBg`, `heartbeat`, `swing`, `waveBar`, `gradientShift`, `marquee` |
| **Text** | `Typewriter` (type + delete loop), `gradientShift` on headline, `glitch` on hover (logo) |
| **Interaction** | `ripple` (click), magnetic hover `translateY + scale`, `3D tilt` (cards), `border-h` glow on hover |
| **Progress** | Skill bar fills (`scaleX` + `IntersectionObserver`), timeline draw line animation |
| **Page** | Loading screen (dual spinner + wave bars), scroll progress bar (gradient), `pageTransition` |
| **Cursor** | Lerp-smoothed outer ring, instant inner dot, hover expand, click shrink, `mix-blend-mode: exclusion` |
| **SVG** | Wave divider, `drawLine` stroke animation in footer |
| **Background** | Canvas particle network (mouse repel, connections), morphing blob gradients |
| **Special** | Tab switch fade, project card 3D lift, footer social icon color swap, timeline progress line |

### 🎨 Visual Details
- **Canvas particle network** in Hero — interactive, mouse-repel, auto-connecting
- **Morphing blob** backgrounds with CSS `border-radius` keyframes
- **Noise texture** overlay for depth and richness
- **Custom CSS scrollbar** — 4px accent-colored
- **Glow border** on cards and buttons (animated gradient border on hover)
- **Wave SVG divider** between sections
- **Ticker/marquee** tech strip in About section
- **Timeline** with animated progress line in Experience
- **Animated skill bars** that fill on scroll

---

## 📁 File Structure

```
├── index.html                          ← Root (flash-free theme init, premium fonts, SEO)
├── public/
│   └── favicon.svg                     ← Custom bar chart + trend line analytics icon
└── src/
    ├── index.css                       ← Full design system: variables, keyframes, all classes
    ├── App.css                         ← Global resets + cursor-none
    ├── main.jsx                        ← React entry point
    ├── App.jsx                         ← Root layout with ThemeProvider
    ├── context/
    │   └── ThemeContext.jsx            ← Dark/light state, localStorage, toggle
    ├── hooks/
    │   ├── useScrollReveal.js         ← IntersectionObserver for all scroll animations
    │   └── useRipple.js               ← Ripple click effect utility
    └── components/
        ├── Navbar.jsx                  ← Fixed nav, active section tracking, theme toggle, glitch logo
        ├── Hero.jsx                    ← Canvas particles, morphing blobs, typewriter, stats row
        ├── About.jsx                   ← Ticker marquee, reveal animations, numbered competency list
        ├── Education.jsx               ← Timeline card with decorative BCA watermark
        ├── Experience.jsx              ← Animated timeline with progress line, dot indicators
        ├── Skills.jsx                  ← Animated progress bars, tool icon cloud, 4-column grid
        ├── Projects.jsx                ← Tab switcher, 3D hover cards, featured badges, ripple links
        ├── Contact.jsx                 ← Slide contact cards, CTA panel, morphing blob bg
        ├── Footer.jsx                  ← Wave SVG divider, status badge, heartbeat icon
        ├── Cursor.jsx                  ← Lerp-smoothed cursor, hover/click states, blend mode
        ├── RotatingTypewriter.jsx      ← Type + delete loop with blinking cursor
        ├── ResumeModal.jsx             ← Backdrop blur modal, zoom animation, PDF preview
        ├── LoadingScreen.jsx           ← Dual ring spinner, wave bars, fade out
        ├── ScrollProgress.jsx          ← Gradient top progress bar
        └── BackToTop.jsx               ← Floating button, fades in at 500px scroll
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Bundler | Vite |
| Styling | Tailwind CSS v4 + CSS variables |
| Fonts | Syne + DM Sans + JetBrains Mono |
| Icons | lucide-react |
| Animations | CSS keyframes + IntersectionObserver + Canvas API |
| Theme | CSS custom properties + localStorage |

---

## 🧩 Getting Started

```bash
# Clone
git clone https://github.com/CodeByRushi11/rushikesh-portfolio.git
cd rushikesh-portfolio

# Install
npm install

# Dev
npm run dev         # http://localhost:5173

# Build
npm run build

# Preview build
npm run preview
```

---

## 📧 Contact

| | |
|---|---|
| Email | rushikeshingole467@gmail.com |
| Phone | +91 8010688184 |
| GitHub | [@CodeByRushi11](https://github.com/CodeByRushi11) |
| LinkedIn | [Rushikesh Ingole](https://www.linkedin.com/in/rushikesh-ingole-b02052377) |

---

> *Turning complex data into actionable business intelligence — one dashboard at a time.*
