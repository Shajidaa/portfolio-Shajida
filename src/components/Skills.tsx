"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, Database, Cloud, Cpu, Layout
} from "lucide-react";
import { cn } from "@/utils/cn";

// Skill item definition
interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tool";
  level: string;
  desc: string;
}

const skillsList: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: "Advanced", desc: "SPA & hooks" },
  { name: "Next.js", category: "frontend", level: "Intermediate", desc: "App Router & SSR" },
  { name: "Shadcn UI", category: "frontend", level: "Advanced", desc: "Accessible component system" },
  { name: "Dasiy UI", category: "frontend", level: "Advanced", desc: "Accessible component system" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", desc: "Core & async" },
  { name: "TailwindCSS", category: "frontend", level: "Advanced", desc: "Utility-first design" },
  { name: "HTML5", category: "frontend", level: "Advanced", desc: "Semantic structure" },
  { name: "CSS3", category: "frontend", level: "Advanced", desc: "Flexbox, grid & anims" },

  // Backend
  { name: "Node.js", category: "backend", level: "Intermediate", desc: "Server runtime" },
  { name: "Express.js", category: "backend", level: "Intermediate", desc: "RESTful API routes" },
  { name: "REST APIs", category: "backend", level: "Advanced", desc: "HTTP standard structures" },
  { name: "JWT Auth", category: "backend", level: "Intermediate", desc: "Token based auth" },
  { name: "Middleware", category: "backend", level: "Intermediate", desc: "Request pipelines" },
  { name: "TypeScript", category: "backend", level: "Intermediate", desc: "Type safety" },

  // Database
  { name: "MongoDB", category: "database", level: "Advanced", desc: "NoSQL document store" },
  { name: "PostgreSQL", category: "database", level: "Intermediate", desc: "Relational database" },
  { name: "Prisma ORM", category: "database", level: "Intermediate", desc: "Next-gen database toolkit" },

  // Deploy / Platforms / Tools
  { name: "Git", category: "tool", level: "Intermediate", desc: "Version control" },
  { name: "GitHub", category: "tool", level: "Advanced", desc: "Collaboration & Actions" },
  { name: "Cloudinary", category: "tool", level: "Intermediate", desc: "Media management & CDN" },
  { name: "Firebase", category: "tool", level: "Intermediate", desc: "Auth, Firestore & Hosting" },
  { name: "Vercel", category: "tool", level: "Advanced", desc: "Next.js web deployment" },
  { name: "Netlify", category: "tool", level: "Intermediate", desc: "Static site hosting" },
  { name: "Render", category: "tool", level: "Intermediate", desc: "Web services & API hosts" },
  { name: "VS Code", category: "tool", level: "Advanced", desc: "IDE & Extensions" },
  { name: "Figma", category: "tool", level: "Basic", desc: "UI design wireframing" },
  { name: "Postman", category: "tool", level: "Intermediate", desc: "API development & testing" }
];

const categories = [
  { id: "all", name: "All", icon: Cpu },
  { id: "frontend", name: "Frontend", icon: Layout },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Database", icon: Database },
  { id: "tool", name: "Tools", icon: Cloud },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsList.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 md:py-32 z-10 border-t border-white/5 bg-black/90">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase"> Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white select-none">Skills & Stack</h2>
          <div className="h-[2px] w-20 bg-indigo-500 rounded" />
        </div>

        {/* Tab Buttons Container */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {/* Active Tab Highlight Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    className="absolute inset-0 bg-indigo-600 rounded-full z-0"
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative flex items-start gap-4 p-5 rounded-2xl bg-slate-950/20 border border-white/5 hover:border-indigo-500/20 hover:bg-slate-950/40 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Decorative glowing border effect on hover */}
                <div className="absolute inset-0 rounded-2xl border border-indigo-500/0 group-hover:border-indigo-500/10 pointer-events-none transition-colors duration-300" />
                
                {/* Technical icon background */}
                <div className="flex items-center justify-center p-2 rounded-xl bg-white/5 text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-950/30 transition-all duration-300">
                  {skill.category === "frontend" && <Layout className="w-5 h-5" />}
                  {skill.category === "backend" && <Server className="w-5 h-5" />}
                  {skill.category === "database" && <Database className="w-5 h-5" />}
                  {skill.category === "tool" && <Cloud className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white truncate font-sans group-hover:text-indigo-200 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 text-indigo-300 border border-indigo-500/10 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors truncate">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}