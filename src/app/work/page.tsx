"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import WorkCard from "@/components/WorkCard";
import WindowPanel from "@/components/WindowPanel";
import BackArrow from "@/components/BackArrow";
import Breadcrumbs from "@/components/Breadcrumbs";

// Add 'export' here
export const workExperiences = [
  {
    company: "Solidaris",
    projects: [
      {
        id: "1",
        title: "e-Mut",
        description: "Description of Project 1",
        imageUrl: "https://placehold.co/600x400/png",
      },
      {
        id: "2",
        title: "ScanSequel",
        description: "Description of Project 2",
        imageUrl: "https://placehold.co/600x400/png",
      },
      {
        id: "3",
        title: "Project 3",
        description: "Description of Project 3",
        imageUrl: "https://placehold.co/600x400/png",
      },
    ],
  },
  {
    company: "Tobania",
    projects: [
      {
        id: "4",
        title: "Project 4",
        description: "Description of Project 4",
        imageUrl: "https://placehold.co/600x400/png",
      },
      {
        id: "5",
        title: "Project 5",
        description: "Description of Project 5",
        imageUrl: "https://placehold.co/600x400/png",
      },
    ],
  },
  {
    company: "Colruyt",
    projects: [
      {
        id: "6",
        title: "Project 6",
        description: "Description of Project 6",
        imageUrl: "https://placehold.co/600x400/png",
      },
    ],
  },
];

export default function Work() {
  const router = useRouter();

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
      <div className="mt-16 flex flex-col items-center">
        <WindowPanel title="My Work" showBackArrow showBreadcrumbs>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {workExperiences.flatMap((company) =>
              company.projects.map((project, index) => (
                <WorkCard key={project.id} {...project} index={index} />
              ))
            )}
          </div>
        </WindowPanel>
      </div>
    </motion.div>
  );
}
