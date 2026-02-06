"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const stats = [
    {
        value: "2.5+",
        label: "Years Experience",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        value: "15+",
        label: "Projects Completed",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        value: "22+",
        label: "Technologies",
        gradient: "from-cyan-500 to-cyan-600"
    },
    {
        value: "10",
        label: "Live Deployments",
        gradient: "from-green-500 to-green-600"
    }
];

export default function StatsCards() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <GlassCard className="p-6 text-center group" hover>
                        <div className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </GlassCard>
                </motion.div>
            ))}
        </div>
    );
}
