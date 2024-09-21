import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl rounded-lg p-6 dark:bg-gray-800 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Container;
