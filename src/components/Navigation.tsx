"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./Modal";
import DesktopShortcuts from "./DesktopShortcuts";

const navigationItems = [
  { name: "Bert Selleslagh", href: "/", subtitle: "UX/UI designer" },
  { name: "work", href: "/work" },
  { name: "about", href: "/about" },
  {
    name: "contact",
    href: "mailto:selleslaghbert@gmail.com?subject=Let's%20work%20together",
  },
];

const profileImages = [
  "/portfolio/pfp_1.png",
  "/portfolio/pfp_2.png",
  "/portfolio/pfp_3.png",
  "/portfolio/pfp_4.png",
  "/portfolio/pfp_5.png",
  "/portfolio/pfp_6.png",
  "/portfolio/pfp_7.png",
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortfolioClosed, setIsPortfolioClosed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % profileImages.length
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleCloseClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmClose = () => {
    setIsModalOpen(false);
    setIsPortfolioClosed(true);
  };

  const handlePortfolioReopen = () => {
    setIsPortfolioClosed(false);
  };

  if (pathname === "/") {
    return (
      <>
        <AnimatePresence>
          {!isPortfolioClosed && (
            <motion.nav
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center justify-between p-2 bg-gray-200 dark:bg-gray-700">
                  <div className="flex space-x-2">
                    <div
                      className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                      onClick={handleCloseClick}
                    ></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-50 cursor-not-allowed"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    my portfolio
                  </div>
                  <div className="w-3 h-3"></div>
                </div>
                <ul className="text-center p-6 pt-12">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-4"
                    >
                      {index === 0 ? (
                        <div className="flex flex-col items-center">
                          <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
                            <Image
                              src={profileImages[currentImageIndex]}
                              alt="Profile"
                              width={128}
                              height={128}
                              className="object-cover"
                            />
                          </div>
                          <span className="text-2xl font-bold inline-block">
                            {item.name.toLowerCase()}
                          </span>
                          <div className="text-sm text-gray-500 mt-1">
                            {item.subtitle}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(item.href);
                          }}
                        >
                          <span className="text-2xl hover:text-primary inline-block">
                            {item.name.toLowerCase()}
                          </span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        {isPortfolioClosed && (
          <DesktopShortcuts onPortfolioClick={handlePortfolioReopen} />
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmClose}
        />
      </>
    );
  } else {
    return null;
  }
}
