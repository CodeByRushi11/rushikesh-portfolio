function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      category: "Web Development",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel"],
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 md:px-10 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-gray-900 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 pb-3 border-b-2 border-blue-200">
                {section.category}
              </h3>
              <div className="space-y-2">
                {section.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white px-4 py-3 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md hover:border-blue-600 transition-all duration-200 font-medium text-gray-800 text-sm md:text-base"
                  >
                    {skill}
                  </div>
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
