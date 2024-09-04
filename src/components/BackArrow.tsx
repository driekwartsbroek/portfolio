import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "./Icons";

interface BackArrowProps {
  onClose: () => void;
}

const BackArrow: React.FC<BackArrowProps> = ({ onClose }) => {
  return (
    <motion.button
      onClick={onClose}
      className="absolute top-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
    </motion.button>
  );
};

export default BackArrow;
