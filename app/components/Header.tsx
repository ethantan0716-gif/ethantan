"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
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
            ? "bg-[#0c0e10]/80 backdrop-blur-xl border-b border-[#46484a]/30"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 group">
            <Terminal size={20} className="text-[#81ecff]" />
            <span
              className="text-xl font-black tracking-tighter text-[#81ecff] uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ethan Tan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#747578] font-medium hover:text-[#ff7520] transition-colors duration-300 uppercase tracking-widest text-sm"
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
              className="hidden md:inline-block bg-[#81ecff] text-[#003840] px-5 py-2 rounded-lg font-bold tracking-tight uppercase text-sm transition-all hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] active:scale-95"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Hire Me
            </a>
            <button
              className="md:hidden text-[#eeeef0] p-1"
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#111416] border-l border-[#46484a]/40 flex flex-col p-8 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span
            className="text-lg font-black text-[#81ecff] uppercase tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Menu
          </span>
          <button onClick={close} aria-label="Close menu" className="text-[#747578] hover:text-[#eeeef0]">
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-2xl font-black uppercase tracking-tighter text-[#eeeef0] hover:text-[#81ecff] transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={close}
          className="mt-auto bg-[#81ecff] text-[#003840] px-5 py-3 rounded-lg font-bold tracking-tight uppercase text-center text-sm"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
