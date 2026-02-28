function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] md:h-[80vh] flex flex-col animate-in fade-in duration-300">
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Resume Preview
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-light transition p-2 hover:bg-gray-100 rounded flex-shrink-0"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <embed
          src="/Rushikesh_Resume.pdf"
          type="application/pdf"
          className="flex-1 w-full"
        />

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
            onClick={onClose}
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
