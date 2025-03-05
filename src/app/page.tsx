import About from "@/components/sections/About";
import Hero from "@/components/sections/Home/Hero";
import Testimonials from "@/components/sections/Home/Testimonials";
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
