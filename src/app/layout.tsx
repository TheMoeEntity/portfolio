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
const ogImage = "https://www.mosesnwigberi.com/OG_image_new.jpeg";
export const metadata: Metadata = {
  title: "Moses Chukwudi Nwigberi's Portfolio | Web Developer & Engineer",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Moses Chukwudi Nwigberi",
      url: "https://www.mosesnwigberi.com",
      image: ogImage,
      jobTitle: "Fullstack Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "WealthBridge Financial Group",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Lagos",
      },
      skills: [
        "Next.js",
        "React",
        "PHP",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "Node.js",
      ],
      sameAs: [
        "https://www.linkedin.com/in/nwigberi-moses",
        "https://github.com/TheMoeEntity",
        "https://twitter.com/NMoses_",
        "https://instagram.com/NC_Moses",
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
  metadataBase: new URL("https://www.mosesnwigberi.com"),
  alternates: {
    canonical: "https://www.mosesnwigberi.com",
  },
  category: "Portfolio",
  publisher: "Moses Chukwudi Nwigberi",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Moses Chukwudi Nwigberi",
    "Moses Nwigberi",
    "Nwigberi Moses",
    "Moe",
    "Web Developer Lagos",
    "Nigerian Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind Developer",
    "Software Engineer Nigeria",
    "Portfolio Website",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Moses Chukwudi's Portfolio | Fullstack Developer",
    siteName: "Moe's Portfolio",
    description:
      "Building sleek UIs with Next.js & TypeScript. Explore Moses Chukwudi's web development projects, showcasing skills and professional work.",
    url: "https://www.mosesnwigberi.com",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Moses Chukwudi Nwigberi Portfolio",
      },
    ], // Replace with a relevant image URL for Open Graph
  },

  twitter: {
    card: "summary_large_image",
    site: "@NMoses_",
    creator: "@NMoses_",
    title: "Moses Chukwudi's Portfolio | Web Developer & Engineer ",
    description:
      "Explore Moses Chukwudi's web development projects, showcasing skills and professional work.",
    images: [ogImage], // Replace with a relevant image URL for Twitter Card
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
