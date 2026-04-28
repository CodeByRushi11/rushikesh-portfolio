import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom hook for IntersectionObserver
 * Reuses a single observer instance for multiple elements
 */
export function useIntersectionObserver(options = {}) {
  const [entries, setEntries] = useState({});
  const observerRef = useRef(null);
  const callbacksRef = useRef(new Map());

  const { threshold = 0, rootMargin = "0px", triggerOnce = false } = options;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (observedEntries) => {
        const newEntries = {};
        observedEntries.forEach((entry) => {
          const id = entry.target.dataset.observeId;
          if (!id) return;

          newEntries[id] = entry.isIntersecting;

          const callback = callbacksRef.current.get(id);
          if (callback) {
            callback(entry);
            if (triggerOnce && entry.isIntersecting) {
              observerRef.current?.unobserve(entry.target);
              callbacksRef.current.delete(id);
            }
          }
        });
        setEntries((prev) => ({ ...prev, ...newEntries }));
      },
      { threshold, rootMargin },
    );

    return () => {
      observerRef.current?.disconnect();
      callbacksRef.current.clear();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const observe = useCallback((element, callback) => {
    if (!element || !observerRef.current) return;

    const id =
      element.dataset.observeId || `obs-${Math.random().toString(36).slice(2)}`;
    element.dataset.observeId = id;
    callbacksRef.current.set(id, callback);
    observerRef.current.observe(element);

    return () => {
      observerRef.current?.unobserve(element);
      callbacksRef.current.delete(id);
    };
  }, []);

  const unobserve = useCallback((element) => {
    if (!element || !observerRef.current) return;
    observerRef.current.unobserve(element);
  }, []);

  return { entries, observe, unobserve, observer: observerRef.current };
}

/**
 * Hook to detect when element is in viewport
 */
export function useOnScreen(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "50px", ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting];
}

/**
 * Hook to check if user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for debounced value
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook for local storage with error handling
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue];
}
