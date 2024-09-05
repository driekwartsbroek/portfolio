"use client";

import React, { useState } from "react";
import WorkCard from "@/components/WorkCard";
import WindowPanel from "@/components/WindowPanel";
import { workExperiences } from "@/data/workExperiences";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkPage() {
  const [openAccordions, setOpenAccordions] = useState<string[]>(
    workExperiences.map((company) => company.company)
  );

  const toggleAccordion = (company: string) => {
    setOpenAccordions((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company]
    );
  };

  return (
    <WindowPanel title="Work" showBackArrow showBreadcrumbs isMaximized={true}>
      <div className="space-y-8">
        {workExperiences.map((company) => (
          <div key={company.company} className="mb-6">
            <button
              onClick={() => toggleAccordion(company.company)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold flex items-center">
                  <i className="bi bi-folder mr-2 text-yellow-500"></i>
                  {company.company}
                  <i
                    className={`bi ${
                      openAccordions.includes(company.company)
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    } ml-2`}
                  ></i>
                </h2>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span>{company.subtitle}</span>
                <span className="mx-2">•</span>
                <span>{company.functionTitle}</span>
              </div>
            </button>
            <AnimatePresence>
              {openAccordions.includes(company.company) && (
                <motion.div
                  initial={{ opacity: 1, height: "auto" }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    {company.projects.map((project, index) => (
                      <WorkCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        index={index}
                        duration={project.duration}
                        location={project.location}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </WindowPanel>
  );
}
