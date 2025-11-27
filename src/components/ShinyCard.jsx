import { useRef } from "react";
import '../styles/ShinyCard.css';

const ShinyCard = ({ children, style }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    cardRef.current.style.setProperty("--x", `-9999px`);
    cardRef.current.style.setProperty("--y", `-9999px`);
  };

  return (
    <div
      ref={cardRef}
      className="shine-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inner-glow" />
      {children}
    </div>
  );
};

export default ShinyCard;
