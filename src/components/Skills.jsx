import { Code2, Database, BarChart3, GitBranch } from "lucide-react";

function Skills() {
  const skillsData = [
    {
      category: "Data Analytics & Business Intelligence",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
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
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      category: "Business & Analytical Capabilities",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
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
      icon: <GitBranch className="w-6 h-6 text-blue-600" />,
      skills: ["React", "Tailwind CSS", "Git", "GitHub", "Vite"],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 md:px-10 py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills & Analytical Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h3 className="text-lg font-bold text-gray-800">
                  {section.category}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
