import { Briefcase, Calendar } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  getStaggerDelay,
} from "../utils/animationClasses";

function Experience() {
  const experiences = [
    {
      title: "AI & Business Intelligence Analysis Trainee",
      company: "MIDC Skill Development Center, Butibori, Nagpur",
      date: "November 2025 – Present",
      points: [
        "Performing structured data analysis using Excel and Python on real-world datasets.",
        "Designing dashboards and analytical reports to support data-driven business decisions.",
        "Executing data cleaning, transformation, and visualization workflows.",
      ],
    },
    {
      title: "Frontend Developer Trainee",
      company: "Esense IT, Nagpur",
      date: "July 2024 – January 2025",
      points: [
        "Built responsive web interfaces using HTML, CSS, and ReactJS.",
        "Developed functional projects including authentication pages and interactive UI components.",
        "Contributed to CRM and WordPress projects ensuring cross-device responsiveness.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="px-4 md:px-10 py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_DOWN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </ScrollAnimatedElement>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <ScrollAnimatedElement
              key={idx}
              animation={ANIMATION_TYPES.SLIDE_IN_RIGHT}
              duration={ANIMATION_DURATIONS.NORMAL}
              delay={getStaggerDelay(idx)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <Briefcase className="w-7 h-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                    {exp.company}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>

                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-2 list-disc list-inside">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
