"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import clsx from "clsx";

const categories = ["All", "Full Stack", "Front End", "Backend", "Mobile"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

    return (
        <main className="min-h-screen bg-black">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-8">All Projects</h1>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={clsx(
                                "px-6 py-3 rounded-full text-base font-semibold transition-all border",
                                activeCategory === cat
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/30"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all"
                        >
                            <Link href={`/projects/${project.id}`} className="block">
                                <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
                                    <Image
                                        src={project.images.main}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </Link>

                            <div className="p-6 relative z-10 bg-[#111]">
                                <h3 className="text-xl font-bold font-outfit text-white mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>

                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        View Case Study
                                    </Link>

                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-white bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full hover:bg-purple-600/30 transition-colors"
                                        >
                                            Live Site
                                        </a>
                                    )}

                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-white bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
