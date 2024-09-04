import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "./Icons";

interface BackArrowProps {
  onClose: () => void;
}

const BackArrow: React.FC<BackArrowProps> = ({ onClose }) => {
  return (
    <button onClick={onClose} className="...">
      {/* Your back arrow icon or text */}
    </button>
  );
};

export default BackArrow;
