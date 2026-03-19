// components/ScrollReveal.jsx
import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Hanya animasi sekali
        }
      },
      { threshold: 0.10 } // Muncul saat 15% section terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
    >
      {children}
    </div>
  );
};