import { motion } from "motion/react";
import { Github, Users, ExternalLink, Play, Hammer } from "lucide-react";
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const projects = [
  {
    title: "Tiskara Hlad",
    description:
      "Localized marketing and product catalog website for Tiskara Hlad print shop (est. 1990, hlad.hr). Supports Croatian and English via next-intl. Features a Supabase-powered admin catalog editor and Resend for transactional contact form emails.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "next-intl"],
    gradient: "linear-gradient(135deg, #0071E3 0%, #0ea5e9 100%)",
    githubUrl: "https://github.com/JanJedvaj/TiskaraHladProject",
    contributed: false,
    demoVideo: "/videos/TiskaraHlad.mp4",
  },
  {
    title: "Interference Injection Tool",
    description:
      "Full-stack web app for uploading, analyzing, and injecting interference into RF signals. Supports async injection jobs, real-time preview with chart overlay, signal statistics (SNR, RMS), and CSV export. Built during the Eviden internship.",
    tech: ["React", "TypeScript", "Vite", "Python", "Flask", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    githubUrl: "https://github.com/JanJedvaj/InterferenceInjectionTool",
    contributed: false,
    demoVideo: "/videos/InterferenceVideo.mp4",
  },
  {
    title: "Interoperability Project",
    description:
      "University project exposing a Books entity through six interoperability layers: REST + XML/JSON import, SOAP + XPath, Jakarta XML validation, gRPC weather service, custom REST + JWT + GraphQL, and a Thymeleaf web UI with role-based access.",
    tech: ["Java", "Spring Boot", "SQL Server", "Maven", "GraphQL", "gRPC"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    githubUrl: "https://github.com/JanJedvaj/InteroperabilityProject",
    contributed: false,
  },
  {
    title: "Internship Portal",
    description:
      "Full-stack web application for managing internship opportunities. Companies publish positions; students browse and apply. React frontend with an ASP.NET Core Web API backend, SQL Server database, CI/CD pipeline via GitHub Actions, and SonarQube code quality checks.",
    tech: ["React", "C#", "ASP.NET Core", "SQL Server", "GitHub Actions"],
    gradient: "linear-gradient(135deg, #0071E3 0%, #06b6d4 100%)",
    githubUrl: "https://github.com/JanJedvaj/InternshipPortal",
    contributed: false,
  },
  {
    title: "Bird Project",
    description:
      "End-to-end data pipeline for bird audio observations. Ingests audio files, classifies bird species via an external API, stores results in MongoDB with MinIO for object storage, and streams events through Kafka.",
    tech: ["Python", "Docker", "MongoDB", "Kafka", "MinIO"],
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    githubUrl: "https://github.com/JanJedvaj/BirdProject",
    contributed: false,
  },
  {
    title: "Car Configurator",
    description:
      "Car configurator web application built on a clean 3-layer architecture (DAL, WebApi, MVC). Users can configure vehicles, manage compatibility rules, and register — all served through an ASP.NET Core REST API with an MVC frontend.",
    tech: ["C#", "ASP.NET Core", "MVC", "Web API", "HTML", "CSS"],
    gradient: "linear-gradient(135deg, #374151 0%, #6b7280 100%)",
    githubUrl: "https://github.com/JanJedvaj/CarConfigurator",
    contributed: false,
  },
  {
    title: "ERez",
    description:
      "Cross-platform reservation app for venues and restaurants built with Expo and React Native. Users discover clubs and events, browse menus, and book tables through an interactive floor plan. Organizers get a dashboard to manage events, menus, and floor plans. Auth0 authentication, .NET backend, runs on iOS, Android, and Web from a single codebase.",
    tech: ["React Native", "Expo", "TypeScript", ".NET", "Auth0"],
    gradient: "linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)",
    githubUrl: "",
    contributed: false,
    inTheMaking: true,
  },
  {
    title: "TapNGo",
    description:
      "Team-built ASP.NET MVC web application for real-time queue and order management. Uses SignalR for live push updates between clients and the admin panel, a DAL layer for data access, and authentication middleware for role-based access control. Contributed as one of four developers.",
    tech: ["C#", "ASP.NET MVC", "SignalR", "JavaScript", "HTML", "CSS"],
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    githubUrl: "https://github.com/AdrianBusak/TapNGo-deploy",
    contributed: true,
    demoVideo: "/videos/TapNGo.mp4",
  },
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl mb-16 text-center" style={{ fontWeight: 700 }}>
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-shadow flex flex-col"
            >
              {/* Gradient header */}
              <div
                className="relative h-36 flex items-center justify-center"
                style={{ background: project.gradient }}
              >
                {project.contributed && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs text-white/90 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1" style={{ fontWeight: 500 }}>
                    <Users className="w-3 h-3" />
                    Contributed
                  </span>
                )}
                {"inTheMaking" in project && (project as { inTheMaking: boolean }).inTheMaking && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs text-white/90 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1" style={{ fontWeight: 500 }}>
                    <Hammer className="w-3 h-3" />
                    In the Making
                  </span>
                )}
                <h3 className="text-white text-lg px-6 text-center" style={{ fontWeight: 600 }}>
                  {project.title}
                </h3>
              </div>

              {/* Project details */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1" style={{ fontWeight: 300 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                      style={{ fontWeight: 500 }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {"liveUrl" in project && (
                    <motion.a
                      href={(project as { liveUrl: string }).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#0071E3] text-white text-sm transition-all hover:bg-[#0077ED]"
                      style={{ fontWeight: 500 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </motion.a>
                  )}
                  {"demoVideo" in project && (
                    <motion.button
                      onClick={() => setActiveVideo((project as { demoVideo: string }).demoVideo)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#059669] text-white text-sm transition-all hover:bg-[#047857]"
                      style={{ fontWeight: 500 }}
                    >
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </motion.button>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={"liveUrl" in project || "demoVideo" in project ? "flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gray-900 text-white text-sm transition-all hover:bg-gray-700" : "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gray-900 text-white text-sm transition-all hover:bg-gray-700"}
                      style={{ fontWeight: 500 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Demo Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => {
        if (!open && videoRef.current) videoRef.current.pause();
        if (!open) setActiveVideo(null);
      }}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-white/10">
          <DialogTitle className="sr-only">Demo Video</DialogTitle>
          {activeVideo && (
            <video
              ref={videoRef}
              src={activeVideo}
              controls
              autoPlay
              className="w-full"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
