function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-10 bg-gray-900 border-t border-gray-800 text-center text-gray-400">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <p className="font-medium text-gray-300 mb-2 text-sm md:text-base">
          © {currentYear} Rushikesh Ingole. All rights reserved.
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          Built with React, Tailwind CSS & Vite
        </p>
      </div>
    </footer>
  );
}

export default Footer;
