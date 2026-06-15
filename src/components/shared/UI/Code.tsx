import React from "react";
import { motion } from "framer-motion";
import { DEV_OBJECT_SKILLS } from "@/app/lib/constants";

const Code = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <code className="font-mono">
        <div>
          <span className="text-pink-500 mr-2">const</span>
          <span className="text-white mr-2">mosesNwigberi</span>
          <span className="text-pink-500 mr-2">=</span>
          <span className="text-gray-400">{"{"}</span>
        </div>

        <div>
          <span className="text-white ml-8 mr-2">name:</span>
          <span className="text-amber-300">&#39;Nwigberi Moses&#39;</span>
          <span className="text-gray-400">,</span>
        </div>

        <div>
          <span className="text-white ml-8 mr-2">nickname:</span>
          <span className="text-amber-300">&#39;Moe&#39;</span>
          <span className="text-gray-400">,</span>
        </div>

        {/* Skills driven by constants — edit in one place */}
        <div>
          <span className="text-white ml-8 mr-2">skills:</span>
          <span className="text-gray-400">[</span>
          {DEV_OBJECT_SKILLS.map((skill, i) => (
            <span key={skill} className="block sm:inline ml-10 md:ml-0">
              &#39;<span className="text-amber-300">{skill}</span>&#39;
              {i < DEV_OBJECT_SKILLS.length - 1 && (
                <span className="text-gray-400">, </span>
              )}
            </span>
          ))}
          <span className="text-gray-400 ml-10 md:ml-0">],</span>
        </div>

        <div>
          <span className="text-white ml-8 mr-2">currentlyBuilding:</span>
          <span className="text-amber-300">&#39;SlotWise&#39;</span>
          <span className="text-gray-400">,</span>
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
          <span className="text-white ml-8 mr-2">yearsOfExperience:</span>
          <span className="text-orange-400">5</span>
          <span className="text-gray-400">,</span>
        </div>

        <div>
          <span className="text-white ml-8 mr-2">isBarcelonaFan:</span>
          <span className="text-orange-400">true</span>
          <span className="text-gray-400">,</span>
        </div>

        <div>
          <span className="text-white ml-8 mr-2">hireable:</span>
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
          <span className="text-white mr-2">yearsOfExperience</span>
          <span className="text-amber-300 mr-2">&gt;=</span>
          <span className="text-orange-400">5</span>
        </div>
        <div>
          <span className="text-gray-400 ml-16">);</span>
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