import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface ExplorerHeaderProps {
  currentPath?: string;
  title?: string;
  onClose?: () => void;
  showBackArrow?: boolean;
  showBreadcrumbs?: boolean;
}

const ExplorerHeader: React.FC<ExplorerHeaderProps> = ({
  currentPath = "",
  title,
  onClose,
  showBackArrow = true,
  showBreadcrumbs = true,
}) => {
  const router = useRouter();
  const pathSegments = currentPath
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-2 rounded-t-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-2">
        <button
          onClick={() => router.back()}
          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={index}>
              <span>/</span>
              <Link
                href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                className="hover:underline truncate max-w-[150px]"
              >
                {segment}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExplorerHeader;
