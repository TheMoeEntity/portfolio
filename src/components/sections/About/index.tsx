"use cient";
import { Typewriter } from "@/components/shared/TypeWriter";
import React from "react";

const About = () => {
  return (
    <section className="container flex flex-col gap-10 mt-20 mx-auto max-w-5xl md:p-3">
      <p className="text-2xl md:text-4xl font-medium">
        {` I've`} spent the last decade building digital wonders for tech,
        e-commerce, and medical companies—because who{` doesn’t`} love a good
        challenge? From crafting pixel-perfect UIs to wrestling with backend
        APIs, {`I've`} done it all. My superpower? Turning coffee into clean,
        maintainable code (mostly TypeScript, because{" "}
        <span className="text-[#14AFF1]">any</span> is not my type).
      </p>
      <p className="md:text-3xl text-[#8D8D8D] font-medium">
        When I’m not geeking out over the latest Next.js feature or debating why
        Tailwind CSS is the best thing since sliced bread, you’ll find me
        outdoors chasing my kids around, pretending to be a FIFA pro (spoiler:
        I’m not), or binge-reading frontend blogs to stay ahead of the curve.
        And if there’s a Barcelona match on, drop everything—I’ll be glued to
        the screen, cheering on the Blaugrana and dreaming of the day I can
        watch Yamal’s magic live at Camp Nou or estadio mon-juice (or whatever
        they’re calling it now).
      </p>
      <p className="md:text-3xl font-normal text-gray-300">
        I’ve had the privilege of working with brands both in Nigeria and the
        US, which basically means I can debug code while eating jollof rice and
        drinking a pumpkin spice latte. Whether it’s solving complex problems or
        arguing about semicolons, I bring a mix of simplicity, and attention to
        detail to everything I do.
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
    </section>
  );
};

export default About;
