import { workExperiences } from "@/data/workExperiences";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = workExperiences.flatMap((company) =>
    company.projects.map((project) => ({
      id: project.id,
    }))
  );
  return paths;
}

export default function WorkDetail({ params }: { params: { id: string } }) {
  const project = workExperiences
    .flatMap((company) => company.projects)
    .find((project) => project.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
      {/* Add more project details here */}
    </div>
  );
}
