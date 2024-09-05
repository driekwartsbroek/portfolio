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
  duration: string; // Add this new prop for the work duration
  location: string; // Add this new prop for the work location
}

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
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
  duration,
  location,
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
      whileHover={{ scale: 1.01, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
      className="p-4 cursor-pointer transition-colors duration-150 ease-in-out rounded-lg"
    >
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0 w-8 h-8 relative">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex-grow flex items-center space-x-6 text-base">
          <span className="font-semibold text-gray-800 dark:text-gray-200 w-1/4 truncate">
            {title}
          </span>
          <span className="text-gray-600 dark:text-gray-400 w-1/4 truncate">
            {description}
          </span>
          <span className="text-gray-500 dark:text-gray-400 w-1/4 truncate">
            {duration}
          </span>
          <span className="text-gray-500 dark:text-gray-400 w-1/4 truncate">
            {location}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
