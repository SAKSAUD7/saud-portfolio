"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
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
                            className="relative z-50"
                        >
                            <Link href="/" className="text-2xl font-bold font-outfit" onClick={() => setMobileMenuOpen(false)}>
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
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}

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
                            className="md:hidden text-white relative z-50 p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-end gap-1.5">
                                <motion.span
                                    animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="w-6 h-0.5 bg-white block"
                                />
                                <motion.span
                                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-4 h-0.5 bg-white block"
                                />
                                <motion.span
                                    animate={mobileMenuOpen ? { rotate: -45, y: -6, width: 24 } : { rotate: 0, y: 0, width: 16 }}
                                    className="w-full h-0.5 bg-white block"
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col items-center gap-8 w-full px-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (index * 0.1) }}
                                    className="w-full max-w-xs text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-3xl font-outfit font-bold text-gray-300 hover:text-white hover:scale-105 transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1xzF2BRZTglS0OAQeh3SJ75yV2umwP7Ub/view?usp=drivesdk"
                                    className="px-8 py-4 bg-white text-black text-lg font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                                >
                                    Download Resume
                                    <Download size={20} />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
