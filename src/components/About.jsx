import { Brain, Database, TrendingUp, MapPin } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I am an aspiring{" "}
              <span className="font-semibold text-blue-600">
                AI & Business Intelligence Analyst
              </span>{" "}
              based in <span className="font-medium">Nagpur, India</span>. I
              specialize in transforming structured and unstructured data into
              actionable business insights that support strategic
              decision-making.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              My expertise includes data cleaning, exploratory data analysis
              (EDA), SQL-based reporting, and interactive dashboard development
              using Python, Power BI, and Excel. I focus on extracting
              measurable value from data to drive performance improvement and
              operational efficiency.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Currently strengthening my capabilities in AI, analytics, and
              business intelligence tools, I aim to bridge the gap between data
              analysis and real-world business strategy.
            </p>

            {/* Highlight Points */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <Database className="text-blue-600" size={22} />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  Data Analytics
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="text-blue-600" size={22} />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  Business Intelligence
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Brain className="text-blue-600" size={22} />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  AI & Predictive Modeling
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={22} />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  Nagpur, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Core Competencies
            </h3>

            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li>
                ✔ End-to-End Data Cleaning & Exploratory Data Analysis (EDA)
              </li>
              <li>✔ Advanced SQL Querying & KPI Reporting</li>
              <li>✔ Interactive Dashboard Development (Power BI & Excel)</li>
              <li>✔ Data Visualization & Insight Communication</li>
              <li>✔ Analytical Thinking & Business Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
