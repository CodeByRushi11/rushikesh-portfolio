import { useState } from "react";
import ResumeModal from "./ResumeModal";

function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 py-20 md:py-0 bg-gradient-to-b from-blue-50 via-white to-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
        AI & Business Intelligence Analyst
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl font-medium mb-4">
        React.js Developer | Python Programmer | Data Analytics Enthusiast
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
        <a
          href="https://github.com/CodeByRushi11"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-gray-800 transition shadow-md hover:shadow-lg font-semibold text-sm md:text-base"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-blue-600 text-blue-600 px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-md hover:shadow-lg font-semibold text-sm md:text-base"
        >
          LinkedIn
        </a>

        <a
          href="/Rushikesh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 font-semibold text-sm md:text-base"
          download
        >
          ⬇️ Download Resume
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-gray-100 border-2 border-gray-300 text-gray-800 px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-gray-200 hover:border-gray-400 transform hover:scale-105 transition duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 font-semibold text-sm md:text-base"
        >
          👁️ Preview Resume
        </button>
      </div>

      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}

export default Hero;
