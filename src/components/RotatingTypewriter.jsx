import { useEffect, useState } from "react";

function RotatingTypewriter({
  texts = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 2000,
  className = "",
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayed.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseMs);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    currentText,
    typingSpeed,
    deletingSpeed,
    pauseMs,
    texts.length,
  ]);

  return (
    <h2 className={`inline-block ${className}`}>
      {displayed}
      <span className="ml-1 animate-blink">|</span>
    </h2>
  );
}

export default RotatingTypewriter;
