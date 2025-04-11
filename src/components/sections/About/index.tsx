"use cient";
import { Typewriter } from "@/components/shared/TypeWriter";
import React from "react";
import SkillsDisplay from "./SkillDisplay";

const About = () => {
  return (
    <section className="grid md:p-8 grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
      <div className="container flex flex-col gap-10 pl-5 mt-20 mx-auto md:p-3">
        <p className="text-3xl font-medium">
          {` I've`} spent the last decade building digital wonders for tech,
          e-commerce, and medical companies—because who{` doesn’t`} love a good
          challenge? From crafting pixel-perfect UIs to wrestling with backend
          APIs, {`I've`} done it all. My superpower? Turning coffee into clean,
          maintainable code (mostly TypeScript, because{" "}
          <span className="text-[#14AFF1]">any</span> is not my type).
        </p>
        <p className="text-2xl font-medium">
          When I’m not geeking out over the latest Next.js feature or debating
          why Tailwind CSS is the best thing since sliced bread, you’ll find me
          outdoors chasing my kids around, pretending to be a FIFA pro (spoiler:
          I’m not), or binge-reading frontend blogs to stay ahead of the curve.
          And if there’s a Barcelona match on, drop everything—I’ll be glued to
          the screen, cheering on the Blaugrana and dreaming of the day I can
          watch Yamal’s magic live at Camp Nou or estadio mon-juice (or whatever
          they’re calling it now).
        </p>
        <p>
          <Typewriter
            repeatOnView={true}
            text="Oh, and if you need
        someone to explain why <code>useEffect</code> is both a blessing and a
        curse, I’m your guy."
            delay={50}
          />
        </p>
      </div>
      <SkillsDisplay />
      {/* <div className="grid grid-cols-1 md:grid-cols-3"></div> */}
    </section>
  );
};

export default About;
