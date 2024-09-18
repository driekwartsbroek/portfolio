import React from "react";
import WindowPanel from "@/components/WindowPanel";
import Image from "next/image";

interface WorkDetailPanelProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  imageUrl: string;
  responsibilities: string[];
  technologies: string[];
  onClose: () => void;
  zIndex: number;
  onFocus: () => void;
}

const WorkDetailPanel: React.FC<WorkDetailPanelProps> = ({
  id,
  title,
  description,
  duration,
  location,
  imageUrl,
  responsibilities,
  technologies,
  onClose,
  zIndex,
  onFocus,
}) => {
  return (
    <WindowPanel
      title={title}
      showBackArrow={false}
      showBreadcrumbs={false}
      onClose={onClose}
      className="absolute w-[80vw] max-w-5xl max-h-[75vh]"
      isDraggable={true}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="overflow-y-auto max-h-[calc(90vh-4rem)] px-8 py-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {duration} | {location}
        </p>
        <div className="flex items-center mb-8">
          <Image
            src={imageUrl}
            alt={title}
            width={120}
            height={120}
            className="rounded-lg mr-6"
          />
          <p className="text-xl leading-relaxed">{description}</p>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {responsibility}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </WindowPanel>
  );
};

export default WorkDetailPanel;
