"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Box, Printer, Wrench, Code } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const skills = [
  { icon: Box,     name: "Blender",         tags: ["3D Modeling", "Product Viz"],  color: "#d97706" },
  { icon: Printer, name: "3D Printing",      tags: ["Bambu Labs", "FDM"],           color: "#f97316" },
  { icon: Wrench,  name: "CNC Milling",      tags: ["Stepcraft", "Cut2D"],          color: "#d97706" },
  { icon: Code,    name: "Web Development",  tags: ["Next.js", "TypeScript"],       color: "#f97316" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 max-w-7xl mx-auto pt-28 pb-20"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left — text + skill cards */}
        <div className="lg:col-span-7 z-10">

          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706]/20 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span className="text-[#d97706] text-xs font-semibold" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              EAE Portfolio — Engineering &amp; Computing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="text-6xl md:text-7xl font-extrabold leading-tight mb-2 text-stone-900"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Ethan <span className="text-[#d97706]">Tan</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="text-stone-500 text-lg mb-8"
          >
            Student · Maker · Developer · Singapore
          </motion.p>

          {/* Skill cards — 2×2 grid */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="grid grid-cols-2 gap-3"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white rounded-2xl border border-[#e8ddd5] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <Icon size={17} style={{ color: skill.color }} />
                  </div>
                  <p className="text-stone-900 font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {skill.name}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          color: skill.color,
                          backgroundColor: `${skill.color}10`,
                          border: `1px solid ${skill.color}25`,
                          fontFamily: "var(--font-plus-jakarta)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
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
