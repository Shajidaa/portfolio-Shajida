import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shajida Akter Lopa | Junior Full Stack Developer",
  description: "Portfolio of Shajida Akter Lopa, MERN Stack Developer, Frontend & Backend Developer. Experienced in building responsive, user-focused applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Shajida Akter Lopa",
    "Shajida",
    "Portfolio",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Junior Web Developer",
    "React Developer",
    "Next.js Developer",
    "Bangladesh Developer"
  ],
  authors: [{ name: "Shajida Akter Lopa" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
