"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className="fixed bottom-6 right-6 p-3 rounded-full bg-[#14AFF1] text-white shadow-lg hover:bg-[#0F8AC0] transition-all duration-300 ease-in-out"
      onClick={() => setTheme(isLight ? "dark" : "light")}
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
            <Moon className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Sun className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
