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
