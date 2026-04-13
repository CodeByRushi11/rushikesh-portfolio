import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, BarChart3, GitBranch, Zap } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   BIG TECH ICONS — SVG brand-accurate, shield/badge style
   like the HTML5 logo shown. Each has a colour + letter/svg.
───────────────────────────────────────────────────────── */
const TECH_ICONS = [
  {
    label: "Python",
    color: "#3776AB",
    bg: "#FFD43B",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <linearGradient
          id="pyG1"
          x1="70.252"
          y1="1237.476"
          x2="170.659"
          y2="1151.089"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#5A9FD4" />
          <stop offset="1" stopColor="#306998" />
        </linearGradient>
        <linearGradient
          id="pyG2"
          x1="209.474"
          y1="1098.811"
          x2="173.62"
          y2="1149.537"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#FFD43B" />
          <stop offset="1" stopColor="#FFE873" />
        </linearGradient>
        <path
          fill="url(#pyG1)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        />
        <path
          fill="url(#pyG2)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        />
      </svg>
    ),
  },
  {
    label: "Power BI",
    color: "#F2C811",
    bg: "#0078D4",
    icon: (
      <svg viewBox="0 0 32 32" width="52" height="52">
        <rect x="2" y="18" width="5" height="12" rx="1.5" fill="#F2C811" />
        <rect
          x="9"
          y="12"
          width="5"
          height="18"
          rx="1.5"
          fill="#F2C811"
          opacity=".85"
        />
        <rect
          x="16"
          y="6"
          width="5"
          height="24"
          rx="1.5"
          fill="#F2C811"
          opacity=".7"
        />
        <rect
          x="23"
          y="2"
          width="5"
          height="28"
          rx="1.5"
          fill="#F2C811"
          opacity=".55"
        />
      </svg>
    ),
  },
  {
    label: "SQL",
    color: "#00758F",
    bg: "#F29111",
    icon: (
      <svg viewBox="0 0 80 80" width="52" height="52">
        <ellipse cx="40" cy="18" rx="30" ry="10" fill="#F29111" />
        <path
          d="M10 18v14c0 5.5 13.4 10 30 10s30-4.5 30-10V18"
          fill="none"
          stroke="#F29111"
          strokeWidth="3.5"
        />
        <path
          d="M10 32v14c0 5.5 13.4 10 30 10s30-4.5 30-10V32"
          fill="none"
          stroke="#F29111"
          strokeWidth="3.5"
        />
        <path
          d="M10 46v14c0 5.5 13.4 10 30 10s30-4.5 30-10V46"
          fill="none"
          stroke="#F29111"
          strokeWidth="3.5"
        />
      </svg>
    ),
  },
  {
    label: "Excel",
    color: "#217346",
    bg: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52">
        <rect width="48" height="48" rx="6" fill="#217346" />
        <text
          x="6"
          y="34"
          fontFamily="Arial"
          fontWeight="900"
          fontSize="26"
          fill="white"
        >
          Ex
        </text>
        <line
          x1="28"
          y1="8"
          x2="40"
          y2="40"
          stroke="#7ED957"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="8"
          x2="28"
          y2="40"
          stroke="#7ED957"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Pandas",
    color: "#150458",
    bg: "#E70488",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52">
        <rect x="4" y="4" width="12" height="40" rx="6" fill="#150458" />
        <rect x="18" y="4" width="12" height="40" rx="6" fill="#E70488" />
        <rect x="32" y="4" width="12" height="40" rx="6" fill="#150458" />
        <rect
          x="4"
          y="16"
          width="40"
          height="10"
          rx="5"
          fill="#E70488"
          opacity=".7"
        />
      </svg>
    ),
  },
  {
    label: "React",
    color: "#61DAFB",
    bg: "#20232A",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.4-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4.1-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.3 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.3 2.3.8 4.7 1.4 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.4 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4.1 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.3 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.3-2.3-.8-4.7-1.4-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.8-.2-2.2 2.9-4.5 5.7-6.8 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.8.2 2.2-2.9 4.5-5.7 6.8-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2-2.2-4.1-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.4 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 71.8 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9.2-26.3c-2 .8-4.2 1.4-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 7.8 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
        </g>
      </svg>
    ),
  },
  {
    label: "Matplotlib",
    color: "#11557C",
    bg: "#E5F0FB",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52">
        <rect width="48" height="48" rx="6" fill="#11557C" />
        <polyline
          points="4,40 14,22 24,30 34,14 44,20"
          fill="none"
          stroke="#FF9900"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <polyline
          points="4,40 14,28 24,36 34,20 44,26"
          fill="none"
          stroke="#4CB3D4"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line x1="4" y1="8" x2="4" y2="44" stroke="white" strokeWidth="2" />
        <line x1="4" y1="44" x2="44" y2="44" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "NumPy",
    color: "#013243",
    bg: "#4DABCF",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52">
        <rect width="48" height="48" rx="6" fill="#013243" />
        <text
          x="5"
          y="30"
          fontFamily="Arial"
          fontWeight="900"
          fontSize="18"
          fill="#4DABCF"
        >
          Nu
        </text>
        <text
          x="24"
          y="30"
          fontFamily="Arial"
          fontWeight="900"
          fontSize="18"
          fill="#white"
        >
          mPy
        </text>
        <rect
          x="4"
          y="33"
          width="40"
          height="3"
          rx="1.5"
          fill="#4DABCF"
          opacity=".6"
        />
      </svg>
    ),
  },
  {
    label: "Seaborn",
    color: "#4878CF",
    bg: "#F0F4FF",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52">
        <rect width="48" height="48" rx="6" fill="#4878CF" />
        <ellipse
          cx="24"
          cy="24"
          rx="16"
          ry="16"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity=".4"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="10"
          ry="10"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity=".6"
        />
        <circle cx="24" cy="24" r="4" fill="white" />
        <line
          x1="24"
          y1="8"
          x2="24"
          y2="40"
          stroke="white"
          strokeWidth="1.5"
          opacity=".5"
        />
        <line
          x1="8"
          y1="24"
          x2="40"
          y2="24"
          stroke="white"
          strokeWidth="1.5"
          opacity=".5"
        />
      </svg>
    ),
  },
  {
    label: "Git",
    color: "#F05032",
    bg: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <path
          fill="#F34F29"
          d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993L87.81 55.927c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521L68.578 47.933l-.001 33.045a9.694 9.694 0 0 1 2.559 1.828c3.779 3.779 3.779 9.898 0 13.683-3.779 3.779-9.904 3.779-13.679 0-3.778-3.784-3.778-9.904 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L40.979 20.14 3.256 57.864c-3.175 3.175-3.175 8.32 0 11.497l55.117 55.117c3.174 3.174 8.32 3.174 11.499 0l54.858-54.859c3.175-3.176 3.175-8.327.012-11.241z"
        />
      </svg>
    ),
  },
  {
    label: "JavaScript",
    color: "#F7DF1E",
    bg: "#323330",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <rect width="128" height="128" fill="#F7DF1E" />
        <path d="M2 1h125v125H2z" fill="#F7DF1E" />
        <path d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
      </svg>
    ),
  },
  {
    label: "Tailwind",
    color: "#06B6D4",
    bg: "#0F172A",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <path
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.652C72.883 56.629 79.648 63.5 96.004 63.5c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.653-6.27-6.371-13.038-13.245-29.394-13.245zM32.004 63.5c-17.066 0-27.73 8.531-32 25.602C6.402 80.566 13.87 77.367 22.402 79.5c4.871 1.215 8.352 4.746 12.207 8.653 6.274 6.371 13.038 13.245 29.395 13.245 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.745-12.207-8.652C55.128 70.374 48.36 63.5 32.004 63.5z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    label: "HTML",
    color: "#E34F26",
    bg: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        />
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        />
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        />
      </svg>
    ),
  },
  {
    label: "CSS",
    color: "#1572B6",
    bg: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <path
          fill="#1572B6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        />
        <path
          fill="#33A9DC"
          d="M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"
        />
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
        />
        <path
          fill="#EBEBEB"
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        />
        <path
          fill="#fff"
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
        />
        <path
          fill="#EBEBEB"
          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        />
      </svg>
    ),
  },
  {
    label: "Vite",
    color: "#646CFF",
    bg: "#1A1A2E",
    icon: (
      <svg viewBox="0 0 128 128" width="52" height="52">
        <path
          d="M120.83 25.6L67.13 118.4a3.6 3.6 0 01-6.26 0L7.17 25.6a3.6 3.6 0 013.7-5.3l52.56 9.52a3.6 3.6 0 001.14 0l51.45-9.51a3.6 3.6 0 013.81 5.29z"
          fill="#646CFF"
        />
        <path
          d="M85.13 6.65L48.6 13.64a1.8 1.8 0 00-1.47 1.67l-2.24 38.06a1.8 1.8 0 002.08 1.85l10.28-1.87a1.8 1.8 0 012.05 2.08l-3.06 15.15a1.8 1.8 0 002.19 2.06l6.34-1.94a1.8 1.8 0 012.19 2.07l-4.86 23.5a1.12 1.12 0 001.93.82l1.28-1.09 28.37-56.57a1.8 1.8 0 00-1.92-2.59l-10.5 2.02a1.8 1.8 0 01-2.07-2.2l6.87-26.73a1.8 1.8 0 00-1.92-2.27z"
          fill="#FFD62E"
        />
      </svg>
    ),
  },
  {
    label: "DAX",
    color: "#F2C811",
    bg: "#0B3D6B",
    icon: (
      <svg viewBox="0 0 48 48" width="52" height="52">
        <rect width="48" height="48" rx="6" fill="#0B3D6B" />
        <text
          x="4"
          y="33"
          fontFamily="Arial Black"
          fontWeight="900"
          fontSize="22"
          fill="#F2C811"
        >
          DAX
        </text>
        <rect
          x="4"
          y="36"
          width="40"
          height="3"
          rx="1.5"
          fill="#F2C811"
          opacity=".5"
        />
      </svg>
    ),
  },
];

