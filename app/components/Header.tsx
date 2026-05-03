"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 group">
            <Zap size={18} className="text-[#0ea5e9]" />
            <span
              className="text-xl font-black tracking-tighter text-[#0f172a] uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ethan<span className="text-[#0ea5e9]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 font-medium hover:text-[#0ea5e9] transition-colors duration-200 text-sm"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-block bg-[#0ea5e9] text-white px-5 py-2 rounded-lg font-bold tracking-tight text-sm transition-all hover:bg-[#0284c7] hover:shadow-lg hover:shadow-sky-200 active:scale-95"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Hire Me
            </a>
            <button
              className="md:hidden text-slate-700 p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white border-l border-slate-200 flex flex-col p-8 transition-transform duration-300 md:hidden shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span
            className="text-lg font-black text-[#0f172a] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Menu
          </span>
          <button onClick={close} aria-label="Close menu" className="text-slate-400 hover:text-slate-700">
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-2xl font-black uppercase tracking-tighter text-slate-800 hover:text-[#0ea5e9] transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={close}
          className="mt-auto bg-[#0ea5e9] text-white px-5 py-3 rounded-lg font-bold tracking-tight text-center text-sm hover:bg-[#0284c7] transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
