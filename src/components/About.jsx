import { Brain, Database, TrendingUp, MapPin } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  getStaggerDelay,
} from "../utils/animationClasses";

function About() {
  const highlights = [
    { icon: Database, label: "Data Analytics" },
    { icon: TrendingUp, label: "Business Intelligence" },
    { icon: Brain, label: "AI & Predictive Modeling" },
    { icon: MapPin, label: "Nagpur, India" },
  ];

  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_DOWN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </ScrollAnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimatedElement
            animation={ANIMATION_TYPES.FADE_IN_LEFT}
            duration={ANIMATION_DURATIONS.NORMAL}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an aspiring{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                AI & Business Intelligence Analyst
              </span>{" "}
              based in <span className="font-medium">Nagpur, India</span>. I
              specialize in transforming structured and unstructured data into
              actionable business insights that support strategic
              decision-making.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise includes data cleaning, exploratory data analysis
              (EDA), SQL-based reporting, and interactive dashboard development
              using Python, Power BI, and Excel. I focus on extracting
              measurable value from data to drive performance improvement and
              operational efficiency.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently strengthening my capabilities in AI, analytics, and
              business intelligence tools, I aim to bridge the gap between data
              analysis and real-world business strategy.
            </p>

            {/* Highlight Points */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 animate-slideInUp"
                  style={{ animationDelay: getStaggerDelay(idx) }}
                >
                  <item.icon
                    className="text-blue-600 dark:text-blue-400"
                    size={22}
                  />
                  <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollAnimatedElement>

          {/* Right Side Card */}
          <ScrollAnimatedElement
            animation={ANIMATION_TYPES.FADE_IN_RIGHT}
            duration={ANIMATION_DURATIONS.NORMAL}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Core Competencies
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li>
                ✔ End-to-End Data Cleaning & Exploratory Data Analysis (EDA)
              </li>
              <li>✔ Advanced SQL Querying & KPI Reporting</li>
              <li>✔ Interactive Dashboard Development (Power BI & Excel)</li>
              <li>✔ Data Visualization & Insight Communication</li>
              <li>✔ Analytical Thinking & Business Problem Solving</li>
            </ul>
          </ScrollAnimatedElement>
        </div>
      </div>
    </section>
  );
}

export default About;