const CATS = [
  {
    Icon: BarChart3,
    label: "Analytics & BI",
    color: "#00d4ff",
    skills: [
      { n: "Power BI", p: 85 },
      { n: "EDA & Analysis", p: 90 },
      { n: "KPI Reporting", p: 88 },
      { n: "Excel Dashboards", p: 82 },
    ],
  },
  {
    Icon: Database,
    label: "Data & Languages",
    color: "#7b2ff7",
    skills: [
      { n: "Python", p: 80 },
      { n: "SQL", p: 85 },
      { n: "Pandas / NumPy", p: 82 },
      { n: "Matplotlib / Seaborn", p: 78 },
    ],
  },
  {
    Icon: Code2,
    label: "Business Skills",
    color: "#06b6d4",
    skills: [
      { n: "Sales Analysis", p: 88 },
      { n: "Customer Segmentation", p: 80 },
      { n: "Inventory Optimization", p: 75 },
      { n: "Data Cleaning", p: 92 },
    ],
  },
  {
    Icon: GitBranch,
    label: "Technical Stack",
    color: "#ff6b35",
    skills: [
      { n: "React", p: 78 },
      { n: "Tailwind CSS", p: 82 },
      { n: "Git & GitHub", p: 80 },
      { n: "Vite", p: 74 },
    ],
  },
];

