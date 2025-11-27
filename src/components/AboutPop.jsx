import { useEffect, useState } from 'react';
import '../styles/AboutPop.css';
import portrait from "../assets/images/manoj.jpg";

const AboutPopup = ({ show, onClose }) => {
  const [closing, setClosing] = useState(false);

  // Lock scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [show]);

  if (!show && !closing) return null; // unmount only when fully closed

  const handleClose = () => {
    setClosing(true); // trigger closing classes

    setTimeout(() => {
      setClosing(false); // reset for next open
      onClose();         // actually hide modal
    }, 400); // match your CSS animation duration
  };

  return (
    <div
      className={`about-overlay ${closing ? 'close-overlay' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`about-card ${closing ? 'close-about' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="about-left">
          <img src={portrait} alt="Manoj Konda" className="about-photo" />
        </div>
        <div className="about-right">
          <div className='about-title'>Hola</div>
          <p className='about-content'>I design and build digital systems that work as beautifully as they look—whether it’s a website that tells a story, a full-stack app that scales, or a pipeline that moves data seamlessly. For me, technology isn’t just about code; it’s about crafting experiences that feel simple, reliable, and human.</p>
          <p className='about-content'>With a background spanning web development, software engineering, and data engineering, I bring ideas to life end-to-end—from shaping APIs and managing databases to engineering cloud solutions that grow with businesses. Every project is a chance to blend creativity with precision and deliver something remarkable.</p>
          <div className="signature">– Manoj Konda</div>
        </div>
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>
    </div>
  );
};

export default AboutPopup;
