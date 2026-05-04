"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
            ? "bg-[#fdf8f3]/90 backdrop-blur-xl border-b border-[#e8ddd5]"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2">
            <span
              className="text-xl font-extrabold tracking-tight text-stone-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Ethan<span className="text-[#d97706]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-500 font-medium hover:text-[#d97706] transition-colors duration-200 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-block bg-[#d97706] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all hover:bg-[#b45309] hover:shadow-lg hover:shadow-amber-200 active:scale-95"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Hire Me
            </a>
            <button
              className="md:hidden text-stone-700 p-1"
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
          className="fixed inset-0 z-50 bg-stone-900/20 backdrop-blur-sm md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#fdf8f3] border-l border-[#e8ddd5] flex flex-col p-8 transition-transform duration-300 md:hidden shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span
            className="text-lg font-bold text-stone-900"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Menu
          </span>
          <button onClick={close} aria-label="Close menu" className="text-stone-400 hover:text-stone-700">
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-2xl font-bold text-stone-800 hover:text-[#d97706] transition-colors"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={close}
          className="mt-auto bg-[#d97706] text-white px-5 py-3 rounded-full font-semibold text-center text-sm hover:bg-[#b45309] transition-colors"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
