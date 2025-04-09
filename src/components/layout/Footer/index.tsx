"use client";
// import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <div
      className="relative h-[600px] md:h-[350px]"
      style={{ clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 100%)` }}
    >
      <footer
        className="text-gray-300 h-[600px] fixed bottom-0 md:h-[350px] w-full pt-12 pb-5"
        style={{ backgroundColor: "#0E0D0E" }}
      >
        <div className="container w-full max-w-6xl mx-auto px-4">
          {/* Footer Content */}
          <div className="flex flex-wrap gap-y-10 w-full justify-between">
            {/* About Section */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                MOE&#39;S SUPER-AWESOME PORTFOLIO
              </h2>
              <a
                href="mosesnwigberi@gmail.com"
                className="text-2xl block my-5 font-bold text-white"
              >
                mosesnwigberi@gmail.com ↗
              </a>
              <p className="text-gray-400 mt-5 block">
                © {new Date().getFullYear()} MOSES CHUKWUDI NWIGBERI.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl uppercase font-bold text-white">
                say hi ☻
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.github.com/theMoeEntity"
                  target="_blank"
                  title="Have a look at my GitHub profile and repositories"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#14AFF1] transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nwigberi-moses"
                  target="_blank"
                  title="Connect with me on LinkedIn"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#14AFF1] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/nc_moses"
                  target="_blank"
                  title="Visit my Instagram page"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#14AFF1] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.x.com/NMoses_"
                  target="_blank"
                  title="Connect with me on X"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#14AFF1] transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t invisible border-gray-800 my-8"></div>

          {/* Copyright */}
          <div className="text-center uppercase text-gray-400">
            <p>
              {`"`}all of the rights, all of the riiiiights{`"`} reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
