"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-black pt-20">
            {/* Minimal background */}
            <div className="absolute inset-0 bg-black" />

            <div className="container mx-auto px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-outfit mb-4 leading-none"
                            >
                                <span className="text-white">SAUD</span>
                                <br />
                                <span className="text-white">ALI KHAN</span>
                            </motion.h1>

                            {/* Title */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide"
                            >
                                Full Stack Developer
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 text-base md:text-lg mb-10 max-w-xl leading-relaxed"
                            >
                                Full-stack developer with 2.5+ years of experience designing, testing, and maintaining high-performance
                                applications. Specialized in backend architecture, API development, database systems, and frontend integration,
                                with a strong focus on reliability and real-world performance.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 mb-10"
                            >
                                <Link
                                    href="/projects"
                                    className="px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-all flex items-center gap-2"
                                >
                                    View Projects
                                    <ArrowRight size={20} />
                                </Link>

                                <Link
                                    href="https://drive.google.com/file/d/1xzF2BRZTglS0OAQeh3SJ75yV2umwP7Ub/view?usp=drivesdk"
                                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-md hover:bg-white/5 transition-all flex items-center gap-2"
                                >
                                    Download Resume
                                    <Download size={18} />
                                </Link>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex gap-4"
                            >
                                <a
                                    href="https://github.com/SAKSAUD7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md hover:bg-white/5 hover:border-white/40 transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} className="text-gray-400" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/saud-ali-khan-b8a5a2252/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md hover:bg-white/5 hover:border-white/40 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} className="text-gray-400" />
                                </a>
                                <a
                                    href="mailto:saksaud7@gmail.com"
                                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md hover:bg-white/5 hover:border-white/40 transition-all"
                                    aria-label="Email"
                                >
                                    <Mail size={20} className="text-gray-400" />
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Professional Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-md lg:max-w-lg">
                                {/* Photo container - clean, no effects */}
                                <div className="relative aspect-[3/4] w-[85%] sm:w-[90%] md:w-full mx-auto overflow-hidden rounded-2xl md:rounded-3xl">
                                    <Image
                                        src="/images/profile image sak.png"
                                        alt="Saud Ali Khan - Full Stack Developer"
                                        fill
                                        className="object-cover"
                                        priority
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
