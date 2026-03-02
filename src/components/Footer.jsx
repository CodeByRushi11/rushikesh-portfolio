import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-14">
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
              ].map((item) => (
                <li key={item.href}>
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
              <a
                href="https://github.com/CodeByRushi11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:rushikeshingole467@gmail.com"
                className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs md:text-sm text-gray-500 space-y-2">
          <p>© {currentYear} Rushikesh Ingole. All rights reserved.</p>
          <p>Designed and developed using React, Tailwind CSS, and Vite.</p>
          <p className="text-gray-600">
            Turning complex data into actionable business intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
