import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("#");

  const handleClick = (id) => {
    setActive(id);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-40 flex justify-between items-center px-10 py-4">
      <h1 className="text-2xl font-bold text-blue-600">Rushikesh Ingole</h1>

      <div className="space-x-8 hidden md:flex">
        {["#about", "#projects", "#contact"].map((link) => {
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
              className={`relative text-gray-700 font-medium transition-colors hover:text-blue-600 ${
                active === link ? "text-blue-600" : ""
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
    </nav>
  );
}

export default Navbar;
