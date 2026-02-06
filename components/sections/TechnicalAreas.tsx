"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import {
    Code, Database, Shield, Zap, FileCode,
    Activity, FileText, Workflow
} from "lucide-react";

const technicalAreas = [
    {
        title: "Full-Stack Development",
        description: "Backend-driven architecture with modern frontend frameworks",
        icon: Code,
        color: "purple"
    },
    {
        title: "RESTful API Design",
        description: "API design, integration, validation, and testing",
        icon: Zap,
        color: "blue"
    },
    {
        title: "SQL & Database",
        description: "Schema design, joins, migrations, and query optimization",
        icon: Database,
        color: "green"
    },
    {
        title: "Authentication & Security",
        description: "Role-based access control and secure authentication flows",
        icon: Shield,
        color: "red"
    },
    {
        title: "Backend Workflows",
        description: "Transaction-oriented backend systems and business logic",
        icon: Workflow,
        color: "orange"
    },
    {
        title: "API Testing & Debugging",
        description: "Comprehensive testing, validation, and reliability checks",
        icon: Activity,
        color: "cyan"
    },
    {
        title: "Data Processing",
        description: "Web scraping, data ingestion, and structured extraction",
        icon: FileCode,
        color: "pink"
    },
    {
        title: "CMS & Admin Systems",
        description: "Content management and administrative dashboards",
        icon: FileText,
        color: "yellow"
    }
];

const colorMap: Record<string, { icon: string; gradient: string }> = {
    purple: { icon: "text-purple-400", gradient: "from-purple-500/10 to-purple-600/10" },
    blue: { icon: "text-blue-400", gradient: "from-blue-500/10 to-blue-600/10" },
    green: { icon: "text-green-400", gradient: "from-green-500/10 to-green-600/10" },
    red: { icon: "text-red-400", gradient: "from-red-500/10 to-red-600/10" },
    orange: { icon: "text-orange-400", gradient: "from-orange-500/10 to-orange-600/10" },
    cyan: { icon: "text-cyan-400", gradient: "from-cyan-500/10 to-cyan-600/10" },
    pink: { icon: "text-pink-400", gradient: "from-pink-500/10 to-pink-600/10" },
    yellow: { icon: "text-yellow-400", gradient: "from-yellow-500/10 to-yellow-600/10" },
};

export default function TechnicalAreas() {
    return (
        <section className="py-24 bg-black" id="technical-areas">
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
                            Key Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Areas</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Specialized expertise across the full development lifecycle
                        </p>
                    </motion.div>

                    {/* Technical Areas Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technicalAreas.map((area, index) => {
                            const Icon = area.icon;
                            const colors = colorMap[area.color];

                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <GlassCard className="p-6 h-full group" hover>
                                        <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon size={24} className={colors.icon} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{area.description}</p>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
