import { useEffect, useState } from "react";

const FloatingHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Only for md screens and up
        const isScrolled = window.scrollY > 200;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div
      className={`framer-w6mgug ${scrolled ? "animate-drop-in" : "md:opacity-0 md:-translate-y-full"}`}
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-col justify-start flex-shrink-0">
          <p className="font-semibold whitespace-nowrap text-white text-left tracking-tight">
            Moses Nwigberi
          </p>
        </div>
        <div className="flex flex-col justify-start flex-shrink-0">
          <p className="text-sm whitespace-nowrap text-white tracking-tight">
            Fullstack Developer
          </p>
        </div>
      </div>
      <a
        href="mailto:mosesnwigberi@gmail.com"
        rel="noopener"
        className="mt-2 inline-block whitespace-nowrap duration-500 bg-[#1D1D1D] text-white px-4 py-2 transition-colors rounded-md text-center hover:bg-[#14AFF1]"
      >
        Get in Touch
      </a>
    </div>
  );
};

export default FloatingHeader;
