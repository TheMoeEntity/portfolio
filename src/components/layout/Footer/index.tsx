"use client";
import { Linkedin, Instagram, Twitter } from "lucide-react"; // Assuming you're using Lucide icons
// import Link from "next/link";

export const Footer = () => {
  const goToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 10,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="text-gray-300 border-[#ffffff1a] border-t-[0.5px] py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">MOSES NWIGBERI</h2>
            <p className="text-gray-400">
              Welcome to my realm of pixels and code! {`I'm`} Moe, a fullstack
              developer with a fiery passion for Next.js, Typescript and iOS
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => goToSection("about")}
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToSection("works")}
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToSection("services")}
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  Services
                </button>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{`Let's`} Connect</h3>
            <p className="text-gray-400">
              Reach out for collaborations, inquiries, or just to say hi!
            </p>
            <div className="flex space-x-6">
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
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center uppercase text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MOE. all of the rights, all of the
            riiiiights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
