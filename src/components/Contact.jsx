function Contact() {
  return (
    <section
      id="contact"
      className="px-4 md:px-10 py-16 md:py-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-gray-900 text-center">
          Get In Touch
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-blue-600">
          <div className="space-y-5 md:space-y-6 text-gray-700">
            <div className="flex items-center gap-4 group">
              <span className="text-2xl md:text-3xl text-blue-600 flex-shrink-0">
                ✉️
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Email
                </p>
                <a
                  href="mailto:rushikeshinogale467@gmail.com"
                  className="text-base md:text-lg font-semibold text-gray-800 hover:text-blue-600 transition break-all"
                >
                  rushikeshinogale467@gmail.com
                </a>
              </div>
            </div>

            <div className="h-px bg-gray-200"></div>

            <div className="flex items-center gap-4 group">
              <span className="text-2xl md:text-3xl text-blue-600 flex-shrink-0">
                📞
              </span>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Phone
                </p>
                <a
                  href="tel:+918010688148"
                  className="text-base md:text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  +91 8010688184
                </a>
              </div>
            </div>

            <div className="h-px bg-gray-200"></div>

            <div className="flex items-center gap-4 group">
              <span className="text-2xl md:text-3xl text-blue-600 flex-shrink-0">
                🔗
              </span>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Connect On LinkedIn
                </p>
                <a
                  href="https://in.linkedin.com/in/rushikesh-ingole-b02052377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  Rushikesh Ingole
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <p className="text-gray-600 font-medium text-sm md:text-base">
            Feel free to reach out for opportunities or collaborations!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
