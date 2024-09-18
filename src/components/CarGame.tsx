import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import useSound from "use-sound";

interface CarGameProps {
  onClose: () => void;
}

const CarGame: React.FC<CarGameProps> = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [movementHistory, setMovementHistory] = useState<
    { x: number; y: number; rotation: number }[]
  >([]);
  const [trails, setTrails] = useState<
    {
      x: number;
      y: number;
      opacity: number;
      controlPoint?: { x: number; y: number };
      lastPoint?: { x: number; y: number };
    }[][]
  >(Array(4).fill([]));
  const trailRefs = useRef<
    {
      x: number;
      y: number;
      opacity: number;
      controlPoint?: { x: number; y: number };
      lastPoint?: { x: number; y: number };
    }[][]
  >(Array(4).fill([]));

  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  const [playHorn] = useSound("/horn.wav");
  const [playEngine, { stop: stopEngine }] = useSound("/engine.wav", {
    loop: true,
  });

  const [isEnginePlaying, setIsEnginePlaying] = useState(false);

  const updateTrail = useCallback(
    (x: number, y: number) => {
      const carWidth = 60;
      const carHeight = 100;
      const wheelOffsetX = carWidth * 0.5;
      const baseWheelOffsetY = carHeight * 0.1;
      const radians = (rotation * Math.PI) / 180;
      const cosR = Math.cos(radians);
      const sinR = Math.sin(radians);

      const wheelOffsetY = baseWheelOffsetY + Math.abs(sinR) * carHeight * 0.4;

      const trailOffsetX = 30;
      const trailOffsetY = 50;

      const wheelPositions = [
        // Front left
        {
          x: x - wheelOffsetX * cosR - wheelOffsetY * sinR + trailOffsetX,
          y: y - wheelOffsetX * sinR + wheelOffsetY * cosR + trailOffsetY,
        },
        // Front right
        {
          x: x + wheelOffsetX * cosR - wheelOffsetY * sinR + trailOffsetX,
          y: y + wheelOffsetX * sinR + wheelOffsetY * cosR + trailOffsetY,
        },
        // Rear left
        {
          x: x - wheelOffsetX * cosR + wheelOffsetY * sinR + trailOffsetX,
          y: y - wheelOffsetX * sinR - wheelOffsetY * cosR + trailOffsetY,
        },
        // Rear right
        {
          x: x + wheelOffsetX * cosR + wheelOffsetY * sinR + trailOffsetX,
          y: y + wheelOffsetX * sinR - wheelOffsetY * cosR + trailOffsetY,
        },
      ];

      const newTrails = trailRefs.current.map((trail, index) => {
        const newTrail = trail
          .map((point) => ({ ...point, opacity: point.opacity - 0.02 }))
          .filter((point) => point.opacity > 0);

        if (newTrail.length > 0) {
          const lastPoint = newTrail[0];
          const newPoint = wheelPositions[index];
          const controlPoint = {
            x: lastPoint.x + (newPoint.x - lastPoint.x) * 0.5,
            y: lastPoint.y + (newPoint.y - lastPoint.y) * 0.5,
          };

          newTrail.unshift({
            ...newPoint,
            opacity: 1,
            controlPoint,
            lastPoint: { x: lastPoint.x, y: lastPoint.y },
          });
        } else {
          newTrail.unshift({ ...wheelPositions[index], opacity: 1 });
        }

        return newTrail.slice(0, 50);
      });

      trailRefs.current = newTrails;
      setTrails(newTrails);
    },
    [rotation]
  );

  useEffect(() => {
    const centerX = window.innerWidth / 2 - 30;
    const centerY = window.innerHeight / 2 - 50;
    setPosition({ x: centerX, y: centerY });
    springX.set(centerX);
    springY.set(centerY);
  }, [springX, springY]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const speed = 30; // Increased speed
      let isMoving = false;
      switch (event.key) {
        case "ArrowUp":
          springY.set(springY.get() - speed);
          setRotation(0);
          isMoving = true;
          break;
        case "ArrowDown":
          springY.set(springY.get() + speed);
          setRotation(180);
          isMoving = true;
          break;
        case "ArrowLeft":
          springX.set(springX.get() - speed);
          setRotation(-90);
          isMoving = true;
          break;
        case "ArrowRight":
          springX.set(springX.get() + speed);
          setRotation(90);
          isMoving = true;
          break;
        case " ":
          playHorn();
          break;
      }
      if (isMoving && !isEnginePlaying) {
        playEngine();
        setIsEnginePlaying(true);
      }
    },
    [springX, springY, playHorn, playEngine, isEnginePlaying]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        stopEngine();
        setIsEnginePlaying(false);
      }
    },
    [stopEngine]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    const unsubscribeX = springX.on("change", (latest) => {
      setPosition((prev) => ({ ...prev, x: latest }));
      updateTrail(latest, springY.get());
    });
    const unsubscribeY = springY.on("change", (latest) => {
      setPosition((prev) => ({ ...prev, y: latest }));
      updateTrail(springX.get(), latest);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY, updateTrail]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <svg width="100%" height="100%" style={{ position: "absolute" }}>
        {trails.map(
          (trail, trailIndex) =>
            trail.length > 1 && (
              <path
                key={trailIndex}
                d={trail.reduce((path, point, index) => {
                  if (index === 0) {
                    return `M ${point.x},${point.y}`;
                  } else if (point.controlPoint && point.lastPoint) {
                    return `${path} Q ${point.controlPoint.x},${point.controlPoint.y} ${point.x},${point.y}`;
                  } else {
                    return `${path} L ${point.x},${point.y}`;
                  }
                }, "")}
                fill="none"
                stroke={`rgba(0,0,0,${0.2 - trailIndex * 0.05})`}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: trail[0]?.opacity || 0,
                }}
              />
            )
        )}
      </svg>
      <motion.svg
        width="60"
        height="100"
        viewBox="0 0 60 100"
        style={{
          x: position.x,
          y: position.y,
          rotate: rotation,
          position: "absolute",
        }}
      >
        <rect x="0" y="20" width="10" height="20" rx="2" ry="2" fill="black" />
        <rect x="50" y="20" width="10" height="20" rx="2" ry="2" fill="black" />
        <rect x="0" y="60" width="10" height="20" rx="2" ry="2" fill="black" />
        <rect x="50" y="60" width="10" height="20" rx="2" ry="2" fill="black" />
        <rect
          x="5"
          y="10"
          width="50"
          height="80"
          rx="10"
          ry="10"
          fill="green"
        />
        <rect x="10" y="38" width="40" height="35" rx="5" ry="5" fill="black" />
        <rect
          x="10"
          y="15"
          width="40"
          height="17"
          rx="5"
          ry="5"
          fill="lightblue"
        />
        {/* Front lights */}
        <circle cx="10" cy="15" r="3" fill="orange" />
        <circle cx="50" cy="15" r="3" fill="orange" />
        {/* Back lights */}
        <circle cx="10" cy="85" r="3" fill="red" />
        <circle cx="50" cy="85" r="3" fill="red" />
      </motion.svg>
    </motion.div>
  );
};

export default CarGame;
