"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="text-white body-font">
      <div className="container mx-auto items-center flex py-7 px-3 md:flex-row">
        <Link
          className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4"
          href="/"
        >
          <span className="ml-3 text-2xl md:text-3xl">{"<MOE />"}</span>
        </Link>

        {/* Hamburger / X Icon */}
        <button
          className={`text-white ${navbarOpen && "fixed right-5 top-10"} cursor-pointer z-[51] text-xl leading-none py-1 border border-solid border-transparent  rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3`}
          type="button"
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
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
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
              <div className="container justify-center items-center flex flex-col h-full mx-auto p-5">
                <nav className="flex flex-col items-center justify-center space-y-6 text-center">
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/"
                    onClick={toggleNavbar}
                  >
                    Home
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/about"
                    onClick={toggleNavbar}
                  >
                    About
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/characters"
                    onClick={toggleNavbar}
                  >
                    Characters
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/animated-films"
                    onClick={toggleNavbar}
                  >
                    Animated Films
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/projects"
                    onClick={toggleNavbar}
                  >
                    Products
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/projects"
                    onClick={toggleNavbar}
                  >
                    Tutorials
                  </Link>
                  <Link
                    className="text-2xl hover:text-[#14AFF1]"
                    href="/contact"
                    onClick={toggleNavbar}
                  >
                    Contact
                  </Link>
                </nav>
                <button
                  className="w-fit mt-8 px-4 py-2 bg-[#14AFF1] text-white font-semibold rounded-lg hover:bg-[#0F8AC0] transition-colors"
                  onClick={toggleNavbar}
                >
                  Download Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="md:flex flex-grow items-center hidden">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
            <Link className="mr-6 hover:text-[#14AFF1]" href="/about">
              Work
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/characters">
              About
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/animated-films">
              Portfolio
            </Link>
            <Link className="mr-6 hover:text-[#14AFF1]" href="/contact">
              Contact
            </Link>
          </nav>
          <a
            href="/docs/Moe-resume.pdf"
            download="Moses Nwigberi's Resume.pdf"
            className="px-4 bg-[#14AFF1] py-2 mt-2 text-sm font-semibold text-white transition duration-500 ease-in-out transform rounded-lg md:mt-0 md:ml-4 hover:bg-[#0F8AC0] focus:outline-none focus:shadow-outline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
