// src/components/HeroPortrait.jsx
import React, { useRef, useEffect } from "react";
import "../styles/HeroPortrait.css";
import portrait from "../assets/images/manoj.jpg"; // <- replace with your image

export default function HeroPortrait() {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Helper: only enable for precise pointers (mice). disables on touch.
    const pointerFine = () => window.matchMedia && window.matchMedia("(pointer: fine)").matches;

    const maxTilt = 8; // degrees

    function updateFromEvent(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // normalized -1..1
      const nx = Math.min(1, Math.max(-1, (x / rect.width) * 2 - 1));
      const ny = Math.min(1, Math.max(-1, (y / rect.height) * 2 - 1));

      // // tilt: rotateX (vertical), rotateY (horizontal)
      // const tiltX = (-ny * maxTilt).toFixed(2) + "deg";
      // const tiltY = (nx * maxTilt).toFixed(2) + "deg";
      const easedX = Math.pow(Math.abs(nx), 0.8) * Math.sign(nx);
      const easedY = Math.pow(Math.abs(ny), 0.8) * Math.sign(ny);

      const tiltX = (-easedY * maxTilt).toFixed(2) + "deg";
      const tiltY = (easedX * maxTilt).toFixed(2) + "deg";


      // side intensities (0..1): top when ny negative, bottom when ny positive, etc.
      const top = Math.max(0, -ny);
      const bottom = Math.max(0, ny);
      const left = Math.max(0, -nx);
      const right = Math.max(0, nx);
      const bmax = Math.max(top, right, bottom, left);

      // Write CSS variables (cheap)
      card.style.setProperty("--tiltX", tiltX);
      card.style.setProperty("--tiltY", tiltY);
      card.style.setProperty("--b-top", top.toFixed(3));
      card.style.setProperty("--b-right", right.toFixed(3));
      card.style.setProperty("--b-bottom", bottom.toFixed(3));
      card.style.setProperty("--b-left", left.toFixed(3));
      card.style.setProperty("--b-max", bmax.toFixed(3));
    }

    function onMove(e) {
      if (!pointerFine()) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => updateFromEvent(e));
    }

    function onLeave() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // reset smoothly
      card.style.setProperty("--tiltX", "0deg");
      card.style.setProperty("--tiltY", "0deg");
      card.style.setProperty("--b-top", "0");
      card.style.setProperty("--b-right", "0");
      card.style.setProperty("--b-bottom", "0");
      card.style.setProperty("--b-left", "0");
      card.style.setProperty("--b-max", "0");
    }

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="portrait-viewport">
      <div className="portrait-card" ref={cardRef}>
        {/* image */}
        <img className="portrait-img" src={portrait} alt="Portrait" />
      </div>
    </div>
  );
}
