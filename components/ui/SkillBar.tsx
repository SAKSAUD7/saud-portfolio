"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface SkillBarProps {
    name: string;
    level: number; // 0-100
    color?: "purple" | "blue" | "cyan" | "green";
    delay?: number;
}

const colorMap = {
    purple: {
        bg: "bg-gradient-to-r from-purple-500 to-purple-600",
        glow: "shadow-purple-500/50",
    },
    blue: {
        bg: "bg-gradient-to-r from-blue-500 to-blue-600",
        glow: "shadow-blue-500/50",
    },
    cyan: {
        bg: "bg-gradient-to-r from-cyan-500 to-cyan-600",
        glow: "shadow-cyan-500/50",
    },
    green: {
        bg: "bg-gradient-to-r from-green-500 to-green-600",
        glow: "shadow-green-500/50",
    },
};

export default function SkillBar({ name, level, color = "purple", delay = 0 }: SkillBarProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayLevel, setDisplayLevel] = useState(0);
    const colors = colorMap[color];

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                let current = 0;
                const increment = level / 50; // Smooth animation over 50 frames
                const interval = setInterval(() => {
                    current += increment;
                    if (current >= level) {
                        setDisplayLevel(level);
                        clearInterval(interval);
                    } else {
                        setDisplayLevel(Math.floor(current));
                    }
                }, 20);
                return () => clearInterval(interval);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [isInView, level, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="mb-4"
        >
            {/* Skill name and percentage */}
            <div className="flex justify-between items-center mb-1">
                <span className="text-white font-medium text-sm">{name}</span>
                <span className="text-gray-400 text-xs font-mono">{displayLevel}%</span>
            </div>

            {/* Progress bar container */}
            <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                {/* Background glow */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className={`absolute inset-0 ${colors.bg} opacity-20 blur-sm`}
                />

                {/* Actual progress bar */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className={`relative h-full ${colors.bg} rounded-full shadow-lg ${colors.glow}`}
                >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
            </div>
        </motion.div>
    );
}
