import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipWidth(tooltipRef.current.offsetWidth);
    }
  }, [isVisible]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={childRef}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
            style={{
              left: childRef.current
                ? `${(childRef.current.offsetWidth - tooltipWidth) / 2}px`
                : "50%",
              bottom: "calc(100% + 15px)",
              whiteSpace: "nowrap",
            }}
          >
            {content}
            <div
              className="tooltip-arrow"
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                width: "16px",
                height: "8px",
                overflow: "hidden",
                transform: "translateX(-50%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-6px",
                  left: "0",
                  right: "0",
                  height: "14px",
                  backgroundColor: "inherit",
                  borderRadius: "50%",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
