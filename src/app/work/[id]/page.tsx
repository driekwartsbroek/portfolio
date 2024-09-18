import { workExperiences } from "@/data/workExperiences";
import WorkDetailClient from "./WorkDetailClient";

export async function generateStaticParams() {
  const paths = workExperiences.flatMap((company) =>
    company.projects.map((project) => ({
      id: project.id,
    }))
  );
  return paths;
}

export default function WorkDetail({ params }: { params: { id: string } }) {
  return <WorkDetailClient params={params} />;
}

const handleOpenDetail = (project: any) => {
  const detailedProject = {
    ...project,
    responsibilities: [
      "Led the UX/UI design process for the ScanSequel application suite",
      "Conducted user research and usability testing to improve workflow efficiency",
      "Collaborated with cross-functional teams to implement design solutions",
      "Created wireframes, prototypes, and high-fidelity designs",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
  };
  setOpenProjects((prev) => {
    if (!prev.some((p) => p.id === project.id)) {
      return [...prev, detailedProject];
    }
    return prev;
  });
};
