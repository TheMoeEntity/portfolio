"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";

// Define the type for a testimonial
interface Testimonial {
  name: string;
  role: string;
  text: string;
  profile?: string;
  position: {
    x: string;
    y: string;
  };
}

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  testimonial: Testimonial;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  index: number;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    name: "Ikenna Ibe",
    role: "Software Developer at Selpay",
    profile: "Syks.png",
    position: {
      x: "left-[50px]",
      y: "md:top-10 xl:top-[30px] md:top-[190px] -z-1",
    },
    text: `<b class="text-[#C4C4C4]">Moe</b> is an absolute gem to work with. I often outsource projects to him, and he never disappoints. Together, <b class="text-[#C4C4C4]">we’ve built websites for brands in Nigeria and the US</b>, and the clients are always <b class="text-[#C4C4C4]">thrilled with his work</b>. His expertise in Next.js and Tailwind CSS is unmatched.`,
  },
  {
    name: "Moses Nwigberi.",
    role: "Fellow Developer",
    position: {
      x: "md:left-10 xl:left-[35%]",
      y: "md:bottom-0 xl:bottom-[10px]",
    },
    text: `He’s the only person I know who can make Tailwind CSS sound like a stand-up comedy routine. His passion for clean code is matched only by his love for  <b class="text-[#C4C4C4]">Barcelona</b>.  <b class="text-[#C4C4C4]">Visca el Barça!</b>`,
  },
  {
    name: "Bright Eguasa.",
    role: "Startup Founder at PEPNOPS inc",
    profile: "bright.png",
    position: {
      x: "xl:right-[130px] md:right-0",
      y: "xl:bottom-[120px] md:bottom-[120px]",
    },
    text: `I hired him to build my <b class="text-[#C4C4C4]">startup website</b>, and I ended up with a <b class="text-[#C4C4C4]">masterpiece</b>.`,
  },
  {
    name: "Blaise Mbachu",
    role: "Graphic Artist",
    profile: "blaise.avif",
    position: {
      x: "left-[50px]",
      y: "md:bottom-10 xl:bottom-[60px] md:bottom-[210px] -z-1",
    },
    text: `Moses is one of the most reliable developers I’ve had the chance to work with. We’ve collaborated on several projects—Amour Artelia, Studio55, Greencal Foundation, and now the VisCorner UI redesign—and our workflow has always been smooth. He’s sharp, communicative, and knows how to bring designs to life with precision. <b class="text-[#C4C4C4]">Highly recommend!</b>`,
  },
  {
    name: "Olamide Famojuro",
    role: "Character animator at Omen Studios",
    profile: "FAME-LOGO.png",
    position: {
      x: "xl:right-[15%] md:right-[20%]",
      y: "md:top-[450px] xl:top-[400px]",
    },
    text: `Nwigberi Moses delivered quality work with a clear understanding of the project vision. He offered valuable input, communicated professionally, and met expectations with ease. A reliable developer to work with.`,
  },
];

// TestimonialCard Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  mouseX,
  mouseY,
  index,
}) => {
  // Apply spring smoothing to mouseX and mouseY with unique stiffness and damping
  const smoothMouseX = useSpring(mouseX, {
    stiffness: 300, // Increased stiffness for faster response
    damping: 20, // Reduced damping for less delay
  });
  const smoothMouseY = useSpring(mouseY, {
    stiffness: 300, // Increased stiffness for faster response
    damping: 20, // Reduced damping for less delay
  });

  // Reduce the range of movement for a slower effect
  const x = useTransform(
    smoothMouseX,
    [-window.innerWidth / 2, window.innerWidth / 2],
    index % 2 === 0 ? [-10, 10] : [-30, 30] // Different ranges for different speeds
  );
  const y = useTransform(
    smoothMouseY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    index % 2 === 0 ? [-10, 10] : [-30, 30] // Different ranges for different speeds
  );

  const imageStyles: CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    backgroundImage: `url('/${testimonial.profile || "moses-new.jpeg"}')`,
  };

  return (
    <motion.div
      className={
        "md:absolute shadow-lg my-5 md:my-0 rounded-lg bg-[#191718] text-[#5D5B5F] px-7 py-6 flex flex-col gap-5 w-auto md:w-[380px] " +
        testimonial.position.x +
        " " +
        testimonial.position.y
      }
      style={{ x, y }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
    >
      <div className="flex gap-3 items-center">
        <div
          className="w-[40px] rounded-full h-[40px]"
          style={{ ...imageStyles }}
        ></div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold text-white">{testimonial.name}</h1>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <p
        className="mt-2 text-sm text-gray-400"
        dangerouslySetInnerHTML={{ __html: testimonial.text }}
      />
    </motion.div>
  );
};

// Testimonials Component
const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [initialPhase, setInitialPhase] = useState(true);

  useEffect(() => {
    // Simulate a subtle oscillation for a few seconds
    if (initialPhase) {
      const start = performance.now();

      const animate = (time: number) => {
        const elapsed = time - start;
        if (elapsed < 3000) {
          mouseX.set(Math.sin(elapsed / 500) * 15); // Small oscillation in X
          mouseY.set(Math.sin(elapsed / 600) * 15); // Small oscillation in Y
          requestAnimationFrame(animate);
        } else {
          setInitialPhase(false); // End initial animation phase
        }
      };

      requestAnimationFrame(animate);
    }

    // Mouse movement takes over after initial animation
    const handleMouseMove = (e: MouseEvent) => {
      if (!initialPhase) {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, initialPhase]);

  return (
    <div
      id="testimonials"
      ref={containerRef}
      className="relative xl:mt-20 min-h-screen md:min-h-[1100px] xl:min-h-screen w-full container mx-auto"
    >
      <div className="md:absolute py-10 mb-2 text-center text-4xl font-bold tracking-tighter text-white md:text-6xl top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        People Seem to Like Me (Mostly ☻)
      </div>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial}
          mouseX={mouseX}
          mouseY={mouseY}
          index={index}
        />
      ))}
    </div>
  );
};

export default Testimonials;
