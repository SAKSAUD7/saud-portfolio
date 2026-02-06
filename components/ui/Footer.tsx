import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 mt-20" id="contact">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold font-outfit">Saud Ali Khan</h2>
                    <p className="text-gray-400 text-sm mt-2">Senior Full Stack Developer</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-400">
                    <Link href="https://github.com/SAKSAUD7" className="hover:text-white transition-colors">GitHub</Link>
                    <Link href="https://linkedin.com/in/saud-ali-khan-35b366191" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="mailto:saksaud7411@gmail.com" className="hover:text-white transition-colors">Email</Link>
                </div>

                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} SAK. Built with Next.js & Tailwind.
                </p>
            </div>
        </footer>
    );
}
