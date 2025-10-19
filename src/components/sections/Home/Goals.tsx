"use client";

import { CircularProgress } from "@/components/shared/UI/CircularProgressBar";
import Code from "@/components/shared/UI/Code";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";

const Goals = () => {
  const imageStyles: CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url('/moses-new.jpeg')`,
  };

  // Reference for in-view detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Scroll-based parallax effect for floating card
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]); // Moves up/down as user scrolls
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / scrollHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="md:p-5 my-36 md:my-40 relative "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-wrap gap-10"
      >
        {/* Animated Profile Image */}
        <motion.div
          className="min-w-[130px] rounded-full min-h-[130px] max-h-[130px] max-w-[130px]"
          style={{ ...imageStyles }}
          animate={{ scale: [0.9, 1] }}
        ></motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-3xl md:text-4xl max-w-2xl">
            My goal is to help businesses and brands build innovative,
            high-performance web applications that solve real-world problems.
          </h2>
          <p className="text-gray-500">
            From Ebonyi, living in Lagos, Nigeria, and working with <br />{" "}
            clients from around the globe.
          </p>
          <Code />
        </motion.div>
      </motion.div>

      {/* Parallax Floating Cirscular Progress Card */}
      <motion.div
        className="mt-10 md:absolute -bottom-10 md:bottom-0 right-0"
        style={{ y: parallaxY }} // Parallax effect on scroll
      >
        <CircularProgress progress={scrollProgress + 15} />
      </motion.div>
    </section>
  );
};

export default Goals;
