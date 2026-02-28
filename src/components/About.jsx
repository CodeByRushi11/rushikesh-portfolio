function About() {
  return (
    <section
      id="about"
      className="px-4 md:px-10 py-16 md:py-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
          About Me
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            I am an aspiring AI & Business Intelligence Analyst from Nagpur with
            hands-on experience in data analytics, SQL, Python, Excel
            dashboards, and React development. Currently training at MIDC Skill
            Development Center, focusing on AI, data science, and business
            intelligence solutions. I'm passionate about transforming raw data
            into actionable insights and building scalable web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
