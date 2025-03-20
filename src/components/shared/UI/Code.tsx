import React from "react";
import { motion } from "framer-motion";

const Code = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <code className="font-mono">
        <motion.div
          className="blink"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   transition={{
          //     duration: 0.6,
          //     repeat: Infinity,
          //     repeatType: "reverse",
          //   }}
        >
          <span className="text-pink-500 mr-2">const</span>
          <span className="text-white mr-2">mosesNwigberi</span>
          <span className="text-pink-500 mr-2">=</span>
          <span className="text-gray-400">{"{"}</span>
        </motion.div>
        <div>
          <span className="text-white ml-8 mr-2">name:</span>
          <span className="text-gray-400">{"'"}</span>
          <span className="text-amber-300">Nwigberi Moses</span>
          <span className="text-gray-400">&#39;,</span>
        </div>
        <div>
          <span className="text-white ml-8 mr-2">nickname:</span>
          <span className="text-gray-400">&#39;</span>
          <span className="text-amber-300">Moe</span>
          <span className="text-gray-400">&#39;,</span>
        </div>
        <div>
          <span className="text-white ml-8 mr-2">skills:</span>
          <span className="text-gray-400">[</span>
          <span className="block sm:inline ml-10 md:ml-0">
            &#39;<span className="text-amber-300">Next.js</span>&#39;,{" "}
          </span>
          <span className="block sm:inline ml-10 md:ml-0">
            &#39;<span className="text-amber-300">TypeScript</span>&#39;,{" "}
          </span>
          <span className="block sm:inline ml-10 md:ml-0">
            &#39;<span className="text-amber-300">PHP</span>&#39;,{" "}
          </span>
          <span className="block sm:inline ml-10 md:ml-0">
            &#39;<span className="text-amber-300">Tailwind CSS</span>&#39;,{" "}
          </span>
          <span className="block sm:inline ml-10 md:ml-0">
            &#39;<span className="text-amber-300">Node.js</span>&#39;
          </span>
          <span className="text-gray-400 ml-10 md:ml-0">],</span>
        </div>
        <div>
          <span className="text-white ml-8 mr-2">hardWorker:</span>
          <span className="text-orange-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="text-white ml-8 mr-2">problemSolver:</span>
          <span className="text-orange-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="text-white ml-8 mr-2">workingExperience:</span>
          <span className="text-orange-400">5</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className="text-white ml-8 mr-2">isBarcelonaFan:</span>
          <span className="text-orange-400">true</span>
          <span className="text-gray-400">,</span>
        </div>
        <div>
          <span className=" ml-8 mr-2">hireable:</span>
          <span className="text-gray-400">()={"> {"}</span>
        </div>
        <div>
          <span className="text-orange-400 ml-14 mr-2">return</span>
          <span className="text-gray-400">(</span>
        </div>
        <div>
          <span className="text-cyan-400 ml-20">this.</span>
          <span className="text-white mr-2">hardWorker</span>
          <span className="text-amber-300">&&</span>
        </div>
        <div>
          <span className="text-cyan-400 ml-20">this.</span>
          <span className="text-white mr-2">problemSolver</span>
          <span className="text-amber-300">&&</span>
        </div>
        <div>
          <span className="text-cyan-400 ml-20">this.</span>
          <span className="text-white mr-2">skills.length</span>
          <span className="text-amber-300 mr-2">&gt;=</span>
          <span className="text-orange-400">5</span>
          <span className="text-amber-300"> &&</span>
        </div>
        <div>
          <span className="text-cyan-400 ml-20">this.</span>
          <span className="text-white mr-2">workingExperience</span>
          <span className="text-amber-300 mr-2">&gt;=</span>
          <span className="text-orange-400">5</span>
        </div>
        <div>
          <span className="text-gray-400 ml-16 mr-2">);</span>
        </div>
        <div>
          <span className="text-gray-400 ml-8">{"}"}</span>
        </div>
        <div>
          <span className="text-gray-400">{"}"}</span>
        </div>
      </code>
    </motion.article>
  );
};

export default Code;
