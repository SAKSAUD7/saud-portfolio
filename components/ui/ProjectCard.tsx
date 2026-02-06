"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "../ui/GlassCard";

interface ProjectCardProps {
    id: string;
    title: string;
    shortDescription: string;
    tags: string[];
    category: string;
    mainImage: string;
    liveLink?: string;
    githubLink?: string;
}

export default function ProjectCard({
    id,
    title,
    shortDescription,
    tags,
    category,
    mainImage,
    liveLink,
    githubLink,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <GlassCard className="overflow-hidden h-full flex flex-col" hover>
                {/* Project Image */}
                <Link href={`/projects/${id}`} className="relative aspect-video overflow-hidden">
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <div className="mb-3">
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <Link href={`/projects/${id}`}>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                            {title}
                        </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                        {shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                                +{tags.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                <Github size={16} />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
}
