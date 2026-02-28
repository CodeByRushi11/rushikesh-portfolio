import { useState } from "react";
import ResumeModal from "./ResumeModal";

function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-5xl font-bold mb-4 text-gray-800">
        AI & Business Intelligence Analyst
      </h2>

      <p className="text-gray-600 max-w-2xl">
        React.js Developer | Python Programmer | Data Analytics Enthusiast
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/CodeByRushi11"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition shadow-md hover:shadow-lg"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rushikesh-ingole-b02052377"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-md hover:shadow-lg"
        >
          LinkedIn
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1Uq2iN2tOQGGFgh4ykVKGtQpkn6NXTYis"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition duration-300 shadow-lg inline-flex items-center gap-2"
        >
          ⬇️ Resume (Download)
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transform hover:scale-105 transition duration-300 shadow-md inline-flex items-center gap-2"
        >
          👁️ Preview Resume
        </button>
      </div>

      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}

export default Hero;
