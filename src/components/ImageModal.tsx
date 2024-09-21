import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WindowPanel from "./WindowPanel";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <WindowPanel
        title="octo.jpg"
        onClose={onClose}
        className="w-[95vw] h-[95vh] max-w-[50vw] max-h-[95vh]"
        showBackArrow={false}
        showBreadcrumbs={false}
        zIndex={100}
        onFocus={() => {}}
      >
        <div className="relative w-full h-full">
          <Image
            src="/octo.jpg"
            alt="Octo"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </WindowPanel>
    </motion.div>
  );
};

export default ImageModal;
