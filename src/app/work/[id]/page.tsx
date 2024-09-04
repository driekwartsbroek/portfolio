"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackArrow from "@/components/BackArrow";

export default function WorkDetail({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    // Fetch work details using params.id
    // Update state with fetched data
  }, [params.id]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="min-h-screen bg-background dark:bg-background-dark p-10 sm:p-12 md:p-16 flex flex-col relative pt-32"
    >
      <div className="flex items-center mb-4">
        <BackArrow onClose={handleClose} />
        <div className="ml-8">
          <Breadcrumbs />
        </div>
      </div>
      <Container className="w-full flex-grow">
        <h1 className="text-3xl font-bold mb-4">Work Detail: {params.id}</h1>
        {/* Add more details about the work project here */}
      </Container>
    </motion.div>
  );
}
