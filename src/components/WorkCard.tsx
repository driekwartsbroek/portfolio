import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Add this import

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  duration: string; // Add this new prop for the work duration
  location: string; // Add this new prop for the work location
  imageUrl: string; // Add this new prop for the work image URL
  onOpenDetail: (data: any) => void; // Add this new prop for opening work detail
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
  duration,
  location,
  imageUrl,
  onOpenDetail,
}) => {
  const router = useRouter();

  const handleClick = () => {
    onOpenDetail({ id, title, description, duration, location, imageUrl });
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
      className="bg-transparent p-4 rounded-lg cursor-pointer border border-black border-opacity-15 transition-colors duration-100"
    >
      <div className="flex items-center mb-2">
        <i className="bi bi-file-earmark text-2xl text-blue-300 mr-2"></i>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {description}
      </p>
      <div className="text-xs text-gray-500 dark:text-gray-500">
        <p>{duration}</p>
        <p>{location}</p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
