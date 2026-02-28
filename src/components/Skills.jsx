function Skills() {
  const skills = [
    "Python",
    "SQL",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Excel",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Git & GitHub",
  ];

  return (
    <section className="px-10 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white px-4 py-2 rounded-full border border-gray-200 text-gray-700 shadow-sm hover:shadow-md hover:border-blue-300 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
