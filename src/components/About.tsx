"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, Languages, Sparkles } from "lucide-react";

export default function About() {
  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 z-10 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16">

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white select-none">About Me</h2>
          <div className="h-[2px] w-20 bg-indigo-500 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Objective Statement & Brief Introduction */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 flex flex-col gap-6 text-slate-300 bg-slate-950/20 border border-white/5 hover:border-indigo-500/20 p-5 sm:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="font-mono text-sm font-semibold tracking-wider uppercase">Career Objective</h3>
            </div>

            <p className="text-base leading-relaxed text-slate-300 font-sans">
              Aspiring Junior MERN Stack Developer eager to start a professional career in web development.
              Skilled in building responsive, user-focused applications using MongoDB, Express.js, React, and Node.js.
              I am actively seeking an opportunity to learn, contribute to real-world projects, and grow as a full-stack developer in a dynamic team environment.
            </p>

            <p className="text-base leading-relaxed text-slate-400 font-sans">
              I focus on writing clean, scalable code and delivering high-quality user experiences. I value collaboration, continuous improvement, and the challenges of adapting to modern, evolving tech stacks.
            </p>

            <div className="h-[1px] bg-white/5 my-2" />

            {/* Languages sub-section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white">
                <Languages className="w-4 h-4 text-indigo-400" />
                <h4 className="font-mono text-xs font-semibold tracking-wider uppercase">Languages</h4>
              </div>
              <div className="flex gap-6 text-sm font-sans">
                <div>
                  <span className="text-slate-400">Bangla:</span> <span className="text-white font-medium">Native</span>
                </div>
                <div>
                  <span className="text-slate-400">English:</span> <span className="text-white font-medium">Professional Proficiency</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Soft Skills */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {/* Education Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 bg-slate-950/20 border border-white/5 hover:border-indigo-500/20 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-white mb-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase">Education</h3>
              </div>
              <div className="flex flex-col gap-1.5 font-sans">
                <h4 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
<<<<<<< HEAD
             Inter Science 2020 (5.00)
                </h4>
               
=======
                  Bachelor of Arts in Islamic Studies
                </h4>
                <p className="text-sm text-slate-300">Jagannath University, Dhaka (JnU)</p>
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono mt-1">
                  <span>IST (Present)</span>
                  <span>Enrolled: 2022</span>
                </div>
>>>>>>> ad83b0d899d9f4dfa983c0ba9bcfef12d023cd9a
              </div>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 bg-slate-950/20 border border-white/5 hover:border-indigo-500/20 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-white mb-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase">Key Strengths</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-1 bg-white/5 border border-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <span className="text-sm font-semibold text-white">Quick Learner</span>
                  <span className="text-xs text-slate-400 leading-normal">
                    Ability to rapidly grasp new technologies, design concepts, and development frameworks.
                  </span>
                </div>
                <div className="flex flex-col gap-1 bg-white/5 border border-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <span className="text-sm font-semibold text-white">Active Listener</span>
                  <span className="text-xs text-slate-400 leading-normal">
                    Ensuring requirements are fully understood to deliver projects that align perfectly with user expectations.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
