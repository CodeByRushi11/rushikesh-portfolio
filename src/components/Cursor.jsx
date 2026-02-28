import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50 transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default Cursor;
