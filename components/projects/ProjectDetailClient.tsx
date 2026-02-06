"use client";

import { useState } from "react";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Layers, User } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const allImages = [project.images.main, ...project.images.gallery];

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <main className="min-h-screen bg-black">
            <Navbar />

            <ImageLightbox
                isOpen={lightboxOpen}
                images={allImages}
                initialIndex={currentImageIndex}
                onClose={() => setLightboxOpen(false)}
            />

            {/* Hero Header */}
            <section className="pt-32 pb-16 border-b border-white/10 bg-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                {project.links.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                                        Visit Live Site <ExternalLink size={18} />
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors">
                                        View Code <Github size={18} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6 md:w-80 shrink-0">
                            <div>
                                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Role</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.roles.map(role => (
                                        <span key={role} className="flex items-center gap-2 text-sm text-gray-300">
                                            <User size={14} className="text-purple-500" /> {role}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Category</h3>
                                <span className="flex items-center gap-2 text-sm text-gray-300">
                                    <Layers size={14} className="text-blue-500" /> {project.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Content */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl font-bold font-outfit mb-6 border-l-4 border-purple-500 pl-4">Project Overview</h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                                {project.fullDescription}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h2 className="text-2xl font-bold font-outfit mb-6 border-l-4 border-blue-500 pl-4">Key Features</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h2 className="text-2xl font-bold font-outfit mb-6 border-l-4 border-green-500 pl-4">Tech Stack</h2>
                            <div className="space-y-6">
                                {Object.entries(project.techStack).map(([category, techs]) => (
                                    techs && techs.length > 0 && (
                                        <div key={category}>
                                            <h3 className="text-sm font-mono text-gray-500 uppercase mb-3">{category}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {techs.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded text-sm text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar / Gallery */}
                    <div className="lg:col-span-4 space-y-8 sticky top-32">
                        <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                            <h3 className="text-lg font-bold font-outfit mb-4">Project Gallery</h3>
                            <div
                                className="aspect-video bg-[#222] rounded-lg overflow-hidden mb-4 relative cursor-pointer group"
                                onClick={() => openLightbox(0)}
                            >
                                <Image
                                    src={project.images.main}
                                    alt={`${project.title} - Main`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                    <div className="w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {project.images.gallery.map((img, n) => (
                                    <div
                                        key={n}
                                        className="aspect-square bg-[#222] rounded-lg overflow-hidden relative cursor-pointer group"
                                        onClick={() => openLightbox(n + 1)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} - Screenshot ${n + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            sizes="(max-width: 1024px) 50vw, 16vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
