"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";
// import { ThemeSwitcher } from "../shared/ThemeSwitcher";
const Cursor = dynamic(() => import("../shared/CustomCusor"), {
  ssr: false,
});
// import Loader from "../shared/Loader";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / scrollHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`transition-colors ease duration-500 ${theme === "light" ? "bg-white text-[#110f10]" : "bg-[#110f10] text-[#ffffff]"}`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed transition-all ease-out duration-100 z-50 top-0 left-0 h-1 bg-[#14AFF1]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* <Loader /> */}
      <Header />

      {props.children}
      {/* <ScrollToTop /> */}
      {/* <ThemeSwitcher /> */}
      <Cursor />
      <Footer />
    </div>
  );
};

export default AppLayout;
