"use client";

import { useEffect, useState, useRef } from "react";

export const Typewriter = ({
  text,
  delay = 50,
  repeatOnView = true, // Prop to control whether the effect repeats while in view
}: {
  text: string;
  delay: number;
  repeatOnView?: boolean;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start typing when in view
            setCurrentText("");
            setCurrentIndex(0);
          } else if (repeatOnView) {
            // Reset when out of view ONLY if repeatOnView is true
            setCurrentText("");
            setCurrentIndex(0);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, [repeatOnView]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span ref={typewriterRef} className="">
      {currentText}
    </span>
  );
};
