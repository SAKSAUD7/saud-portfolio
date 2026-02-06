"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectGrid() {
    return (
        <section className="py-24 bg-black" id="projects">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Work</span>
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            A selection of production-grade projects demonstrating full-stack expertise.
                        </p>
                    </motion.div>
                    <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        View all projects <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            shortDescription={project.shortDescription}
                            tags={project.tags}
                            category={project.category}
                            mainImage={project.images.main}
                            liveLink={project.links.live}
                            githubLink={project.links.github}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white font-medium">
                        View all projects <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
