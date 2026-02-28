import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touchscreen
    const isTouchDevice = () => {
      return (
        window.matchMedia("(hover: none)").matches ||
        (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0)
      );
    };

    if (isTouchDevice()) return; // Don't show cursor on touch devices

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", () => setIsVisible(true));
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-600 rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      />
    </>
  );
};

export default Cursor;
