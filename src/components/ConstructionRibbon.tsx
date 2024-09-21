import React from "react";
import { motion } from "framer-motion";

const ConstructionRibbon: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-yellow-400 overflow-hidden">
      <div className="relative h-8 flex items-center">
        <motion.div
          className="whitespace-nowrap text-black font-bold"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          UNDER CONSTRUCTION &nbsp;&nbsp;&nbsp; UNDER CONSTRUCTION
          &nbsp;&nbsp;&nbsp; UNDER CONSTRUCTION &nbsp;&nbsp;&nbsp; UNDER
          CONSTRUCTION &nbsp;&nbsp;&nbsp; UNDER CONSTRUCTION &nbsp;&nbsp;&nbsp;
          UNDER CONSTRUCTION &nbsp;&nbsp;&nbsp; UNDER CONSTRUCTION
          &nbsp;&nbsp;&nbsp; UNDER CONSTRUCTION &nbsp;&nbsp;&nbsp; UNDER
          CONSTRUCTION &nbsp;&nbsp;&nbsp; UNDER CONSTRUCTION &nbsp;&nbsp;&nbsp;
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionRibbon;
