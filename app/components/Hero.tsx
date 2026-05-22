"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Cpu } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const specialisations = [
  { label: "3D Printing & CNC", icon: Cpu, color: "#d97706" },
  { label: "Web Development", icon: Code, color: "#f97316" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 max-w-7xl mx-auto pt-28 pb-20"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706]/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span
              className="text-[#d97706] text-xs font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              EAE Portfolio — Engineering & Computing
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-8xl font-extrabold leading-[0.95] mb-6 text-stone-900"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Maker.
            <br />
            <span className="text-[#d97706]">Builder.</span>
            <br />
            Creator.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-stone-500 max-w-xl mb-8 leading-relaxed"
          >
            A 16-year-old student from{" "}
            <span className="text-stone-900 font-semibold">Singapore</span>{" "}
            with hands-on experience across software development, 3D fabrication, and CNC manufacturing.
            I design and build real things — from full-stack web apps to physical products — and run an
            active Etsy business serving the fingerboarding community.
          </motion.p>

          {/* Specialisation tags */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 mb-8"
          >
            {specialisations.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#e8ddd5] shadow-sm"
                >
                  <Icon size={13} style={{ color: s.color }} />
                  <span className="text-stone-700 text-sm font-medium">{s.label}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#e8ddd5] shadow-sm">
              <MapPin size={13} className="text-stone-400" />
              <span className="text-stone-700 text-sm font-medium">Singapore</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#e8ddd5] shadow-sm">
              <GraduationCap size={13} className="text-stone-400" />
              <span className="text-stone-700 text-sm font-medium">Whitley Secondary School</span>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex gap-3"
          >
            <a
              href="#portfolio"
              className="bg-[#d97706] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#b45309] transition-all hover:shadow-lg hover:shadow-amber-200"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-stone-700 px-6 py-3 rounded-full font-semibold text-sm border border-[#e8ddd5] hover:border-[#d97706]/40 hover:text-[#d97706] transition-all"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-4 bg-[#d97706]/8 blur-3xl rounded-full group-hover:bg-[#d97706]/14 transition-all duration-700" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#e8ddd5]">
            <Image
              src="/images/ethan.jpg"
              alt="Ethan Tan — maker and builder"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          {/* Callout card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-5 rounded-2xl border border-[#e8ddd5] shadow-lg hidden md:block">
            <p className="text-xs text-stone-400 mb-1">Applying via</p>
            <p className="text-stone-900 font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              EAE 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
