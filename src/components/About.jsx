import { Brain, Database, TrendingUp, MapPin } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="px-4 md:px-10 py-20 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I am an aspiring{" "}
              <span className="font-semibold text-blue-600">
                AI & Business Intelligence Analyst
              </span>{" "}
              based in <span className="font-medium">Nagpur</span>. I specialize
              in transforming raw datasets into meaningful business insights and
              building scalable web solutions that support data-driven
              decisions.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Currently training at{" "}
              <span className="font-medium">MIDC Skill Development Center</span>
              , I am strengthening my expertise in AI, Data Science, SQL,
              Python, and Business Intelligence tools. My goal is to bridge the
              gap between analytics and practical business strategy.
            </p>

            {/* Highlight Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Database className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-800">
                  Data Analytics
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-800">
                  Business Intelligence
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Brain className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-800">
                  AI & ML Foundations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-800">
                  Nagpur, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Core Strengths
            </h3>

            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              <li>✔ End-to-end Data Cleaning & EDA using Python</li>
              <li>✔ SQL Query Optimization & KPI Reporting</li>
              <li>✔ Interactive Dashboards with Excel & Power BI</li>
              <li>✔ Frontend Development using React & Tailwind</li>
              <li>✔ Problem Solving & Analytical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
