"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

const ParallaxMockup = ({
  airtimeplusBeta,
  simulator,
}: {
  airtimeplusBeta: {
    link: string;
    type: string;
    image: StaticImageData;
    title: string;
    description: string;
  };
  simulator: StaticImageData;
}) => {
  const ref = useRef(null);
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  const multiplier = isMobile ? 0.27 : 0.7;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjusts how it reacts to scrolling
  });

  // Parallax effect: Moves the iPhone mockup at a different scroll speed
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Adjust values for effect

  return (
    <motion.div
      ref={ref}
      className="w-full mb-10 flex flex-col gap-10 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 * 0.1 }}
    >
      {/* iPhone Mockup with Parallax Effect */}
      <motion.div
        style={{
          width: `${multiplier * 396}px`,
          height: `${multiplier * 630}px`,
          y: yParallax, // Apply parallax effect
        }}
        className="absolute -rotate-6 bottom-40 md:bottom-20 left-[0] z-[20]"
      >
        <Image
          src={simulator}
          alt={airtimeplusBeta.title}
          fill
          quality={100}
          className="object-contain w-full h-auto"
        />
      </motion.div>

      {/* Main Image Container */}
      <motion.div
        className="relative p-3 bg-[#1B191A] md:p-10 lg:p-16 w-full h-auto overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={airtimeplusBeta.image}
          alt={airtimeplusBeta.title}
          quality={100}
          className="object-contain w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Content Section */}
      <div className="w-full flex flex-col gap-5">
        <a
          href={airtimeplusBeta.link}
          target="_BLANK"
          className="text-3xl w-fit hover:underline"
        >
          {airtimeplusBeta.title}
        </a>
        <p className="text-gray-600 dark:text-gray-300">
          {airtimeplusBeta.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ParallaxMockup;
