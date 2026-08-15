"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // If scrolled past 80px, trigger scrolled state
    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Handle hash scroll alignment offset for fixed nav
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4",
          isScrolled 
            ? "flex justify-center" 
            : " bg-black/20 backdrop-blur-sm"
        )}
      >
        <motion.div
          animate={{
            width: isScrolled ? "90%" : "100%",
            maxWidth: isScrolled ? "1000px" : "100%",
            y: isScrolled ? 12 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className={cn(
            "flex items-center justify-between w-full transition-all duration-300",
            isScrolled
              ? "bg-black/60 backdrop-blur-xl  shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] rounded-full px-6 py-3"
              : "px-0 py-0"
          )}
        >
          {/* Logo Section */}
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="group flex items-center gap-1 select-none">
            <span className="text-xl font-bold tracking-tight text-white font-mono">S</span>
            
            <div className="relative flex overflow-hidden h-6 items-center">
              <AnimatePresence mode="wait">
                {!isScrolled ? (
                  <motion.span
                    key="full-logo"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-xl font-medium tracking-tight text-white"
                  >
                    hajida
                  </motion.span>
                ) : (
                  <motion.span
                    key="monogram"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-xl font-bold tracking-tight text-indigo-400 font-mono"
                  >
                    /A
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-400  hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Resume/Hire Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="relative inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-black bg-white rounded-full px-4 py-2 hover:bg-slate-200 transition-all duration-300 group"
            >
              HIRE ME
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none hover:text-indigo-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-2 md:px-16"
          >
            {/* Architectural Grid for mobile menu overlay */}
            <div className="absolute inset-0 bg-size-[60px_60px] pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] z-0" />
            
            <div className="absolute top-24 left-8 right-8 h-[1px] bg-white/10 z-10" />

            <nav className="flex flex-col gap-6 z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-semibold tracking-tight text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all duration-300" />
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1 }}
                className="mt-12 flex flex-col gap-4"
              >
                <div className="h-[1px] bg-white/10 w-full mb-6" />
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect</p>
                <a 
                  href="mailto:shajidaislam34@gmail.com" 
                  className="text-lg text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  shajidaislam34@gmail.com
                </a>
                <a 
                  href="tel:+8801404198350" 
                  className="text-lg text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  +880-1404-198-350
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
