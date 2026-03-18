import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  ANIMATION_TYPES,
  ANIMATION_DURATIONS,
  ANIMATION_DELAYS,
} from "../utils/animationClasses";

/**
 * Wrapper component that adds scroll-triggered animations
 * Usage: <ScrollAnimatedElement animation="fadeInUp" duration="500">Content</ScrollAnimatedElement>
 */
export function ScrollAnimatedElement({
  children,
  animation = ANIMATION_TYPES.FADE_IN_UP,
  duration = ANIMATION_DURATIONS.NORMAL,
  delay = ANIMATION_DELAYS.NONE,
  once = true,
  threshold = 0.1,
  className = "",
}) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    once,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`
        ${isVisible ? `${animation} ${duration} ${delay}` : "opacity-0"}
        transition-all ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
}
