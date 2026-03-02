import { Mail, Phone, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Let’s Connect
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Open to opportunities in AI, Data Analytics, and Business
            Intelligence. I welcome discussions around analytics-driven growth,
            reporting strategy, and data-informed decision making.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Email */}
            <div className="flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:rushikeshingole467@gmail.com"
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition break-all"
                >
                  rushikeshingole467@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Phone
                </p>
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
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  LinkedIn
                </p>
                <a
                  href="https://in.linkedin.com/in/rushikesh-ingole-b02052377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            Let’s collaborate to transform data into measurable business value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
