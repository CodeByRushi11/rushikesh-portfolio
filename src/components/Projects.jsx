import { Github, ExternalLink, Folder } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Superstore Sales Data Analysis",
      description:
        "End-to-end exploratory data analysis using Python, Pandas, NumPy and Matplotlib to uncover sales, profit and regional trends.",
      github: "https://github.com/CodeByRushi11/superstore-data-analysis",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Grocery Inventory Data Analytics",
      description:
        "Data cleaning, SQL querying, KPI generation and inventory optimization analysis using Python and SQL.",
      github: "https://github.com/CodeByRushi11/grocery-inventory-analysis",
      tech: ["Python", "SQL", "Pandas"],
    },
    {
      title: "Diwali Sales Analysis",
      description:
        "Data cleaning and EDA on festive season sales dataset. Analyzed demographics, state-wise sales and purchasing behavior.",
      github: "https://github.com/CodeByRushi11/Diwali-Sales-Analysis",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Simple + Scientific Calculator",
      description:
        "Beginner-friendly Python GUI calculator built with Tkinter supporting arithmetic and scientific functions (sin, cos, log, sqrt, factorial).",
      github:
        "https://github.com/CodeByRushi11/Simple-Scientific-Calculator.git",
      tech: ["Python", "Tkinter", "Math Module"],
    },
    {
      title: "Vrinda Store Sales Analysis (Excel)",
      description:
        "Retail sales analysis using Excel pivot tables, pivot charts and dashboards to identify trends and performance metrics.",
      github:
        "https://github.com/CodeByRushi11/Vrinda-Store-Excel-Data-Analysis",
      tech: ["Excel", "Pivot Tables", "Dashboard"],
    },

    {
      title: "Todo Master",
      description:
        "Modern responsive task management application with due dates, edit functionality, smart status indicators (Overdue, Today, Tomorrow) and persistent local storage.",
      github:
        "https://github.com/CodeByRushi11/Todo-master-with-Deepseek-Ai.git",
      live: "https://todoappusingdeepseekai.netlify.app/",
      tech: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
      featured: true,
    },
    {
      title: "Single Vendor Task App",
      description:
        "Authentication-based React application with login, forgot password, dashboard routing and structured post-login navigation.",
      github: "https://github.com/CodeByRushi11/Single-vender-task1",
      live: "https://single-vender-task1.netlify.app/",
      tech: ["React", "Vite", "Routing"],
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 md:px-10 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <Folder className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition" />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
