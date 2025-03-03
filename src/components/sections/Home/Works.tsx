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
    link: "https://dovehospital.com",
    image: dovehospital,
    title: "Dove Hospital",
    description:
      "Dove Hospital is a medical center that provides healthcare services to patients.",
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
    type: "side",
    link: "https://tribu-hotel.vercel.app",
    image: tribu,
    title: "Tribu-Hotel Redesign",
    description: "",
  },
  {
    type: "side",
    link: "https://mkonstruct.vercel.app",
    image: konstruct,
    title: "Konstruct",
    description: "",
  },
  {
    type: "side",
    link: "https://moestores.vercel.app",
    image: moestores,
    title: "Apple Stores",
    description: "",
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
    type: "side",
    link: "https://aman-awards.vercel.app/",
    image: aman,
    title: "AMAN Awards",
    description:
      "The AMAN Awards, presented by the Artiste Managers Association in Nigeria (AMAN) is an annual event that recognizes and celebrates exceptional talents within the creative industries.",
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
        className="text-2xl top-20 md:right-10 md:rotate-12 gap-7 items-center flex mt-2 justify-center md:justify-start md:absolute"
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
