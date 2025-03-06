import About from "@/components/sections/About";
import Hero from "@/components/sections/Home/Hero";
import dynamic from "next/dynamic";

const Testimonials = dynamic(
  () => import("@/components/sections/Home/Testimonials"),
  { ssr: false }
);
import Works from "@/components/sections/Home/Works";

export default function Home() {
  return (
    <main className="p-5 pb-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Works />
      <Testimonials />
      <About />
    </main>
  );
}
