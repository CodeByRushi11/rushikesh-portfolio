import { useState, useEffect, useRef } from "react";

/**
 * IntersectionObserver polyfill utility
 * Provides fallback for browsers that don't support IntersectionObserver
 */

export const supportsIntersectionObserver = () => {
  return (
    typeof window !== "undefined" &&
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "isIntersecting" in IntersectionObserverEntry.prototype
  );
};

/**
 * Creates a polyfilled IntersectionObserver for older browsers
 * Uses scroll events as fallback
 */
export const createPolyfilledObserver = (callback, options = {}) => {
  if (supportsIntersectionObserver()) {
    return new IntersectionObserver(callback, options);
  }

  // Fallback: Use scroll events with manual intersection checking
  const elements = new Map();
  let ticking = false;

  const checkIntersections = () => {
    const rootMargin =
      options.rootMargin?.split(" ")[0]?.replace("px", "") || 0;
    const rootHeight = options.root?.clientHeight || window.innerHeight;

    elements.forEach((data, element) => {
      const rect = element.getBoundingClientRect();
      const isIntersecting =
        rect.top < rootMargin + rootHeight && rect.bottom > 0;

      if (isIntersecting !== data.isIntersecting) {
        data.isIntersecting = isIntersecting;
        callback([{ isIntersecting, target: element }]);
      }
    });
    ticking = false;
  };

  const observer = {
    observe(element) {
      elements.set(element, { isIntersecting: false });
      if (!ticking) {
        requestAnimationFrame(checkIntersections);
        ticking = true;
      }
    },
    unobserve(element) {
      elements.delete(element);
    },
    disconnect() {
      elements.clear();
    },
  };

  // Attach scroll listener
  const scrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(checkIntersections);
      ticking = true;
    }
  };

  window.addEventListener("scroll", scrollHandler, { passive: true });

  // Store cleanup function
  observer._cleanup = () => {
    window.removeEventListener("scroll", scrollHandler);
    elements.clear();
  };

  return observer;
};

/**
 * Hook to use IntersectionObserver with polyfill fallback
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} fallbackEnabled - Whether to enable fallback (default: true)
 * @returns {Object} - { ref, isIntersecting, entry }
 */
export const useIntersectionObserverPolyfill = (
  options = {},
  fallbackEnabled = true,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      root: options.root || null,
      rootMargin: options.rootMargin || "0px",
      threshold: options.threshold || 0,
    };

    const handleIntersect = (entries) => {
      const [firstEntry] = entries;
      setIsIntersecting(firstEntry.isIntersecting);
      setEntry(firstEntry);
    };

    let observer;

    if (supportsIntersectionObserver()) {
      observer = new IntersectionObserver(handleIntersect, observerOptions);
    } else if (fallbackEnabled) {
      observer = createPolyfilledObserver(handleIntersect, observerOptions);
    }

    if (observer) {
      observer.observe(element);
    }

    return () => {
      if (observer) {
        observer.disconnect();
        if (observer._cleanup) observer._cleanup();
      }
    };
  }, [options.root, options.rootMargin, options.threshold, fallbackEnabled]);

  return { ref: elementRef, isIntersecting, entry };
};

export default useIntersectionObserverPolyfill;
