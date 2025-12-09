"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import airtimeplus from "../../../../app/images/airtimeplus.png";
import greencal from "../../../../app/images/greencal-updated.png";
import dovehospital from "../../../../app/images/dovehospital.png";
import zstinger from "../../../../app/images/zstinger.png";
import nosrati from "../../../../app/images/nosrati.png";
import konstruct from "../../../../app/images/konstruct.png";
import moestores from "../../../../app/images/moestores.png";
import tribu from "../../../../app/images/tribu-hotel.png";
import pepnops from "../../../../app/images/pepnops-inc.png";
import aman from "../../../../app/images/aman-awards.png";
import farzad from "../../../../app/images/farzads-blog.png";
import viscorner from "../../../../app/images/viscorner-main.png";
import artelia from "../../../../app/images/amour-artlia-events-space.png";
import technova from "../../../../app/images/technovasummit.png";
import simulator from "../../../../app/images/viscorner-phone-mockup.png";
import fame from "../../../../app/images/HenryFame.png";
import studio55 from "../../../../app/images/studio55-mvp.png";
import wealthBridge from "../../../../app/images/WealthBridge_Holdings.png";
import elegantStores from "@/app/images/elegantStores.png";
import ParallaxMockup from "./Mockup";
export type projectType = {
  link: string;
  type: "real-world" | "side";
  newProject?: boolean;
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};
const visCornerApp = {
  link: "https://viscorner.com",
  type: "real-world",
  image: viscorner,
  title: "VisCorner App",
  description:
    "VisCorner is an online platform that connects customers with verified service providers in dozens of categories—from plumbing and photography to event planning and AC installation.",
};
const projects: projectType[] = [
  {
    type: "side",
    link: "https://www.technovasummit.com",
    newProject: true,
    image: technova,
    title: "TechNova Summit",
    description:
      "TechNova Africa's Web3 Carnival is more than just an event – it's a movement to position Africa at the forefront of blockchain innovation and decentralized technology",
  },
  {
    type: "side",
    link: "https://theelegantstores.vercel.app/",
    newProject: false,
    image: elegantStores,
    title: "The Elegant Stores",
    description:
      "It's an Ecommerce store I worked on in 2024. Saw a cool template online and decided to build it. It has all the cool fun stuff you'd expect from a store. Still a work in progress and I intend to add even cooler features like AI Chatbot, expanded backend with golang. Fingers crossed!",
  },
  {
    type: "real-world",
    link: "https://www.wealthbridge.com.ng",
    image: wealthBridge,
    newProject: true,
    title: "WealthBridge Financial Holdings",
    description: `
    WealthBridge Financial Services Holdings Limited is a full-service financial group providing integrated solutions across the financial spectrum. We serve corporations, institutions, and high-net-worth individuals with tailored strategies that address funding, investment, advisory, and financial intelligence needs. Our approach combines deep market knowledge with operational expertise to help clients create, manage, and preserve value across asset classes and sectors.
    `,
  },
  {
    type: "real-world",
    link: "https://olamidefamojuro.com",
    image: fame,
    title: "Olamide's Portfolio",
    description:
      "Explore the portfolio of Olamide Henry Famojuro — Henry Fame — a passionate character artist skilled in modeling, sculpting, and texturing for games, films, and 3D prints.",
  },
  {
    type: "real-world",
    link: "https://www.studio55.vercel.app",
    image: studio55,
    title: "Studio 55 (MVP)",
    description:
      "At Studio55byMich, we capture the profound emotions of weddings and the essence of individual portraits, turning fleeting moments into timeless keepsakes. This is the MVP of the revamped website, and it is still under review, the old SquareSpace version is still live at <a class='underline' href='https://studio55byMich.com'>studio55byMich.com</a>.",
  },
  {
    link: "https://beta.airtimeplus.ng",
    type: "real-world",
    image: airtimeplus,
    title: "Airtimeplus Beta",
    description:
      "Airtimeplus Beta is a Progressive Web Application that allows users to buy airtime, data, and pay bills online. No signs ups required.",
  },
  {
    type: "real-world",
    link: "https://www.amourartelia.com",
    newProject: false,
    className: "artelia",
    image: artelia,
    title: "Amour Artelia Events Space",
    description:
      "Amour Artelia provides a versatile event and studio space designed to accommodate intimate weddings, corporate events, and creative productions. The project is still in development and would be launching soon.",
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
      "Nosrati Law Group is a Beverly Hills based client-centered practice specializing in estate planning",
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
      <h1 className="text-4xl text-center md:text-left md:text-5xl md:ml-5 mb-8">
        Selected Works
      </h1>

      {/* Filter Buttons */}
      <motion.div
        className="text-2xl w-fit mx-auto my-10 my=0 rounded-full py-2 bg-[#1B191A] top-20 xl:right-10 lg:rotate-12 gap-4 items-center flex mt-2 mb-5 justify-center xl:justify-start xl:absolute"
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          onClick={() => setFilter("real-world")}
          className={`px-6 py-2 md:text-xl text-sm rounded-full transition-colors duration-700 ${
            filter === "real-world"
              ? "bg-[#14AFF1] text-white"
              : "bg-transparent text-white"
          }`}
        >
          For Brands
        </button>
        <button
          onClick={() => setFilter("side")}
          className={`px-6 py-2 md:text-xl text-sm rounded-full transition-colors duration-700 ${
            filter === "side"
              ? "bg-[#14AFF1] text-white"
              : "bg-transparent text-white"
          }`}
        >
          Side Projects
        </button>
      </motion.div>

      {/* Projects Grid */}

      <div className="w-full container mx-auto max-w-6xl xl:p-12">
        {filter === "real-world" && (
          <ParallaxMockup
            simulator={simulator}
            airtimeplusBeta={visCornerApp}
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`w-full flex flex-col gap-10 ${index % 2 == 1 && "md:mt-16"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`relative ${project.className} p-3 bg-[#1B191A] md:p-5 w-full h-auto overflow-hidden rounded-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {project.newProject && (
                  <div className="absolute left-3 top-4 md:top-10 md:left-10">
                    <span className="text-[#14AFF1] border-[2px] border-[#14AFF1] shadow-md px-3 py-1 rounded-md">
                      NEW
                    </span>
                  </div>
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  quality={100}
                  className="object-contain w-full h-auto rounded-lg"
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
                <p
                  className="text-[#F0EDF0] text-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
