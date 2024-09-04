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
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0 }}
        variants={{
          hover: {
            scale: 2,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          },
        }}
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(75,85,99,1) 0%, rgba(31,41,55,0) 70%)"
              : "radial-gradient(circle, rgba(229,231,235,1) 0%, rgba(229,231,235,0) 70%)",
        }}
      />
      <motion.span
        className="relative z-10"
        variants={{
          hover: {
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          },
        }}
      >
        {theme === "dark" ? "🌞" : "🌛"}
      </motion.span>
    </motion.button>
  );
};

export default DarkModeToggle;
