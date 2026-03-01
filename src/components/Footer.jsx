import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Rushikesh <span className="text-blue-500">Ingole</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              AI & Business Intelligence Analyst passionate about transforming
              data into meaningful insights and building scalable web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["#about", "#skills", "#projects", "#contact"].map((link) => {
                const label =
                  link.substring(1).charAt(0).toUpperCase() + link.substring(2);
                return (
                  <li key={link}>
                    <a href={link} className="hover:text-blue-500 transition">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/CodeByRushi11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:your-email@example.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs md:text-sm text-gray-500">
          <p className="mb-2">
            © {currentYear} Rushikesh Ingole. All rights reserved.
          </p>
          <p>Built with React, Tailwind CSS & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
