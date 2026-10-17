
"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckSquare } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TechArenaX",
    role: "Backend Developer & Team Lead Intern",
    period: "Aug – Oct",
    duration: "3 Months",
    achievements: [
      "Led a developer team through sprint cycles, code reviews, and Git management to deliver backend milestones on time.",
      "Built scalable RESTful APIs and database schemas using Node.js, Express, and TypeScript with strict data validation."
    ]
  },
  {
    company: "iniAstra Tech",
    role: "Full Stack Developer",
    period: "Jan 2026 - Jun 2026",
    duration: "6 Months",
    achievements: [
      "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and TypeScript.",
      "Engineered secure and scalable RESTful APIs with JWT authentication, middleware integration, and request validation processes.",
      "Integrated modern responsive UI components utilizing Tailwind CSS and Framer Motion to deliver smooth micro-interactions.",
      "Improved database query efficiency by optimizing MongoDB schema designs and indexing strategies.",
      "Collaborated within cross-functional teams in an agile environment, participating in daily standups, code reviews, and Git-based version control pipelines."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 z-10 border-t border-white/5 bg-black/90">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white select-none">Work Experience</h2>
          <div className="h-[2px] w-20 bg-indigo-500 rounded" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {/* Decorative glowing gradient line */}
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          {experiences.map((exp, expIdx) => (
            <motion.div
              key={expIdx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: expIdx * 0.1 }}
              className="relative group"
            >
              {/* Timeline node icon */}
              <span className="absolute -left-[41px] md:-left-[53px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-black border border-indigo-500/30 text-indigo-400 group-hover:border-indigo-400 group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <Briefcase className="w-4 h-4" />
              </span>

              {/* Content Container */}
              <div className="bg-slate-950/20 border border-white/5 group-hover:border-indigo-500/20 p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-white mb-1.5">
                      <Building2 className="w-4.5 h-4.5 text-indigo-400" />
                      <h3 className="text-lg font-bold">{exp.company}</h3>
                    </div>
                    <p className="text-base font-semibold text-slate-300">{exp.role}</p>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-slate-400 text-xs font-mono w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period} &bull; {exp.duration}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    Key Achievements & Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-slate-300 font-sans">
                        <CheckSquare className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}