function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-5/6 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold text-gray-800">Resume Preview</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <iframe
          src="https://drive.google.com/file/d/1Uq2iN2tOQGGFgh4ykVKGtQpkn6NXTYis/preview"
          className="flex-1 w-full"
          allow="autoplay"
          title="Resume Preview"
        ></iframe>

        <div className="p-4 border-t text-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1Uq2iN2tOQGGFgh4ykVKGtQpkn6NXTYis"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 shadow-md"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
