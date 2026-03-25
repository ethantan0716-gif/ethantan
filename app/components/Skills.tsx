"use client";

import { motion } from "framer-motion";
import { Box, Printer, Wrench } from "lucide-react";

const skills = [
  {
    icon: Box,
    name: "Blender",
    description:
      "3D modeling and product visualization. I use Blender to design parts before they're printed or milled — everything from fingerboard ramps to shop display stands.",
    tags: ["3D Modeling", "Rendering", "Product Viz"],
    color: "#0ea5e9",
  },
  {
    icon: Printer,
    name: "3D Printing",
    description:
      "Running Bambu Labs machines with exotic filaments for structural and aesthetic parts. I optimize prints for strength, speed, and material efficiency.",
    tags: ["Bambu Labs", "FDM", "Exotic Filaments"],
    color: "#f97316",
  },
  {
    icon: Wrench,
    name: "CNC Milling",
    description:
      "Subtractive manufacturing with Stepcraft systems. I work in Cut2D to create CAM toolpaths for timber, plastics, and composite materials.",
    tags: ["Stepcraft", "Cut2D", "Timber & Plastics"],
    color: "#0ea5e9",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
      >
        <div>
          <span
            className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-3 block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What I work with
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Tools of the Trade
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="h-px w-32 bg-slate-200" />
          <span className="text-slate-400 text-xs uppercase tracking-widest whitespace-nowrap">
            Digital × Physical
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${skill.color}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${skill.color}12` }}
              >
                <Icon size={22} style={{ color: skill.color }} />
              </div>

              <h3
                className="text-xl font-black uppercase tracking-tight mb-3 text-slate-900"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {skill.name}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide border"
                    style={{
                      color: skill.color,
                      borderColor: `${skill.color}30`,
                      backgroundColor: `${skill.color}10`,
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
