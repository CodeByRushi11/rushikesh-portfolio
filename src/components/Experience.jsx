import { Briefcase, Calendar } from "lucide-react";

function Experience() {
  return (
    <section
      id="experience"
      className="px-4 md:px-10 py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-10">
          {/* AI BI Trainee */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <Briefcase className="w-7 h-7 text-blue-600" />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  AI & Business Intelligence Analysis Trainee
                </h3>

                <p className="text-gray-700 font-medium mt-1">
                  MIDC Skill Development Center, Butibori, Nagpur
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>November 2025 – Present</span>
                </div>

                <ul className="mt-4 text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>
                    Performing structured data analysis using Excel and Python
                    on real-world datasets.
                  </li>
                  <li>
                    Designing dashboards and analytical reports to support
                    data-driven business decisions.
                  </li>
                  <li>
                    Executing data cleaning, transformation, and visualization
                    workflows.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frontend Trainee */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <Briefcase className="w-7 h-7 text-blue-600" />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  Frontend Developer Trainee
                </h3>

                <p className="text-gray-700 font-medium mt-1">
                  Esense IT, Nagpur
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>July 2024 – January 2025</span>
                </div>

                <ul className="mt-4 text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>
                    Built responsive web interfaces using HTML, CSS, and
                    ReactJS.
                  </li>
                  <li>
                    Developed functional projects including authentication pages
                    and interactive UI components.
                  </li>
                  <li>
                    Contributed to CRM and WordPress projects ensuring
                    cross-device responsiveness.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
