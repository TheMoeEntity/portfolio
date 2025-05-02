"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import nosrati from "../../../app/images/brands-nosrati.png";
import dove from "../../../app/images/dovehospital.jpg";
import greencal from "../../../app/images/greencal_logo.png";
import zstinger from "../../../app/images/Zlogo1.png";
import ditco from "../../../app/images/brands-Ditcosoft.png";
import visCorner from "../../../../public/visorner logo.jpeg";

const brands = [
  { name: "VisCorner", logo: visCorner },
  { name: "DITCOSoft Technologies", logo: ditco },
  { name: "Dove Hospital", logo: dove },
  { name: "Nosrati", logo: nosrati },
  { name: "ZStinger Inc", logo: zstinger },
  { name: "GreenCal Foundation", logo: greencal },
];

export const Brands = () => {
  return (
    <div className="grid grid-cols-2 place-items-center w-full justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          className="relative w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          whileHover={{
            scale: 1.1, // Slightly enlarge on hover
            rotate: [0, -5, 5, -5, 5, 0], // Jiggle effect
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          initial={{ opacity: 0, y: 20 }} // Fade in and slide up
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Animate only once
          transition={{ delay: index * 0.1, duration: 0.5 }} // Staggered animation
        >
          {index === 2 || index === 0 ? ( // Special handling for Dove Hospital logo
            <div className="relative h-[80px] w-[80px]">
              <Image
                src={brand.logo}
                alt="Dove Hospital"
                quality={100}
                fill
                sizes="100vw"
                className="object-cover w-full h-auto"
              />
            </div>
          ) : (
            <Image
              src={brand.logo}
              alt={brand.name}
              quality={100}
              width={100} // Set a base width
              height={100} // Set a base height
              sizes="100vw"
              className="object-contain w-full h-auto"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};
