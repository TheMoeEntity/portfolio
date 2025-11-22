import About from "@/components/sections/About";
import Hero from "@/components/sections/Home/Hero";
import dynamic from "next/dynamic";

const Testimonials = dynamic(
  () => import("@/components/sections/Home/Testimonials"),
  { ssr: false }
);
import Works from "@/components/sections/Home/Works";
import ImageGen from "@/components/shared/UI/ImageGen";
// import Goals from "@/components/sections/Home/Goals";

export default function Home() {
  return (
    <main className="p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <ImageGen />
      <Hero />
      {/* <Goals /> */}
      <Works />
      <Testimonials />
      <About />
    </main>
  );
}
