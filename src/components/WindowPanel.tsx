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
  className?: string; // Add this line
}

const WindowPanel: React.FC<WindowPanelProps> = ({
  children,
  title,
  showBackArrow = false,
  showBreadcrumbs = false,
  isMaximized = false,
  className = "", // Add this line
}) => {
  const router = useRouter();
  const [isSmallVariant, setIsSmallVariant] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => router.push("/"), 500);
  };

  const handleMinimize = () => {
    if (!isSmallVariant) {
      setIsSmallVariant(true);
    }
  };

  const handleMaximize = () => {
    if (isSmallVariant) {
      setIsSmallVariant(false);
    }
  };

  const windowVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (custom: { isSmallVariant: boolean }) => ({
      opacity: 1,
      scale: custom.isSmallVariant ? 0.7 : 0.9,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          variants={windowVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={{ isSmallVariant }}
          className={`bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ${
            isSmallVariant ? "w-4/5 max-h-[80vh]" : "w-[90%] max-h-[90vh]"
          } ${className} relative`} // Add 'relative' here
        >
          <div className="flex items-center justify-between p-2 bg-gray-300 dark:bg-gray-700">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                onClick={handleClose}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  isSmallVariant
                    ? "bg-yellow-500 opacity-50 cursor-not-allowed"
                    : "bg-yellow-500 cursor-pointer"
                }`}
                onClick={handleMinimize}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  isSmallVariant
                    ? "bg-green-500 cursor-pointer"
                    : "bg-green-500 opacity-50 cursor-not-allowed"
                }`}
                onClick={handleMaximize}
              ></div>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {title}
            </div>
            <div className="w-3 h-3"></div>
          </div>
          <div
            className={`p-6 overflow-auto ${
              !isSmallVariant ? "h-[calc(100vh-40px)]" : "h-full"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WindowPanel;
