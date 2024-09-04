import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Add this import

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const WorkCard: React.FC<WorkCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  index,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/work/${id}`);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 border border-stroke rounded-lg overflow-hidden cursor-pointer shadow-md"
    >
      <div className="relative h-40 w-full">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text dark:text-gray-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
