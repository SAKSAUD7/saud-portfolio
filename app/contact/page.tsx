"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto px-6 flex items-center justify-center pt-20">
                <div className="max-w-2xl w-full text-center">
                    <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">Get in Touch</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-outfit mb-8">Let's Work Together</h1>
                    <p className="text-gray-400 text-lg mb-12">
                        I'm currently available for full-time opportunities. If you're interested in building scalable,
                        premium web applications, I'd love to hear from you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <a href="mailto:saksaud7411@gmail.com" className="group bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                            <Mail className="text-purple-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                            <p className="text-gray-400 group-hover:text-white transition-colors">saksaud7411@gmail.com</p>
                        </a>

                        <a href="https://linkedin.com/in/saud-ali-khan-35b366191" target="_blank" className="group bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                            <Linkedin className="text-blue-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                            <p className="text-gray-400 group-hover:text-white transition-colors">Connect with me</p>
                        </a>

                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                            <Phone className="text-green-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                            <p className="text-gray-400">+91 74110 91256</p>
                        </div>

                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                            <MapPin className="text-red-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                            <p className="text-gray-400">Bangalore, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
