import Navbar from "@/components/ui/Navbar";
import VerticalNav from "@/components/ui/VerticalNav";
import Hero from "@/components/ui/Hero";
import StatsCards from "@/components/ui/StatsCards";
import ProjectGrid from "@/components/sections/ProjectGrid";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import SkillsGrid from "@/components/sections/SkillsGrid";
import TechnicalAreas from "@/components/sections/TechnicalAreas";
import Certifications from "@/components/sections/Certifications";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { Download, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VerticalNav />
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-black" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Stats Cards */}
            <StatsCards />

            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">About Me</h2>
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-medium mb-6">
                  Full Stack Developer
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Full Stack Developer with <span className="text-white font-semibold">2.5+ years</span> of hands-on experience designing, developing, testing, and
                  maintaining end-to-end web applications and backend systems. Have worked at <span className="text-purple-400 font-semibold">The metakey</span>Currently working at <span className="text-purple-400 font-semibold">ARN & Co</span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Strong experience in <span className="text-white font-semibold">JavaScript and Python</span>, leveraging Node.js and Django for backend architecture,
                  REST API development, and SQL-based data modeling. Proven experience in API testing, debugging, and data integrity checks.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Comfortable working across the complete development lifecycle and collaborating with cross-functional teams to deliver
                  <span className="text-white font-semibold"> secure, scalable applications</span>.
                </p>

                <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-8">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-purple-400" /> Bangalore, India</span>
                  <a href="mailto:saksaud7411@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} className="text-purple-400" /> saksaud7411@gmail.com
                  </a>
                  <a href="tel:+917411091256" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={16} className="text-purple-400" /> +91 74110 91256
                  </a>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/in/saud-ali-khan-35b366191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-white rounded-full hover:bg-blue-600/30 transition-colors text-sm"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/SAKSAUD7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600/20 border border-gray-500/30 text-white rounded-full hover:bg-gray-600/30 transition-colors text-sm"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>

              <Link
                href="https://drive.google.com/file/d/1xzF2BRZTglS0OAQeh3SJ75yV2umwP7Ub/view?usp=drivesdk"
                className="shrink-0 px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
              >
                Download Resume <Download size={18} />
              </Link>
            </div>

            {/* Education */}
            <div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-outfit mb-6">Education</h3>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Engineering – Information Science</h4>
                <p className="text-purple-400 mb-2">HKBK College of Engineering, Bangalore</p>
                <p className="text-gray-500 text-sm mb-1">Visvesvaraya Technological University (VTU)</p>
                <p className="text-gray-500 text-sm">2018 – 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Areas */}
      <div id="technical-areas">
        <TechnicalAreas />

      </div>

      {/* Experience Timeline */}
      <section className="py-24 bg-black" id="experience">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-12">Professional Experience</h2>
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* Skills */}
      <div id="skills">
        <SkillsGrid />

      </div>

      {/* Projects */}
      <div id="projects">
        <ProjectGrid />

      </div>

      {/* Certifications */}
      <div id="certifications">
        <Certifications />
      </div>

      {/* Contact/Footer */}
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
