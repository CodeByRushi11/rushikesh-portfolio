import { Mail, Phone, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="px-4 md:px-10 py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s Connect
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 p-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Email */}
            <div className="flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <a
                  href="mailto:rushikeshingole467@gmail.com"
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  rushikeshingole467@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Phone</p>
                <a
                  href="tel:+918010688148"
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  +91 8010688184
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Connect on LinkedIn
                </p>
                <a
                  href="https://in.linkedin.com/in/rushikesh-ingole-b02052377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  Rushikesh Ingole
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium">
            Open to AI, Data Analytics, and Business Intelligence opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
