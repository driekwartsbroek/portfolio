import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CarGame from "./CarGame";

interface SecretSubmenuProps {
  onClose: () => void;
  parentRef: React.RefObject<HTMLDivElement>;
}

const SecretSubmenu: React.FC<SecretSubmenuProps> = ({
  onClose,
  parentRef,
}) => {
  const router = useRouter();
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const [isCarGameActive, setIsCarGameActive] = useState(false);

  const secretProjects = [
    {
      name: "Project A",
      icon: "bi-car-front",
      color: "bg-red-500",
      onClick: () => setIsCarGameActive(true),
    },
    { name: "Project B", icon: "bi-question", color: "bg-blue-500" },
    { name: "Project C", icon: "bi-question", color: "bg-green-500" },
    { name: "Project D", icon: "bi-question", color: "bg-yellow-500" },
  ];

  useEffect(() => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 10,
        left: rect.left + rect.width / 2,
      });
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [parentRef, onClose]);

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed bg-gray-800 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 rounded-lg shadow-lg p-4"
      style={{
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left - 120}px`,
        width: "240px",
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">secret stuff</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {secretProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="flex flex-col items-center"
            whileHover={index === 0 ? { scale: 1.05 } : {}}
            whileTap={index === 0 ? { scale: 0.95 } : {}}
            style={{ cursor: index === 0 ? "pointer" : "default" }}
            onClick={index === 0 ? project.onClick : undefined}
          >
            <div
              className={`w-14 h-14 ${project.color} rounded-lg mb-2 flex items-center justify-center`}
            >
              <i className={`bi ${project.icon} text-white text-2xl`}></i>
            </div>
            <span className="text-xs text-white">{project.name}</span>
          </motion.div>
        ))}
      </div>
      {isCarGameActive && <CarGame onClose={() => setIsCarGameActive(false)} />}
    </motion.div>
  );
};

export default SecretSubmenu;
