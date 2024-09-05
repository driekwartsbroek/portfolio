"use client";

import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="sticky bottom-0 left-0 right-0 py-4 px-4 flex justify-between items-center z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <p className="text-sm text-text dark:text-gray-300">
        ©️ Bert Selleslagh {currentYear} - All rights reserved
      </p>
      <DarkModeToggle />
    </motion.footer>
  );
};

export default Footer;
