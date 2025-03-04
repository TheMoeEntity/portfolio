"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CSSProperties } from "react";

const NotFound = () => {
  // Variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0, transform: "translateY(100px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        staggerChildren: 0.1, // Stagger effect for each letter/word
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const imageStyles: CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    backgroundImage: `url('/moses-new.jpeg')`,
  };

  // Parallax effect for the card
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // Adjust the range for desired effect

  return (
    <section className="container font-[family-name:var(--font-geist-sans)] relative min-h-[700px] md:min-h-[650px] lg:mt-10 p mx-auto px-4 lg:py-4">
      {/* Floating Card */}
      <motion.div
        style={{ y }} // Apply parallax effect here
        className="absolute bottom-5 md:bottom-1/2 shadow-lg rounded-lg right-10 z-[2] bg-[#191718] text-[#5D5B5F] px-7 py-6 flex flex-col gap-5"
      >
        <div className="flex gap-3 items-center">
          <div
            className="w-[45px] rounded-full h-[45px]"
            style={{ ...imageStyles }}
          ></div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold text-white">Moses Nwigberi</h1>
            <p className="text-sm">Web developer, Barcelona fan</p>
          </div>
        </div>
        <p className="mt-2">
          Lmao, {`it's`} a <span className="text-white">one page website</span>,
          of <br /> course this page {`doesn't`} exist.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col w-full mb-2 text-left"
      >
        <motion.h1
          variants={containerVariants}
          className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl"
        >
          {"Page not found".split("  ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={childVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <br></br>
        <motion.p
          className="font-normal mt-5 leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"The page you are looking for doesn't exist or has been moved and you've wandered into the big ol' digital void."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                variants={childVariants}
              >
                {word}
              </motion.span>
            ))}
        </motion.p>
      </motion.div>

      {/* Back Home Link */}
      <p className="mt-20 font-normal">
        We can take you to a page that 100% exists (if you wish, lol). <br />
        <Link href="/" className="font-bold">
          Back home↗{" "}
        </Link>
      </p>

      {/* Cozy Void Message */}
      <motion.p
        className="text-gray-400 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Or just enjoy the void. {`It's `}pretty cozy here. 🛸
      </motion.p>
    </section>
  );
};

export default NotFound;
