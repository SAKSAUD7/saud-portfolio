import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Saud Ali Khan | Senior Full Stack Developer",
  description: "Portfolio of Saud Ali Khan, a Senior Full Stack Developer specializing in Next.js, Django, and production-grade web systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-[#050505] text-white selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
