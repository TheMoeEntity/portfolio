import { Linkedin, Instagram, Youtube, Palette } from "lucide-react"; // Assuming you're using Lucide icons
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">MOSES NWIGBERI</h2>
            <p className="text-gray-400">
              Bringing characters to life through expert modeling, sculpting,
              and animation. Specializing in ZBrush, human anatomy, and creating
              stunning visuals for games, cinematics, and 3D prints.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#14AFF1] transition-colors"
                >
                  Contact
                </Link>
              </li>
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
                href="https://www.linkedin.com/in/olamide-famojuro-3b47a7185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@henry__fame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@henry__fame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://henryfame.artstation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#14AFF1] transition-colors"
              >
                <Palette size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MOE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
