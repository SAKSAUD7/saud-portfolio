"use client";

import { motion } from "framer-motion";
import SkillBar from "../ui/SkillBar";
import GlassCard from "../ui/GlassCard";

const skillCategories = [
    {
        title: "Languages",
        color: "purple" as const,
        skills: [
            { name: "JavaScript (ES6+)", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Python", level: 90 },
            { name: "Dart", level: 80 },
            { name: "SQL", level: 85 },
            { name: "HTML5 / CSS3", level: 95 },
        ],
    },
    {
        title: "Frontend",
        color: "blue" as const,
        skills: [
            { name: "React.js", level: 95 },
            { name: "Next.js 14", level: 90 },
            { name: "React Native", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 85 },
            { name: "Redux / Zustand", level: 80 },
        ],
    },
    {
        title: "Backend",
        color: "cyan" as const,
        skills: [
            { name: "Django", level: 90 },
            { name: "Django REST", level: 90 },
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 85 },
            { name: "FastAPI", level: 80 },
            { name: "GraphQL", level: 75 },
        ],
    },
    {
        title: "Database & Cloud",
        color: "green" as const,
        skills: [
            { name: "PostgreSQL", level: 90 },
            { name: "MySQL", level: 85 },
            { name: "Supabase", level: 90 },
            { name: "AWS", level: 75 },
            { name: "Azure", level: 80 },
            { name: "Redis", level: 70 },
        ],
    },
    {
        title: "Tools & DevOps",
        color: "purple" as const, // Reusing purple for tools
        skills: [
            { name: "Git / GitHub", level: 95 },
            { name: "Docker", level: 80 },
            { name: "Postman", level: 90 },
            { name: "Figma", level: 75 },
            { name: "Vercel", level: 90 },
            { name: "VS Code", level: 95 },
        ],
    },
];

export default function SkillsGrid() {
    return (
        <section className="py-20 bg-black" id="skills">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                            Proficiency levels based on hands-on production experience.
                        </p>
                    </motion.div>

                    {/* Skills Grid - Compact 3 column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                            >
                                <GlassCard className="p-6 h-full" hover>
                                    <h3 className="text-xl font-bold font-outfit mb-4 text-white border-b border-white/5 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <SkillBar
                                                key={skill.name}
                                                name={skill.name}
                                                level={skill.level}
                                                color={category.color}
                                                delay={categoryIndex * 0.1 + skillIndex * 0.05}
                                            />
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
