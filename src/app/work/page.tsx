"use client";

import React, { useState, useEffect } from "react";
import WorkCard from "@/components/WorkCard";
import WindowPanel from "@/components/WindowPanel";
import WorkSidebar from "@/components/WorkSidebar";
import WorkDetailPanel from "@/components/WorkDetailPanel";
import { workExperiences } from "@/data/workExperiences";

export default function WorkPage() {
  const [selectedCompany, setSelectedCompany] = useState<string>("Solidaris");
  const [openProjects, setOpenProjects] = useState<any[]>([]);
  const [zIndices, setZIndices] = useState<{ [key: string]: number }>({});

  const selectedProjects =
    workExperiences.find((company) => company.company === selectedCompany)
      ?.projects || [];

  const handleOpenDetail = (project: any) => {
    const detailedProject = {
      ...project,
      responsibilities: project.responsibilities || [],
      technologies: project.technologies || [],
      imageUrl: project.imageUrl || "/default-project-image.png",
    };
    setOpenProjects((prev) => {
      if (!prev.some((p) => p.id === detailedProject.id)) {
        return [...prev, detailedProject];
      }
      return prev;
    });
  };

  const handleCloseDetail = (id: string) => {
    setOpenProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const handleWindowFocus = (id: string) => {
    setZIndices((prev) => {
      const highestZ = Math.max(...Object.values(prev), 0);
      return { ...prev, [id]: highestZ + 1 };
    });
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "UPDATE_OPEN_PROJECTS") {
        setOpenProjects((prev) => {
          if (!prev.some((p) => p.id === event.data.project.id)) {
            return [...prev, event.data.project];
          }
          return prev;
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <WindowPanel
        title="Work"
        showBackArrow
        showBreadcrumbs
        zIndex={1}
        onFocus={() => handleWindowFocus("work")}
      >
        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          <div className="hidden md:block md:w-64 md:flex-shrink-0 h-full overflow-y-auto border-r border-gray-200 dark:border-gray-700">
            <WorkSidebar
              selectedCompany={selectedCompany}
              onSelectCompany={setSelectedCompany}
            />
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="md:hidden">
              {workExperiences.map((company) => (
                <div key={company.company} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    {company.company}
                  </h2>
                  <div className="space-y-4">
                    {company.projects.map((project) => (
                      <WorkCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        duration={project.duration}
                        location={project.location}
                        imageUrl={project.imageUrl}
                        onOpenDetail={handleOpenDetail}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <h2 className="text-2xl font-semibold mb-4">{selectedCompany}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProjects.map((project) => (
                  <WorkCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    duration={project.duration}
                    location={project.location}
                    imageUrl={project.imageUrl}
                    onOpenDetail={handleOpenDetail}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </WindowPanel>
      {openProjects.map((project, index) => (
        <WorkDetailPanel
          key={`${project.id}-${index}`}
          {...project}
          onClose={() => handleCloseDetail(project.id)}
          zIndex={zIndices[project.id] || 1}
          onFocus={() => handleWindowFocus(project.id)}
        />
      ))}
    </>
  );
}
