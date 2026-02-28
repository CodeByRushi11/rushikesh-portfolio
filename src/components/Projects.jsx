function Projects() {
  const projects = [
    {
      title: "Single Vendor Task App (React)",
      description:
        "Vite-powered React application with login authentication, forgot password, dashboard routing and post-login navigation.",
      link: "https://github.com/CodeByRushi11/Single-vender-task1",
      tech: ["React", "Vite", "Routing"],
    },
    {
      title: "Superstore Sales Data Analysis",
      description:
        "End-to-end exploratory data analysis using Python, Pandas, NumPy and Matplotlib to uncover sales, profit, and regional trends.",
      link: "https://github.com/CodeByRushi11/superstore-data-analysis",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Grocery Inventory Data Analytics",
      description:
        "Data cleaning, SQL querying, KPI generation and inventory optimization analysis using Python and SQL.",
      link: "https://github.com/CodeByRushi11/grocery-inventory-analysis",
      tech: ["Python", "SQL", "Pandas"],
    },
    {
      title: "Diwali Sales Analysis Using Python",
      description:
        "Performed data cleaning and EDA on festive season sales dataset. Analyzed customer demographics, state-wise sales, product categories and purchasing behavior.",
      link: "https://github.com/CodeByRushi11/Diwali-Sales-Analysis",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Vrinda Store Sales Data Analysis (Excel)",
      description:
        "Retail sales analysis using Excel pivot tables, pivot charts and dashboards to identify monthly trends, gender-wise sales and regional performance.",
      link: "https://github.com/CodeByRushi11/Vrinda-Store-Excel-Data-Analysis",
      tech: ["Microsoft Excel", "Pivot Tables", "Dashboard"],
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 md:px-10 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-gray-900 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 md:p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition leading-tight">
                  {project.title}
                </h3>
                <span className="text-2xl md:text-3xl opacity-20 group-hover:opacity-40 transition flex-shrink-0">
                  📁
                </span>
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition text-sm md:text-base"
              >
                View on GitHub
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
