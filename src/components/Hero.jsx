import { useState } from "react";
import { Github, Linkedin, Download, Eye, ArrowDownCircle } from "lucide-react";
import ResumeModal from "./ResumeModal";
import RotatingTypewriter from "./RotatingTypewriter";

function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-24 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Greeting Badge */}
        <div className="mb-8">
          <span className="px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 rounded-full shadow-sm">
            AI • Data Analytics • Business Intelligence
          </span>
        </div>

        {/* Rotating Role (Analytics Only) */}
        <RotatingTypewriter
          texts={[
            "AI & Business Intelligence Analyst",
            "Data Analyst",
            "Analytics & Reporting Specialist",
          ]}
          typingSpeed={80}
          deletingSpeed={40}
          pauseMs={2000}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-bold mb-8 text-gray-900 leading-tight"
        />

        {/* Executive Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium mb-12 leading-relaxed">
          I enjoy working with data and uncovering the stories behind numbers.
          From cleaning messy datasets to building dashboards and reports, I
          focus on turning information into insights that help businesses make
          smarter decisions and grow with confidence.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/CodeByRushi11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-md hover:shadow-lg font-semibold"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition shadow-md hover:shadow-lg font-semibold"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            // href="/Rushikesh_Resume.pdf"
            href="/Rushikesh_ResumeAI Business Intellegence Analyst.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            <Download size={18} />
            Download Resume
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-200 hover:border-gray-400 transform hover:scale-105 transition duration-300 shadow-md hover:shadow-lg font-semibold"
          >
            <Eye size={18} />
            Preview Resume
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-gray-400">
          <ArrowDownCircle size={32} className="mx-auto" />
        </div>
      </div>

      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}

export default Hero;
