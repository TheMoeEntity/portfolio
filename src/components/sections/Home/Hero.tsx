"use client";
import { motion } from "framer-motion";
import { Brands } from "../Brands";
import years from "../../../app/images/years.png";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Loader from "@/components/shared/Loader";
import { useState } from "react";
import Goals from "./Goals";
import { services, HERO_HEADLINE, HERO_SUBTEXT } from "@/app/lib/constants";

// Animate the whole block in as one unit — not word by word.
// Word-splitting breaks SEO: crawlers read DOM nodes, not visual spacing.
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16, delay },
  }),
};

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <>
      <section className="mt-24 md:mt-0 container overflow-visible lg:mt-10 mx-auto lg:px-4 lg:py-4">
        {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}

        {!isLoading && (
          <div className="flex flex-col w-full mb-2 text-left">
            {/*
              H1 is critical for SEO — keep it as a clean text node.
              Framer Motion on the wrapper handles the entrance without
              fragmenting the string into separate DOM nodes.
            */}
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`mb-2 md:pr-2 hero-text text-6xl font-bold tracking-tighter ${theme === "light" ? "text-[#110f10]" : "text-white"
                } lg:text-8xl md:text-7xl`}
            >
              {HERO_HEADLINE}
            </motion.h1>

            <br />

            {/*
              Paragraph stays as a single text node too.
              Same entrance animation, slight delay so it trails the H1.
            */}
            <motion.p
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`font-normal leading-relaxed lg:w-2/3 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
            >
              {HERO_SUBTEXT}
            </motion.p>
          </div>
        )}

        <div className="w-full mt-10 flex flex-col md:flex-row md:justify-between">
          <article className="flex flex-1 flex-col gap-10">
            <p className="text-lg font-normal">
              Currently available for new projects <br />
              <a
                className="font-bold underline underline-offset-4 hover:text-[#14AFF1] transition"
                href="mailto:mosesnwigberi@gmail.com?subject=Let's%20Connect&body=Hi%20Moses,"
              >
                Send me an email ↗
              </a>
            </p>
          </article>

          <div className="text-right text-lg mt-10 lg:text-left">
            <b id="services">Services:</b>
            <ul className="m-0 p-0 gap-0 text-[16px]">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Goals />

      <div className="flex px-1 md:px-5 mt-10 md:flex flex-col gap-0 w-full">
        <motion.div
          className="text-lg justify-center md:text-2xl gap-5 items-center flex mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-[150px] min-w-[150px] relative h-[100px]">
            <Image
              src={years}
              alt="7 years of experience"
              quality={100}
              sizes="100vw"
              className="object-contain w-[250px] h-[100px]"
            />
          </span>
          <b>OF WRITING CODE</b>
        </motion.div>

        <div className="mt-16 md:mt-0">
          <Brands />
        </div>
      </div>
    </>
  );
};

export default Hero;