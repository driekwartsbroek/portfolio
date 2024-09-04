"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useAnimatedCircles } from "@/contexts/AnimatedCirclesContext";

const CURSOR_COLORS = ["red", "orange", "yellow"];
const TRAIL_LENGTH = 5;

const AnimatedCursors = () => {
  const [cursors, setCursors] = useState([]);
  const { theme } = useTheme();
  const { showAnimatedCircles } = useAnimatedCircles();
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!showAnimatedCircles) return;

    const handleMouseMove = (event: MouseEvent) => {
      const newPosition = { x: event.clientX, y: event.clientY };
      updateCursors(newPosition);
    };

    const updateCursors = (position) => {
      setCursors((prevCursors) => {
        const newCursors = [
          { id: Date.now(), x: position.x, y: position.y },
          ...prevCursors.slice(0, TRAIL_LENGTH - 1),
        ];
        return newCursors;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showAnimatedCircles]);

  if (!showAnimatedCircles) return null;

  return (
    <svg className="fixed inset-0 w-full h-full overflow-visible pointer-events-none z-50">
      {cursors.map((cursor, index) => (
        <motion.use
          key={cursor.id}
          href={`/${
            CURSOR_COLORS[index % CURSOR_COLORS.length]
          }cursor.svg#cursor`}
          x={cursor.x - 16}
          y={cursor.y - 16}
          width="32"
          height="32"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 - index * 0.2, scale: 1 - index * 0.1 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </svg>
  );
};

export default AnimatedCursors;
