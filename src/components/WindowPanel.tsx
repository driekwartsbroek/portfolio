import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import ExplorerHeader from "./ExplorerHeader";

interface WindowPanelProps {
  children: ReactNode;
  title: string;
  className?: string;
  onClose?: () => void;
  isDraggable?: boolean;
  zIndex: number;
  onFocus: () => void;
  showBackArrow?: boolean;
  showBreadcrumbs?: boolean;
}

const WindowPanel: React.FC<WindowPanelProps> = ({
  children,
  title,
  className,
  onClose,
  isDraggable = false,
  zIndex,
  onFocus,
  showBackArrow = true,
  showBreadcrumbs = true,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSmallVariant, setIsSmallVariant] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsExiting(true);
      setTimeout(() => router.push("/"), 500);
    }
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggable) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      onFocus();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && isDraggable) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
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
          className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ${
            isSmallVariant ? "w-4/5 max-h-[80vh]" : "w-full max-h-[90vh]"
          } ${className} relative`}
          style={{
            position: isDraggable ? "fixed" : "relative",
            left: isDraggable ? `${position.x}px` : "auto",
            top: isDraggable ? `${position.y}px` : "auto",
            zIndex: zIndex,
          }}
        >
          <div
            className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 cursor-move transition-colors duration-300"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onMouseMove={handleDrag}
          >
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
          <ExplorerHeader
            title={title}
            onClose={onClose}
            showBackArrow={showBackArrow !== false}
            showBreadcrumbs={showBreadcrumbs !== false}
          />
          <div
            className={`overflow-y-auto ${
              !isSmallVariant ? "h-[calc(100vh-120px)]" : "h-full"
            } relative`}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WindowPanel;
