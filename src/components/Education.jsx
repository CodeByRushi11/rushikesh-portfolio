import { GraduationCap, Calendar } from "lucide-react";

function Education() {
  return (
    <section id="education" className="px-4 md:px-10 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">
                Bachelor of Computer Application (BCA)
              </h3>

              <p className="text-gray-700 font-medium mt-1">
                Santaji Mahavidyalaya, Nagpur
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                <Calendar className="w-4 h-4" />
                <span>September 2021 – June 2024</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                  85%
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold text-blue-700">
                Secured 7th Rank at Rashtrasant Tukadoji Maharaj Nagpur
                University (RTMNU)
              </p>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Built a strong foundation in programming, database management,
                data structures, and analytical problem-solving. Developed
                technical proficiency in software development and data handling,
                forming the basis for advanced work in analytics and business
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
