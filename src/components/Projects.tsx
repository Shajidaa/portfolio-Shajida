"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink,  Layers, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  overview: string;
  techStack: string[];
  liveLink: string;
  clientLink?: string;
  serverLink?: string;
  image?: string;
  badge?: string;
}

const projectsList: Project[] = [
  {
    image: "https://i.ibb.co.com/cSbxQq4X/image.png",
    title: "Nest Rent",
    subtitle: "Property Rental Platform",
    overview: "Role-based rental ecosystem for tenants, landlords, and admins featuring property requests, approvals, reviews, and integrated Stripe payments.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind", "Stripe"],
    liveLink: "https://rent-nest-frontend-lemon.vercel.app/",
    clientLink: "https://github.com/Shajidaa/rent-nest-frontend",
    serverLink: "https://github.com/Shajidaa/rent-nest-backend",
    badge: "Full Stack"
  },
  {
    image: "https://i.ibb.co.com/MxbdLbWJ/image.png",
    title: "EduPlus",
    subtitle: "Tuition Management App",
    overview: "Role-based platform connecting students and tutors with AI chat support, CRUD tuition posts, Stripe billing, and secure Firebase authentication.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Firebase"],
    liveLink: "https://edu-plus-client.vercel.app/",
    clientLink: "https://github.com/Shajidaa/edu-plus-client",
    serverLink: "https://github.com/shajidaislam/eduplus-server",
    badge: "Full Stack"
  },
  {
    image: "https://i.ibb.co.com/NnN6xbSp/Screenshot-2025-12-05-085400.jpg",
    title: "Toytopia",
    subtitle: "Toy E-commerce App",
    overview: "Interactive and responsive e-commerce application dedicated to children's toys, offering smooth product browsing, search, and secure auth.",
    techStack: ["React", "Firebase", "Daisy UI", "Tailwind CSS"],
    liveLink: "https://toytopia-98c6a.web.app/",
    clientLink: "https://github.com/Shajidaa/Toytopia",
    badge: "Frontend"
  },
  {
    image: "https://i.ibb.co.com/DDMDqD6V/Screenshot-2025-12-05-090049.jpg",
    title: "Revoza",
    subtitle: "Modern E-commerce Web App",
    overview: "Feature-rich e-commerce store built with Next.js and Framer Motion, offering dynamic client-side filtering, detail modals, and cart management.",
    techStack: ["Next.js", "Tailwind", "Express.js", "MongoDB", "Firebase"],
    liveLink: "https://revoza.vercel.app/",
    clientLink: "https://github.com/Shajidaa/Revoza",
    serverLink: "https://github.com/Shajidaa/Revozas-server",
    badge: "E-Commerce"
  },
  {
    image: "https://i.ibb.co.com/XfmTGMR8/Screenshot-2025-12-05-084646.jpg",
    title: "Payup",
    subtitle: "Bill Management System",
    overview: "Streamlined financial management platform for tracking monthly utility bills, featuring protected routes and secure Express session authorization.",
    techStack: ["React", "Tailwind", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://payup-1204c.web.app/",
    clientLink: "https://github.com/Shajidaa/Utility-Bill-Management-System-Client",
    serverLink: "https://github.com/Shajidaa/Utility-Bill-Management-System-Server",
    badge: "Fintech"
  }
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 18 }
    }
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 z-10 border-t border-white/10 bg-neutral-950 overflow-hidden">
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-5 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio / 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg">
            High-performance web applications built with modern architectures, clean UI, and robust backend integrations.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsList.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group flex flex-col h-full rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden backdrop-blur-md shadow-xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Minimalist Thumbnail Header */}
              {project.image && (
                <div className="relative w-full h-44 overflow-hidden border-b border-white/10 bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 opacity-40" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {project.badge && (
                    <span className="absolute top-3 right-3 z-20 text-[9px] font-mono font-medium uppercase tracking-wider bg-neutral-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full">
                      {project.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Content Box */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono text-indigo-400">{project.subtitle}</p>
                  </div>
                  <Layers className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0 mt-0.5" />
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-3 font-sans flex-grow">
                  {project.overview}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links Bar */}
                <div className={`grid ${project.serverLink ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mt-auto pt-3 border-t border-white/10 font-mono text-[10px] font-medium`}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md shadow-indigo-600/15 transition-all uppercase tracking-wider"
                  >
                    <span>Live</span> <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  
                  {project.clientLink && (
                    <a
                      href={project.clientLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg border border-white/10 transition-all uppercase tracking-wider"
                    >
                      <span>Code</span> <FaGithub className="w-2.5 h-2.5" />
                    </a>
                  )}

                  {project.serverLink && (
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg border border-white/10 transition-all uppercase tracking-wider"
                    >
                      <span>Server</span> <FaGithub className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}