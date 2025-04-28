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
  title: "Moses Chukwudi Nwigberi's Portfolio | Web Developer & Engineer",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Moses Chukwudi Nwigberi",
      url: "https://www.mosesnwigberi.com",
      jobTitle: "Fullstack Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "VisCorner",
      },
      sameAs: [
        "https://www.linkedin.com/in/nwigberi-moses",
        "https://github.com/TheMoeEntity",
        "https://twitter.com/NMoses_",
      ],
    }),
  },
  description:
    "Welcome to the online portfolio of Moses Chukwudi Nwigberi, a passionate web developer with a chemical engineering background based in Lagos, Nigeria. Explore projects, skills, and professional experiences.",
  authors: {
    name: "Moses Chukwudi Nwigberi",
    url: "https://www.mosesnwigberi.com",
  },
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Moe's Portfolio",
  keywords:
    "Moses Chukwudi Nwigberi, Moses Nwigberi, web developer, portfolio, chemical engineering, software developer, full-stack developer, Next.js, TypeScript, Tailwind, projects",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Moses Chukwudi's Portfolio | Fullstack Developer",
    siteName: "Moe's Portfolio",
    description:
      "Building sleek UIs with Next.js & TypeScript. Explore Moses Chukwudi's web development projects, showcasing skills and professional work.",
    url: "https://www.mosesnwigberi.com",
    images: [
      {
        url: "https://www.mosesnwigberi.com/moe-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moses Chukwudi Nwigberi Portfolio",
      },
    ], // Replace with a relevant image URL for Open Graph
  },
  twitter: {
    card: "summary_large_image",
    site: "@NMoses_",
    title: "Moses Chukwudi's Portfolio | Web Developer & Engineer ",
    description:
      "Explore Moses Chukwudi's web development projects, showcasing skills and professional work.",
    images: ["https://www.mosesnwigberi.com/moe-og-image.jpg"], // Replace with a relevant image URL for Twitter Card
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
