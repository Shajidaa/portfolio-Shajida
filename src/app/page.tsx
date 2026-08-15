import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-slate-100 overflow-hidden">
      {/* Structural layout grid pattern (defined in globals.css) */}
      <div className="grid-background" />
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Sections Container */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
