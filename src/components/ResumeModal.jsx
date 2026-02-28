import { useState } from "react";

function ResumeModal({ onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    // wait for animation before calling parent onClose
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] md:h-[80vh] flex flex-col transition-transform duration-300 ${
          closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Resume Preview
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-light transition p-2 hover:bg-gray-100 rounded flex-shrink-0"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <iframe
          src="/Rushikesh_Resume.pdf"
          type="application/pdf"
          className="flex-1 w-full border-0"
          title="Resume Preview"
        />

        <div className="flex-1 w-full bg-gray-50 flex items-center justify-center p-6 hidden">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Rushikesh_Resume.pdf
            </h4>
            <p className="text-gray-600 mb-6">
              Open resume in a new window or download to your device
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/Rushikesh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 font-semibold"
              >
                🔗 Open in New Tab
              </a>
              <a
                href="/Rushikesh_Resume.pdf"
                download
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition inline-flex items-center gap-2 font-semibold"
              >
                ⬇️ Download
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white flex flex-col md:flex-row justify-center gap-3 md:gap-4">
          <a
            href="/Rushikesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg font-semibold text-sm md:text-base"
            download
          >
            ⬇️ Download Resume
          </a>
          <button
            onClick={handleClose}
            className="bg-gray-200 text-gray-800 px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-gray-300 transition font-semibold text-sm md:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
