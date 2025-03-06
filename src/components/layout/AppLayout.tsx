"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/context/ThemeContext";
const Cursor = dynamic(() => import("../shared/CustomCusor"), {
  ssr: false,
});
// import Loader from "../shared/Loader";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  // const { setTheme } = useTheme();
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
    <ThemeProvider>
      <div>
        {/* Scroll Progress Bar */}
        <div
          className="fixed z-50 top-0 left-0 h-1 bg-[#14AFF1]"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* <Loader /> */}
        <Header />

        {props.children}
        {/* <ScrollToTop /> */}
        <Cursor />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
