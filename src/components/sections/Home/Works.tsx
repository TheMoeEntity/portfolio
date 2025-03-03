"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import airtimeplus from "../../../app/images/airtimeplus.png";
import greencal from "../../../app/images/greencal-updated.png";
import dovehospital from "../../../app/images/dovehospital.png";
import zstinger from "../../../app/images/zstinger.png";
import nosrati from "../../../app/images/nosrati.png";
import konstruct from "../../../app/images/konstruct.png";
import moestores from "../../../app/images/moestores.png";
import tribu from "../../../app/images/tribu-hotel.png";
import pepnops from "../../../app/images/pepnops-inc.png";
import aman from "../../../app/images/aman-awards.png";
import farzad from "../../../app/images/farzads-blog.png";
// import simulator from "../../../app/images/Airtimplus-simulator.png";

const projects = [
  {
    link: "https://beta.airtimeplus.ng",
    type: "real-world",
    image: airtimeplus,
    title: "Airtimeplus Beta",
    description:
      "Airtimeplus Beta is a web application that allows users to buy airtime, data, and pay bills online.",
  },
  {
    type: "real-world",
    link: "https://greencalfoundation.com",
    image: greencal,
    title: "GreenCal Foundation",
    description:
      "GreenCal Foundation is a non-profit organization that focuses on giving to the less privileged.",
  },
  {
    type: "real-world",
    image: nosrati,
    link: "https://nosratilawgroup.com",
    title: "Nosratilaw Group",
    description:
      "Nosratilaw Group is a law firm that provides legal services to clients.",
  },
  {
    type: "real-world",
    link: "https://zstinger.com",
    image: zstinger,
    title: "Zstinger Drone Inspections",
    description:
      "ZStinger Inspections prioritizes client satisfaction and technological excellence by providing efficient aerial assessments across various industries.",
  },
  {
    type: "real-world",
    link: "https://pepnops.com",
    image: pepnops,
    title: "PEPNOPS Inc.",
    description:
      "At Pepnops, Our product and services help streamline processes, remove administrative burdens, and pave your pathway to success.",
  },
  {
    type: "real-world",
    link: "https://onedivinesingularity.com",
    image: farzad,
    title: "One Divine Singularity",
    description:
      "A blog website (with a secure admin panel) that showcases Farzad Nosrati's book— One Divine Singularity.",
  },
  {
    type: "real-world",
    link: "https://dovehospital.com",
    image: dovehospital,
    title: "Dove Hospital",
    description:
      "Dove Hospital is a medical center that provides healthcare services to patients. The website has been up since 2018, but it's currently 'on a break' because someone forgot to renew the hosting. Don't worry, it's not a medical emergency—just a digital one!",
  },
  {
    type: "side",
    link: "https://tribu-hotel.vercel.app",
    image: tribu,
    title: "Tribu-Hotel Redesign",
    description:
      "My graphic design friend and I decided to give Tribu-Hotel's website a glow-up because, let's be honest, the original UI was... well, let's just say it needed some love. We sent them our redesign, and they said, 'We'll get back to you.' That was about a month ago. Still waiting. Maybe they're on vacation?",
  },
  {
    type: "side",
    link: "https://mkonstruct.vercel.app",
    image: konstruct,
    title: "Konstruct",
    description:
      "I was bored at home, scrolling through beautiful templates online, and stumbled upon this gem. Naturally, I recreated it in Next.js because why not? It's got some really cool animations that make me feel like a frontend wizard. 🧙‍♂️✨",
  },
  {
    type: "side",
    link: "https://moestores.vercel.app",
    image: moestores,
    title: "Apple Stores",
    description:
      "This one was a blast to work on! It was originally for an assessment test for a frontend developer job I applied for. I poured my heart and soul into it, but for some *mysterious* reason, I wasn't selected. Yeah, I'm as shocked as you are. Their loss, though—this project is 🔥.",
  },
  {
    type: "side",
    link: "https://aman-awards.vercel.app/",
    image: aman,
    title: "AMAN Awards",
    description:
      "The AMAN Awards celebrate exceptional talents in Nigeria's creative industries. I moved this to the side projects because, apparently, they forgot to renew their domain subscription. Guess they were too busy celebrating to pay the bills.",
  },
];

export default function Works() {
  const [filter, setFilter] = useState<"real-world" | "side">("real-world");

  const filteredProjects = projects.filter(
    (project) => project.type === filter
  );

  return (
    <section
      id="works"
      className="w-full relative gap-10 pt-32 pb-10 container mx-auto"
    >
      <h1 className="text-4xl md:text-7xl lg:text-9xl text-center mb-8">
        Works
      </h1>

      {/* Filter Buttons */}
      <motion.div
        className="text-2xl top-20 md:right-10 md:rotate-12 gap-4 items-center flex mt-2 mb-5 justify-center md:justify-start md:absolute"
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          onClick={() => setFilter("real-world")}
          className={`px-4 py-2 md:text-xl text-sm rounded-lg transition-colors duration-300 ${
            filter === "real-world"
              ? "bg-[#14AFF1] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Real World Projects
        </button>
        <button
          onClick={() => setFilter("side")}
          className={`px-4 py-2 md:text-xl text-sm rounded-lg transition-colors duration-300 ${
            filter === "side"
              ? "bg-[#14AFF1] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Side Projects
        </button>
      </motion.div>

      {/* Projects Grid */}

      <div className="w-full container mx-auto max-w-6xl flex flex-col gap-10 xl:p-12">
        {/* <motion.div
          // key={index}
          className="w-full flex flex-col gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="relative w-full h-auto overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={simulator}
              alt={""}
              // width={1200}
              // height={800}
              quality={100}
              className="object-contain w-full h-auto"
            />
          </motion.div>
          <div className="w-full flex flex-col gap-5">
            <a
              href={`project.link`}
              target="_BLANK"
              className="text-3xl w-fit hover:underline"
            >
              {`project.title`}
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              {`project.description`}
            </p>
          </div>
        </motion.div> */}
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="relative w-full h-auto overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                // width={1200}
                // height={800}
                quality={100}
                className="object-contain w-full h-auto"
              />
            </motion.div>
            <div className="w-full flex flex-col gap-5">
              <a
                href={project.link}
                target="_BLANK"
                className="text-3xl w-fit hover:underline"
              >
                {project.title}
              </a>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
