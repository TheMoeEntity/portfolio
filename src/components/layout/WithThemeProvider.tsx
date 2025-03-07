"use client";
import React, { ReactNode } from "react";
import AppLayout from "./AppLayout";
import { ThemeProvider } from "@/context/ThemeContext";

const WithThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <AppLayout>{children}</AppLayout>
      </ThemeProvider>
    </>
  );
};

export default WithThemeProvider;
