import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when an element enters/leaves the viewport
 * Perfect for triggering animations on scroll
 */
export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: "0px",
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: Stop observing after first intersection
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        setIsVisible(false);
      }
    }, defaultOptions);

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isVisible];
}
