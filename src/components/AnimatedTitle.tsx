"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedTitle({ title }: { title: string }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full text-center flex items-center justify-center h-24">
      <motion.h2
        layoutId={`title-${title.toLowerCase()}`}
        className="text-2xl inline-block"
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        exit={{ opacity: 0 }}
      >
        {title.toLowerCase()}
      </motion.h2>
    </div>
  );
}
