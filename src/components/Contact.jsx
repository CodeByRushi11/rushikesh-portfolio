import { Mail, Phone, Linkedin } from "lucide-react";
import { ScrollAnimatedElement } from "./ScrollAnimatedElement";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  getStaggerDelay,
} from "../utils/animationClasses";

function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "rushikeshingole467@gmail.com",
      href: "mailto:rushikeshingole467@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8010688184",
      href: "tel:+918010688148",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://in.linkedin.com/in/rushikesh-ingole-b02052377",
    },
  ];

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_DOWN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Let’s Connect
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Open to opportunities in AI, Data Analytics, and Business
            Intelligence. I welcome discussions around analytics-driven growth,
            reporting strategy, and data-informed decision making.
          </p>
        </ScrollAnimatedElement>

        {/* Contact Cards */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.SCALE_IN}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-3 gap-10">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1 animate-slideInUp"
                  style={{ animationDelay: getStaggerDelay(idx) }}
                >
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                      {contact.label}
                    </p>
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition break-all"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimatedElement>

        {/* Closing Line */}
        <ScrollAnimatedElement
          animation={ANIMATION_TYPES.FADE_IN_UP}
          duration={ANIMATION_DURATIONS.NORMAL}
          className="mt-14 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium">
            Let’s collaborate to transform data into measurable business value.
          </p>
        </ScrollAnimatedElement>
      </div>
    </section>
  );
}

export default Contact;
