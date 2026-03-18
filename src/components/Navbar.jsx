import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

function Navbar() {
  const [active, setActive] = useState("#");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (id) => {
    setActive(id);
    setMobileMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md dark:shadow-gray-800 z-40 flex justify-between items-center px-6 md:px-10 py-4 border-b border-gray-100 dark:border-gray-700 transition-colors duration-300 animate-slideInDown">
      <h1 className="relative text-2xl font-bold tracking-tight cursor-pointer group">
        <span className="text-blue-600 dark:text-blue-400">
          Rushikesh Ingole
        </span>

        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </h1>

      {/* Desktop Navigation */}
      <div className="space-x-8 hidden md:flex items-center">
        {[
          "#about",
          "#education",
          "#experience",
          "#skills",
          "#projects",
          "#contact",
        ].map((link) => {
          const label =
            link.substring(1).charAt(0).toUpperCase() + link.substring(2);
          return (
            <a
              key={link}
              href={link}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
              className={`relative text-gray-700 dark:text-gray-300 font-semibold transition-colors duration-300 group ${
                active === link
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {label}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 transform transition-transform duration-300 origin-left ${
                  active === link
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          );
        })}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          aria-label="Toggle menu"
        >
          <span className="text-2xl text-gray-900 dark:text-white">
            {mobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg md:hidden animate-slideInDown">
          <div className="flex flex-col p-4 space-y-3">
            {["#about", "#skills", "#projects", "#contact"].map((link) => {
              const label =
                link.substring(1).charAt(0).toUpperCase() + link.substring(2);
              return (
                <a
                  key={link}
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link);
                  }}
                  className={`px-4 py-2 rounded-lg transition ${
                    active === link
                      ? "bg-blue-600 dark:bg-blue-500 text-white font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
