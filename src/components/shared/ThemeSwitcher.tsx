"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.button
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out backdrop-blur-md ${
        isLight
          ? "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200"
          : "bg-[#1a1a1a] text-[#14AFF1] hover:bg-[#242424] border border-[#333333]"
      }`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
