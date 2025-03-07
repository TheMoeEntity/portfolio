import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WithThemeProvider from "@/components/layout/WithThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moses Chukwudi's Portfolio | Web Developer & Engineer",
  description:
    "Welcome to the online portfolio of Moses Chukwudi Nwigberi, a passionate web developer and chemical engineering student based in Lagos, Nigeria. Explore projects, skills, and professional experiences.",
  authors: {
    name: "Moses Chukwudi Nwigberi",
    url: "https://codewithmoe.vercel.app",
  },
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Moe's Portfolio",
  keywords:
    "Moses Chukwudi Nwigberi, Moses Nwigberi, web developer, portfolio, chemical engineering, software developer, full-stack developer, Next.js, TypeScript, Tailwind, projects",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Moses Chukwudi's Portfolio | Fullstack Developer",
    description:
      "Explore Moses Chukwudi's web development and engineering projects, showcasing skills and professional work.",
    url: "https://codewithmoe.vercel.app",
    images: "https://codewithmoe.vercel.app/icon.ico", // Replace with a relevant image URL for Open Graph
  },
  twitter: {
    card: "summary_large_image",
    site: "@NMoses_",
    title: "Moses Chukwudi's Portfolio | Web Developer & Engineer",
    description:
      "Explore Moses Chukwudi's web development and engineering projects, showcasing skills and professional work.",
    images: "https://codewithmoe.vercel.app/icon.ico", // Replace with a relevant image URL for Twitter Card
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WithThemeProvider>{children}</WithThemeProvider>
      </body>
    </html>
  );
}
