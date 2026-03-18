import { useScrollPosition } from "../hooks/useScrollPosition";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const scrollY = useScrollPosition();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button when scrolled more than 300px
  if (scrollY < 300) return null;

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full
                 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                 text-white shadow-lg hover:shadow-xl
                 transition-all duration-300 hover:scale-110
                 animate-slideInUp"
      aria-label="Back to top"
    >
      <ArrowUp size={24} className="animate-bounce" />
    </button>
  );
}
