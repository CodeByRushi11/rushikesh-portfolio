import { GraduationCap, Calendar } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
} from "../utils/animationClasses";

function Education() {
  return (
    <section
      id="education"
      className="px-4 md:px-10 py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_DOWN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </ScrollAnimatedElement>

        {/* Education Card */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.SLIDE_IN_UP}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Bachelor of Computer Application (BCA)
              </h3>

              <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                Santaji Mahavidyalaya, Nagpur
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-2 flex-wrap">
                <Calendar className="w-4 h-4" />
                <span>September 2021 – June 2024</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
                  85%
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
                Secured 7th Rank at Rashtrasant Tukadoji Maharaj Nagpur
                University (RTMNU)
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Built a strong foundation in programming, database management,
                data structures, and analytical problem-solving. Developed
                technical proficiency in software development and data handling,
                forming the basis for advanced work in analytics and business
                intelligence.
              </p>
            </div>
          </div>
        </ScrollAnimatedElement>
      </div>
    </section>
  );
}

export default Education;
