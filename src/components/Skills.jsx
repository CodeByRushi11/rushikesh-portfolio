import { Code2, Database, BarChart3, GitBranch } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  getStaggerDelay,
} from "../utils/animationClasses";

function Skills() {
  const skillsData = [
    {
      category: "Data Analytics & Business Intelligence",
      icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        "Exploratory Data Analysis (EDA)",
        "KPI Reporting",
        "Dashboard Development",
        "Power BI",
        "Excel (Pivot Tables & Charts)",
      ],
    },
    {
      category: "Data Tools & Technologies",
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      category: "Business & Analytical Capabilities",
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        "Sales Trend Analysis",
        "Customer Segmentation",
        "Inventory Optimization",
        "Regional Performance Analysis",
        "Data Cleaning & Preparation",
      ],
    },
    {
      category: "Technical Implementation",
      icon: <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ["React", "Tailwind CSS", "Git", "GitHub", "Vite"],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Analytical Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </ScrollAnimatedElement>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((section, index) => (
            <ScrollAnimatedElement
              key={index}
              animation={ANIMATION_TYPES.SCALE_IN}
              duration={ANIMATION_DURATIONS.NORMAL}
              delay={getStaggerDelay(index)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {section.category}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollAnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
