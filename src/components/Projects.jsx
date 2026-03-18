import { useState } from "react";
import { Github, ExternalLink, Folder, Filter } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  getStaggerDelay,
} from "../utils/animationClasses";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const analyticsProjects = [
    {
      title: "Chocolate Sales Analysis Power BI Dashboard",
      description:
        "Interactive Power BI dashboard analyzing large-scale chocolate sales data to track revenue, profit, trends, and business performance across products, customers, and regions.",
      github:
        "https://github.com/CodeByRushi11/Chocolate-Sales-Analysis-Power-BI-Dashboard",
      tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      category: "Analytics",
    },
    {
      title: "Credit Card Financial Analytics Dashboard",
      description:
        "Interactive Power BI dashboard analyzing credit card transactions and customer demographics to uncover revenue trends, spending behavior, and business insights.",
      github:
        "https://github.com/CodeByRushi11/credit-card-financial-analytics-dashboard",
      tech: ["Power BI", "DAX", "Power Query", "Data Visualization"],
      category: "Analytics",
    },
    {
      title: "Superstore Sales Analysis",
      description:
        "Comprehensive sales and profitability analysis using Python to identify regional performance trends, high-value product categories, and revenue optimization opportunities.",
      github: "https://github.com/CodeByRushi11/superstore-data-analysis",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      category: "Analytics",
    },
    {
      title: "Grocery Inventory Analytics",
      description:
        "Inventory and KPI analysis using SQL and Python to evaluate stock movement, demand patterns, and data-driven inventory optimization strategies.",
      github: "https://github.com/CodeByRushi11/grocery-inventory-analysis",
      tech: ["Python", "SQL", "Pandas"],
      category: "Analytics",
    },
    {
      title: "Diwali Sales Analysis",
      description:
        "Exploratory data analysis of festive retail sales data to uncover customer segmentation insights, demographic purchasing behavior, and regional revenue distribution.",
      github: "https://github.com/CodeByRushi11/Diwali-Sales-Analysis",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      category: "Analytics",
    },
    {
      title: "Vrinda Store Excel Analysis",
      description:
        "Retail sales performance dashboard built using Excel Pivot Tables and Charts to track KPIs, monthly revenue trends, and category-level performance metrics.",
      github:
        "https://github.com/CodeByRushi11/Vrinda-Store-Excel-Data-Analysis",
      tech: ["Excel", "Pivot Tables", "Dashboard"],
      category: "Analytics",
    },
  ];

  const webProjects = [
    {
      title: "Todo Master",
      description:
        "Responsive task management application with dynamic status indicators, structured state management, and persistent local storage implementation.",
      github:
        "https://github.com/CodeByRushi11/Todo-master-with-Deepseek-Ai.git",
      live: "https://todoappusingdeepseekai.netlify.app/",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      category: "Web",
    },
    {
      title: "Single Vendor Task App",
      description:
        "Authentication-based React application featuring secure login flow, dashboard routing, and structured user navigation architecture.",
      github: "https://github.com/CodeByRushi11/Single-vender-task1",
      live: "https://single-vender-task1.netlify.app/",
      tech: ["React", "Vite", "Routing"],
      category: "Web",
    },
  ];

  const otherProjects = [
    {
      title: "Simple & Scientific Calculator",
      description:
        "Python-based GUI calculator supporting arithmetic and scientific operations using Tkinter.",
      github:
        "https://github.com/CodeByRushi11/Simple-Scientific-Calculator.git",
      tech: ["Python", "Tkinter"],
      category: "Other",
    },
  ];

  const allProjects = [...analyticsProjects, ...webProjects, ...otherProjects];
  const filters = ["All", "Analytics", "Web", "Other"];

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="px-4 md:px-10 py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_DOWN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </ScrollAnimatedElement>

        {/* Filter Buttons */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.SCALE_IN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="flex justify-center gap-3 mb-14 flex-wrap"
        >
          {filters.map((filter, idx) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 animate-slideInUp flex-shrink-0 ${
                activeFilter === filter
                  ? "bg-blue-600 dark:bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              style={{ animationDelay: getStaggerDelay(idx) }}
            >
              {idx === 0 && <Filter size={16} />}
              {filter}
            </button>
          ))}
        </ScrollAnimatedElement>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimatedElement
              key={`${project.title}-${index}`}
              animation={ANIMATION_TYPES.FADE_IN_UP}
              duration={ANIMATION_DURATIONS.NORMAL}
              delay={getStaggerDelay(index)}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <Folder className="w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition flex-shrink-0" />
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </ScrollAnimatedElement>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
