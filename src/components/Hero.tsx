"use client";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Mail, Briefcase, Sparkles } from "lucide-react";
import { toast } from "react-toastify";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14, delay: 0.1 },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleResumeClick = () => {
    toast.success("Resume download started!", {
      position: "top-center",
      style: {
        background: "#9333ea",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        fontSize: "16px",
      },
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden z-10"
    >
      {/* Background overlay: gradient wash + grid + vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b14] via-[#0a0a12] to-black" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)]" />

      {/* Animated glow blobs */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[8%] w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating sparkle accents */}
      <motion.div
        className="absolute top-[25%] right-[20%] text-indigo-400/40 hidden md:block"
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] left-[15%] text-purple-400/40 hidden md:block"
        animate={{ y: [0, 14, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Profile Image */}
          <motion.div variants={imageVariants} className="relative mb-6 group">
            {/* Rotating gradient ring */}
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#818cf8,#c084fc,#818cf8)] opacity-70 blur-[2px]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            {/* Soft pulse glow behind */}
            <motion.div
              className="absolute -inset-3 rounded-full bg-indigo-500/30 blur-xl"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-black shadow-[0_8px_40px_rgba(99,102,241,0.35)]">
              <Image
                src="https://i.ibb.co.com/BHLGzGxr/8744393d-9043-4b37-9bca-527ec42c616b-removebg-preview.png"
                alt="Shajida Akter Lopa"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Online status dot */}
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-black" />
            </span>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-mono mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Shajida Akter Lopa</span>
          </motion.h1>

          {/* Typewriter Subheading */}
          <motion.div variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-300 mb-6 h-12 flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  "MERN Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          {/* Objective Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-sans"
          >
            Aspiring MERN Stack Developer skilled in building responsive, user-focused web applications with modern design aesthetics. I build interfaces that feel responsive and alive.
          </motion.p>

          {/* Social Links & Resume Download */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <a
              href="https://github.com/Shajidaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shajida-akter-lopa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
               <a
                  href="https://www.facebook.com/profile.php?id=61564677698432"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                >
                  <FaFacebook className="text-xl" />
                </a>
            <a
              href="https://drive.google.com/uc?export=download&id=19AytXCcQ9LebUKAEHFxeLbOOQy-chz85"
              download
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 text-sm font-medium transition-all"
            >
              <FiDownload className="text-lg text-purple-400" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-52 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-300 group"
            >
              <Briefcase className="w-4 h-4 transition-transform group-hover:scale-110" />
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-52 px-8 py-3.5 bg-black border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white font-medium rounded-full transition-all duration-300 hover:bg-slate-950/40"
            >
              <Mail className="w-4 h-4" />
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}