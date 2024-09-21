import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface DvdLogoProps {
  onClose: () => void;
}

const DvdLogo: React.FC<DvdLogoProps> = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });
  const [color, setColor] = useState("#ff0000");

  const logoWidth = 200;
  const logoHeight = 100;

  const changeColor = useCallback(() => {
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prevPos) => {
        let newX = prevPos.x + velocity.x;
        let newY = prevPos.y + velocity.y;
        let newVelocityX = velocity.x;
        let newVelocityY = velocity.y;

        if (newX <= 0 || newX + logoWidth >= window.innerWidth) {
          newVelocityX = -newVelocityX;
          changeColor();
        }

        if (newY <= 0 || newY + logoHeight >= window.innerHeight) {
          newVelocityY = -newVelocityY;
          changeColor();
        }

        setVelocity({ x: newVelocityX, y: newVelocityY });

        return {
          x: Math.max(0, Math.min(newX, window.innerWidth - logoWidth)),
          y: Math.max(0, Math.min(newY, window.innerHeight - logoHeight)),
        };
      });
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [velocity, changeColor]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: logoWidth,
          height: logoHeight,
        }}
      >
        <Image
          src="/DVD_logo.svg"
          alt="DVD Logo"
          width={logoWidth}
          height={logoHeight}
          style={{ filter: `drop-shadow(0 0 10px ${color})` }}
        />
      </motion.div>
    </motion.div>
  );
};

export default DvdLogo;
