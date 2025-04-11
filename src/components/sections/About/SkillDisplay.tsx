"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function SkillsDisplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start 0.9", "start 0.3"],
  //   });

  // Animation variants for text reveal
  const textReveal = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  // Column data
  const columns = [
    {
      title: "Stack",
      items: [
        "WordPress",
        "Wix / Squarespace",
        "NEXT.js / React",
        "TypeScript",
        "Tailwind CSS / Bootstrap CSS ",
        "Node.js / PHP",
        "Swift",
        "Firebase / Supabase",
        "Headless CMS",
      ],
    },
    {
      title: "Capabilities",
      items: ["SaaS", "Ecommerce", "Portfolio", "Showcase", "Landing page"],
    },
    {
      title: "Accolades",
      items: [
        "Site Inspire x34",
        "Awwwards SOTM x2",
        "Awwwards SOTD x25",
        "FWA x7",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="text-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-16">
              <motion.h2
                className="text-lg font-medium"
                custom={colIndex}
                variants={textReveal}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {column.title}
              </motion.h2>

              <div className="space-y-6 text-white">
                {column.items.map((item, itemIndex) => (
                  <motion.p
                    key={itemIndex}
                    className="text-sm font-light"
                    custom={itemIndex + colIndex + 1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
