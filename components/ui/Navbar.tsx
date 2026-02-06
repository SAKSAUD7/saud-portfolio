"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAboutClick = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleContactClick = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/" className="text-2xl font-bold font-outfit">
                            <span className="text-white">Saud</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                .dev
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {/* About - Navigate to homepage */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link
                                href="/#about"
                                className="text-gray-300 hover:text-white transition-colors relative group"
                            >
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </motion.div>

                        {/* Projects - Navigate to page */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/projects"
                                className="text-gray-300 hover:text-white transition-colors relative group"
                            >
                                Projects
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </motion.div>

                        {/* Contact - Navigate to homepage */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/#contact"
                                className="text-gray-300 hover:text-white transition-colors relative group"
                            >
                                Contact
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </motion.div>

                        {/* Resume Download Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1xzF2BRZTglS0OAQeh3SJ75yV2umwP7Ub/view?usp=drivesdk"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 hover:scale-105"
                        >
                            <Download size={16} />
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:hidden text-white"
                        onClick={() => {
                            alert("Mobile menu - use navigation links");
                        }}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
