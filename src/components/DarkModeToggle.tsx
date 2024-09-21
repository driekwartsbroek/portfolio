"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      className="w-10 h-10 rounded-full bg-transparent border border-gray-300 dark:border-gray-700 flex items-center justify-center relative overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2 }}
    >
      <motion.i
        className={`bi ${
          theme === "dark" ? "bi-sun" : "bi-moon"
        } text-xl text-gray-600 dark:text-gray-300`}
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default DarkModeToggle;
