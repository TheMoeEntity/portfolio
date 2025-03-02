import About from "@/components/sections/About";
import Hero from "@/components/sections/Home/Hero";
import Works from "@/components/sections/Home/Works";

export default function Home() {
  return (
    <main className="min-h-screen p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Works />
      <About />
    </main>
  );
}
