"use client";
import { Typewriter } from "@/components/shared/TypeWriter";
import { motion } from "framer-motion";
import { Brands } from "../Brands";
import years from "../../../app/images/years.png";
import Image from "next/image";
const Hero = () => {
  const services = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Web Applications",
    "Responsive Web Design",
    "Progressive Web Apps (PWAs)",
    "UI/UX Implementation",
    "E-Commerce Solutions",
    "API Development & Integration",
    "Performance Optimization",
    "Content Management Systems (CMS)",
    "Testing & Debugging",
    "Code Reviews & Refactoring",
    "Custom Web Solutions",
    "Web Animations & Interactions",
    "Third-Party Integrations",
    "Maintenance & Support",
  ];
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
  return (
    <section className="container lg:mt-10 mx-auto lg:px-4 lg:py-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col w-full mb-2 text-left  "
      >
        <motion.h1
          variants={containerVariants}
          className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl"
        >
          {"Crafting Digital Experiences, One Arrow Function at a Time"
            .split(" ")
            .map((word, index) => (
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
          className="font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"I’m a ".split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={childVariants}
            >
              {word}
            </motion.span>
          ))}
          <Typewriter
            repeatOnView={false}
            text="frontend-heavy full-stack developer"
            delay={50}
          />
          {" based in Lagos, Nigeria, working with clients and teams from all over the world. I specialize in building "
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
          <Typewriter
            repeatOnView={false}
            text="beautiful, responsive, and high-performance web applications"
            delay={50}
          />
          {" that deliver seamless user experiences. With a strong focus on "
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
          <Typewriter
            text="frontend technologies"
            repeatOnView={false}
            delay={50}
          />
          {" and a solid foundation in ".split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={childVariants}
            >
              {word}
            </motion.span>
          ))}
          <Typewriter
            repeatOnView={false}
            text="backend development"
            delay={50}
          />
          {", I bring ideas to life by combining "
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
          <Typewriter
            repeatOnView={false}
            text="clean code, modern tools, and creative problem-solving"
            delay={50}
          />
          {".".split(" ").map((word, index) => (
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
      <div className="w-full mt-10 flex text-lg flex-col md:flex-row md:justify-between">
        <article className="flex flex-1 flex-col gap-10">
          <p className=" font-normal">
            Currently available for new projects <br />{" "}
            <a className="font-bold" href="mailto:mosesnwigberi@gmail.com">
              Send me an email ↗{" "}
            </a>
          </p>
          <div className="flex flex-col gap-10 w-full">
            <motion.div
              className="text-lg md:text-2xl gap-7 items-center flex mt-2 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-[150px] min-w-[150px] relative h-[100px]">
                <Image
                  src={years}
                  alt="7 years of experience"
                  quality={100}
                  sizes={"100vw"}
                  className="object-contain w-[250px] h-[100px]"
                />
              </span>
              <b>OF WRITING CODE</b>
            </motion.div>

            <div>
              <Brands />
            </div>
          </div>
        </article>
        <div className="text-right md:text-left">
          <b id="services">Services:</b>
          <ul className="m-0 p-0 gap-0 text-[16px]">
            {services.map((service, index) => (
              <motion.li
                className=""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                key={index}
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
