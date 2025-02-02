import React, { useState, useEffect } from "react";

export default function FadeInAnimation({ delay, children }) {
  const [isShown, setIsShown] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsShown(true);
        }
      });
    });

    const currentElement = domRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={`pop-in-section ${isShown ? "is-show" : ""}`}
      style={{ transitionDelay: `${delay}` }}
      ref={domRef}
    >
      {children}
    </div>
  );
}
