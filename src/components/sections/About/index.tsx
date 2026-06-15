"use cient";
import { Typewriter } from "@/components/shared/TypeWriter";
import React from "react";

const About = () => {
  return (
    <section className="container flex flex-col gap-10 mt-20 mx-auto max-w-5xl md:p-3">
      <p className="text-2xl md:text-4xl font-medium">
        I've spent the better part of a decade building digital products for fintech, e-commerce, and real estate companies — because apparently I enjoy pain, deadlines, and the occasional database migration at 11pm.
        From architecting multi-tenant SaaS backends to crafting UIs that don't make designers cry, I've done both sides of the stack. My superpower? Turning coffee into clean, maintainable TypeScript — on the frontend and the backend — because <span className="text-[#14AFF1]">any</span> is not my type, and neither is spaghetti <span className="text-[#14AFF1]">SQL</span>
      </p>
      <p className="md:text-3xl text-[#8D8D8D] font-medium">
        When I'm not debating whether to use Prisma or Drizzle ORM, you'll find me outdoors chasing my kids around (I have three, send help), pretending to be a FIFA pro (spoiler: still not), or down a rabbit hole on distributed systems at 1am because one blog post led to another. And if there's a Barcelona match on — drop everything. I'll be glued to the screen watching Yamal make defenders question their life choices, dreaming of the day I catch it live at the Spotify Camp Nou.
      </p>
      <p className="md:text-3xl font-normal text-gray-300">
        I've built for brands in Nigeria and the US, which basically means I can design a stateful auth flow while eating jollof rice — and explain it in plain English over a pumpkin spice latte.
        Whether it's a real-time WebSocket system, an argument about semicolons, or even a simple portfolio website for your brand — I bring simplicity, structure, and an embarrassing attention to detail to everything I do.
      </p>
      <p>
        <Typewriter
          repeatOnView={true}
          text="Oh, and if you need
        someone to explain why <code>useEffect</code> is both a blessing and a
        curse and why your Redis cache is lying to you — I’m your guy."
          delay={50}
        />
      </p>
    </section>
  );
};

export default About;
