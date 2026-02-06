"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "The Complete Python Bootcamp",
        provider: "Udemy",
        icon: "🐍"
    },
    {
        title: "Full Stack JavaScript",
        provider: "The Odin Project",
        icon: "⚡"
    },
    {
        title: "Cloud Computing & AWS Fundamentals",
        provider: "Online Course",
        icon: "☁️"
    },
    {
        title: "Web Services API Testing with Postman",
        provider: "Udemy",
        icon: "🧪"
    },
    {
        title: "CSS & JavaScript Certification",
        provider: "Udemy",
        icon: "🎨"
    }
];

export default function Certifications() {
    return (
        <section className="py-24 bg-black" id="certifications">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Certifications & Training</h2>
                        <p className="text-gray-400">
                            Continuous learning and professional development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-purple-500/30 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{cert.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">{cert.provider}</p>
                                    </div>
                                    <Award size={20} className="text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
