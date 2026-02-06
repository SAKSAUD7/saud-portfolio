import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
    return (
        <div
            className={`
        bg-[#0A0A0A]/70 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        shadow-2xl
        ${hover ? "hover:border-purple-500/30 hover:shadow-purple-500/20 transition-all duration-300" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
