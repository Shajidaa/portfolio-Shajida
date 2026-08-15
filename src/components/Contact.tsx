"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("shajidaislam34@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactDetails = [
    {
      title: "Email",
      value: "shajidaislam34@gmail.com",
      href: "mailto:shajidaislam34@gmail.com",
      icon: Mail,
      actionText: "Send Mail",
      isCopyable: true,
    },
    {
      title: "Phone",
      value: "+880-1404-198-350",
      href: "tel:+8801404198350",
      icon: Phone,
      actionText: "Call Now",
      isCopyable: false,
    },
    {
      title: "Location",
      value: "Narayanganj, Dhaka",
      href: "https://maps.google.com/?q=Narayanganj,Dhaka",
      icon: MapPin,
      actionText: "View on Map",
      isCopyable: false,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url:"https://github.com/Shajidaa",
      icon: GithubIcon,
      colorClass: "hover:text-white hover:bg-white/10 hover:border-white/20",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shajida-akter-lopa/",
      icon: LinkedinIcon,
      colorClass: "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20",
    },{
      name:"Facebook",
      url:"https://www.facebook.com/profile.php?id=61564677698432",
      icon: FaFacebook,
            colorClass: "hover:text-white hover:bg-white/10 hover:border-white/20",
    }
    
  ];

  return (
    <section id="contact" className="relative 
    py-24 md:py-32 z-10 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">Connect</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white select-none">Get In Touch</h2>
          <div className="h-[2px] w-20 bg-indigo-500 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 90, damping: 15, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-950/20 border border-white/5 hover:border-indigo-500/20 hover:bg-slate-950/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                      {item.title}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <p className="text-base font-semibold text-white mb-6 break-all">
                    {item.value}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {item.actionText}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {item.isCopyable && (
                    <button
                      onClick={copyEmailToClipboard}
                      className="ml-auto p-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200"
                      title="Copy to Clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Platforms Drawer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-950/10 border border-white/5 text-center backdrop-blur-sm"
        >
          <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 font-semibold">
            Social Networks
          </h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 border border-white/5 bg-white/5 rounded-full text-slate-300 transition-all duration-300 ${soc.colorClass} group`}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-semibold tracking-wider uppercase font-mono">{soc.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs font-mono text-slate-600">
          <p>© {new Date().getFullYear()} Shajida Akter Lopa. All rights reserved.</p>
          <p className="mt-1 text-[10px] text-slate-700">Built with Next.js 15, Tailwind CSS, & Framer Motion</p>
        </div>
      </div>
    </section>
  );
}
