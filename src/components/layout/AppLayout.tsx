import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../shared/Loader";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <>
      <Loader />
      <Header />
      {props.children}
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  );
};

export default AppLayout;
