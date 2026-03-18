import { Github, Linkedin, Mail } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  getStaggerDelay,
} from "../utils/animationClasses";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/CodeByRushi11",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rushikesh-ingole-b02052377",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rushikeshingole467@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 pt-16 pb-8 border-t border-gray-800 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_UP}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="grid md:grid-cols-3 gap-12 mb-14"
        >
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Rushikesh <span className="text-blue-500">Ingole</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              AI & Business Intelligence Analyst focused on delivering
              data-driven insights, KPI reporting frameworks, and strategic
              analytics solutions that support measurable business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item, idx) => (
                <li
                  key={item.href}
                  className="animate-slideInUp"
                  style={{ animationDelay: getStaggerDelay(idx) }}
                >
                  <a
                    href={item.href}
                    className="hover:text-blue-500 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-blue-600 hover:scale-105 transition-all duration-300 rounded-xl animate-zoomIn"
                    style={{ animationDelay: `${idx * 100}ms` }}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollAnimatedElement>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs md:text-sm text-gray-500 space-y-2 animate-fadeIn">
          <p>© {currentYear} Rushikesh Ingole. All rights reserved.</p>
          <p>Designed and developed using React, Tailwind CSS, and Vite.</p>
          <p className="text-gray-600 dark:text-gray-700">
            Turning complex data into actionable business intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
