import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.id === params.slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
