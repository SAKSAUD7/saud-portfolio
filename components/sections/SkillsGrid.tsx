"use client";

import { motion } from "framer-motion";
import SkillBar from "../ui/SkillBar";
import GlassCard from "../ui/GlassCard";

const skillCategories = [
    {
        title: "Languages",
        color: "purple" as const,
        skills: [
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Python", level: 90 },
            { name: "SQL", level: 85 },
        ],
    },
    {
        title: "Frontend",
        color: "blue" as const,
        skills: [
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 90 },
            { name: "Framer Motion", level: 80 },
        ],
    },
    {
        title: "Backend",
        color: "cyan" as const,
        skills: [
            { name: "Django", level: 90 },
            { name: "Django REST Framework", level: 90 },
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 80 },
        ],
    },
    {
        title: "Databases & Cloud",
        color: "green" as const,
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "Supabase", level: 85 },
            { name: "Azure", level: 75 },
        ],
    },
];

export default function SkillsGrid() {
    return (
        <section className="py-24 bg-black" id="skills">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Proficiency levels based on 2.5+ years of hands-on experience in production environments
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                            >
                                <GlassCard className="p-8" hover>
                                    <h3 className="text-2xl font-bold font-outfit mb-6 text-white">
                                        {category.title}
                                    </h3>
                                    <div>
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
