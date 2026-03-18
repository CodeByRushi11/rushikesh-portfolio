/**
 * Centralized animation class names and utilities
 * Makes it easy to maintain consistent animation values across the app
 */

export const ANIMATION_TYPES = {
  // Fade animations
  FADE_IN: "animate-fadeIn",
  FADE_IN_UP: "animate-fadeInUp",
  FADE_IN_DOWN: "animate-fadeInDown",
  FADE_IN_LEFT: "animate-fadeInLeft",
  FADE_IN_RIGHT: "animate-fadeInRight",

  // Slide animations
  SLIDE_IN_UP: "animate-slideInUp",
  SLIDE_IN_DOWN: "animate-slideInDown",
  SLIDE_IN_LEFT: "animate-slideInLeft",
  SLIDE_IN_RIGHT: "animate-slideInRight",

  // Scale animations
  SCALE_IN: "animate-scaleIn",
  ZOOM_IN: "animate-zoomIn",

  // Rotate animations
  ROTATE_IN: "animate-rotateIn",
  FLIP_IN: "animate-flipIn",

  // Special animations
  BOUNCE_IN: "animate-bounceIn",
  SHIMMER: "animate-shimmer",
  FLOAT: "animate-float",
};

export const ANIMATION_DURATIONS = {
  FAST: "duration-300",
  NORMAL: "duration-500",
  SLOW: "duration-700",
  EXTRA_SLOW: "duration-1000",
};

export const ANIMATION_DELAYS = {
  NONE: "delay-0",
  TINY: "delay-100",
  SMALL: "delay-150",
  MEDIUM: "delay-300",
  LARGE: "delay-500",
};

/**
 * Get staggered delay class based on index
 * Use in loops: {items.map((item, i) => getStaggerDelay(i))}
 */
export const getStaggerDelay = (index) => {
  const delays = [
    "delay-0",
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-500",
  ];
  const delayIndex = Math.min(Math.floor(index / 2), delays.length - 1);
  return delays[delayIndex];
};

/**
 * Get animation class with optional overrides
 */
export const getAnimationClass = (
  type,
  duration = ANIMATION_DURATIONS.NORMAL,
  delay = ANIMATION_DELAYS.NONE,
) => {
  return `${type} ${duration} ${delay}`;
};
