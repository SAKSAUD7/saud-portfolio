"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
    {
        company: "ARN & Co",
        role: "Full Stack Developer",
        period: "Feb 2025 - Present",
        points: [
            "Designed, developed, and maintained full-stack web applications with strong backend focus.",
            "Built REST APIs for booking systems, CMS modules, and internal business tools using Django and DRF.",
            "Developed backend services using Django and Django REST Framework.",
            "Designed SQL schemas, optimized queries, and handled transactional workflows.",
            "Implemented authentication, authorization, and secure access control.",
            "Performed API testing, debugging, and validation using Postman."
        ],
        tech: ["Django", "React", "PostgreSQL"]
    },
    {
        company: "The Metakey",
        role: "Backend Developer",
        period: "May 2023 - Sep 2024",
        points: [
            "Developed backend systems for interactive and digital asset-driven platforms.",
            "Integrated third-party APIs and external data providers.",
            "Built backend services supporting game-related platforms.",
            "Implemented web scraping and structured data extraction workflows.",
            "Conducted API testing, debugging, and response validation."
        ],
        tech: ["Node.js", "Python", "Blockchain API"]
    },
    {
        company: "Airobosoft",
        role: "AI / ML Intern",
        period: "Sep 2021 - Nov 2021",
        points: [
            "Built a driver drowsiness detection system using Python and computer vision.",
            "Developed a desktop-based AI voice assistant for task automation.",
        ],
        tech: ["Python", "TensorFlow", "OpenCV"]
    }
];

export default function ExperienceTimeline() {
    return (
        <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
            {experience.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                >
                    {/* Dot */}
                    <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full bg-black border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold font-outfit text-white">{item.role}</h3>
                        <span className="hidden sm:block text-gray-600">•</span>
                        <span className="text-lg text-purple-400 font-medium">{item.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-mono">
                        <Calendar size={14} />
                        {item.period}
                    </div>

                    <ul className="text-gray-400 leading-relaxed mb-4 max-w-2xl list-disc pl-5 space-y-2">
                        {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {item.tech.map(t => (
                            <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-500 border border-white/5">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
