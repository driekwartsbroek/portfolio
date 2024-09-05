import React from "react";
import { motion } from "framer-motion";

interface BackArrowProps {
  onClose: () => void;
}

const BackArrow: React.FC<BackArrowProps> = ({ onClose }) => {
  return (
    <motion.button
      onClick={onClose}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="bi bi-arrow-left text-gray-600 dark:text-gray-300 text-lg"></i>
    </motion.button>
  );
};

export default BackArrow;
