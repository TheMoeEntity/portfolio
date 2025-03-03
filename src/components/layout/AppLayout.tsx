"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";
const Cursor = dynamic(() => import("../shared/CustomCusor"), {
  ssr: false,
});
// import Loader from "../shared/Loader";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  const [, setTheme] = useState<"dark" | "light">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / scrollHeight) * 100;

      setScrollProgress(progress);

      if (scrollY > 1000) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
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
  );
};

export default AppLayout;
