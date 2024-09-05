import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import BackArrow from "./BackArrow";
import Breadcrumbs from "./Breadcrumbs";

interface WindowPanelProps {
  children: ReactNode;
  title: string;
  showBackArrow?: boolean;
  showBreadcrumbs?: boolean;
  isMaximized?: boolean;
}

const WindowPanel: React.FC<WindowPanelProps> = ({
  children,
  title,
  showBackArrow = false,
  showBreadcrumbs = false,
  isMaximized = false,
}) => {
  const router = useRouter();
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximizedState, setIsMaximizedState] = useState(isMaximized);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => router.push("/"), 500);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isMaximizedState) {
      setIsMaximizedState(false);
    }
  };

  const handleMaximize = () => {
    setIsMaximizedState(!isMaximizedState);
    if (isMinimized) {
      setIsMinimized(false);
    }
  };

  const windowVariants: Variants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: (custom: { isMaximized: boolean; isMinimized: boolean }) => ({
      opacity: 1,
      scale: custom.isMaximized ? 0.95 : custom.isMinimized ? 0.8 : 0.9,
      y: 0,
      height: custom.isMinimized ? "40px" : "auto",
      width: custom.isMinimized ? "256px" : "auto", // 256px corresponds to w-64
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    exit: { opacity: 0, scale: 0.8, y: 20 },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          variants={windowVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={{ isMaximized: isMaximizedState, isMinimized }}
          className={`bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ${
            isMaximizedState
              ? "fixed inset-10 m-0"
              : isMinimized
              ? "fixed top-0 left-1/2 transform -translate-x-1/2 w-64"
              : "w-full max-w-7xl mx-auto"
          }`}
        >
          <div className="flex items-center justify-between p-2 bg-gray-300 dark:bg-gray-700">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                onClick={handleClose}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
                onClick={handleMinimize}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
                onClick={handleMaximize}
              ></div>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {title}
            </div>
            <div className="w-3 h-3"></div>
          </div>
          {!isMinimized && (
            <div
              className={`p-6 ${
                isMaximizedState ? "h-[calc(100vh-60px)] overflow-auto" : ""
              } relative`}
            >
              <div className="flex items-center mb-4">
                {showBackArrow && (
                  <div className="mr-2">
                    <BackArrow onClose={handleClose} />
                  </div>
                )}
                {showBreadcrumbs && <Breadcrumbs />}
              </div>
              {children}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WindowPanel;
