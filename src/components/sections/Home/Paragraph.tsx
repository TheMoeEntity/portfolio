"use client";

import { useScroll, motion } from "framer-motion";
import type React from "react";
import { useRef, useState, useEffect } from "react";

const Paragraph: React.FC<{ words: string; className: string }> = ({
  words,
  className,
}) => {
  const paragraphElement = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphElement,
    // Make the scroll range smaller to complete the animation faster
    offset: ["start 0.9", "start 0.4"],
  });

  // Split the text into individual words
  const wordArray = words.split(" ");

  // State to track current scroll progress value
  const [progress, setProgress] = useState(0);

  // Update progress state when scrollYProgress changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.p ref={paragraphElement} className={`${className} overflow-hidden`}>
      {wordArray.map((word, i) => {
        // Reduce stagger delay significantly
        const staggerDelay = i * 0.01;

        // Calculate adjusted progress with faster transition
        // Multiply by 3 to make the transition happen 3x faster
        const adjustedProgress = Math.max(0, (progress - staggerDelay) * 3);

        // Calculate opacity
        const opacity = Math.min(1, Math.max(0, adjustedProgress));

        // Calculate color transition (gray to white)
        let color = "rgb(156, 163, 175)"; // Default gray-400

        if (adjustedProgress > 0) {
          // Interpolate between gray and white
          const r = 156 + Math.min(99, (255 - 156) * adjustedProgress);
          const g = 163 + Math.min(92, (255 - 163) * adjustedProgress);
          const b = 175 + Math.min(80, (255 - 175) * adjustedProgress);

          color = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        }

        return (
          <motion.span
            key={i}
            className="inline-block mr-1"
            style={{
              opacity,
              color,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default Paragraph;