/* ── Animated circular progress ring (original) ── */
function Ring({ pct, color, size = 36 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const r = (size - 4) / 2,
    c = 2 * Math.PI * r,
    off = c - (pct / 100) * c;
  return (
    <svg ref={ref} width={size} height={size} style={{ flexShrink: 0 }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--border)"
        strokeWidth="2.5"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeDasharray={c}
        strokeDashoffset={inView ? off : c}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          transition: "stroke-dashoffset 1.3s cubic-bezier(.16,1,.3,1) .15s",
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color}
        fontSize="9"
        fontFamily="var(--font-mono)"
        fontWeight="700"
      >
        {pct}
      </text>
    </svg>
  );
}

/* ── Big tech icon card with glassmorphism ── */
function TechIconCard({ label, color, bg, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: index * 0.05,
        type: "spring",
        stiffness: 360,
        damping: 22,
      }}
      whileHover={{ y: -10, scale: 1.08, rotateY: 8 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        cursor: "default",
        perspective: 600,
      }}
    >
      {/* Glass shield card */}
      <div
        style={{
          position: "relative",
          width: "clamp(80px,11vw,100px)",
          height: "clamp(88px,12vw,108px)",
          borderRadius: 16,
          /* Glassmorphism */
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px) saturate(140%)",
          WebkitBackdropFilter: "blur(10px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition:
            "box-shadow .28s, border-color .28s, transform .28s cubic-bezier(.16,1,.3,1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 16px 48px ${color}33, inset 0 1px 0 rgba(255,255,255,.2)`;
          e.currentTarget.style.borderColor = color + "55";
          e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.15)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
          e.currentTarget.style.transform = "none";
        }}
      >
        {/* Subtle colour glow at back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 70%,${color}18,transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        {/* Shimmer top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: `linear-gradient(90deg,transparent,${color}80,transparent)`,
            pointerEvents: "none",
          }}
        />
        {icon}
      </div>
      {/* Label */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(9px,1.5vw,11px)",
          letterSpacing: "0.06em",
          color: "var(--text2)",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ── Skill card with glassmorphism + original effects ── */
function SkillCard({ Icon, label, skills, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.09,
        type: "spring",
        stiffness: 260,
        damping: 28,
      }}
      whileHover={{ rotateX: 3, rotateY: -4, scale: 1.02 }}
      style={{
        /* Glassmorphism */
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px) saturate(140%)",
        WebkitBackdropFilter: "blur(10px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10)",
        borderRadius: "clamp(14px,2.5vw,18px)",
        padding: "clamp(16px,3vw,24px)",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow .3s, border-color .3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color + "50";
        e.currentTarget.style.boxShadow = `0 16px 48px ${color}15, inset 0 1px 0 rgba(255,255,255,0.18)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
        e.currentTarget.style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10)";
      }}
    >
      {/* Orbit decoration (original) */}
      <div
        style={{
          position: "absolute",
          top: -18,
          right: -18,
          width: 72,
          height: 72,
          borderRadius: "50%",
          border: `1px dashed ${color}28`,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />{" "}
      {/* ★ PERF: no spin - was causing per-card layout */}
      {/* Glass shine strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)`,
          pointerEvents: "none",
        }}
      />
      {/* Colour glow corner */}
      <div
        style={{
          position: "absolute",
          top: -24,
          right: -24,
          width: 80,
          height: 80,
          background: `radial-gradient(circle,${color}18,transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          marginBottom: "clamp(14px,2.5vw,18px)",
        }}
      >
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 11,
            /* Glassmorphism icon bg */
            background: `rgba(255,255,255,0.06)`,
            backdropFilter: "blur(8px)",
            border: `1px solid ${color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `inset 0 1px 0 rgba(255,255,255,.12), 0 2px 8px ${color}22`,
          }}
        >
          <Icon size={17} style={{ color }} />
        </motion.div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(12px,2.2vw,14px)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          {label}
        </h3>
      </div>
      {/* Skills with ring + bar (original) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(9px,1.8vw,13px)",
        }}
      >
        {skills.map(({ n, p }) => (
          <div key={n}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(11px,1.8vw,13px)",
                  color: "var(--text2)",
                }}
              >
                {n}
              </span>
              <Ring pct={p} color={color} size={34} />
            </div>
            <div
              style={{
                height: 2.5,
                borderRadius: 2,
                background: "rgba(255,255,255,0.07)",
                overflow: "hidden",
              }}
            >
              <div
                className="bar-fill"
                style={{
                  height: "100%",
                  borderRadius: 2,
                  background: `linear-gradient(90deg,${color},${color}80)`,
                  width: `${p}%`,
                  boxShadow: `0 0 5px ${color}44`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: "var(--bg)", padding: "clamp(60px,9vw,100px) 20px" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* ── Section Header ── */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "clamp(32px,6vw,52px)" }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sec-eyebrow">
            <Zap size={11} /> Skills & Expertise
          </div>
          <h2 className="sec-title">
            What I bring to <span className="grad-text">the table</span>
          </h2>
          <p className="sec-sub">
            A well-rounded toolkit combining data analysis, business
            intelligence, and web development.
          </p>
          <div className="section-line" />
        </motion.div>

        {/* ── BIG TECH ICONS GRID ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Glassmorphism container */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 22,
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
              padding: "clamp(20px,4vw,36px) clamp(16px,3vw,28px)",
              marginBottom: "clamp(36px,7vw,56px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle gradient behind icons */}
            <div
              style={{
                position: "absolute",
                top: -60,
                left: "20%",
                width: 300,
                height: 200,
                background:
                  "radial-gradient(ellipse,rgba(0,212,255,0.06),transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -60,
                right: "15%",
                width: 280,
                height: 200,
                background:
                  "radial-gradient(ellipse,rgba(123,47,247,0.06),transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Label */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "clamp(18px,3vw,28px)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(9px,1.6vw,11px)",
                  letterSpacing: "0.14em",
                  color: "var(--text3)",
                  textTransform: "uppercase",
                }}
              >
                Technologies & Tools
              </span>
            </div>

            {/* Icon grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill,minmax(clamp(80px,10vw,100px),1fr))",
                gap: "clamp(12px,2.5vw,20px)",
                justifyItems: "center",
              }}
            >
              {TECH_ICONS.map(({ label, color, bg, icon }, i) => (
                <TechIconCard
                  key={label}
                  label={label}
                  color={color}
                  bg={bg}
                  icon={icon}
                  index={i}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── SKILL CARDS (original + glassmorphism) ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))",
            gap: "clamp(14px,2.5vw,22px)",
          }}
        >
          {CATS.map((c, i) => (
            <SkillCard key={c.label} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
