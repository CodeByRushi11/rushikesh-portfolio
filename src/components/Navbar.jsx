import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("#");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (id) => {
    setActive(id);
    setMobileMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-lg shadow-md z-40 flex justify-between items-center px-6 md:px-10 py-4 border-b border-gray-100">
      <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
        Rushikesh Ingole
      </h1>

      {/* Desktop Navigation */}
      <div className="space-x-8 hidden md:flex">
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
              className={`relative text-gray-700 font-semibold transition-all duration-200 pb-1 ${
                active === link ? "text-blue-600" : "hover:text-blue-600"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  active === link ? "w-full" : "w-0"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
        aria-label="Toggle menu"
      >
        <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
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
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-700 hover:bg-blue-50"
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
