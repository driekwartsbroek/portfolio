import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecretSubmenu from "./SecretSubmenu";

interface DesktopShortcutsProps {
  onPortfolioClick: () => void;
}

const DesktopShortcuts: React.FC<DesktopShortcutsProps> = ({
  onPortfolioClick,
}) => {
  const [isSecretMenuOpen, setIsSecretMenuOpen] = useState(false);
  const secretShortcutRef = useRef<HTMLDivElement>(null);

  const toggleSecretMenu = () => {
    setIsSecretMenuOpen(!isSecretMenuOpen);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ top: "calc(50% + 37.5px)", left: "calc(50% - 190px)" }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer p-2 rounded-lg"
          onClick={onPortfolioClick}
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-blue-500 rounded-lg mb-2 flex items-center justify-center">
            <i className="bi bi-folder text-white text-4xl"></i>
          </div>
          <span className="text-sm">my portfolio</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        style={{ top: "calc(50% - 7.5px)", left: "calc(50% + 55px)" }}
        ref={secretShortcutRef}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer p-2 rounded-lg"
          onClick={toggleSecretMenu}
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-green-500 rounded-lg mb-2 flex items-center justify-center">
            <i className="bi bi-lock text-white text-4xl"></i>
          </div>
          <span className="text-sm">secret stuff</span>
        </motion.div>
        <AnimatePresence>
          {isSecretMenuOpen && (
            <SecretSubmenu
              onClose={toggleSecretMenu}
              parentRef={secretShortcutRef}
              toggleSecretMenu={toggleSecretMenu}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DesktopShortcuts;
