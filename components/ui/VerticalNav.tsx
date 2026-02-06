"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Code, label: "Skills", href: "#skills" },
    { icon: FolderOpen, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
];

export default function VerticalNav() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (href: string) => {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Desktop Vertical Navigation */}
            <motion.nav
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
            >
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl">
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.substring(1);

                            return (
                                <motion.button
                                    key={item.href}
                                    onClick={() => handleClick(item.href)}
                                    className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isActive
                                            ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"
                                            : "bg-white/5 hover:bg-white/10"
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon
                                        size={20}
                                        className={isActive ? "text-white" : "text-gray-400 group-hover:text-white"}
                                    />

                                    {/* Tooltip */}
                                    <div className="absolute left-full ml-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                                        {item.label}
                                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black/90" />
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Bottom Navigation */}
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10"
            >
                <div className="flex justify-around items-center px-4 py-3">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.substring(1);

                        return (
                            <button
                                key={item.href}
                                onClick={() => handleClick(item.href)}
                                className={`flex flex-col items-center gap-1 transition-all ${isActive ? "text-blue-400" : "text-gray-400"
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="text-xs">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </motion.nav>
        </>
    );
}
