"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/WorkCard";
import WindowPanel from "@/components/WindowPanel";
import { workExperiences } from "@/data/workExperiences";

export default function WorkPage() {
  return (
    <WindowPanel title="Work" showBackArrow showBreadcrumbs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workExperiences.flatMap((company) =>
          company.projects.map((project, index) => (
            <WorkCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))
        )}
      </div>
    </WindowPanel>
  );
}
