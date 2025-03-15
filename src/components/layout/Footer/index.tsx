"use client";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react"; // Assuming you're using Lucide icons
// import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-gray-300 w-full border-[#ffffff1a] border-t-[0.5px] pt-12 pb-5">
      <div className="container w-full max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap gap-y-10 w-full justify-between">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              MOE&#39;S SUPER-AWESOME PORTFOLIO
            </h2>
            <p className="text-gray-500">
              {" "}
              &copy; {new Date().getFullYear()} MOSES CHUKWUDI NWIGBERI.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl uppercase font-bold text-white">say hi ☻</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.github.com/theMoeEntity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nwigberi-moses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/nc_moses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.x.com/NMoses_"
                target="_blank"
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
        <div className="text-center uppercase text-gray-500">
          <p>
            {`"`}all of the rights, all of the riiiiights{`"`} reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
