import { useScrollPosition } from "./useScrollPosition";

/**
 * Hook for parallax scroll effect
 * @param {number} speed - How fast to move (0.5 = half speed)
 * @returns {number} - Transform Y value for parallax
 */
export function useParallaxScroll(speed = 0.5) {
  const scrollY = useScrollPosition();
  return scrollY * speed;
}
