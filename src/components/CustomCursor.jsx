import { useEffect, useState } from "react";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Hide cursor if hovering element has 'no-cursor' class
      if (e.target.closest(".no-cursor")) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hidden ? "hidden" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
