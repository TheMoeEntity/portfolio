"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Menu } from "lucide-react";
import FloatingHeader from "@/components/shared/UI/FloatingHeader";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const goToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };
  // const text = "<MOE />"; // Text to animate
  // const letters = text.split(""); // Split text into individual letters
  // const letters = ["<", "M", "O", "E ", "‎ ", "/", ">"];

  // Variants for staggered drop animation
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.45, // Delay between each letter
  //     },
  //   },
  // };

  // const letterVariants = {
  //   hidden: { opacity: 0, y: -50 }, // Start above
  //   visible: { opacity: 1, y: 0 }, // Drop to original position
  // };
  const { theme } = useTheme();
  return (
    <header
      className={`fixed z-[11] w-full bg-[#110f10] md:static font-[family-name:var(--font-geist-sans)] ${theme === "light" ? "text-[#110f10]" : "text-white"}  body-font`}
    >
      <FloatingHeader />
      <div className="container mx-auto items-center py-6 flex md:py-7 px-5 md:flex-row xl:px-8">
        <Link
          className="flex title-font font-medium mb-4 md:mb-0 pr-4"
          href="/"
        >
          <span className="text-3xl">
            {"MO.E"} <span className="text-[#14AFF1] pl-1">{"/>"}</span>{" "}
          </span>
          {/* <motion.span
            className="text-2xl md:text-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span> */}
        </Link>

        {/* Hamburger / X Icon */}
        <button
          className={`text-white ${navbarOpen && "fixed right-8 top-12"} cursor-pointer z-[51] text-3xl leading-none border border-solid border-transparent  rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3`}
          type="button"
          title="Toggle Navigation Menu"
          onClick={toggleNavbar}
        >
          {navbarOpen ? (
            // X Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon
            <Menu size={"30px"} />
          )}
        </button>

        {/* Mobile Navigation (Slide-Up Animation) */}
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              className="fixed inset-0 bg-[#121212] z-50 md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <div className="container flex justify-center flex-col h-screen p-8">
                <nav className="flex flex-col gap-y-6">
                  {[
                    "services",
                    "about",
                    "works",
                    "testimonials",
                    "View Resume",
                  ].map((section, index) =>
                    section === "View Resume" ? (
                      <motion.button
                        key={section}
                        className="w-fit text-xl px-4 mt-12 py-2 bg-[#14AFF1] text-gray-800 font-semibold rounded-lg hover:bg-[#0F8AC0] transition-colors"
                        onClick={() => {
                          toggleModal();
                          toggleNavbar();
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.25, duration: 0.55 }}
                      >
                        {section}
                      </motion.button>
                    ) : (
                      <motion.button
                        key={section}
                        onClick={() => {
                          toggleNavbar();
                          goToSection(section);
                        }}
                        className="mr-6 w-fit text-4xl font-medium hover:text-[#14AFF1]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.4, duration: 0.7 }}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.button>
                    )
                  )}

                  {/* Floating "MOE" Effect */}
                  <motion.span
                    className="text-6xl absolute bottom-3 text-[#DDDDDD] right-4"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    MOE
                  </motion.span>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="md:flex flex-grow items-center hidden">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
            <button
              onClick={() => goToSection("services")}
              className="mr-6 hover:text-[#14AFF1]"
            >
              Services
            </button>
            <button
              onClick={() => goToSection("about")}
              className="mr-6 hover:text-[#14AFF1]"
            >
              About
            </button>
            <button
              onClick={() => goToSection("works")}
              className="mr-6 hover:text-[#14AFF1]"
            >
              Work
            </button>
            <button
              onClick={() => goToSection("testimonials")}
              className="mr-6 hover:text-[#14AFF1]"
            >
              Testimonials
            </button>
            {/* <button className="mr-6 hover:text-[#14AFF1]">
              Contact
              Contact
            </button> */}
          </nav>
          <button
            className="w-fit px-4 py-2 bg-[#14AFF1] text-gray-800 font-semibold rounded-lg hover:bg-[#0F8AC0] transition-colors"
            onClick={() => {
              toggleModal();
            }}
          >
            View Resume
          </button>
        </div>

        {/* Modal for CV */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[999999] flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#121212] rounded-lg py-6 px-2 w-full max-w-3xl max-h-[95vh] overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <div className="flex px-5 justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">
                    {" "}
                    Moses Nwigberi&#39;s Resume
                  </h2>
                  <button
                    className="text-white hover:text-[#14AFF1]"
                    onClick={toggleModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="h-[85vh] overflow-y-auto">
                  <iframe
                    src="/docs/Moses_Nwigberi Resume-2025.pdf"
                    className="w-full h-full"
                    frameBorder="0"
                  ></iframe>
                </div>
                {/* <div className="mt-2 flex justify-end">
                  <a
                    href="/docs/Moe-resume.pdf"
                    download="Moses Nwigberi's Resume.pdf"
                    className="w-fit mt-8 px-4 py-2 font-semibold rounded-lg transition-colors"
                  >
                    <Download color="#14AFF1" />
                  </a>
                </div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
