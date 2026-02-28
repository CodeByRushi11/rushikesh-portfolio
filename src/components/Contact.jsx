function Contact() {
  return (
    <section id="contact" className="px-10 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact</h2>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <span className="text-blue-600">✉️</span>
          <a
            href="mailto:rushikeshinogale467@gmail.com"
            className="hover:text-blue-600"
          >
            rushikeshinogale467@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-blue-600">📞</span>
          <a href="tel:+918010688148" className="hover:text-blue-600">
            +91 8010688148
          </a>
        </p>
      </div>

      <div className="mt-6">
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="rushikesh-ingole-b02052377"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/rushikesh-ingole-b02052377"
          >
            Rushikesh Ingole
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
