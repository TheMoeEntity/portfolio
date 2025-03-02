import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";
const Cursor = dynamic(() => import("../shared/CustomCusor"), {
  ssr: false,
});

// import CustomCursor from "../shared/CustomCusor";
// import Loader from "../shared/Loader";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <>
      {/* <Loader /> */}
      <Header />
      {props.children}
      {/* <ScrollToTop /> */}
      <Cursor />
      <Footer />
    </>
  );
};

export default AppLayout;
